import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read ministry reflections, theological articles, and updates from Word Biblical Ministries.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-surface-container-low">
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
            This new blog area is now part of the Next.js migration and gives the
            ministry a strong foundation for publishing SEO-friendly articles,
            updates, and discipleship resources.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid gap-8">
          {posts.map((post) => (
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
              <p className="text-on-surface-variant leading-relaxed mb-6">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-surface-tint hover:text-primary font-bold text-sm uppercase tracking-widest"
              >
                Read Article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
