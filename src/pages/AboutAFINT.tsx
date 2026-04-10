// import PageHero from '../components/PageHero';
// import { Link } from 'react-router-dom';
// import { ChevronRight, Globe, Radio, BookOpen, Users } from 'lucide-react';

// const pillars = [
//   {
//     icon: <BookOpen size={32} className="text-amber-500" />,
//     title: 'Literal Translation',
//     desc: 'The foundation of accuracy and integrity. Preserving grammatical structure and lexical precision to represent the Greek text faithfully.',
//   },
//   {
//     icon: <Radio size={32} className="text-amber-500" />,
//     title: 'Explanatory Paraphrase',
//     desc: 'Interpretive clarity built directly on the literal text, unpacking compressed expressions and clarifying theological context.',
//   },
//   {
//     icon: <Globe size={32} className="text-amber-500" />,
//     title: 'African Scholarship',
//     desc: 'Amplifying African scholarly contribution to global biblical translation and theology, reflecting Africa’s maturity in biblical exegesis.',
//   },
//   {
//     icon: <Users size={32} className="text-amber-500" />,
//     title: 'Global Utility',
//     desc: 'Serving the global Church with a biblically faithful English translation suitable for study, teaching, and spiritual formation.',
//   },
// ];

// const stats = [
//   { value: '10+', label: 'Nations Reached' },
//   { value: '50+', label: 'Ministry Partners' },
//   { value: '1000s', label: 'Lives Transformed' },
//   { value: '24/7', label: 'Digital Gospel Access' },
// ];

// export default function AboutAFINT() {
//   return (
//     <main>
//       <PageHero
//         tag="International Outreach"
//         title="About AFINT"
//         subtitle="A biblically faithful, academically rigorous English translation of the New Testament produced under the leadership of African theologians."
//       />

//       {/* What is AFINT */}
//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">International Frontier Ministry</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
//               What is AFINT?
//             </h2>
//             <div className="h-1 w-16 bg-amber-600 mb-7" />
//             <div className="space-y-5 text-stone-600 leading-relaxed">
//               <p>
//                 The African International New Testament (AFINT) is a groundbreaking biblical translation initiative designed to produce a theologically faithful, exegetically precise, and linguistically accurate English rendering of the Greek New Testament.
//               </p>
//               <p>
//                 AFINT seeks to amplify African scholarly contribution to global biblical translation, offering a translation that reflects rigorous engagement with the biblical text informed by the cultural and theological maturity of contemporary African scholarship.
//               </p>
//               <p>
//                 It features a dual-layer philosophy: a Literal Translation for foundational accuracy, and an Explanatory Paraphrase for interpretive clarity—ensuring truth is both preserved and made accessible to every reader.
//               </p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 gap-6">
//             {stats.map((s, i) => (
//               <div key={i} className="bg-stone-50 border border-stone-200 rounded-sm p-8 text-center hover:border-amber-400 hover:shadow-md transition-all">
//                 <p className="text-4xl font-black text-amber-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</p>
//                 <p className="text-stone-500 text-sm uppercase tracking-widest font-semibold">{s.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* AFINT Pillars */}
//       <section className="py-24 px-6 bg-stone-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-3">How We Operate</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
//               The Four Pillars of AFINT
//             </h2>
//             <div className="flex items-center justify-center gap-3 my-5">
//               <div className="h-px w-16 bg-amber-400" />
//               <div className="w-2 h-2 bg-amber-600 rotate-45" />
//               <div className="h-px w-16 bg-amber-400" />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {pillars.map((p, i) => (
//               <div key={i} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 border-b-4 border-amber-600 flex gap-6">
//                 <div className="shrink-0 mt-1">{p.icon}</div>
//                 <div>
//                   <h3 className="text-xl font-bold text-stone-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</h3>
//                   <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Great Commission Banner */}
//       <section className="bg-stone-900 text-white py-20 px-6 text-center">
//         <div className="max-w-3xl mx-auto">
//           <blockquote className="text-2xl md:text-3xl italic mb-4 text-amber-100" style={{ fontFamily: 'Playfair Display, serif' }}>
//             "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
//           </blockquote>
//           <p className="text-stone-400 text-sm uppercase tracking-widest mb-10">— Matthew 28:19</p>
//           <p className="text-stone-300 leading-relaxed mb-10">
//             This commission is not optional — it is the heartbeat of AFINT. Every program, every partnership, and every sacrifice is made in obedience to this divine mandate.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Link to="/digital-availability" className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2">
//               Digital Platforms <ChevronRight size={16} />
//             </Link>
//             <Link to="/give" className="border-2 border-white hover:bg-white hover:text-stone-900 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all">
//               Partner with AFINT
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Globe,
  BookOpen,
  ShieldCheck,
  GraduationCap,
  Search,
  Layers,
  FileText,
} from "lucide-react";

