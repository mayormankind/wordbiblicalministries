"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface CommentFormProps {
  postDocumentId: string;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function CommentForm({ postDocumentId }: CommentFormProps) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setErrorMsg("");

    startTransition(async () => {
      try {
        const res = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, postDocumentId }),
        });

        const json = await res.json();

        if (!res.ok || !json.ok) {
          setStatus("error");
          setErrorMsg(json.error ?? "Something went wrong. Please try again.");
          return;
        }

        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } catch {
        setStatus("error");
        setErrorMsg("Network error. Please check your connection.");
      }
    });
  }

  return (
    <section className="mt-16 pt-10 border-t border-surface-dim">
      <h2 className="text-2xl font-bold text-on-background mb-2">Leave a Comment</h2>
      <p className="text-sm text-on-surface-variant mb-8">
        Your comment will be reviewed before it appears publicly.
      </p>

      {status === "success" ? (
        <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-sm p-5 text-emerald-800">
          <CheckCircle size={20} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Thank you!</p>
            <p className="text-sm mt-0.5">
              Your comment has been submitted and is awaiting approval.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="grid gap-1.5">
              <label htmlFor="comment-name" className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="comment-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-white border border-surface-dim rounded-sm px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-surface-tint transition"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="comment-email" className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="comment-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-white border border-surface-dim rounded-sm px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-surface-tint transition"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="comment-message" className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment-message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Share your thoughts…"
              className="bg-white border border-surface-dim rounded-sm px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-surface-tint transition resize-none"
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-sm p-4 text-red-800 text-sm">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 self-start bg-stone-900 hover:bg-stone-700 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-sm transition disabled:opacity-50"
          >
            <Send size={15} />
            {isPending ? "Submitting…" : "Submit Comment"}
          </button>
        </form>
      )}
    </section>
  );
}
