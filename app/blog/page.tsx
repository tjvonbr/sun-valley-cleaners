import { Metadata } from "next";
import Image from "next/image";
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
    <div className="flex min-h-screen flex-col items-center bg-primary">
      <div className="w-full px-4 py-10 lg:px-16 lg:py-20">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-black text-primary-foreground lg:text-6xl">
            Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-background">
            Cleaning tips, guides, and news from the Sun Valley Cleaners team.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-background/80">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col overflow-hidden rounded-lg bg-background transition-transform hover:-translate-y-1"
              >
                {post.image ? (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="text-sm text-muted-foreground">
                    {formatDate(post.date)} · {post.readingTime}
                  </span>
                  <h2 className="text-xl font-bold text-foreground">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
