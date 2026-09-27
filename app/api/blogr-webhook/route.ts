import { createHash, timingSafeEqual } from "crypto";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import { isReservedPath, isValidPagePath, normalizePath } from "@/lib/pages";

// Receives blogr.ai `article.published` (blog posts) and `page.published` (site pages,
// e.g. pricing/comparisons/services/locations) webhooks and commits the content (and its
// cover image) to the GitHub repo. Vercel redeploys on push, and lib/blog.ts / lib/pages.ts
// pick the file up.
// Docs: https://blogr.ai/integrations/webhooks

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BLOG_DIR = "content/blog";
const PAGES_DIR = "content/pages";

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
  path?: string | null;
  content_markdown: string;
  content_html?: string;
  seo?: { title?: string | null; meta_description?: string | null };
  og_image_url?: string | null;
  og_image_alt?: string | null;
  target_keyword?: string | null;
  categories?: string[];
  tags?: string[];
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

/** Deletes a file if it exists. No-op if it's already gone. */
async function deleteFile(path: string, message: string): Promise<void> {
  const { branch } = githubConfig();
  const existing = await github(`${path}?ref=${branch}`);
  if (existing.status === 404) return;
  if (!existing.ok) throw new Error(`GitHub lookup failed for ${path}: ${existing.status}`);

  const { sha } = (await existing.json()) as { sha: string };
  const response = await github(path, { method: "DELETE", body: JSON.stringify({ message, sha, branch }) });
  if (!response.ok) {
    throw new Error(`GitHub delete failed for ${path}: ${response.status} ${await response.text()}`);
  }
}

async function listMarkdownFiles(dir: string): Promise<Array<{ name: string; path: string }>> {
  const { branch } = githubConfig();
  const response = await github(`${dir}?ref=${branch}`);
  if (response.status === 404) return [];
  if (!response.ok) throw new Error(`GitHub list failed for ${dir}: ${response.status}`);

  const entries = (await response.json()) as Array<{ name: string; path: string; type: string }>;
  return entries.filter(
    (entry) => entry.type === "file" && entry.name.endsWith(".md") && entry.name.toLowerCase() !== "readme.md",
  );
}

async function getFileText(path: string): Promise<string | null> {
  const { branch } = githubConfig();
  const response = await github(`${path}?ref=${branch}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`GitHub read failed for ${path}: ${response.status}`);

  const { content } = (await response.json()) as { content: string };
  return Buffer.from(content, "base64").toString("utf8");
}

/**
 * Finds the file in `dir` whose frontmatter `blogrId` matches, wherever its current slug
 * lives. Lets a delivery that changes an article's slug update the existing file (renaming
 * it) instead of creating a duplicate alongside it.
 */
async function findExistingFileById(
  dir: string,
  id: number,
): Promise<{ path: string; slug: string } | null> {
  const files = await listMarkdownFiles(dir);
  for (const file of files) {
    const text = await getFileText(file.path);
    if (!text) continue;
    const { data } = matter(text);
    if (data.blogrId === id) {
      return { path: file.path, slug: file.name.replace(/\.md$/, "") };
    }
  }
  return null;
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

/** Downloads the cover image (if any) and commits it under `dir`. Returns its public path. */
async function publishImage(
  dir: string,
  slug: string,
  imageUrl: string | null | undefined,
  logPrefix: string,
): Promise<string | undefined> {
  if (!imageUrl) return undefined;

  const downloaded = await downloadImage(imageUrl);
  if (!downloaded) {
    console.warn(`[blogr-webhook] Could not fetch cover image for ${logPrefix}; publishing without it`);
    return undefined;
  }

  const imagePath = `public/images/${dir}/${slug}.${downloaded.extension}`;
  await commitFile(imagePath, downloaded.data, `${logPrefix}: add cover image`);
  return `/images/${dir}/${slug}.${downloaded.extension}`;
}

async function publishPost(article: BlogrArticle, domain: string | undefined) {
  if (!SLUG_PATTERN.test(article.slug ?? "") || !article.title || !article.content_markdown) {
    console.warn(
      `[blogr-webhook] Invalid article: slug=${JSON.stringify(article.slug)} ` +
        `hasTitle=${Boolean(article.title)} hasContent=${Boolean(article.content_markdown)}`,
    );
    return NextResponse.json({ error: "Invalid article" }, { status: 400 });
  }

  const { slug, id } = article;
  const { repo, branch } = githubConfig();
  console.log(`[blogr-webhook] Publishing post "${slug}" to ${repo}@${branch}`);

  // A repeat delivery for the same article whose slug changed should rename the existing
  // file rather than leave a duplicate behind.
  const renameFrom = Number.isFinite(id) ? await findExistingFileById(BLOG_DIR, id) : null;

  const image = await publishImage(
    "blog",
    slug,
    article.og_image_url,
    `blog: publish "${article.title}"`,
  );

  const frontmatter: Record<string, string | number> = {
    title: article.title,
    description: article.seo?.meta_description || fallbackDescription(article.content_markdown),
    date: publishedDate(article.published_at),
    author: "Sun Valley Cleaners",
    blogrId: id,
  };
  if (image) frontmatter.image = image;
  if (article.seo?.title) frontmatter.seoTitle = article.seo.title;

  const file = matter.stringify(`\n${article.content_markdown.trim()}\n`, frontmatter);
  const changed = await commitFile(
    `${BLOG_DIR}/${slug}.md`,
    Buffer.from(file, "utf8"),
    `blog: publish "${article.title}"`,
  );

  if (renameFrom && renameFrom.slug !== slug) {
    await deleteFile(renameFrom.path, `blog: remove "${renameFrom.slug}" after slug change to "${slug}"`);
  }

  console.log(`[blogr-webhook] Done: slug=${slug} changed=${changed}`);
  return NextResponse.json({
    ok: true,
    changed,
    ...(domain ? { url: `https://${domain}/blog/${slug}` } : {}),
  });
}

