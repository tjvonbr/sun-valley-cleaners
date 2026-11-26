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
    title: `${post.seoTitle || post.title} | Sun Valley Cleaners`,
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
    <div className="bg-background">
      <article className="mx-auto w-full max-w-[44rem] px-5 py-12 lg:py-20">
        <Link
          href="/blog"
          className="mb-10 inline-block text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          ← Blog
        </Link>

        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {formatDate(post.date)} · {post.readingTime} · By {post.author}
          </p>
        </header>

        {post.image ? (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : null}

        {/* ~60ch column, 20px serif body, 1.7 line height */}
        <div
          className="prose max-w-[60ch] font-serif text-[1.25rem] leading-[1.7] text-foreground
            prose-headings:font-bold prose-headings:leading-snug prose-headings:text-foreground
            prose-h2:mt-12 prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-2xl
            prose-p:my-6 prose-p:text-[1.25rem] prose-p:leading-[1.7] prose-p:text-foreground
            prose-li:text-[1.25rem] prose-li:leading-[1.7] prose-li:text-foreground prose-li:marker:text-muted-foreground
            prose-a:text-primary prose-a:underline-offset-2 hover:prose-a:text-primary/80
            prose-strong:text-foreground prose-blockquote:border-border prose-blockquote:text-muted-foreground
            prose-img:rounded-md"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <footer className="mt-16 border-t border-border pt-8">
          <p className="mb-3 text-muted-foreground">
            Ready to book your cleaning?
          </p>
          <a
            href="/book-appointment"
            className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Cleaning
          </a>
        </footer>
      </article>
    </div>
  );
}
