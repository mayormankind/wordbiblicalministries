"use client";

// ---------------------------------------------------------------------------
// Strapi Blocks Rich-Text Renderer
// ---------------------------------------------------------------------------
// Converts the Strapi v5 "blocks" content format into React elements.
// ---------------------------------------------------------------------------

import React from "react";
import Image from "next/image";
import type {
  BlockNode,
  InlineNode,
  ParagraphNode,
  HeadingNode,
  ListNode,
  ImageNode,
  QuoteNode,
  CodeNode,
  ListItemNode,
} from "@/lib/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";


// Inline renderer
function renderInline(node: InlineNode, index: number): React.ReactNode {
  let el: React.ReactNode = node.text;

  if (node.code) el = <code key={index} className="bg-stone-100 text-stone-700 rounded px-1 py-0.5 text-sm font-mono">{el}</code>;
  if (node.bold) el = <strong key={index} className="font-bold">{el}</strong>;
  if (node.italic) el = <em key={index} className="italic">{el}</em>;
  if (node.underline) el = <u key={index}>{el}</u>;
  if (node.strikethrough) el = <s key={index}>{el}</s>;

  return <React.Fragment key={index}>{el}</React.Fragment>;
}

function renderInlines(children: InlineNode[]): React.ReactNode {
  return children.map((child, i) => renderInline(child, i));
}

// ---------------------------------------------------------------------------
// Block renderers
// ---------------------------------------------------------------------------

function renderParagraph(node: ParagraphNode, index: number) {
  return (
    <p key={index} className="text-stone-700 leading-8 mb-4">
      {renderInlines(node.children)}
    </p>
  );
}

function renderHeading(node: HeadingNode, index: number) {
  const Tag = `h${node.level}` as keyof React.JSX.IntrinsicElements;
  const sizeMap: Record<number, string> = {
    1: "text-3xl font-bold text-stone-900 mt-10 mb-4",
    2: "text-2xl font-bold text-stone-900 mt-8 mb-3",
    3: "text-xl font-semibold text-stone-800 mt-6 mb-2",
    4: "text-lg font-semibold text-stone-800 mt-4 mb-2",
    5: "text-base font-semibold text-stone-700 mt-3 mb-1",
    6: "text-sm font-semibold text-stone-700 mt-3 mb-1",
  };
  return (
    <Tag key={index} className={sizeMap[node.level]}>
      {renderInlines(node.children)}
    </Tag>
  );
}

function renderList(node: ListNode, index: number) {
  const Tag = (node.format === "ordered" ? "ol" : "ul") as keyof React.JSX.IntrinsicElements;
  const markerClass =
    node.format === "ordered"
      ? "list-decimal list-inside space-y-2 mb-4 pl-4 text-stone-700"
      : "list-disc list-inside space-y-2 mb-4 pl-4 text-stone-700";
  return (
    <Tag key={index} className={markerClass}>
      {node.children.map((item: ListItemNode, i: number) => (
        <li key={i}>{renderInlines(item.children)}</li>
      ))}
    </Tag>
  );
}

function renderImage(node: ImageNode, index: number) {
  const src = node.image?.url?.startsWith("http")
    ? node.image.url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337"}${node.image?.url}`;

  return (
    <figure key={index} className="my-8">
      <div className="relative w-full aspect-video rounded-sm overflow-hidden">
        <Image
          src={src}
          alt={node.image?.alternativeText ?? ""}
          fill
          className="object-cover"
        />
      </div>
    </figure>
  );
}

function renderQuote(node: QuoteNode, index: number) {
  return (
    <blockquote
      key={index}
      className="border-l-4 border-amber-600 pl-6 py-2 my-6 italic text-stone-600 bg-amber-50 rounded-r-sm"
    >
      {renderInlines(node.children)}
    </blockquote>
  );
}

function renderCode(node: CodeNode, index: number) {
  return (
    <pre
      key={index}
      className="bg-stone-900 text-green-400 rounded-sm p-4 my-6 overflow-x-auto text-sm font-mono"
    >
      <code>{renderInlines(node.children)}</code>
    </pre>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

interface StrapiBlocksRendererProps {
  content: BlockNode[];
}

export default function StrapiBlocksRenderer({ content }: StrapiBlocksRendererProps) {
  return (
    <div className="prose-custom">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return renderParagraph(block, index);
          case "heading":
            return renderHeading(block, index);
          case "list":
            return renderList(block, index);
          case "image":
            return renderImage(block, index);
          case "quote":
            return renderQuote(block, index);
          case "code":
            return renderCode(block, index);
          default:
            return null;
        }
      })}
    </div>
  );
}