async function publishPage(article: BlogrArticle, domain: string | undefined) {
  if (
    !SLUG_PATTERN.test(article.slug ?? "") ||
    !article.title ||
    !article.content_markdown ||
    !article.path
  ) {
    console.warn(
      `[blogr-webhook] Invalid page: slug=${JSON.stringify(article.slug)} path=${JSON.stringify(article.path)} ` +
        `hasTitle=${Boolean(article.title)} hasContent=${Boolean(article.content_markdown)}`,
    );
    return NextResponse.json({ error: "Invalid page" }, { status: 400 });
  }

  const normalizedPath = normalizePath(article.path);
  if (!isValidPagePath(normalizedPath)) {
    console.warn(`[blogr-webhook] Invalid page path: ${JSON.stringify(article.path)}`);
    return NextResponse.json({ error: "Invalid page path" }, { status: 400 });
  }

  // Never let a blogr.ai page shadow a route we've hand-built (or the homepage).
  if (isReservedPath(normalizedPath)) {
    console.log(
      `[blogr-webhook] Skipped page: ${normalizedPath} is a hand-built route; leaving it as-is`,
    );
    return NextResponse.json({
      ok: true,
      skipped: `${normalizedPath} is already a hand-built route`,
      ...(domain ? { url: `https://${domain}${normalizedPath}` } : {}),
    });
  }

  const { slug, id } = article;
  const { repo, branch } = githubConfig();
  console.log(`[blogr-webhook] Publishing page "${slug}" (${normalizedPath}) to ${repo}@${branch}`);

  const renameFrom = Number.isFinite(id) ? await findExistingFileById(PAGES_DIR, id) : null;

  const image = await publishImage(
    "pages",
    slug,
    article.og_image_url,
    `page: publish "${article.title}"`,
  );

  const frontmatter: Record<string, string | number> = {
    title: article.title,
    description: article.seo?.meta_description || fallbackDescription(article.content_markdown),
    path: normalizedPath,
    blogrId: id,
  };
  if (image) {
    frontmatter.image = image;
    if (article.og_image_alt) frontmatter.imageAlt = article.og_image_alt;
  }
  if (article.seo?.title) frontmatter.seoTitle = article.seo.title;

  const file = matter.stringify(`\n${article.content_markdown.trim()}\n`, frontmatter);
  const changed = await commitFile(
    `${PAGES_DIR}/${slug}.md`,
    Buffer.from(file, "utf8"),
    `page: publish "${article.title}" at ${normalizedPath}`,
  );

  if (renameFrom && renameFrom.slug !== slug) {
    await deleteFile(renameFrom.path, `page: remove "${renameFrom.slug}" after slug change to "${slug}"`);
  }

  console.log(`[blogr-webhook] Done: path=${normalizedPath} changed=${changed}`);
  return NextResponse.json({
    ok: true,
    changed,
    ...(domain ? { url: `https://${domain}${normalizedPath}` } : {}),
  });
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

  const article = payload.article;
  const domain = payload.website?.domain;

  if (!article) {
    console.warn(`[blogr-webhook] Rejected request: missing article for event=${payload.event}`);
    return NextResponse.json({ error: "Missing article" }, { status: 400 });
  }

  try {
    if (payload.event === "article.published" && article.type === "post") {
      return await publishPost(article, domain);
    }
    if (payload.event === "page.published" && article.type === "page") {
      return await publishPage(article, domain);
    }

    console.log(
      `[blogr-webhook] Skipped: event=${payload.event} type=${article.type} (unrecognized event/type combination)`,
    );
    return NextResponse.json({
      ok: true,
      skipped: `Unsupported event/type: ${payload.event}/${article.type}`,
    });
  } catch (error) {
    console.error("[blogr-webhook] Failed to publish", error);
    // Non-2xx marks the delivery as failed in blogr.ai so it can be retried.
    return NextResponse.json({ error: "Failed to publish" }, { status: 502 });
  }
}
