"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Our Theology", path: "/our-theology" },
  {
    label: "About WBM",
    dropdown: [
      { label: "Our Story", path: "/our-story" },
      { label: "About WBM", path: "/about-wbm" },
    ],
  },
  { label: "About AFINT", path: "/about-afint" },
  { label: "Ministries of WBM", path: "/ministries" },
  { label: "Digital Availability", path: "/digital-availability" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({});
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg =
    isHome && !scrolled ? "bg-transparent" : "bg-stone-900 shadow-lg";

  const textColor = isHome && !scrolled ? "text-white" : "text-stone-100";
  const hoverColor = "hover:text-primary-fixed";

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/wbm-logo-footer.png"
              alt="WBM Logo"
              width={200}
              height={200}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative group h-20 flex items-center"
                >
                  <button
                    className={`flex items-center gap-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${textColor} ${hoverColor}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 bg-stone-900 shadow-xl border-t-2 border-amber-500 rounded-b-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pointer-events-none group-hover:pointer-events-auto overflow-hidden">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.path}
                        href={sublink.path}
                        className={`text-[11px] font-semibold tracking-widest uppercase px-5 py-3.5 text-stone-200 hover:text-white hover:bg-stone-800 border-b border-stone-800 last:border-0 transition-colors ${
                          pathname === sublink.path
                            ? "text-primary-fixed bg-stone-800"
                            : ""
                        }`}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path!}
                  className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${textColor} ${hoverColor} ${
                    pathname === link.path
                      ? "text-primary-fixed border-b border-primary-fixed pb-0.5"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/give"
              className="ml-2 bg-primary hover:bg-primary-container hover:text-on-primary-container text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200"
            >
              Give
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded ${textColor}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-stone-900 border-t border-outline-variant px-6 pb-6 pt-4 space-y-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="border-b border-outline-variant last:border-0"
              >
                <button
                  onClick={() => toggleMobileDropdown(link.label)}
                  className={`w-full flex items-center justify-between text-sm font-semibold tracking-widest uppercase text-stone-200 hover:text-primary-fixed transition-colors py-3`}
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${mobileDropdownOpen[link.label] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`space-y-1 overflow-hidden transition-all duration-300 ${mobileDropdownOpen[link.label] ? "max-h-40 pb-2" : "max-h-0"}`}
                >
                  {link.dropdown.map((sublink) => (
                    <Link
                      key={sublink.path}
                      href={sublink.path}
                      className={`block text-xs font-semibold tracking-widest uppercase text-outline-variant hover:text-primary-fixed transition-colors py-2 pl-4 ${
                        pathname === sublink.path ? "text-primary-fixed" : ""
                      }`}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path!}
                className={`block text-sm font-semibold tracking-widest uppercase text-stone-200 hover:text-primary-fixed transition-colors py-3 border-b border-outline-variant last:border-0 ${
                  pathname === link.path ? "text-primary-fixed" : ""
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/give"
            className="block w-full text-center bg-primary hover:bg-primary-container hover:text-on-primary-container text-white text-sm font-bold tracking-widest uppercase px-5 py-3 rounded-sm transition-all mt-6"
          >
            Give
          </Link>
        </div>
      )}
    </header>
  );
}
