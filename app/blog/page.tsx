import { Metadata } from "next";
import Link from "next/link";
import { getAllPostMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Sun Valley Cleaners",
  description:
    "Cleaning tips, guides, and news from Sun Valley Cleaners, serving the greater Phoenix, Arizona area.",
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPostMeta();

  return (
    <div className="bg-background">
      <div className="mx-auto w-full max-w-[44rem] px-5 py-12 lg:py-20">
        <header className="mb-12">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Blog
          </h1>
          <p className="font-serif text-xl leading-relaxed text-muted-foreground">
            Cleaning tips, guides, and news from the Sun Valley Cleaners team.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="font-serif text-muted-foreground">
            No posts yet — check back soon.
          </p>
        ) : (
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block py-8">
                  <span className="text-sm text-muted-foreground">
                    {formatDate(post.date)} · {post.readingTime}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold leading-snug text-foreground group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-2 font-serif text-lg leading-[1.7] text-muted-foreground">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
