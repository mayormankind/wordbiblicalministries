import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] px-6 py-24 flex items-center justify-center bg-surface-container-low">
      <div className="max-w-xl text-center">
        <p className="text-surface-tint text-xs uppercase tracking-widest font-bold mb-4">
          Page Not Found
        </p>
        <h1 className="text-4xl font-bold text-on-background mb-4">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-on-surface-variant mb-8 leading-relaxed">
          The page may have moved, or the link may be outdated. You can return to
          the homepage or continue exploring the ministry.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-surface-tint hover:bg-primary text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
