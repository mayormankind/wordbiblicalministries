import PageHero from "../components/PageHero";
import Link from "next/link";
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
import AnimateOnScroll from "../components/AnimateOnScroll";

interface MissionPoint {
  icon: React.ReactNode;
  number: string;
  title: string;
  desc: string;
  wide?: boolean;
}

interface Purpose {
  title: string;
  desc: string;
}

const missionPoints: MissionPoint[] = [
  {
    icon: <Search size={18} />,
    number: "01",
    title: "Exegetical and textual faithfulness",
    desc: "Ensuring the translation faithfully reflects the meaning, grammar, and theological depth of the Greek text, maintaining both precision and clarity.",
  },
  {
    icon: <BookOpen size={18} />,
    number: "02",
    title: "Scholarly and pastoral utility",
    desc: "Producing a translation suitable for academic research, theological education, and practical use in churches, ministries, and personal devotion.",
  },
  {
    icon: <GraduationCap size={18} />,
    number: "03",
    title: "African leadership in biblical scholarship",
    desc: "Amplifying African scholarly contribution to global biblical translation and theology, demonstrating Africa as an active participant in shaping the understanding of Scripture.",
  },
  {
    icon: <Globe size={18} />,
    number: "04",
    title: "Global accessibility",
    desc: "Providing the translation in both British and American English editions to serve diverse English-speaking communities worldwide.",
  },
  {
    icon: <ShieldCheck size={18} />,
    number: "05",
    title: "Missional and educational impact",
    desc: "Supporting evangelism, discipleship, and the training of Christian leaders by offering a reliable text for teaching, preaching, and personal growth, while laying a foundation for future indigenous Bible translations across Africa.",
    wide: true,
  },
];

const purposes: Purpose[] = [
  {
    title: "Exegetical faithfulness",
    desc: "To preserve the theological and syntactical depth of the Greek New Testament, translating with awareness of the text's historical, grammatical, and literary dimensions.",
  },
  {
    title: "Textual variants",
    desc: "To provide transparency for modern biblical scholarship through textual footnotes highlighting significant manuscript variants, alternative readings, and interpretive options.",
  },
  {
    title: "African contribution",
    desc: "To amplify the voice of African scholars in biblical translation and theology, enriching global conversations and providing a foundation for future translations into indigenous African languages.",
  },
  {
    title: "Global missional utility",
    desc: "To serve the worldwide Church across denominational and cultural lines as a reliable tool for evangelism, theological education, leadership training, and spiritual formation.",
  },
];

