import Link from "next/link";
import { Mail, BookMarked } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";

const footerLinks = [
  { label: "Our Theology", path: "/our-theology" },
  { label: "About WBM", path: "/about-wbm" },
  { label: "About AFINT", path: "/about-afint" },
  { label: "Ministries of WBM", path: "/ministries" },
  { label: "Digital Availability of AFINT", path: "/digital-availability" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Give", path: "/give" },
];

const SELAR_URL = "https://selar.co";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      {/* ── Top CTA Strip ── */}
      <div className="bg-amber-700 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-200 text-xs uppercase tracking-widest font-bold mb-3">
            Partner With Us
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Support the Work. Own the Word.
          </h3>
          <p className="text-amber-100 mb-8 text-base leading-relaxed max-w-xl mx-auto">
            Your giving fuels faithful Bible translation and commentary work.
            Our publications are also available to purchase — equipping you with
            tools grounded in the Word.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/give"
              className="bg-white text-amber-800 hover:bg-amber-50 font-bold text-xs uppercase tracking-widest px-7 py-3 rounded-sm transition-all inline-flex items-center gap-2 shadow-md"
            >
              Support the Ministry
            </Link>
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-800 font-bold text-xs uppercase tracking-widest px-7 py-3 rounded-sm transition-all inline-flex items-center gap-2"
            >
              <BookMarked size={14} />
              Purchase Our Books
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-amber-600 flex items-center justify-center rounded-sm">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 2v20M2 12h20" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p
                className="font-bold text-white text-base"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                WBM
              </p>
              <p className="text-xs text-stone-400 tracking-widest uppercase">
                Word Biblical Ministries
              </p>
            </div>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed mb-5">
            Anchored in Scripture. Driven by the Spirit. Reaching the Nations
            with the Gospel of Jesus Christ.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { label: "Facebook", href: "#", icon: <FaFacebookF /> },
              { label: "YouTube", href: "#", icon: <FaYoutube size={16} /> },
              {
                label: "Instagram",
                href: "#",
                icon: <FaInstagram size={16} />,
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-sm bg-stone-800 hover:bg-amber-600 flex items-center justify-center text-stone-300 hover:text-white transition-all text-xs"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 border-b border-stone-700 pb-3">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-stone-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-amber-600 text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Selar book link — surfaces in nav for discoverability */}
            <li>
              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 text-sm transition-colors flex items-center gap-2 mt-3 pt-3 border-t border-stone-800"
              >
                <BookMarked size={13} className="text-amber-500 shrink-0" />
                Purchase Our Books
              </a>
            </li>
          </ul>
        </div>

        {/* Publications */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 border-b border-stone-700 pb-3">
            Our Publications
          </h4>
          <ul className="space-y-4">
            <li>
              <p className="text-stone-300 text-sm font-semibold mb-0.5">
                AFINT
              </p>
              <p className="text-stone-500 text-xs leading-relaxed">
                African International New Testament — Literal Translation &
                Explanatory Paraphrase
              </p>
            </li>
            <li>
              <p className="text-stone-300 text-sm font-semibold mb-0.5">
                WECNT Series
              </p>
              <p className="text-stone-500 text-xs leading-relaxed">
                Word Expositor's Commentary on the New Testament — scholarly
                exegesis with pastoral application
              </p>
            </li>
            <li className="pt-2">
              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 uppercase tracking-widest transition-colors"
              >
                <BookMarked size={12} />
                Browse All on Selar
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 border-b border-stone-700 pb-3">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-amber-500 shrink-0" />
              <a
                href="mailto:wordbiblicalministries@gmail.com"
                className="text-stone-400 hover:text-amber-400 transition-colors break-all"
              >
                wordbiblicalministries@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-amber-500 shrink-0" />
              <a
                href="mailto:drkerux@gmail.com"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                drkerux@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-stone-800 px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-500 max-w-7xl mx-auto">
        <p>
          © {new Date().getFullYear()} Word Biblical Ministries (WBM). All
          rights reserved.
        </p>
        <p className="flex gap-4">
          <Link href="#" className="hover:text-amber-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">
            Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
}