const missionPoints = [
  {
    icon: <Search className="text-amber-600 mb-4" size={28} />,
    title: "Exegetical and textual faithfulness",
    desc: "Ensuring the translation faithfully reflects the meaning, grammar, and theological depth of the Greek text, maintaining both precision and clarity. ",
  },
  {
    icon: <BookOpen className="text-amber-600 mb-4" size={28} />,
    title: "Scholarly and pastoral utility",
    desc: "Producing a translation suitable for academic research, theological education, and practical use in churches, ministries, and personal devotion. ",
  },
  {
    icon: <GraduationCap className="text-amber-600 mb-4" size={28} />,
    title: "African leadership in biblical scholarship",
    desc: "Amplifying African scholarly contribution to global biblical translation and theology, demonstrating Africa as an active participant in shaping the understanding of Scripture. ",
  },
  {
    icon: <Globe className="text-amber-600 mb-4" size={28} />,
    title: "Global accessibility",
    desc: "Providing the translation in both British and American English editions to serve diverse English-speaking communities worldwide. ",
  },
  {
    icon: <ShieldCheck className="text-amber-600 mb-4" size={28} />,
    title: "Missional and educational impact",
    desc: "Supporting evangelism, discipleship, and the training of Christian leaders by offering a reliable text for teaching, preaching, and personal growth, while laying a foundation for future indigenous Bible translations across Africa.",
  },
];

const purposes = [
  {
    title: "Exegetical faithfulness",
    desc: "To preserve the theological and syntactical depth of the Greek New Testament, translating with awareness of the text's historical, grammatical, and literary dimensions. ",
  },
  {
    title: "Textual variants",
    desc: "To provide transparency for modern biblical scholarship through textual footnotes highlighting significant manuscript variants, alternative readings, and interpretive options. ",
  },
  {
    title: "African contribution",
    desc: "To amplify the voice of African scholars in biblical translation and theology, enriching global conversations and providing a foundation for future translations into indigenous African languages. ",
  },
  {
    title: "Global missional utility",
    desc: "To serve the worldwide Church across denominational and cultural lines as a reliable tool for evangelism, theological education, leadership training, and spiritual formation. ",
  },
];

