import Link from "next/link";
import {
  BookOpen,
  Users,
  Globe,
  Heart,
  ChevronRight,
  Play,
  PenTool,
  GraduationCap,
  HandHeart,
  ShieldCheck,
} from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import AnimateOnScroll from "../components/AnimateOnScroll";

const highlights = [
  {
    icon: <Users size={28} className="text-amber-600" />,
    title: "Prayer-Dependent",
    desc: "Acts 6:4 — we devote ourselves first to prayer and intercession, believing all effective proclamation flows from dependence on the Spirit.",
  },
  {
    icon: <BookOpen size={28} className="text-amber-600" />,
    title: "Faithful Translation",
    desc: "Developing AFINT — accurate and readable New Testament translations that serve the global Church and gospel proclamation.",
  },
  {
    icon: <Globe size={28} className="text-amber-600" />,
    title: "WECNT Commentary",
    desc: "The Word Expositor’s Commentary series unites rigorous exegesis with practical application to nurture Christian discipleship.",
  },
  {
    icon: <Heart size={28} className="text-amber-600" />,
    title: "Doctrinal Fidelity",
    desc: "Standing firm in conservative evangelicalism, upholding the authority, sufficiency, and infallibility of Holy Scripture.",
  },
];

const ministries = [
  {
    name: "Bible Translation (AFINT)",
    desc: "Producing faithful English renderings of the Greek New Testament for the global church.",
    icon: <BookOpen size={36} className="text-amber-600" />,
  },
  {
    name: "NT Commentary (WECNT)",
    desc: "Developing rigorous yet practical tools for pastors, students, and campus ministries.",
    icon: <PenTool size={36} className="text-amber-600" />,
  },
  {
    name: "Theological Education",
    desc: "Equipping the body of Christ with biblically grounded resources and teaching.",
    icon: <GraduationCap size={36} className="text-amber-600" />,
  },
  {
    name: "Prayer & Intercession",
    desc: "The indispensable foundation of all our work — laboring before God before laboring in the Word.",
    icon: <HandHeart size={36} className="text-amber-600" />,
  },
  {
    name: "Gospel Mission",
    desc: "Empowering leaders to proclaim Christ and make disciples across the nations.",
    icon: <Globe size={36} className="text-amber-600" />,
  },
  {
    name: "Conservative Defense",
    desc: "Defending the historic apostolic gospel against theological error and spiritual drift.",
    icon: <ShieldCheck size={36} className="text-amber-600" />,
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ─── HERO CAROUSEL ─── */}
      <HeroCarousel />

      {/* ─── SCRIPTURE BANNER ─── */}
      <section className="bg-amber-700 py-10 px-6 overflow-hidden">
        <AnimateOnScroll animation="zoom-in" duration={1000}>
          <p
            className="text-center text-amber-50 text-xl md:text-2xl italic max-w-3xl mx-auto"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "For the word of God is living and active, sharper than any two-edged
            sword…"
          </p>
          <p className="text-center text-amber-200 text-sm mt-2 tracking-widest uppercase">
            — Hebrews 4:12
          </p>
        </AnimateOnScroll>
      </section>

      {/* ─── WHY WBM ─── */}
      <section className="py-24 px-6 bg-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-amber-600 text-xs uppercase tracking-widest font-bold mb-3">
                Who We Are
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-stone-800 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Exalting Christ, Strengthening the Church
              </h2>
              <div className="flex items-center justify-center gap-3 my-5">
                <div className="h-px w-16 bg-amber-400" />
                <div className="w-2 h-2 bg-amber-600 rotate-45" />
                <div className="h-px w-16 bg-amber-400" />
              </div>
              <p className="text-stone-500 text-lg max-w-3xl mx-auto leading-relaxed">
                Word Biblical Ministries (WBM) exists to contribute to the
                fulfillment of the Great Commission through prayer, faithful Bible
                translation, and rigorous exegetical work.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={(i * 100) as any}>
                <div className="bg-white rounded-sm p-7 shadow hover:shadow-lg transition-all duration-300 border-b-4 border-amber-600 group h-full">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {h.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-stone-800 mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {h.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fade-in" delay={400} className="text-center mt-12">
            <Link
              href="/about-wbm"
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-600 font-bold text-sm uppercase tracking-widest border-b-2 border-amber-600 pb-1 transition-colors"
            >
              Learn More About WBM <ChevronRight size={16} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── ABOUT AFINT TEASER ─── */}
      <section className="relative py-28 px-6 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/about-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-stone-900/80" />
        <AnimateOnScroll animation="zoom-in" className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-xs uppercase tracking-widest font-bold mb-3">
            Global Impact
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            About AFINT
          </h2>
          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-16 bg-amber-400" />
            <div className="w-2 h-2 bg-amber-500 rotate-45" />
            <div className="h-px w-16 bg-amber-400" />
          </div>
          <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The African International New Testament (AFINT) is a groundbreaking
            initiative producing a theologically faithful and exegetically
            precise English rendering of the Greek text.
          </p>
          <Link
            href="/about-afint"
            className="border-2 border-amber-500 hover:bg-amber-600 hover:border-amber-600 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-200 inline-flex items-center gap-2"
          >
            Discover AFINT <ChevronRight size={16} />
          </Link>
        </AnimateOnScroll>
      </section>

      {/* ─── MINISTRIES PREVIEW ─── */}
      <section className="py-24 px-6 bg-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-amber-600 text-xs uppercase tracking-widest font-bold mb-3">
                Get Involved
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-stone-800 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Ministries of WBM
              </h2>
              <div className="flex items-center justify-center gap-3 my-5">
                <div className="h-px w-16 bg-amber-400" />
                <div className="w-2 h-2 bg-amber-600 rotate-45" />
                <div className="h-px w-16 bg-amber-400" />
              </div>
              <p className="text-stone-500 text-lg max-w-xl mx-auto">
                There is a place for you here. Discover the various arms of WBM
                and find where you belong.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={(i * 100) as any}>
                <div
                  className="bg-white p-7 rounded-sm shadow hover:shadow-xl border-l-4 border-amber-600 transition-all duration-300 group hover:-translate-y-2 cursor-pointer h-full"
                >
                  <div className="mb-4 transform transition-transform group-hover:scale-110 origin-left flex justify-start">{m.icon}</div>
                  <h3
                    className="font-bold text-stone-800 text-lg mb-2 group-hover:text-amber-700 transition-colors"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {m.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="text-center mt-12">
              <Link
                href="/ministries"
                className="bg-amber-700 hover:bg-amber-600 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2"
              >
                All Ministries <ChevronRight size={16} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── GIVE CTA ─── */}
      <section className="py-20 flex items-center justify-center -mx-6 bg-stone-900 border-t-8 border-amber-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 max-w-full opacity-10 blur-3xl pointer-events-none">
          <div className="w-96 h-96 bg-amber-600 rounded-full" />
        </div>
        <AnimateOnScroll animation="zoom-in" className="px-6 text-white text-center relative z-10 w-full max-w-3xl">
          <p className="text-amber-400 text-xs uppercase tracking-widest font-bold mb-3">
            Partner With Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Support the Vision
          </h2>
          <p className="text-stone-400 text-lg mx-auto mb-10 leading-relaxed">
            Your support enables WBM to continue the work of Bible translation,
            commentary writing, and equipping leaders to proclaim Christ to the
            nations.
          </p>
          <Link
            href="/give"
            className="bg-amber-600 hover:bg-amber-500 hover:-translate-y-1 shadow-lg text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-sm transition-all duration-300 inline-flex items-center gap-2"
          >
            Give Today <ChevronRight size={16} />
          </Link>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
