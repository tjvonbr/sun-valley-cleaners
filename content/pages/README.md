# Pages content folder

This folder holds the site pages blogr.ai publishes from its topical map (pricing,
comparisons, services, locations, etc.) — as opposed to blog posts, which live in
`content/blog`. A file here shows up at whatever `path` its frontmatter names, served by
the catch-all route at `app/[...slug]/page.tsx`, never in the `/blog` listing.

These files are managed by the blogr.ai webhook (`app/api/blogr-webhook/route.ts`). You
generally shouldn't hand-edit them — publish and update the page from blogr.ai instead.

## File name

The file name is the article's slug from blogr.ai and has no bearing on the URL — `path`
in the frontmatter is what's served.

## Frontmatter

```md
---
title: "Pricing"
description: "See Sun Valley Cleaners' pricing for house cleaning, deep cleaning, and move-in/move-out cleaning."
path: "/pricing"
blogrId: 456
---

Page content goes here, written in normal Markdown...
```

- `title` — required. Used as the H1.
- `description` — required. Used for the meta description.
- `path` — required. Where the page is served, e.g. `/pricing` or `/compare/acme-alternatives`.
- `blogrId` — managed by the webhook. Matches a repeat delivery back to this file, even
  after a slug or path change.
- `seoTitle`, `image`, `imageAlt` — optional.

## Hand-built routes always win

If `path` matches a route that already exists in `app/` (for example `/services/*` or
`/locations/*`), the webhook skips creating a page there entirely — a hand-built route is
never shadowed by blogr.ai content.

## Body content

Standard Markdown is supported, same as blog posts. Keep the top-level heading out of the
body — `title` in the frontmatter is rendered as the H1 automatically.
