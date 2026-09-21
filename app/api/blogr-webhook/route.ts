import { createHash, timingSafeEqual } from "crypto";
import matter from "gray-matter";
import { NextResponse } from "next/server";

// Receives blogr.ai `article.published` webhooks and commits the post (and its cover image)
// to the GitHub repo. Vercel redeploys on push, and lib/blog.ts picks the file up.
// Docs: https://blogr.ai/integrations/webhooks

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const IMAGE_EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
};

interface BlogrArticle {
  id: number;
  type: "post" | "page";
  title: string;
  slug: string;
  content_markdown: string;
  seo?: { title?: string | null; meta_description?: string | null };
  og_image_url?: string | null;
  published_at?: string | null;
}

interface BlogrPayload {
  event: string;
  test?: boolean;
  article?: BlogrArticle;
  website?: { domain?: string };
}

function isAuthorized(request: Request): boolean {
  const token = process.env.BLOGR_TOKEN;
  if (!token) return false;

  // Hash both sides so timingSafeEqual gets equal-length buffers.
  const digest = (value: string) => createHash("sha256").update(value).digest();
  const received = request.headers.get("authorization") ?? "";
  return timingSafeEqual(digest(received), digest(`Bearer ${token}`));
}

function githubConfig() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is not set");
  return {
    token,
    repo: process.env.GITHUB_REPO ?? "tjvonbr/sun-valley-cleaners",
    branch: process.env.GITHUB_BRANCH ?? "main",
  };
}

async function github(path: string, init: RequestInit = {}) {
  const { token, repo } = githubConfig();
  return fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
}

// Git blob SHA, so we can tell whether a file already has this exact content without downloading it.
function gitBlobSha(content: Buffer): string {
  return createHash("sha1").update(`blob ${content.length}\0`).update(content).digest("hex");
}

/** Creates or updates a file. Returns false when the file already has identical content. */
async function commitFile(path: string, content: Buffer, message: string): Promise<boolean> {
  const { branch } = githubConfig();

  for (let attempt = 0; attempt < 3; attempt++) {
    const existing = await github(`${path}?ref=${branch}`);
    let sha: string | undefined;
    if (existing.ok) {
      sha = ((await existing.json()) as { sha: string }).sha;
      if (sha === gitBlobSha(content)) {
        console.log(`[blogr-webhook] ${path} already up to date on ${branch}; nothing to commit`);
        return false;
      }
    } else if (existing.status !== 404) {
      throw new Error(`GitHub lookup failed for ${path}: ${existing.status}`);
    }

    const response = await github(path, {
      method: "PUT",
      body: JSON.stringify({ message, content: content.toString("base64"), branch, sha }),
    });
    if (response.ok) {
      const result = (await response.json()) as { commit?: { sha?: string; html_url?: string } };
      console.log(
        `[blogr-webhook] Committed ${path} to ${branch} (${sha ? "updated" : "created"}) ${result.commit?.html_url ?? ""}`,
      );
      return true;
    }
    // 409: the branch moved under us (e.g. another commit landed). Refetch the sha and retry.
    console.warn(
      `[blogr-webhook] PUT ${path} returned ${response.status} (attempt ${attempt + 1}/3)`,
    );
    if (response.status !== 409) {
      throw new Error(
        `GitHub commit failed for ${path}: ${response.status} ${await response.text()}`,
      );
    }
  }
  throw new Error(`GitHub commit kept conflicting for ${path}`);
}

async function downloadImage(url: string): Promise<{ data: Buffer; extension: string } | null> {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) {
      console.warn(`[blogr-webhook] Image download returned ${response.status} for ${url}`);
      return null;
    }

    const contentType = (response.headers.get("content-type") ?? "").split(";")[0].trim();
    const extension = IMAGE_EXTENSIONS[contentType];
    if (!extension) {
      console.warn(`[blogr-webhook] Unsupported image content-type "${contentType}" for ${url}`);
      return null;
    }

    const data = Buffer.from(await response.arrayBuffer());
    if (data.length === 0 || data.length > MAX_IMAGE_BYTES) {
      console.warn(`[blogr-webhook] Image size ${data.length} bytes out of range for ${url}`);
      return null;
    }
    return { data, extension };
  } catch (error) {
    console.warn(`[blogr-webhook] Image download failed for ${url}`, error);
    return null;
  }
}