export default function AboutAFINT() {
  const serif = {};

  return (
    <main className="bg-surface-container-low">
      <PageHero
        tag="International Outreach"
        title="About AFINT"
        subtitle="A biblically faithful, academically rigorous, and spiritually transformative English translation of the New Testament."
      />

      {/* ── Vision & Mission ── */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-24 px-6 bg-white border-b border-surface-dim">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Vision */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold text-on-background font-headline italic">
                  Our Vision Statement
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed md:text-right">
                  To provide a biblically faithful, academically rigorous, and
                  spiritually transformative English translation of the New
                  Testament that serves the global Church and reflects Africa's
                  growing contribution to biblical scholarship.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-on-background shrink-0 font-headline italic">
                  Our Mission Statement
                </h3>
                <p className="text-outline text-sm md:text-base leading-relaxed max-w-xl md:text-right">
                  To honor Christ and strengthen the Church by producing a
                  reliable, accurate, and readable English translation of the
                  Greek New Testament, designed for study, teaching, preaching,
                  and spiritual formation.
                </p>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-outline-variant pb-4 mb-6 border-b border-surface-dim">
                This mission is achieved through
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {missionPoints.map((point, idx) => (
                  <AnimateOnScroll
                    key={idx}
                    animation="fade-up"
                    delay={idx * 100}
                    className={point.wide ? "lg:col-span-2" : ""}
                  >
                    <div className="bg-surface-container-low border border-surface-dim rounded-lg p-6 h-full hover:border-primary-fixed hover:bg-white transition-all duration-200 relative group">
                      <span className="absolute top-4 right-4 text-xs font-medium text-inverse-on-surface select-none">
                        {point.number}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4 text-surface-tint">
                        {point.icon}
                      </div>
                      <h4 className="text-base font-semibold text-on-surface mb-2 pr-6 group-hover:text-surface-tint transition-colors">
                        {point.title}
                      </h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── Editorial Product Description ── */}
      <AnimateOnScroll animation="zoom-in">
        <section className="py-20 md:py-24 px-6 bg-stone-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed">
              <p className="text-surface-tint text-xs font-bold uppercase tracking-widest mb-4">
                Product Description
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-on-background font-headline italic">
                A Groundbreaking Initiative
              </h2>
              <p className="text-stone-700">
                The African International New Testament (AFINT) is a
                groundbreaking biblical translation initiative designed to
                produce a theologically faithful, exegetically precise, and
                linguistically accurate English rendering of the Greek New
                Testament.
              </p>
              <p className="text-stone-700">
                This project arises from the conviction that the global body of
                Christ benefits most when diverse voices contribute to the
                translation and interpretation of Scripture. While much
                commendable work has focused on translating the Bible into
                Africa's many indigenous languages, there remains a significant
                gap in African-led contributions to English Bible translation—a
                language that continues to serve as a principal medium for
                theological education, ecclesial discourse, and global Christian
                scholarship.
              </p>
              <p className="text-stone-700">
                The AFINT seeks to fill this gap by offering a translation that
                reflects rigorous engagement with the biblical text, informed by
                the linguistic, cultural, and theological maturity of
                contemporary African scholarship.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-20 bg-surface-tint text-white p-8 md:p-10 rounded-lg shadow-lg">
                <Layers className="text-amber-300 mb-6" size={40} />
                <h4 className="text-2xl font-bold mb-4 font-headline italic">
                  Defining "African"
                </h4>
                <p className="mb-4 leading-relaxed text-amber-50">
                  The term "African" in the project's title refers to the
                  provenance rather than a contextual adaptation of the
                  translation.
                </p>
                <p className="mb-4 leading-relaxed font-semibold text-white">
                  The AFINT is not an Africanized version of Scripture but an
                  academically rigorous work produced under the leadership of
                  African theologians and exegetes.
                </p>
                <p className="leading-relaxed text-amber-50">
                  Its goal is to serve the global Church, enriching biblical
                  studies and advancing theological reflection through the
                  contributions of African biblical scholarship.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── Translation Philosophy ── */}
      <section className="py-20 md:py-24 px-6 bg-white border-y border-surface-dim">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-6 font-headline italic">
              Translation Philosophy: Literal & Explanatory Paraphrase
            </h2>
            <p className="text-on-surface-variant max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              The AFINT is a carefully structured translation project built on a
              dual-layer philosophy. These two components function in deliberate
              relationship: the Explanatory Paraphrase is consistently based on,
              derived from, and governed by the Literal Translation, ensuring
              all interpretive expansion maintains accuracy, integrity, and
              accountability to the original Greek text.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-surface-dim rounded-lg overflow-hidden shadow-sm">
            {/* Layer 1: Literal */}
            <AnimateOnScroll animation="zoom-in" delay={100}>
              <div className="bg-surface-container-low p-8 md:p-10 lg:border-r border-surface-dim h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-200 text-on-surface-variant font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-on-background mb-2 font-headline italic">
                  AFINT: Literal Translation
                </h3>
                <p className="text-surface-tint font-semibold mb-6">
                  The Foundation of Accuracy and Integrity
                </p>
                <p className="text-on-surface-variant mb-8 text-base leading-relaxed">
                  Serves as the textual anchor of the entire project. Its
                  primary goal is to represent the Greek New Testament with a
                  high degree of formal fidelity, while remaining intelligible
                  in standard English.
                </p>
                <ul className="space-y-4 text-stone-700 text-sm">
                  <li className="flex gap-3">
                    <ChevronRight
                      className="text-primary shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      <strong>Formal correspondence:</strong> Preserves
                      grammatical structure and syntactical relationships.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight
                      className="text-primary shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      <strong>Lexical precision:</strong> Careful attention to
                      semantic range and conceptual continuity.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight
                      className="text-primary shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      <strong>Minimal expansion:</strong> Focus is on what the
                      text says.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight
                      className="text-primary shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      <strong>Transparency:</strong> Suitable for serious study
                      and comparison.
                    </span>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-white border border-surface-dim rounded-md">
                  <p className="text-sm text-on-surface-variant font-semibold italic">
                    Function: Establishes the definitive textual boundary for
                    meaning, providing the standard of accuracy.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Layer 2: Paraphrase */}
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="bg-white p-8 md:p-10 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-surface-tint font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-on-background mb-2 font-headline italic">
                  AFINT: Explanatory Paraphrase
                </h3>
                <p className="text-surface-tint font-semibold mb-6">
                  Clarity Built on the Literal Text
                </p>
                <p className="text-on-surface-variant mb-8 text-base leading-relaxed">
                  Not an independent rendering but a carefully controlled
                  expansion. Its purpose is to make the meaning of the text
                  clear, explicit, and accessible, especially where the Greek
                  communicates densely or implicitly.
                </p>
                <ul className="space-y-4 text-stone-700 text-sm">
                  <li className="flex gap-3">
                    <ChevronRight
                      className="text-primary shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      <strong>Derived directly:</strong> Rooted in the wording
                      established in the AFINT Literal.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight
                      className="text-primary shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      <strong>Explanatory expansions:</strong> Unpacks
                      compressed expressions and illuminates context.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight
                      className="text-primary shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      <strong>Exegetical integration:</strong> Incorporates
                      grammatical and theological insights.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight
                      className="text-primary shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      <strong>Guided clarity:</strong> Provides reasoned and
                      textually grounded explanation.
                    </span>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-surface-container-low border border-surface-dim rounded-md">
                  <p className="text-sm text-on-surface-variant font-semibold italic">
                    Function: Articulates clearly what is already present in the
                    text... extending meaning in an accountable way.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Governing Principles & Justification ── */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-24 px-6 bg-stone-900 text-inverse-on-surface">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20 pb-12 lg:pb-16 border-b border-outline-variant">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-headline italic">
                  The Governing Principle
                </h3>
                <p className="mb-4 leading-relaxed">
                  The defining feature of the AFINT translation philosophy is
                  the dependence of the Explanatory Paraphrase on the Literal
                  Translation, ensuring:
                </p>
                <ul className="space-y-3 mb-8">
                  <li>
                    <strong className="text-primary-fixed">Accuracy</strong> –
                    Interpretation remains anchored in a formally controlled
                    base.
                  </li>
                  <li>
                    <strong className="text-primary-fixed">Integrity</strong> –
                    The meaning is not altered or detached from the original
                    wording.
                  </li>
                  <li>
                    <strong className="text-primary-fixed">
                      Accountability
                    </strong>{" "}
                    – Every expansion can be traced back to the literal text.
                  </li>
                </ul>
                <div className="border-l-4 border-amber-600 pl-5 py-4 bg-stone-800/60 rounded-r-md">
                  <p className="font-semibold text-white leading-relaxed">
                    The Literal Translation determines what the text{" "}
                    <em className="text-primary-fixed">says</em>; the
                    Explanatory Paraphrase explains what the text{" "}
                    <em className="text-primary-fixed">means</em> — without
                    contradiction or independence. This prevents interpretive
                    drift and preserves the faithfulness of the translation as a
                    whole.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-headline italic">
                  Theological & Textual Basis
                </h3>
                <p className="mb-4 leading-relaxed">
                  AFINT intentionally integrates translation and exegesis...
                  embedding explanation within the translation itself, while
                  maintaining a clear distinction between the textual base and
                  the interpretive expansion.
                </p>
                <p className="mb-8 leading-relaxed">
                  While reflecting an evangelical theological orientation, this
                  clarity is derived from the text, constrained by evidence, and
                  expressed as an outworking of exegesis—maintaining theological
                  transparency under the authority of the text.
                </p>

                <div className="bg-stone-800 p-6 rounded-lg border border-outline-variant flex items-start gap-4">
                  <FileText
                    className="text-primary-container shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h4 className="text-white font-bold mb-2">Textual Basis</h4>
                    <p className="text-sm text-outline-variant mb-2">
                      The translation draws on the two most authoritative and
                      widely accepted critical editions of the Greek New
                      Testament:
                    </p>
                    <ul className="text-sm text-inverse-on-surface list-disc ml-4 space-y-1">
                      <li>Novum Testamentum Graece, 28th Edition (NA28)</li>
                      <li>
                        The Greek New Testament, 5th Revised Edition (UBS5)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 font-headline italic">
                Purpose & Justification
              </h3>
              <p className="max-w-2xl mx-auto text-outline-variant leading-relaxed">
                The AFINT emerges from both theological conviction and missional
                necessity, with four primary purposes:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {purposes.map((purpose, idx) => (
                <AnimateOnScroll
                  key={idx}
                  animation="fade-up"
                  delay={idx * 100}
                >
                  <div className="bg-stone-800 border border-outline-variant p-6 rounded-lg hover:border-amber-500 transition-colors duration-200 h-full">
                    <h4 className="text-lg font-bold text-white mb-3">
                      {purpose.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-outline-variant">
                      {purpose.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── CTA Footer ── */}
      <AnimateOnScroll animation="zoom-in">
        <section className="bg-surface-tint text-white py-16 md:py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-headline italic">
              Experience the Translation
            </h2>
            <p className="text-amber-100 leading-relaxed mb-8 text-lg">
              A reliable tool for evangelism, theological education, leadership
              training, and spiritual formation. Discover the depth of God's
              Word through the lens of African scholarship.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/digital-availability"
                className="bg-white text-on-background hover:bg-stone-100 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 shadow-lg"
              >
                Digital Platforms <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </main>
  );
}
