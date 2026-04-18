import Link from "next/link";
import { Mail, BookMarked } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

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

const SELAR_URL = "https://selar.com/m/michael-adegbola1209582";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-inverse-on-surface">
      {/* ── Top CTA Strip ── */}
      <div className="bg-surface-tint py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-200 text-xs uppercase tracking-widest font-bold mb-3">
            Partner With Us
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-headline italic">
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
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/wbm-logo-footer.png"
              alt="WBM Logo"
              width={200}
              height={200}
            />
          </Link>
          <p className="text-outline-variant text-sm leading-relaxed mb-5">
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
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/michael-adegbola-2b3aa7107/",
                icon: <FaLinkedin size={16} />,
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-sm bg-stone-800 hover:bg-primary flex items-center justify-center text-inverse-on-surface hover:text-white transition-all text-xs"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 border-b border-outline-variant pb-3">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-outline-variant hover:text-primary-fixed text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-primary text-xs">›</span>
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
                className="text-primary-fixed hover:text-amber-300 text-sm transition-colors flex items-center gap-2 mt-3 pt-3 border-t border-stone-800"
              >
                <BookMarked
                  size={13}
                  className="text-primary-container shrink-0"
                />
                Purchase Our Books
              </a>
            </li>
          </ul>
        </div>

        {/* Publications */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 border-b border-outline-variant pb-3">
            Our Publications
          </h4>
          <ul className="space-y-4">
            <li>
              <p className="text-inverse-on-surface text-sm font-semibold mb-0.5">
                AFINT
              </p>
              <p className="text-outline text-xs leading-relaxed">
                African International New Testament — Literal Translation &
                Explanatory Paraphrase
              </p>
            </li>
            <li>
              <p className="text-inverse-on-surface text-sm font-semibold mb-0.5">
                WECNT Series
              </p>
              <p className="text-outline text-xs leading-relaxed">
                Word Expositor's Commentary on the New Testament — scholarly
                exegesis with pastoral application
              </p>
            </li>
            <li className="pt-2">
              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-container hover:text-primary-fixed uppercase tracking-widest transition-colors"
              >
                <BookMarked size={12} />
                Browse All on Selar
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 border-b border-outline-variant pb-3">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-primary-container shrink-0" />
              <a
                href="mailto:wordbiblicalministries@gmail.com"
                className="text-outline-variant hover:text-primary-fixed transition-colors break-all"
              >
                wordbiblicalministries@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-primary-container shrink-0" />
              <a
                href="mailto:drkerux@gmail.com"
                className="text-outline-variant hover:text-primary-fixed transition-colors"
              >
                drkerux@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-stone-800 px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-outline max-w-7xl mx-auto">
        <p>
          © {new Date().getFullYear()} Word Biblical Ministries (WBM). All
          rights reserved.
        </p>
        <p className="flex gap-4">
          <Link href="#" className="hover:text-primary-fixed transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary-fixed transition-colors">
            Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
}
