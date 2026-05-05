import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react";
import { fetchPosts, getStrapiImageUrl, estimateReadTime } from "@/lib/strapi";
import { getAllPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read ministry reflections, theological articles, and updates from Word Biblical Ministries.",
};

// Revalidate the page every 60 seconds (ISR)
export const revalidate = 60;

export default async function BlogPage() {
  // Try Strapi first; fall back to static content when the CMS is offline
  const strapiPosts = await fetchPosts();
  const useCms = strapiPosts.length > 0;

  return (
    <main className="bg-surface-container-low">
      {/* ── Hero ── */}
      <section className="relative px-6 pt-40 pb-24 text-white bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.32),transparent_35%),linear-gradient(135deg,rgba(28,25,23,1),rgba(12,10,9,1))]" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-primary-fixed text-xs uppercase tracking-widest font-bold mb-4">
            Ministry Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Insights for the Church, the Seminary, and the Campus
          </h1>
          <p className="text-inverse-on-surface text-lg max-w-3xl mx-auto leading-relaxed">
            Scripture-rooted reflections and biblical articles
          </p>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {useCms ? (
            /* ── Strapi posts ── */
            <div className="grid gap-8">
              {strapiPosts.map((post) => {
                const imgUrl = getStrapiImageUrl(post.coverImage);
                const readTime = estimateReadTime(post.content);
                const date = post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : null;

                return (
                  <article
                    key={post.documentId}
                    className="bg-white border border-surface-dim rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                  >
                    {imgUrl && (
                      <div className="relative w-full aspect-16/6 overflow-hidden">
                        <Image
                          src={imgUrl}
                          alt={post.coverImage?.alternativeText ?? post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest font-semibold mb-4 text-on-surface-variant">
                        {date && (
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar size={12} /> {date}
                          </span>
                        )}
                        {post.author && (
                          <span className="inline-flex items-center gap-1.5 text-surface-tint">
                            <User size={12} /> {post.author.name}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={12} /> {readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-on-background mb-3 group-hover:text-surface-tint transition-colors">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="text-on-surface-variant leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                      )}

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-surface-tint hover:text-primary font-bold text-sm uppercase tracking-widest transition-colors"
                      >
                        Read Article <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* ── Empty State ── */
            <div className="text-center py-32 bg-white border border-surface-dim rounded-sm shadow-sm">
              <div className="bg-surface-container-low w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen
                  size={32}
                  className="text-surface-variant opacity-40"
                />
              </div>
              <h3 className="text-2xl font-bold text-on-background mb-3">
                No blog created yet!
              </h3>
              <p className="text-on-surface-variant max-w-md mx-auto leading-relaxed">
                We haven&apos;t published any articles yet. Please check back
                soon for ministry reflections and updates.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
