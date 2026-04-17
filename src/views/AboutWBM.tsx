"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import Link from "next/link";
import {
  ChevronRight,
  HandHeart,
  BookOpen,
  PenTool,
  Handshake,
  ShieldCheck,
  Globe,
  Wrench,
  Scale,
  Church,
  Sparkles,
  Telescope,
  Target,
  User,
  MapPin,
  GraduationCap,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";

// ── Core Values ───────────────────────────────────────────────────────────────
const values = [
  {
    icon: <HandHeart size={32} className="text-amber-600" />,
    title: "Prayer Dependence",
    desc: "We affirm that prayer is the indispensable foundation of all ministry, following the apostolic pattern of Acts 6:4. We labor in the Word only after laboring before God in intercession.",
  },
  {
    icon: <BookOpen size={32} className="text-amber-600" />,
    title: "Scriptural Authority",
    desc: "We hold to the authority, sufficiency, inerrancy, infallibility, and clarity of Holy Scripture as the final rule for faith and life.",
  },
  {
    icon: <PenTool size={32} className="text-amber-600" />,
    title: "Exegetical Integrity",
    desc: "We aim for rigorous, contextually faithful exegesis reflecting the intended meaning of Scripture and honors God's inspiration of the text.",
  },
  {
    icon: <Handshake size={32} className="text-amber-600" />,
    title: "Faithful Stewardship",
    desc: "We commit to translating, explaining, and presenting God's Word with utmost fidelity, clarity, and care, ensuring it faithfully communicates the truth of Scripture to all readers.",
  },
  {
    icon: <ShieldCheck size={32} className="text-amber-600" />,
    title: "Doctrinal Fidelity",
    desc: "We defend historic, conservative evangelical theology, standing firm against error and upholding the apostolic gospel.",
  },
  {
    icon: <Globe size={32} className="text-amber-600" />,
    title: "Christ-Centered Mission",
    desc: "Our work exists for the supremacy of Christ in evangelization and discipleship for the fulfillment of seeking to strengthen His Church for the fulfillment of the Great Commission.",
  },
  {
    icon: <Wrench size={32} className="text-amber-600" />,
    title: "Practical Ministry Application",
    desc: "Our commentaries unite sound scholarship with pastoral usefulness, ensuring biblical truth is applied to real Christian living and discipleship.",
  },
  {
    icon: <Scale size={32} className="text-amber-600" />,
    title: "Ministry Integrity",
    desc: "We conduct all work—translation, writing, and teaching—with humility, honesty, and godliness.",
  },
  {
    icon: <Church size={32} className="text-amber-600" />,
    title: "Service to the Church",
    desc: "We exist not for academic prestige but for the strengthening of Christ's church—pastors, theologians, students, campus ministries and everyday believers.",
  },
  {
    icon: <Sparkles size={32} className="text-amber-600" />,
    title: "Doxological Orientation",
    desc: "All ministry begins with God, depends on God, and ends in the glory of God.",
  },
];

// ── Timeline milestones ───────────────────────────────────────────────────────
const timeline = [
  {
    year: "2012",
    endYear: "2017",
    name: "Fullness of Christ Global Initiative Ministry",
    abbr: "FCGIM",
    location: "Ogbomosho, Oyo State, Nigeria",
    desc: "The ministry was first established as FCGIM — a foundational phase emphasizing the nurturing of believers through sound teaching and fostering a deeper experiential knowledge of Christ.",
    accent: "bg-stone-700",
    textAccent: "text-stone-700",
    borderAccent: "border-stone-700",
  },
  {
    year: "2018",
    endYear: "2022",
    name: "Word Vision Impact Ministry International",
    abbr: "WVIM",
    location: "Ibadan, Oyo State, Nigeria",
    desc: "Officially registered with the Corporate Affairs Commission (CAC) of Nigeria, this transition marked a clearer articulation of the vision — to bring the transforming power of God's Word to individuals, churches, and communities.",
    accent: "bg-amber-700",
    textAccent: "text-amber-700",
    borderAccent: "border-amber-700",
  },
  {
    year: "2023",
    endYear: "Present",
    name: "Word Biblical Ministries",
    abbr: "WBM",
    location: "Ibadan, Oyo State & Akure, Ondo State, Nigeria",
    desc: "The present name reflects a sharpened identity and renewed commitment — to uphold the authority, sufficiency, and centrality of Scripture in all aspects of ministry and Christian life.",
    accent: "bg-amber-600",
    textAccent: "text-amber-600",
    borderAccent: "border-amber-600",
  },
];

// ── Timeline types ──────────────────────────────────────────────────────────
interface TimelineItem {
  year: string;
  endYear: string;
  name: string;
  abbr: string;
  location: string;
  desc: string;
  accent: string;
  textAccent: string;
  borderAccent: string;
}

interface TimelineCardProps {
  item: TimelineItem;
}

// ── Founder academic journey ──────────────────────────────────────────────────
const academicJourney = [
  {
    track: "Academic",
    color: "bg-stone-800",
    textColor: "text-stone-800",
    lightBg: "bg-stone-50",
    borderColor: "border-stone-300",
    items: [
      {
        degree: "BSc, Geography",
        institution: "University of Ibadan, Nigeria",
        detail: "Specialization in Soil Geomorphology",
      },
      {
        degree: "MSc, Geography",
        institution: "University of Ibadan, Nigeria",
        detail: "Rigorous analytical research background",
      },
    ],
  },
  {
    track: "Theological",
    color: "bg-amber-700",
    textColor: "text-amber-700",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-300",
    items: [
      {
        degree: "MDiv, Theology",
        institution: "Nigerian Baptist Theological Seminary, Ogbomosho",
        detail:
          "Foundation in biblical interpretation and expository preaching",
      },
      {
        degree: "MTh, Theology",
        institution: "Nigerian Baptist Theological Seminary, Ogbomosho",
        detail: "Doctrinal soundness and careful biblical scholarship",
      },
    ],
  },
];

// ── Leadership placeholders ───────────────────────────────────────────────────
const leadership = [
  { name: "Founder & Director", role: "Senior Leadership" },
  { name: "Associate Director", role: "Ministry Team" },
  { name: "Director of Ministries", role: "Ministry Leadership" },
  { name: "Director of AFINT", role: "International Outreach" },
];

// ── Mission commitments ───────────────────────────────────────────────────────
const missionCommitments = [
  {
    number: "1",
    title: "Prayer as the Foundation of All Ministry",
    body: "Following Acts 6:4, we devote ourselves first to prayer and intercession, believing that all effective proclamation of God's Word must flow from dependence on the Holy Spirit and persevering prayer.",
  },
  {
    number: "2",
    title: "Faithful Bible Translation",
    body: "Producing accurate, reliable, and readable New Testament translations — especially the African International New Testament: Literal Translation and Explanatory Paraphrase (British and American Editions) that serve the Church and the ongoing task of gospel proclamation.",
  },
  {
    number: "3",
    title: "Exegetical and Pastoral NT Commentary Writing",
    body: "Developing commentaries — Word Expositor's Commentary on the New Testament (WECNT) series — that unite rigorous exegesis with practical application, providing tools that nurture Christian discipleship, strengthen preaching, and shape believers in Christlike maturity.",
  },
  {
    number: "4",
    title: "Stalwart Defense of Conservative Evangelicalism",
    body: "Upholding the authority, sufficiency, and infallibility of Scripture; defending historic evangelical doctrine; and equipping believers and leaders to stand firm against theological error and spiritual drift.",
  },
  {
    number: "5",
    title: "Equipping the Body of Christ for Gospel Mission",
    body: "Providing biblically grounded resources and teaching that empower churches, seminaries, campus ministries, and Christian leaders to proclaim Christ, make disciples, and live for the glory of God.",
  },
];

export default function AboutWBM() {
  const [openCommitment, setOpenCommitment] = useState<number | null>(null);

  return (
    <main>
      <PageHero
        tag="Who We Are"
        title="About WBM"
        subtitle="Word Biblical Ministries — exalting Christ and strengthening the Church through prayer-dependent, Scripture-rooted ministry."
      />

      {/* ── Our Story intro ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">
                Our Story
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800 mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                A Ministry Born Out of Divine Calling
              </h2>
              <div className="flex items-center justify-center gap-3 my-5">
                <div className="h-px w-16 bg-amber-400" />
                <div className="w-2 h-2 bg-amber-600 rotate-45" />
                <div className="h-px w-16 bg-amber-400" />
              </div>
              <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Word Biblical Ministries is the product of a journey shaped by
                divine calling, theological conviction, and a steadfast
                commitment to the proclamation of God's Word. What began as a
                small but earnest ministry expression has, over the years, grown
                into a mission devoted to advancing biblical truth with clarity,
                depth, and spiritual power.
              </p>
            </div>
          </AnimateOnScroll>

          {/* ── Timeline ── */}
          <div className="relative">
            {/* Vertical spine line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-0">
              {timeline.map((item: TimelineItem, i: number) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimateOnScroll
                    key={i}
                    animation={isLeft ? "fade-right" : "fade-left"}
                    delay={(i * 150) as any}
                  >
                    <div
                      className={`relative grid grid-cols-1 md:grid-cols-2 gap-0 mb-0`}
                    >
                      {/* Left side content */}
                      <div
                        className={`${
                          isLeft ? "md:pr-12 md:text-right" : "hidden md:block"
                        } py-10`}
                      >
                        {isLeft && (
                          <div className="md:flex md:flex-col md:items-end">
                            <TimelineCard item={item} />
                          </div>
                        )}
                      </div>

                      {/* Centre dot */}
                      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center">
                        <div
                          className={`w-14 h-14 rounded-full ${item.accent} flex items-center justify-center shadow-lg border-4 border-white`}
                        >
                          <span
                            className="text-white text-xs font-black"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Right side content */}
                      <div
                        className={`${
                          !isLeft ? "md:pl-12 md:text-left" : "hidden md:block"
                        } py-10`}
                      >
                        {!isLeft && (
                          <div>
                            <TimelineCard item={item} />
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Two pillars note */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="mt-10 border border-stone-200 rounded-lg p-8 bg-stone-50 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center shrink-0">
                  <HandHeart size={18} className="text-white" />
                </div>
                <div>
                  <h4
                    className="font-bold text-stone-800 mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Prayer
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    Not treated as a mere activity but as the spiritual
                    foundation upon which all ministry flows — seeking divine
                    direction, empowerment, and fruitfulness.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center shrink-0">
                  <BookOpen size={18} className="text-white" />
                </div>
                <div>
                  <h4
                    className="font-bold text-stone-800 mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Ministry of the Word
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    An unwavering dedication to the teaching and preaching of
                    the whole counsel of God — rightly interpreted, faithfully
                    taught, and practically applied.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-10">
            {/* Vision */}
            <AnimateOnScroll animation="fade-right">
              <div className="bg-stone-800 text-white p-10 rounded-sm">
                <div className="mb-4">
                  <Telescope className="text-amber-400" size={40} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Our Vision Statement
                </h3>
                <div className="h-0.5 w-12 bg-amber-400 mb-5" />
                <p className="text-stone-300 leading-relaxed text-lg">
                  To glorify God by strengthening the Church of Jesus Christ
                  through prayer-dependent, Scripture-rooted ministry that
                  advances the Great Commission.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Mission */}
            <AnimateOnScroll animation="fade-left">
              <div className="bg-amber-700 text-white p-10 rounded-sm">
                <div className="mb-4">
                  <Target className="text-amber-300" size={40} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Our Mission Statement
                </h3>
                <div className="h-0.5 w-12 bg-amber-300 mb-5" />
                <p className="text-amber-100 font-semibold text-lg leading-relaxed mb-8">
                  Word Biblical Ministries exists to exalt Christ, strengthen
                  the Church, and contribute to the fulfillment of the Great
                  Commission — evangelization and discipleship — through the
                  following commitments:
                </p>

                {/* Commitments accordion */}
                <div className="space-y-2">
                  {missionCommitments.map((c, i) => (
                    <AnimateOnScroll
                      key={i}
                      animation="fade-left"
                      delay={(i * 100) as any}
                    >
                      <div className="border border-amber-500/40 rounded-sm overflow-hidden">
                        <button
                          onClick={() =>
                            setOpenCommitment(openCommitment === i ? null : i)
                          }
                          className="w-full flex items-center gap-4 px-5 py-4 text-left focus:outline-none group"
                        >
                          <span
                            className="text-amber-300 font-black text-lg shrink-0 select-none"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {c.number}
                          </span>
                          <span className="text-white font-semibold text-sm flex-1 leading-snug group-hover:text-amber-200 transition-colors">
                            {c.title}
                          </span>
                          <ChevronRight
                            size={16}
                            className={`text-amber-300 shrink-0 transition-transform duration-300 ${
                              openCommitment === i ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        <div
                          style={{
                            maxHeight: openCommitment === i ? "300px" : "0",
                            overflow: "hidden",
                            transition:
                              "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                          }}
                        >
                          <p className="text-amber-100/90 text-sm leading-relaxed px-5 pb-5 pt-1 border-t border-amber-500/30">
                            {c.body}
                          </p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-3">
                What Drives Us
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Core Values
              </h2>
              <div className="flex items-center justify-center gap-3 my-5">
                <div className="h-px w-16 bg-amber-400" />
                <div className="w-2 h-2 bg-amber-600 rotate-45" />
                <div className="h-px w-16 bg-amber-400" />
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll
                key={i}
                animation="fade-up"
                delay={((i % 3) * 100) as any}
              >
                <div className="bg-stone-50 p-7 rounded-sm border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <h3
                    className="font-bold text-stone-800 text-lg mb-2 group-hover:text-amber-700 transition-colors"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed flex-1">
                    {v.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the Founder ── */}
      <section className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-amber-500 text-xs uppercase tracking-widest font-bold mb-3">
                The Man Behind the Mission
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                About the Founder
              </h2>
              <div className="flex items-center justify-center gap-3 my-5">
                <div className="h-px w-16 bg-amber-600" />
                <div className="w-2 h-2 bg-amber-500 rotate-45" />
                <div className="h-px w-16 bg-amber-600" />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Founder bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-14">
            {/* Avatar + name */}
            <AnimateOnScroll animation="fade-right" className="lg:col-span-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-stone-700 flex items-center justify-center mb-5 ring-4 ring-amber-600/40">
                  <User size={56} className="text-stone-400" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Michael Adegbola
                </h3>
                <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">
                  Founder & Director
                </p>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Scholar · Teacher · Preacher
                </p>
              </div>
            </AnimateOnScroll>

            {/* Bio text */}
            <AnimateOnScroll animation="fade-left" className="lg:col-span-9">
              <div className="space-y-5 text-stone-300 leading-relaxed">
                <p>
                  Michael Adegbola is a scholar, teacher, and preacher whose
                  journey reflects both academic excellence and spiritual
                  calling. He began his academic career in the field of
                  Geography, earning both a Bachelor of Science (BSc) and a
                  Master of Science (MSc) degree from the University of Ibadan,
                  Nigeria's premier university. His specialization in Soil
                  Geomorphology reflects a rigorous analytical background and
                  disciplined approach to research.
                </p>
                <p>
                  In response to a clear calling into the preaching and teaching
                  ministry, he transitioned into theological education. He
                  enrolled at the Nigerian Baptist Theological Seminary,
                  Ogbomosho, where he earned both a Master of Divinity (MDiv)
                  and a Master of Theology (MTh). This theological formation
                  laid a strong foundation for his commitment to careful
                  biblical interpretation, doctrinal soundness, and expository
                  preaching.
                </p>
                <p>
                  As founder of Word Biblical Ministries, Michael Adegbola is
                  devoted to the faithful exposition of Scripture, the training
                  of believers in sound doctrine, and the advancement of a
                  Christ-centred, Word-driven ministry. His work reflects a deep
                  conviction that the Church is strengthened not by trends or
                  innovations, but by a return to the authority and sufficiency
                  of God's Word, upheld through prayer and proclaimed with
                  clarity.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Dual academic track */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicJourney.map((track, i) => (
                <AnimateOnScroll
                  key={i}
                  animation={i === 0 ? "fade-right" : "fade-left"}
                  delay={(i * 150) as any}
                >
                  <div className="bg-stone-800 border border-stone-700 rounded-sm p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-8 h-8 rounded-lg ${track.color} flex items-center justify-center`}
                      >
                        <GraduationCap size={16} className="text-white" />
                      </div>
                      <h4
                        className="font-bold text-white"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {track.track} Formation
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {track.items.map((item, j) => (
                        <div
                          key={j}
                          className={`border-l-2 ${track.borderColor} pl-4`}
                        >
                          <p
                            className={`font-bold text-sm ${track.textColor} mb-0.5`}
                          >
                            {item.degree}
                          </p>
                          <p className="text-stone-300 text-sm">
                            {item.institution}
                          </p>
                          <p className="text-stone-500 text-xs mt-0.5">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Leadership ── */}
      {/* <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll animation="zoom-in">
            <div className="text-center mb-16">
              <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-3">
                Servant Leaders
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Leadership Team
              </h2>
              <div className="flex items-center justify-center gap-3 my-5">
                <div className="h-px w-16 bg-amber-400" />
                <div className="w-2 h-2 bg-amber-600 rotate-45" />
                <div className="h-px w-16 bg-amber-400" />
              </div>
              <p className="text-stone-500 max-w-xl mx-auto">
                Led by God-called, Spirit-filled servants committed to equipping
                the body of Christ with humility, integrity, and love.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l, i) => (
              <AnimateOnScroll
                key={i}
                animation="zoom-in"
                delay={(i * 100) as any}
              >
                <div className="text-center group">
                  <div className="w-28 h-28 bg-stone-200 rounded-full mx-auto mb-4 flex items-center justify-center text-stone-400 group-hover:ring-4 ring-amber-400 transition-all duration-300">
                    <User size={44} />
                  </div>
                  <h4
                    className="font-bold text-stone-800"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {l.name}
                  </h4>
                  <p className="text-amber-600 text-xs uppercase tracking-wide font-semibold mt-1">
                    {l.role}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="text-center text-stone-400 text-sm mt-10 italic">
            * Full leadership profiles and bios will be updated with provided
            content.
          </p>
        </div>
      </section> */}

      {/* ── CTA ── */}
      {/* <section className="py-16 px-6 bg-amber-700 text-white text-center">
        <AnimateOnScroll animation="zoom-in">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready to Be Part of Something Greater?
          </h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Partner with us as we advance the Great Commission by strengthening
            the global Church through prayer and the Word.
          </p>
          <Link
            href="/contact"
            className="bg-white text-amber-800 hover:bg-amber-50 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2 shadow-lg"
          >
            Find Us <ChevronRight size={16} />
          </Link>
        </AnimateOnScroll>
      </section> */}
    </main>
  );
}

// ── Timeline card sub-component ───────────────────────────────────────────────
function TimelineCard({ item }: TimelineCardProps) {
  return (
    <div
      className={`bg-white border ${item.borderAccent} border-l-4 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow duration-300 max-w-md`}
    >
      {/* Mobile year badge */}
      <div className={`inline-flex items-center gap-2 mb-3 md:hidden`}>
        <span
          className={`text-xs font-black px-2 py-1 rounded text-white ${item.accent}`}
        >
          {item.year}
        </span>
        <span className="text-xs text-stone-400">— {item.endYear}</span>
      </div>

      <p
        className={`text-xs font-bold uppercase tracking-widest ${item.textAccent} mb-1`}
      >
        {item.abbr}
      </p>
      <h4
        className="font-bold text-stone-800 text-base mb-2 leading-snug"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {item.name}
      </h4>
      <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-3">
        <MapPin size={11} />
        {item.location}
      </div>
      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}
