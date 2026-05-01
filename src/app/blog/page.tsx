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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.32),_transparent_35%),linear-gradient(135deg,_rgba(28,25,23,1),_rgba(12,10,9,1))]" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-primary-fixed text-xs uppercase tracking-widest font-bold mb-4">
            Ministry Journal
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Insights for the Church, the Classroom, and the Campus
          </h1>
          <p className="text-inverse-on-surface text-lg max-w-3xl mx-auto leading-relaxed">
            Scripture-rooted reflections, theological articles, and ministry
            updates from Word Biblical Ministries.
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
                      <div className="relative w-full aspect-[16/6] overflow-hidden">
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
                            <User size={12} /> {post.author}
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
            /* ── Static fallback posts ── */
            <div className="grid gap-8">
              {getAllPosts().map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-surface-dim rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest font-semibold mb-4">
                    <span className="text-surface-tint">{post.category}</span>
                    <span className="text-outline-variant">{post.publishedAt}</span>
                    <span className="text-outline-variant">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-on-background mb-3">
                    {post.title}
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-surface-tint hover:text-primary font-bold text-sm uppercase tracking-widest"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* CMS badge */}
          <p className="mt-12 text-center text-xs text-on-surface-variant opacity-60 uppercase tracking-widest">
            <BookOpen size={12} className="inline mr-1" />
            {useCms ? "Content powered by Strapi CMS" : "Static content — connect Strapi CMS to manage posts"}
          </p>
        </div>
      </section>
    </main>
  );
}
