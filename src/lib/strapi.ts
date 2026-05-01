// Strapi v5 API Client


const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? "";

/** Build request headers, adding Authorization only when a token is set. */
function buildHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }
  return headers;
}

// ---------------------------------------------------------------------------
// Strapi Block (rich-text) types
// ---------------------------------------------------------------------------

export type BlockNode =
  | ParagraphNode
  | HeadingNode
  | ListNode
  | ListItemNode
  | ImageNode
  | QuoteNode
  | CodeNode;

export interface ParagraphNode {
  type: "paragraph";
  children: InlineNode[];
}

export interface HeadingNode {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: InlineNode[];
}

export interface ListNode {
  type: "list";
  format: "ordered" | "unordered";
  children: ListItemNode[];
}

export interface ListItemNode {
  type: "list-item";
  children: InlineNode[];
}

export interface ImageNode {
  type: "image";
  image: { url: string; alternativeText?: string };
  children: InlineNode[];
}

export interface QuoteNode {
  type: "quote";
  children: InlineNode[];
}

export interface CodeNode {
  type: "code";
  children: InlineNode[];
}

export interface InlineNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

// ---------------------------------------------------------------------------
// Domain types
// ---------------------------------------------------------------------------

export interface StrapiPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: BlockNode[] | null;
  coverImage: StrapiMedia | null;
  videoUrl: string | null;
  author: string | null;
  publishedAt: string | null;
  comments?: StrapiComment[];
}

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface StrapiComment {
  id: number;
  documentId: string;
  name: string;
  email: string;
  message: BlockNode[] | null;
  approvalStatus: "pending" | "approved";
  publishedAt: string | null;
}

// ---------------------------------------------------------------------------
// Generic fetch helper
// ---------------------------------------------------------------------------

interface StrapiListResponse<T> {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}

interface StrapiSingleResponse<T> {
  data: T;
}

async function strapiGet<T>(
  path: string,
  options?: RequestInit
): Promise<T | null> {
  try {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
      headers: buildHeaders(),
      next: { revalidate: 60 }, // ISR — revalidate every 60 s
      ...options,
    });

    if (!res.ok) {
      console.error(`[Strapi] GET ${path} → ${res.status} ${res.statusText}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error(`[Strapi] GET ${path} failed:`, err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Public API helpers
// ---------------------------------------------------------------------------

/**
 * Fetch all published posts, sorted newest-first.
 * Returns an empty array when the CMS is unreachable.
 */
export async function fetchPosts(): Promise<StrapiPost[]> {
  const res = await strapiGet<StrapiListResponse<StrapiPost>>(
    "/posts?populate[0]=coverImage&sort=publishedAt:desc&pagination[pageSize]=100"
  );
  // Filter out any drafts or posts missing a slug
  return (res?.data ?? []).filter((p) => typeof p.slug === "string" && p.slug);
}

/**
 * Fetch a single post by slug, including its approved comments.
 * Uses array-style populate — required by Strapi v5.
 */
export async function fetchPostBySlug(slug: string): Promise<StrapiPost | null> {
  const res = await strapiGet<StrapiListResponse<StrapiPost>>(
    `/posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[0]=coverImage&populate[1]=comments&pagination[pageSize]=1`
  );
  return res?.data?.[0] ?? null;
}

/**
 * Submit a new comment to Strapi.
 * Comments are created with approvalStatus "pending" by default.
 */
export async function submitComment(payload: {
  name: string;
  email: string;
  message: string;
  postDocumentId: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/comments`, {
      method: "POST",
      headers: buildHeaders(),
      body: JSON.stringify({
        data: {
          name: payload.name,
          email: payload.email,
          // Strapi blocks format — wrap plain text in a paragraph block
          message: [
            {
              type: "paragraph",
              children: [{ type: "text", text: payload.message }],
            },
          ],
          post: payload.postDocumentId,
          approvalStatus: "pending",
        },
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { ok: false, error: body?.error?.message ?? "Failed to submit comment." };
    }

    return { ok: true };
  } catch (err) {
    console.error("[Strapi] POST /comments failed:", err);
    return { ok: false, error: "Network error. Please try again." };
  }
}

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------

/** Format a Strapi media URL (prepend base URL for relative paths). */
export function getStrapiImageUrl(media: StrapiMedia | null): string | null {
  if (!media) return null;
  const url = media.url;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

/** Extract plain-text from a Strapi blocks content array. */
export function blocksToPlainText(blocks: BlockNode[] | null): string {
  if (!blocks) return "";
  return blocks
    .flatMap((block) => {
      if ("children" in block) {
        return (block.children as InlineNode[]).map((c) =>
          "text" in c ? c.text : ""
        );
      }
      return [];
    })
    .join(" ");
}

/** Estimate reading time (words ÷ 200 wpm). */
export function estimateReadTime(blocks: BlockNode[] | null): string {
  const wordCount = blocksToPlainText(blocks).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}