function fallbackDescription(markdown: string): string {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 155 ? `${text.slice(0, 152).trimEnd()}...` : text;
}

// Arizona has no DST, so evening publishes don't roll over to the next day the way a UTC date would.
const DATE_FORMAT = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Phoenix",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function publishedDate(publishedAt?: string | null): string {
  const parsed = publishedAt ? new Date(publishedAt) : null;
  const date = parsed && !Number.isNaN(parsed.getTime()) ? parsed : new Date();
  return DATE_FORMAT.format(date); // en-CA formats as YYYY-MM-DD
}

export async function POST(request: Request) {
  if (!process.env.BLOGR_TOKEN) {
    console.error("[blogr-webhook] BLOGR_TOKEN is not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }
  if (!isAuthorized(request)) {
    console.warn("[blogr-webhook] Rejected request: bad or missing Authorization header");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: BlogrPayload;
  try {
    payload = (await request.json()) as BlogrPayload;
  } catch (error) {
    console.warn("[blogr-webhook] Rejected request: invalid JSON body", error);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  console.log(
    `[blogr-webhook] Received event=${payload.event} test=${Boolean(payload.test)} ` +
      `type=${payload.article?.type} slug=${payload.article?.slug} domain=${payload.website?.domain}`,
  );

  // Test deliveries: acknowledge without publishing anything.
  if (payload.test) {
    console.log("[blogr-webhook] Test delivery acknowledged; nothing published");
    return NextResponse.json({ ok: true, test: true });
  }

  // This site has no CMS-managed inner pages, so only blog posts are published.
  const article = payload.article;
  if (payload.event !== "article.published" || article?.type !== "post") {
    console.log(
      `[blogr-webhook] Skipped: event=${payload.event} type=${article?.type} (only article.published posts are handled)`,
    );
    return NextResponse.json({ ok: true, skipped: `Unsupported event: ${payload.event}` });
  }

  // The slug becomes a file path, so it must be strictly validated.
  if (!SLUG_PATTERN.test(article.slug ?? "") || !article.title || !article.content_markdown) {
    console.warn(
      `[blogr-webhook] Invalid article: slug=${JSON.stringify(article.slug)} ` +
        `hasTitle=${Boolean(article.title)} hasContent=${Boolean(article.content_markdown)}`,
    );
    return NextResponse.json({ error: "Invalid article" }, { status: 400 });
  }

  const { slug } = article;

  try {
    const { repo, branch } = githubConfig();
    console.log(`[blogr-webhook] Publishing "${slug}" to ${repo}@${branch}`);

    let image: string | undefined;
    if (article.og_image_url) {
      const downloaded = await downloadImage(article.og_image_url);
      if (downloaded) {
        const imagePath = `public/images/blog/${slug}.${downloaded.extension}`;
        await commitFile(imagePath, downloaded.data, `blog: add cover image for ${slug}`);
        image = `/images/blog/${slug}.${downloaded.extension}`;
      } else {
        console.warn(
          `[blogr-webhook] Could not fetch cover image for ${slug}; publishing without it`,
        );
      }
    }

    const frontmatter: Record<string, string> = {
      title: article.title,
      description: article.seo?.meta_description || fallbackDescription(article.content_markdown),
      date: publishedDate(article.published_at),
    };
    if (image) frontmatter.image = image;
    frontmatter.author = "Sun Valley Cleaners";

    const file = matter.stringify(`\n${article.content_markdown.trim()}\n`, frontmatter);
    const changed = await commitFile(
      `content/blog/${slug}.md`,
      Buffer.from(file, "utf8"),
      `blog: publish "${article.title}"`,
    );

    console.log(`[blogr-webhook] Done: slug=${slug} changed=${changed}`);

    const domain = payload.website?.domain;
    return NextResponse.json({
      ok: true,
      changed,
      ...(domain ? { url: `https://${domain}/blog/${slug}` } : {}),
    });
  } catch (error) {
    console.error("[blogr-webhook] Failed to publish", error);
    // Non-2xx marks the delivery as failed in blogr.ai so it can be retried.
    return NextResponse.json({ error: "Failed to publish" }, { status: 502 });
  }
}
