import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

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

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      {/* Top CTA Strip */}
      <div className="bg-amber-700 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Join Us in Worship & Fellowship
          </h3>
          <p className="text-amber-100 mb-6 text-sm tracking-wide">
            Be part of a community rooted in the Word, empowered by the Spirit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-800 hover:bg-amber-50 font-bold text-xs uppercase tracking-widest px-7 py-3 rounded-sm transition-all"
            >
              Find Us
            </Link>
            <Link
              href="/give"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-800 font-bold text-xs uppercase tracking-widest px-7 py-3 rounded-sm transition-all"
            >
              Support the Ministry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
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
              { label: "Instagram", href: "#", icon: <FaInstagram size={16} /> },
              { label: "X", href: "#", icon: <FaXTwitter size={14} /> },
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
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 border-b border-stone-700 pb-3">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-amber-500 mt-0.5 shrink-0" />
              <span className="text-stone-400">Akure, Ondo State, Nigeria</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-amber-500 shrink-0" />
              <a
                href="mailto:wordbiblicalministries@gmail.com"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                wordbiblicalministries@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-amber-500 shrink-0" />
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

      {/* Bottom Bar */}
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
