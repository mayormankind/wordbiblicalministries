"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Play, ChevronLeft } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=2000",
    badge: "Welcome to Word Biblical Ministries",
    title: "Strengthening the Body of Christ",
    subtitle:
      "A prayer-dependent, Scripture-rooted ministry dedicated to advancing the Great Commission through faithful translation, commentary, and equipping.",
    link1: { text: "Discover WBM", to: "/about-wbm" },
    link2: { text: "Our Beliefs", to: "/our-theology" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80&w=2000",
    badge: "Bible Translation",
    title: "The AFINT Translation Project",
    subtitle:
      "Producing faithful, precise, and readable English renderings of the Greek New Testament for the global church and discipleship.",
    link1: { text: "About AFINT", to: "/about-afint" },
    link2: { text: "Learn More", to: "/ministries" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000",
    badge: "Theological Education",
    title: "Equipping Leaders for the Nations",
    subtitle:
      "Combining rigorous academic exegesis with practical application to develop faithful teachers and leaders for tomorrow's church.",
    link1: { text: "Seminaries", to: "/ministries#institutions" },
    link2: { text: "Campus Ministry", to: "/ministries#campuses" },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ${
              index === current ? "scale-105" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-stone-950/80 via-stone-900/60 to-stone-950/90" />
        </div>
      ))}

      {/* Content overlays */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 transform absolute inset-0 flex flex-col items-center justify-center ${
              index === current
                ? "opacity-100 translate-y-0 translate-x-0 relative delay-300"
                : "opacity-0 translate-y-10 absolute pointer-events-none"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-amber-300 text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              {slide.badge}
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-headline italic"
            >
              {slide.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    ["Body", "Christ", "Nations", "Project"].includes(word)
                      ? "text-primary-fixed"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-inverse-on-surface text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={slide.link1.to}
                className="bg-primary hover:bg-primary-container hover:text-on-primary-container text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-200 inline-flex items-center gap-2"
              >
                {slide.link1.text} <ChevronRight size={16} />
              </Link>
              <Link
                href={slide.link2.to}
                className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-200 inline-flex items-center gap-2"
              >
                <Play size={14} /> {slide.link2.text}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 border border-white/10 transition-colors text-white/70 hover:text-white"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 border border-white/10 transition-colors text-white/70 hover:text-white"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full h-2 ${
              i === current
                ? "w-8 bg-amber-400"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
