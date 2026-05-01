import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, User, Clock, MessageSquare } from "lucide-react";
import {
  fetchPosts,
  fetchPostBySlug,
  getStrapiImageUrl,
  estimateReadTime,
  blocksToPlainText,
} from "@/lib/strapi";
import { getAllPosts, getPostBySlug } from "@/content/blog";
import StrapiBlocksRenderer from "@/components/StrapiBlocksRenderer";
import CommentForm from "@/components/CommentForm";

export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Static params

export async function generateStaticParams() {
  const [strapiPosts, staticPosts] = await Promise.all([
    fetchPosts(),
    Promise.resolve(getAllPosts()),
  ]);

  const slugs = new Set<string>();

  // Filter out any null or non-string slugs
  strapiPosts.forEach((p) => {
    if (typeof p.slug === "string" && p.slug) slugs.add(p.slug);
  });

  staticPosts.forEach((p) => {
    if (typeof p.slug === "string" && p.slug) slugs.add(p.slug);
  });

  return Array.from(slugs).map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const strapiPost = await fetchPostBySlug(slug);
  if (strapiPost) {
    return {
      title: strapiPost.title,
      description:
        strapiPost.excerpt ??
        blocksToPlainText(strapiPost.content).slice(0, 160),
    };
  }

  const staticPost = getPostBySlug(slug);
  if (staticPost) {
    return { title: staticPost.title, description: staticPost.seoDescription };
  }

  return { title: "Post Not Found" };
}

// Page
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // ── Try Strapi first ──
  const strapiPost = await fetchPostBySlug(slug);

  if (strapiPost) {
    const imgUrl = getStrapiImageUrl(strapiPost.coverImage);
    const readTime = estimateReadTime(strapiPost.content);
    const date = strapiPost.publishedAt
      ? new Date(strapiPost.publishedAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null;

    const approvedComments =
      strapiPost.comments?.filter((c) => c.approvalStatus === "approved") ?? [];

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: strapiPost.title,
      description:
        strapiPost.excerpt ||
        blocksToPlainText(strapiPost.content).slice(0, 160),
      image: imgUrl,
      datePublished: strapiPost.publishedAt,
      author: {
        "@type": "Person",
        name: strapiPost.author || "Word Biblical Ministries",
      },
    };

    return (
      <main className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ── Hero ── */}
        <section className="bg-stone-950 text-white px-6 pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,25,23,0.98),rgba(12,10,9,0.95))]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest font-semibold text-primary-fixed mb-5">
              {date && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} /> {date}
                </span>
              )}
              {strapiPost.author && (
                <span className="inline-flex items-center gap-1.5 text-amber-400">
                  <User size={12} /> {strapiPost.author}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-stone-400">
                <Clock size={12} /> {readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {strapiPost.title}
            </h1>
            {strapiPost.excerpt && (
              <p className="text-inverse-on-surface text-lg leading-relaxed">
                {strapiPost.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* ── Cover image ── */}
        {imgUrl && (
          <div className="relative w-full aspect-21/9 overflow-hidden">
            <Image
              src={imgUrl}
              alt={strapiPost.coverImage?.alternativeText ?? strapiPost.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* ── Article body ── */}
        <article className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            {strapiPost.content ? (
              <StrapiBlocksRenderer content={strapiPost.content} />
            ) : (
              <p className="text-on-surface-variant">No content available.</p>
            )}

            {/* Video embed */}
            {strapiPost.videoUrl && (
              <div className="mt-10 aspect-video w-full rounded-sm overflow-hidden">
                <iframe
                  src={strapiPost.videoUrl.replace("watch?v=", "embed/")}
                  title="Embedded video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}

            {/* ── Approved comments ── */}
            {approvedComments.length > 0 && (
              <section className="mt-16 pt-10 border-t border-surface-dim">
                <h2 className="text-2xl font-bold text-on-background mb-8 flex items-center gap-2">
                  <MessageSquare size={20} className="text-surface-tint" />
                  {approvedComments.length} Comment
                  {approvedComments.length !== 1 ? "s" : ""}
                </h2>
                <div className="space-y-8">
                  {approvedComments.map((comment) => {
                    const commentDate = comment.publishedAt
                      ? new Date(comment.publishedAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )
                      : null;

                    const commentText = comment.message
                      ? blocksToPlainText(comment.message)
                      : "";

                    return (
                      <div
                        key={comment.id}
                        className="bg-surface-container-low border border-surface-dim rounded-sm p-6"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-bold uppercase">
                            {comment.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-on-background text-sm">
                              {comment.name}
                            </p>
                            {commentDate && (
                              <p className="text-xs text-on-surface-variant">
                                {commentDate}
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="text-on-surface-variant leading-7 text-sm">
                          {commentText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* ── Comment form ── */}
            <CommentForm postDocumentId={strapiPost.documentId} />
          </div>
        </article>
      </main>
    );
  }

  // ── Static fallback ──
  const staticPost = getPostBySlug(slug);
  if (!staticPost) notFound();

  return (
    <main className="bg-white">
      <section className="bg-stone-950 text-white px-6 pt-40 pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary-fixed text-xs uppercase tracking-widest font-bold mb-4">
            {staticPost.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {staticPost.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-inverse-on-surface">
            <span>{staticPost.author}</span>
            <span>{staticPost.publishedAt}</span>
            <span>{staticPost.readTime}</span>
          </div>
        </div>
      </section>

      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
            {staticPost.excerpt}
          </p>
          <div className="space-y-6 text-stone-700 leading-8">
            {staticPost.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
