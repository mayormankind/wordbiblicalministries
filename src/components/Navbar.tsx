"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Our Theology', path: '/our-theology' },
  { label: 'About WBM', path: '/about-wbm' },
  { label: 'About AFINT', path: '/about-afint' },
  { label: 'Ministries of WBM', path: '/ministries' },
  { label: 'Digital Availability', path: '/digital-availability' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-stone-900 shadow-lg';

  const textColor = isHome && !scrolled ? 'text-white' : 'text-stone-100';
  const hoverColor = 'hover:text-amber-400';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber-600 flex items-center justify-center rounded-sm group-hover:bg-amber-500 transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className={`font-bold text-lg leading-tight tracking-wide ${textColor}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                WBM
              </p>
              <p className={`text-xs tracking-widest uppercase opacity-80 ${textColor}`}>
                Word Biblical Ministries
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${textColor} ${hoverColor} ${
                  pathname === link.path ? 'text-amber-400 border-b border-amber-400 pb-0.5' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/give"
              className="ml-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200"
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
        <div className="lg:hidden bg-stone-900 border-t border-stone-700 px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block text-sm font-semibold tracking-widest uppercase text-stone-200 hover:text-amber-400 transition-colors py-2 border-b border-stone-700 ${
                pathname === link.path ? 'text-amber-400' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/give"
            className="block w-full text-center bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold tracking-widest uppercase px-5 py-3 rounded-sm transition-all mt-4"
          >
            Give
          </Link>
        </div>
      )}
    </header>
  );
}
