import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const PAGES_DIR = path.join(process.cwd(), "content/pages");

// Top-level segments already served by a hand-built route (see app/*). A blogr.ai
// page must never be allowed to shadow one of these.
export const RESERVED_TOP_LEVEL_SEGMENTS = new Set([
  "about",
  "api",
  "blog",
  "book-appointment",
  "cleaning-checklist",
  "contact",
  "locations",
  "privacy-policy",
  "services",
  "terms-of-service",
  "robots",
  "sitemap",
  "icon",
  "favicon",
]);

const PATH_SEGMENT_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface SitePageMeta {
  slug: string;
  path: string; // normalized, e.g. "/pricing" or "/compare/acme-alternatives"
  title: string;
  seoTitle?: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface SitePage extends SitePageMeta {
  contentHtml: string;
}

/** Ensures a leading slash, collapses repeated slashes, and drops a trailing slash. */
export function normalizePath(input: string): string {
  const withLeadingSlash = input.startsWith("/") ? input : `/${input}`;
  const collapsed = withLeadingSlash.replace(/\/+/g, "/");
  return collapsed.length > 1 && collapsed.endsWith("/") ? collapsed.slice(0, -1) : collapsed;
}

export function pathSegments(pathname: string): string[] {
  return normalizePath(pathname).split("/").filter(Boolean);
}

/** True for the homepage and for any path a hand-built route already owns. */
export function isReservedPath(pathname: string): boolean {
  const segments = pathSegments(pathname);
  return segments.length === 0 || RESERVED_TOP_LEVEL_SEGMENTS.has(segments[0]);
}

export function isValidPagePath(pathname: string): boolean {
  const segments = pathSegments(pathname);
  return segments.length > 0 && segments.every((segment) => PATH_SEGMENT_PATTERN.test(segment));
}

function getPageSlugs(): string[] {
  if (!fs.existsSync(PAGES_DIR)) return [];
  return fs
    .readdirSync(PAGES_DIR)
    .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md")
    .map((file) => file.replace(/\.md$/, ""));
}

function readPageFile(slug: string) {
  const filePath = path.join(PAGES_DIR, `${slug}.md`);
  return matter(fs.readFileSync(filePath, "utf8"));
}

function toMeta(slug: string, data: Record<string, unknown>): SitePageMeta {
  return {
    slug,
    path: data.path as string,
    title: data.title as string,
    seoTitle: (data.seoTitle as string | undefined) || undefined,
    description: data.description as string,
    image: data.image as string | undefined,
    imageAlt: data.imageAlt as string | undefined,
  };
}

export function getAllPageMeta(): SitePageMeta[] {
  return getPageSlugs().map((slug) => toMeta(slug, readPageFile(slug).data));
}

export async function getPageByPath(requestPath: string): Promise<SitePage | null> {
  const normalized = normalizePath(requestPath);
  const slug = getPageSlugs().find((candidate) => {
    const { data } = readPageFile(candidate);
    return typeof data.path === "string" && normalizePath(data.path) === normalized;
  });
  if (!slug) return null;

  const { data, content } = readPageFile(slug);
  const processedContent = await remark().use(html).process(content);

  return {
    ...toMeta(slug, data),
    contentHtml: processedContent.toString(),
  };
}
