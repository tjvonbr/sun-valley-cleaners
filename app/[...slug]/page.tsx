import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPageMeta, getPageByPath, pathSegments } from "@/lib/pages";

// Renders the site pages blogr.ai publishes from its topical map (pricing, comparisons,
// services, locations, etc.) at whatever path it assigns them. Next.js always prefers a
// more specific hand-built route over this catch-all, so an existing route like
// /services/house-cleaning is never shadowed by a page published here.

interface SitePageProps {
  params: { slug: string[] };
}

function requestPath(params: SitePageProps["params"]): string {
  return `/${params.slug.join("/")}`;
}

export async function generateStaticParams() {
  return getAllPageMeta().map((page) => ({ slug: pathSegments(page.path) }));
}

export async function generateMetadata({
  params,
}: SitePageProps): Promise<Metadata> {
  const page = await getPageByPath(requestPath(params));
  if (!page) return {};

  return {
    title: `${page.seoTitle || page.title} | Sun Valley Cleaners`,
    description: page.description,
  };
}

export default async function SitePage({ params }: SitePageProps) {
  const page = await getPageByPath(requestPath(params));

  if (!page) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-primary">
      <article className="w-full px-4 py-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-black text-primary-foreground lg:text-5xl">
            {page.title}
          </h1>

          {page.image ? (
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg lg:h-96">
              <Image
                src={page.image}
                alt={page.imageAlt || page.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div
            className="prose prose-lg max-w-none rounded-lg bg-background p-6 prose-headings:text-foreground prose-p:text-foreground prose-a:text-secondary prose-strong:text-foreground prose-li:text-foreground lg:p-10"
            dangerouslySetInnerHTML={{ __html: page.contentHtml }}
          />

          <div className="mt-10 text-center">
            <p className="mb-4 text-background">Ready to book your cleaning?</p>
            <a
              href="/book-appointment"
              className="inline-block rounded-lg bg-secondary px-8 py-3 font-bold text-white transition-colors hover:bg-secondary/90"
            >
              Book a Cleaning
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
