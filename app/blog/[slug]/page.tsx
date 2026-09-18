import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostMeta, getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Sun Valley Cleaners`,
    description: post.description,
  };
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-primary">
      <article className="w-full px-4 py-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-6 inline-block text-sm font-medium text-background/80 hover:text-background hover:underline"
          >
            ← Back to Blog
          </Link>

          <h1 className="mb-3 text-4xl font-black text-primary-foreground lg:text-5xl">
            {post.title}
          </h1>
          <p className="mb-8 text-sm text-background/80">
            {formatDate(post.date)} · {post.readingTime} · By {post.author}
          </p>

          {post.image ? (
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg lg:h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div
            className="prose prose-lg max-w-none rounded-lg bg-background p-6 prose-headings:text-foreground prose-p:text-foreground prose-a:text-secondary prose-strong:text-foreground prose-li:text-foreground lg:p-10"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
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
