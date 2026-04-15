import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/content/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.seoDescription,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="bg-stone-950 text-white px-6 pt-40 pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs uppercase tracking-widest font-bold mb-4">
            {post.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-stone-300">
            <span>{post.author}</span>
            <span>{post.publishedAt}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-stone-600 leading-relaxed mb-10">
            {post.excerpt}
          </p>
          <div className="space-y-6 text-stone-700 leading-8">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
