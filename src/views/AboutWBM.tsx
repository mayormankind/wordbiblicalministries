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
    icon: <HandHeart size={32} className="text-primary" />,
    title: "Prayer Dependence",
    desc: "We affirm that prayer is the indispensable foundation of all ministry, following the apostolic pattern of Acts 6:4. We labor in the Word only after laboring before God in intercession.",
  },
  {
    icon: <BookOpen size={32} className="text-primary" />,
    title: "Scriptural Authority",
    desc: "We hold to the authority, sufficiency, inerrancy, infallibility, and clarity of Holy Scripture as the final rule for faith and life.",
  },
  {
    icon: <PenTool size={32} className="text-primary" />,
    title: "Exegetical Integrity",
    desc: "We aim for rigorous, contextually faithful exegesis reflecting the intended meaning of Scripture and honors God's inspiration of the text.",
  },
  {
    icon: <Handshake size={32} className="text-primary" />,
    title: "Faithful Stewardship",
    desc: "We commit to translating, explaining, and presenting God's Word with utmost fidelity, clarity, and care, ensuring it faithfully communicates the truth of Scripture to all readers.",
  },
  {
    icon: <ShieldCheck size={32} className="text-primary" />,
    title: "Doctrinal Fidelity",
    desc: "We defend historic, conservative evangelical theology, standing firm against error and upholding the apostolic gospel.",
  },
  {
    icon: <Globe size={32} className="text-primary" />,
    title: "Christ-Centered Mission",
    desc: "Our work exists for the supremacy of Christ in evangelization and discipleship for the fulfillment of seeking to strengthen His Church for the fulfillment of the Great Commission.",
  },
  {
    icon: <Wrench size={32} className="text-primary" />,
    title: "Practical Ministry Application",
    desc: "Our commentaries unite sound scholarship with pastoral usefulness, ensuring biblical truth is applied to real Christian living and discipleship.",
  },
  {
    icon: <Scale size={32} className="text-primary" />,
    title: "Ministry Integrity",
    desc: "We conduct all work—translation, writing, and teaching—with humility, honesty, and godliness.",
  },
  {
    icon: <Church size={32} className="text-primary" />,
    title: "Service to the Church",
    desc: "We exist not for academic prestige but for the strengthening of Christ's church—pastors, theologians, students, campus ministries and everyday believers.",
  },
  {
    icon: <Sparkles size={32} className="text-primary" />,
    title: "Doxological Orientation",
    desc: "All ministry begins with God, depends on God, and ends in the glory of God.",
  },
];

// ── Founder academic journey ──────────────────────────────────────────────────
const academicJourney = [
  {
    track: "Academic",
    color: "bg-stone-800",
    textColor: "text-on-surface",
    lightBg: "bg-surface-container-low",
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
    color: "bg-surface-tint",
    textColor: "text-surface-tint",
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

      {/* ── Vision & Mission ── */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-10">
            {/* Vision */}
            <AnimateOnScroll animation="fade-right">
              <div className="bg-stone-800 text-white p-10 rounded-sm">
                <div className="mb-4">
                  <Telescope className="text-primary-fixed" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline italic">
                  Our Vision Statement
                </h3>
                <div className="h-0.5 w-12 bg-amber-400 mb-5" />
                <p className="text-inverse-on-surface leading-relaxed text-lg">
                  To glorify God by strengthening the Church of Jesus Christ
                  through prayer-dependent, Scripture-rooted ministry that
                  advances the Great Commission.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Mission */}
            <AnimateOnScroll animation="fade-left">
              <div className="bg-surface-tint text-white p-10 rounded-sm">
                <div className="mb-4">
                  <Target className="text-amber-300" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline italic">
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
                      <div className="border border-primary/40 rounded-sm overflow-hidden">
                        <button
                          onClick={() =>
                            setOpenCommitment(openCommitment === i ? null : i)
                          }
                          className="w-full flex items-center gap-4 px-5 py-4 text-left focus:outline-none group"
                        >
                          <span className="text-amber-300 font-black text-lg shrink-0 select-none font-headline italic">
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
              <p className="text-surface-tint text-xs uppercase tracking-widest font-bold mb-3">
                What Drives Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4 font-headline italic">
                Our Core Values
              </h2>
              <div className="flex items-center justify-center gap-3 my-5">
                <div className="h-px w-16 bg-amber-400" />
                <div className="w-2 h-2 bg-primary rotate-45" />
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
                <div className="bg-surface-container-low p-7 rounded-sm border border-surface-dim hover:border-primary-fixed hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-on-surface text-lg mb-2 group-hover:text-surface-tint transition-colors font-headline italic">
                    {v.title}
                  </h3>
                  <p className="text-outline text-sm leading-relaxed flex-1">
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
              <p className="text-primary-container text-xs uppercase tracking-widest font-bold mb-3">
                The Man Behind the Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-headline italic">
                About the Founder
              </h2>
              <div className="flex items-center justify-center gap-3 my-5">
                <div className="h-px w-16 bg-primary" />
                <div className="w-2 h-2 bg-amber-500 rotate-45" />
                <div className="h-px w-16 bg-primary" />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Founder bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-14">
            {/* Avatar + name */}
            <AnimateOnScroll animation="fade-right" className="lg:col-span-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-stone-700 flex items-center justify-center mb-5 ring-4 ring-amber-600/40">
                  <User size={56} className="text-outline-variant" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 font-headline italic">
                  Michael Adegbola
                </h3>
                <p className="text-primary-fixed text-xs uppercase tracking-widest font-semibold mb-3">
                  Founder & Director
                </p>
                <p className="text-outline-variant text-xs leading-relaxed">
                  Scholar · Teacher · Preacher
                </p>
              </div>
            </AnimateOnScroll>

            {/* Bio text */}
            <AnimateOnScroll animation="fade-left" className="lg:col-span-9">
              <div className="space-y-5 text-inverse-on-surface leading-relaxed">
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
                  <div className="bg-stone-800 border border-outline-variant rounded-sm p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-8 h-8 rounded-lg ${track.color} flex items-center justify-center`}
                      >
                        <GraduationCap size={16} className="text-white" />
                      </div>
                      <h4 className="font-bold text-white font-headline italic">
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
                          <p className="text-inverse-on-surface text-sm">
                            {item.institution}
                          </p>
                          <p className="text-outline text-xs mt-0.5">
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
    </main>
  );
}