export default function AboutAFINT() {
  return (
    <main className="bg-stone-50">
      <PageHero
        tag="International Outreach"
        title="About AFINT"
        subtitle="A biblically faithful, academically rigorous, and spiritually transformative English translation of the New Testament. "
      />

      {/* Vision & Mission Sections */}
      <section className="py-20 px-6 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          {/* Vision Statement */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="text-amber-700 text-sm uppercase tracking-widest font-bold mb-6">
              Our Vision
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-stone-800 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              To provide a biblically faithful, academically rigorous, and
              spiritually transformative English translation of the New
              Testament that serves the global Church and reflects Africa's
              growing contribution to biblical scholarship.{" "}
            </h2>
          </div>

          {/* Mission Statement Grid */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-12">
              <h3
                className="text-3xl font-bold text-stone-800 mb-4 md:mb-0"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Mission
              </h3>
              <p className="text-stone-600 max-w-2xl text-lg leading-relaxed md:text-right">
                To honor Christ and strengthen the Church by producing a
                reliable, accurate, and readable English translation of the
                Greek New Testament, designed for study, teaching, preaching,
                and spiritual formation.{" "}
              </p>
            </div>

            <p className="text-stone-500 font-semibold mb-8 border-b border-stone-200 pb-4">
              This mission is achieved through:{" "}
              <span className="text-stone-300 text-xs"></span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {missionPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-stone-50 p-8 rounded-sm hover:shadow-lg transition-all border border-stone-100 group"
                >
                  {point.icon}
                  <h4 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-amber-700 transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Product Description */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-lg">
            <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">
              Product Description
            </p>
            <h2
              className="text-4xl font-bold text-stone-900 mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              A Groundbreaking Initiative{" "}
              <span className="text-stone-400 text-sm align-top"></span>
            </h2>
            <p>
              The African International New Testament (AFINT) is a
              groundbreaking biblical translation initiative designed to produce
              a theologically faithful, exegetically precise, and linguistically
              accurate English rendering of the Greek New Testament.{" "}
              <span className="text-stone-400 text-xs"></span>
            </p>
            <p>
              This project arises from the conviction that the global body of
              Christ benefits most when diverse voices contribute to the
              translation and interpretation of Scripture.{" "}
              <span className="text-stone-400 text-xs"></span> While much
              commendable work has focused on translating the Bible into
              Africa's many indigenous languages, there remains a significant
              gap in African-led contributions to English Bible translation—a
              language that continues to serve as a principal medium for
              theological education, ecclesial discourse, and global Christian
              scholarship. <span className="text-stone-400 text-xs"></span>
            </p>
            <p>
              The AFINT seeks to fill this gap by offering a translation that
              reflects rigorous engagement with the biblical text, informed by
              the linguistic, cultural, and theological maturity of contemporary
              African scholarship.{" "}
              <span className="text-stone-400 text-xs"></span>
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="sticky top-10 bg-amber-700 text-amber-50 p-10 rounded-sm shadow-2xl">
              <Layers className="text-amber-400 mb-6" size={40} />
              <h4
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Defining "African"
              </h4>
              <p className="mb-4 leading-relaxed">
                The term "African" in the project's title refers to the
                provenance rather than a contextual adaptation of the
                translation. <span className="text-amber-300 text-xs"></span>
              </p>
              <p className="mb-4 leading-relaxed font-semibold text-white">
                The AFINT is not an Africanized version of Scripture but an
                academically rigorous work produced under the leadership of
                African theologians and exegetes.{" "}
                <span className="text-amber-300 text-xs"></span>
              </p>
              <p className="leading-relaxed">
                Its goal is to serve the global Church, enriching biblical
                studies and advancing theological reflection through the
                contributions of African biblical scholarship.{" "}
                <span className="text-amber-300 text-xs"></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Translation Philosophy - The Dual Layer */}
      <section className="py-24 px-6 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800 mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Translation Philosophy: Literal & Explanatory Paraphrase{" "}
              <span className="text-stone-300 text-sm align-top"></span>
            </h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg leading-relaxed">
              The AFINT is a carefully structured translation project built on a
              dual-layer philosophy.{" "}
              <span className="text-stone-400 text-xs"></span> These two
              components function in deliberate relationship: the Explanatory
              Paraphrase is consistently based on, derived from, and governed by
              the Literal Translation, ensuring all interpretive expansion
              maintains accuracy, integrity, and accountability to the original
              Greek text.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-stone-200 rounded-sm overflow-hidden shadow-sm">
            {/* Layer 1: Literal */}
            <div className="bg-stone-50 p-10 lg:border-r border-stone-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-200 text-stone-600 font-bold mb-6">
                1
              </div>
              <h3
                className="text-2xl font-bold text-stone-900 mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                AFINT: Literal Translation
              </h3>
              <p className="text-amber-700 font-semibold mb-6">
                The Foundation of Accuracy and Integrity{" "}
                <span className="text-amber-600/50 text-xs"></span>
              </p>
              <p className="text-stone-600 mb-8">
                Serves as the textual anchor of the entire project. Its primary
                goal is to represent the Greek New Testament with a high degree
                of formal fidelity, while remaining intelligible in standard
                English. <span className="text-stone-400 text-xs"></span>
              </p>
              <ul className="space-y-4 text-stone-700 text-sm">
                <li className="flex gap-3">
                  <ChevronRight className="text-amber-600 shrink-0" size={18} />{" "}
                  <span>
                    <strong>Formal correspondence:</strong> Preserves
                    grammatical structure and syntactical relationships.{" "}
                    <span className="text-stone-400 text-xs"></span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-amber-600 shrink-0" size={18} />{" "}
                  <span>
                    <strong>Lexical precision:</strong> Careful attention to
                    semantic range and conceptual continuity.{" "}
                    <span className="text-stone-400 text-xs"></span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-amber-600 shrink-0" size={18} />{" "}
                  <span>
                    <strong>Minimal expansion:</strong> Focus is on what the
                    text says. <span className="text-stone-400 text-xs"></span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-amber-600 shrink-0" size={18} />{" "}
                  <span>
                    <strong>Transparency:</strong> Suitable for serious study
                    and comparison.{" "}
                    <span className="text-stone-400 text-xs"></span>
                  </span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-white border border-stone-200 rounded-sm">
                <p className="text-sm text-stone-600 font-semibold italic">
                  Function: Establishes the definitive textual boundary for
                  meaning, providing the standard of accuracy.
                </p>
              </div>
            </div>

            {/* Layer 2: Paraphrase */}
            <div className="bg-white p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-bold mb-6">
                2
              </div>
              <h3
                className="text-2xl font-bold text-stone-900 mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                AFINT: Explanatory Paraphrase
              </h3>
              <p className="text-amber-700 font-semibold mb-6">
                Clarity Built on the Literal Text{" "}
                <span className="text-amber-600/50 text-xs"></span>
              </p>
              <p className="text-stone-600 mb-8">
                Not an independent rendering but a carefully controlled
                expansion. Its purpose is to make the meaning of the text clear,
                explicit, and accessible, especially where the Greek
                communicates densely or implicitly.
              </p>
              <ul className="space-y-4 text-stone-700 text-sm">
                <li className="flex gap-3">
                  <ChevronRight className="text-amber-600 shrink-0" size={18} />{" "}
                  <span>
                    <strong>Derived directly:</strong> Rooted in the wording
                    established in the AFINT Literal.{" "}
                    <span className="text-stone-400 text-xs"></span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-amber-600 shrink-0" size={18} />{" "}
                  <span>
                    <strong>Explanatory expansions:</strong> Unpacks compressed
                    expressions and illuminates context.{" "}
                    <span className="text-stone-400 text-xs"></span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-amber-600 shrink-0" size={18} />{" "}
                  <span>
                    <strong>Exegetical integration:</strong> Incorporates
                    grammatical and theological insights.{" "}
                    <span className="text-stone-400 text-xs"></span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-amber-600 shrink-0" size={18} />{" "}
                  <span>
                    <strong>Guided clarity:</strong> Provides reasoned and
                    textually grounded explanation.
                  </span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-stone-50 border border-stone-200 rounded-sm">
                <p className="text-sm text-stone-600 font-semibold italic">
                  Function: Articulates clearly what is already present in the
                  text... extending meaning in an accountable way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Principles & Justification Grid */}
      <section className="py-24 px-6 bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 pb-20 border-b border-stone-700">
            <div>
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                The Governing Principle{" "}
                <span className="text-stone-500 text-sm"></span>
              </h3>
              <p className="mb-4">
                The defining feature is the dependence of the Explanatory
                Paraphrase on the Literal Translation, ensuring:
              </p>
              <ul className="space-y-2 mb-6">
                <li>
                  <strong className="text-amber-500">Accuracy</strong> –
                  Anchored in a formally controlled base.
                </li>
                <li>
                  <strong className="text-amber-500">Integrity</strong> –
                  Meaning is not altered from original wording.
                </li>
                <li>
                  <strong className="text-amber-500">Accountability</strong> –
                  Every expansion traces back to the literal text.{" "}
                  <span className="text-stone-500 text-xs"></span>
                </li>
              </ul>
              <div className="border-l-4 border-amber-600 pl-4 py-2 bg-stone-800/50">
                <p className="font-semibold text-white">
                  The Literal Translation determines what the text{" "}
                  <em className="text-amber-400">says</em>; the Explanatory
                  Paraphrase explains what the text{" "}
                  <em className="text-amber-400">means</em>.{" "}
                  <span className="text-stone-500 text-xs"></span>
                </p>
              </div>
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Theological & Textual Basis
              </h3>
              <p className="mb-4">
                AFINT intentionally integrates translation and exegesis...
                embedding explanation within the translation itself, while
                maintaining a clear distinction between the textual base and the
                interpretive expansion.
              </p>
              <p className="mb-8">
                While reflecting an evangelical theological orientation, this
                clarity is derived from the text, constrained by evidence, and
                expressed as an outworking of exegesis—maintaining theological
                transparency under the authority of the text.
              </p>

              <div className="bg-stone-800 p-6 rounded-sm border border-stone-700 flex items-start gap-4">
                <FileText className="text-amber-500 shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-2">
                    Textual Basis{" "}
                    <span className="text-stone-500 text-xs font-normal"></span>
                  </h4>
                  <p className="text-sm">
                    Draws on the two most authoritative critical editions:{" "}
                    <span className="text-stone-500 text-xs"></span>
                  </p>
                  <ul className="text-sm list-disc ml-4 mt-2">
                    <li>
                      Novum Testamentum Graece, 28th Edition (NA28){" "}
                      <span className="text-stone-500 text-xs"></span>
                    </li>
                    <li>
                      The Greek New Testament, 5th Revised Edition (UBS5){" "}
                      <span className="text-stone-500 text-xs"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Purpose & Justification{" "}
              <span className="text-stone-500 text-sm align-top"></span>
            </h3>
            <p className="max-w-2xl mx-auto">
              The AFINT emerges from both theological conviction and missional
              necessity, with four primary purposes:{" "}
              <span className="text-stone-500 text-xs"></span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purposes.map((purpose, idx) => (
              <div
                key={idx}
                className="bg-stone-800 border border-stone-700 p-6 rounded-sm hover:border-amber-500 transition-colors"
              >
                <h4 className="text-lg font-bold text-white mb-3">
                  {purpose.title}
                </h4>
                <p className="text-sm leading-relaxed text-stone-400">
                  {purpose.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-amber-700 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Experience the Translation
          </h2>
          <p className="text-amber-100 leading-relaxed mb-8 text-lg">
            A reliable tool for evangelism, theological education, leadership
            training, and spiritual formation. Discover the depth of God's Word
            through the lens of African scholarship.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/digital-availability"
              className="bg-white text-stone-900 hover:bg-stone-100 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Digital Platforms <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
