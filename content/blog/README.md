# Blog content folder

Drop one `.md` file per blog post in this folder and it will automatically show up at
`/blog/<filename>` and in the `/blog` listing — no code changes needed.

## File name

The file name (without `.md`) becomes the URL slug. Use lowercase, hyphen-separated
words, e.g. `how-often-should-you-deep-clean-your-home.md` → `/blog/how-often-should-you-deep-clean-your-home`.

## Required frontmatter

Every file must start with a frontmatter block like this:

```md
---
title: "How Often Should You Deep Clean Your Home?"
description: "A quick guide to how often each room in your home needs a deep clean, and how it differs from a standard cleaning."
date: "2026-09-17"
image: "/images/blog/deep-clean-frequency.jpg"
author: "Sun Valley Cleaners"
---

Your post content goes here, written in normal Markdown...
```

- `title` — required. Used as the page title and H1.
- `description` — required. Used for the meta description and listing preview.
- `date` — required. Format `YYYY-MM-DD`. Controls sort order (newest first).
- `image` — optional. Path to a cover image in `/public/images/blog/`. Upload the image
  file there with the same name referenced in the frontmatter.
- `author` — optional. Defaults to "Sun Valley Cleaners" if omitted.

## Body content

Standard Markdown is supported: headings (`##`, `###`), paragraphs, bold/italic, links,
lists, and images. Keep the top-level heading out of the body (the title in the
frontmatter is rendered as the H1 automatically) — start body headings at `##`.
