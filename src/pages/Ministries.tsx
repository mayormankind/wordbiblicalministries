import { useState } from "react";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  BookOpen,
  Church,
  GraduationCap,
  Users,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";

// ── Audience data from client document ───────────────────────────────────────
const audiences = [
  {
    id: "churches",
    icon: <Church size={22} />,
    label: "Christian Churches",
    shortLabel: "Churches",
    tagline:
      "Equipping congregations, pastors, and ministry leaders with biblically reliable tools.",
    intro:
      "Word Biblical Ministries serves as a vital support to Christian churches through its commitment to faithful Bible translation, church-oriented New Testament commentary writing, and the unyielding defense of historic evangelical doctrine. These emphases equip congregations, pastors, and ministry leaders with biblically reliable tools for teaching, discipleship, spiritual formation, and doctrinal clarity.",
    pillars: [
      {
        number: "01",
        title: "Bible Translation — The AFINT",
        subtitle: "A Trustworthy Bible for the Local Church",
        body: "The AFINT gives pastors and teachers a translation that reflects the Greek text transparently and consistently, enabling more precise exposition of Scripture. Written in clear, modern English while preserving the meaning of the original text, churches can use the AFINT for Bible study groups, discipleship classes, church literacy ministries, and evangelism and outreach. Pastors, elders, Sunday school teachers, and ministry workers benefit from a translation that encourages serious engagement with the biblical text while remaining accessible.",
        points: [
          "A trustworthy text for preaching and teaching",
          "Enhanced congregational understanding",
          "Support for church workers learning Scripture deeply",
        ],
      },
      {
        number: "02",
        title: "New Testament Commentary Writing",
        subtitle: "Exegetically Solid, Pastorally Oriented Resources",
        body: "WBM's commentaries are designed for both academic excellence and direct church usefulness, making them ideal resources for Christian leaders. The commentaries include careful analysis of the biblical text and Practical Application sections that explain how each passage relates to preaching, discipleship, Christian living, pastoral counseling, and ethical decision-making. Pastors and Bible study leaders can rely on WBM commentaries for help with understanding difficult passages, structuring sermon outlines, developing doctrinal clarity, and making sound applications from the text.",
        points: [
          "Exegetically solid, pastorally oriented resources",
          "Support for biblical preaching and teaching ministries",
          "Strengthening biblical literacy in the congregation",
        ],
      },
      {
        number: "03",
        title: "Stalwart Defense of Evangelicalism",
        subtitle: "Guarding Churches in a Changing World",
        body: "WBM plays an important role in helping churches maintain doctrinal stability and biblical conviction in a rapidly changing world. WBM reinforces foundational evangelical commitments: the inspiration and infallibility of Scripture, the uniqueness of Christ, salvation by grace through faith, the death and resurrection of Jesus, and the reality of sin and the necessity of redemption. Through its publications and teaching, WBM equips pastors and believers to recognize and withstand liberal reinterpretations of Scripture, pseudo-Christian spiritual movements, prosperity distortions, postmodern and relativistic challenges, and moral and doctrinal compromise.",
        points: [
          "Upholding biblical authority and evangelical doctrine",
          "Guarding churches from false teaching",
          "Encouraging churches to stand firm in the faith",
        ],
      },
      {
        number: "04",
        title: "Building Churches Rooted in Scripture",
        subtitle: "A Powerful Effect on the Life of the Local Church",
        body: "WBM's combined ministries produce a powerful effect on the life of the local church. Accurate translation combined with solid commentary produces clear, faithful preaching. Believers grow when they are taught Scripture accurately and applied responsibly. Churches grounded in evangelical truth stand firm against confusion and cultural pressure. Pastors and teachers equipped with quality resources can train the next generation of leaders.",
        points: [
          "Stronger preaching through accurate translation and solid commentary",
          "Stronger discipleship through responsible application",
          "Stronger doctrinal clarity and leadership formation",
        ],
      },
    ],
    partnership: [
      "Using the AFINT for church teaching and Bible study",
      "Adopting WBM commentaries as references for preaching and discipleship",
      "Inviting WBM teachers for seminars, workshops, or conferences",
      "Accessing doctrinal resources that strengthen evangelical convictions",
      "Supporting the ministry's ongoing translation and commentary work",
    ],
  },
  {
    id: "institutions",
    icon: <GraduationCap size={22} />,
    label: "Theological Institutions",
    shortLabel: "Seminaries",
    tagline:
      "Providing a holistic contribution to theological training and ministerial preparation.",
    intro:
      "Word Biblical Ministries serves theological institutions by uniting translation, commentary writing, and the defense of evangelical orthodoxy into a single, integrated academic and ministerial resource. The AFINT, the WECNT commentary series, and WBM's doctrinal publications provide seminaries and Bible colleges with tools that are both academically rigorous and pastorally useful.",
    pillars: [
      {
        number: "01",
        title: "Bible Translation — The AFINT",
        subtitle: "A Teaching Companion for Greek and Exegesis",
        body: "The African International New Testament is a translation committed to accuracy, clarity, and fidelity to the Greek text. Its purpose is not cultural contextualization but textual precision, making it a strong tool for academic and ecclesial contexts alike. The AFINT reflects underlying Greek structures with notable transparency, giving students and instructors a trustworthy resource for learning Koine Greek, conducting exegetical analysis, or comparing translation methodologies. Its commitment to formal equivalence, lexical discipline, and exegetical integrity makes it a reference point for courses in translation, hermeneutics, and textual criticism.",
        points: [
          "A teaching companion for Greek and exegesis courses",
          "A model of conservative translation philosophy",
          "Church-friendly but academically responsible",
        ],
      },
      {
        number: "02",
        title: "New Testament Commentary Production",
        subtitle:
          "The Word Expositor's Commentary on the New Testament (WECNT)",
        body: "WBM produces the WECNT series — designed to serve both the academy and the church. Each volume combines careful, contextually faithful exegesis with a dedicated Practical Application section at the end of every major unit. The commentaries provide detailed analysis of Greek grammar, syntax, discourse features, historical background, and theological themes — suitable for seminary exegesis courses, research projects, and graduate-level theological training. This combination allows theological institutions to offer students resources that model how sound scholarship directly informs church ministry, demonstrating that academic exegesis and pastoral usefulness are not mutually exclusive.",
        points: [
          "Scholarly, text-centered exegesis for seminary courses",
          "Practical Application bridging academy and church ministry",
          "Support for research students writing theses and dissertations",
        ],
      },
      {
        number: "03",
        title: "Defense of Evangelical Orthodoxy",
        subtitle: "Doctrinal Anchoring for Institutions",
        body: "WBM is committed to articulating and defending classic evangelical doctrine with clarity and scholarly responsibility. Schools seeking to anchor their identity in historic Christian teaching benefit from WBM's consistent articulation of biblical authority, the exclusivity of Christ, the reality of sin, the necessity of redemption, and the trustworthiness of Scripture. WBM addresses trends that challenge biblical Christianity, including revisionist reinterpretations of Scripture, postmodern skepticism, naturalistic approaches to Christian truth, and theological movements that dilute or redefine evangelical commitments. Through its publications, WBM teaches students how to defend the faith in academic, ecclesial, and public contexts, fostering intellectual confidence and theological stability.",
        points: [
          "Doctrinal anchoring for institutions in historic orthodoxy",
          "Engagement with contemporary theological drift",
          "Equipping students for ministry and scholarship",
        ],
      },
      {
        number: "04",
        title: "Integrated Value for Theological Education",
        subtitle: "Translation, Commentary, and Doctrinal Fidelity United",
        body: "Because WBM unites translation, commentary, and doctrinal fidelity, it provides a holistic contribution to theological training. Translation grounds students in the biblical text. Commentaries model interpretation that is both scholarly and pastoral. Evangelical defense establishes doctrinal conviction and clarity. This integration benefits both academic formation and ministerial preparation, giving institutions a single partner whose resources span the full range of theological education.",
        points: [
          "Translation grounds students in the biblical text",
          "Commentaries model scholarly and pastoral interpretation",
          "Evangelical defense establishes conviction and clarity",
        ],
      },
    ],
    partnership: [
      "Incorporating the AFINT in Greek, exegesis, and translation courses",
      "Using WBM commentaries as recommended texts for their dual academic–pastoral design",
      "Inviting WBM scholars as adjunct lecturers, visiting professors, or research consultants",
      "Collaborating on conferences or research initiatives focused on biblical studies and evangelical theology",
    ],
  },
  {
    id: "campuses",
    icon: <Users size={22} />,
    label: "Campus Fellowships",
    shortLabel: "Campuses",
    tagline:
      "Strengthening Christian witness and discipleship within university and college environments.",
    intro:
      "Word Biblical Ministries plays a significant role in strengthening Christian witness and discipleship within university and college environments. Through its work in faithful Bible translation, church-oriented New Testament commentary writing, and the robust defense of evangelical doctrine, WBM provides campus fellowships with tools that support biblical literacy, doctrinal clarity, and spiritual resilience among students.",
    pillars: [
      {
        number: "01",
        title: "Bible Translation — The AFINT",
        subtitle: "A Reliable Translation for Campus Bible Study",
        body: "The AFINT is a precise and clear English translation committed to fidelity to the Greek text. This makes it highly valuable for campus ministries, where students often engage Scripture closely for personal growth, apologetics, and group studies. Campus fellowships need trustworthy translations — the AFINT provides clear English wording, close reflection of the original Greek, and consistency in handling difficult texts, allowing students to study Scripture with confidence. Student Bible study leaders — often non-seminary trained — gain access to a translation that supports accurate interpretation without requiring advanced Greek knowledge. The clarity of the AFINT also aids students in reading the New Testament devotionally, memorizing Scripture, and understanding passages that shape Christian identity and ethics.",
        points: [
          "A reliable translation for campus Bible study groups",
          "Helps student leaders teach responsibly",
          "Encourages personal devotion among students",
        ],
      },
      {
        number: "02",
        title: "New Testament Commentary Writing",
        subtitle: "Practical Resources for Student Leaders",
        body: "WBM's commentaries combine academic strength with Practical Application, making them particularly useful in campus settings where students need both understanding and concrete guidance. Campus fellowship leaders frequently teach weekly studies — WBM commentaries help them interpret passages accurately, avoid misapplication, prepare doctrinally sound teachings, and develop clear outlines and explanations. The Practical Application sections especially support teaching on Christian living, ethical decisions, purity, relationships, holiness, and spiritual disciplines. Discipleship groups on campus benefit from commentaries that show how biblical truths translate into daily obedience, moral integrity, spiritual growth, and responsible decision-making.",
        points: [
          "Practical resources for student fellowship leaders",
          "Strengthening campus discipleship groups",
          "Supporting campus-based expository teaching series",
        ],
      },
      {
        number: "03",
        title: "Defense of Evangelicalism",
        subtitle: "Equipping Students to Face Intellectual Challenges",
        body: "University campuses often expose students to intellectual challenges that can weaken faith. WBM's defense of historic evangelical doctrine provides essential support. University life confronts Christian students with secular philosophies, religious pluralism, moral relativism, and skepticism regarding Scripture — WBM offers a stable, biblically grounded voice that helps students respond confidently and thoughtfully. WBM reinforces essential biblical doctrines often questioned on campus, including the authority of Scripture, the uniqueness of Christ, biblical ethics, the reality of sin and salvation, and the resurrection of Jesus. WBM's resources support campus pastors and leaders in maintaining doctrinal clarity against pseudo-Christian movements, liberal reinterpretations, and teachings that weaken biblical authority.",
        points: [
          "Equipping students to face intellectual challenges on campus",
          "Anchoring students in historic Christian orthodoxy",
          "Guarding against doctrinal confusion and compromise",
        ],
      },
      {
        number: "04",
        title: "Building Strong Spiritual Foundations",
        subtitle: "Shaping Long-Term Faith in Young Adults",
        body: "University is a critical season for shaping long-term faith. WBM contributes by helping campus ministries cultivate students who are grounded in Scripture, confident in evangelical doctrine, able to articulate their faith, prepared to serve the church after graduation, and resistant to secular and pseudo-Christian pressures. The combination of precise translation, accessible commentary, and doctrinal defense forms a strong foundation for spiritual maturity — producing the next generation of pastors, missionaries, and Christian scholars.",
        points: [
          "Grounded in Scripture and confident in evangelical doctrine",
          "Able to articulate and defend their faith",
          "Prepared to serve the church after graduation",
        ],
      },
    ],
    partnership: [
      "Using the AFINT for group Bible studies and discipleship",
      "Equipping student leaders with WBM New Testament commentaries",
      "Inviting WBM teachers to speak at student conferences or retreats",
      "Accessing doctrinal materials that strengthen campus apologetics and evangelistic outreach",
      "Supporting the formation of students who will serve as pastors, missionaries, and Christian scholars",
    ],
  },
];

// ── Types ──────────────────────────────────────────────────────────────────
interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  body: string;
  points: string[];
}

interface PillarItemProps {
  pillar: Pillar;
  isOpen: boolean;
  onToggle: () => void;
}

// ── Pillar accordion ──────────────────────────────────────────────────────────
function PillarItem({ pillar, isOpen, onToggle }: PillarItemProps) {
  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 py-6 text-left group focus:outline-none"
      >
        <span
          className="text-xl font-black text-stone-200 shrink-0 leading-none mt-0.5 group-hover:text-amber-200 transition-colors duration-200 select-none"
          style={{ fontFamily: "Playfair Display, serif", minWidth: "2.5rem" }}
        >
          {pillar.number}
        </span>
        <div className="flex-1 min-w-0">
          <h4
            className="text-base font-bold text-stone-800 group-hover:text-amber-700 transition-colors duration-200 leading-snug"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {pillar.title}
          </h4>
          <p className="text-xs text-stone-400 mt-0.5">{pillar.subtitle}</p>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 mt-1 text-stone-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-amber-600" : ""
          }`}
        />
      </button>

      <div
        style={{
          maxHeight: isOpen ? "800px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="pb-7 pl-14 pr-2">
          <p className="text-stone-600 leading-relaxed text-sm mb-5">
            {pillar.body}
          </p>
          <ul className="space-y-2">
            {pillar.points.map((pt: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-stone-700"
              >
                <ChevronRight
                  size={14}
                  className="text-amber-600 shrink-0 mt-0.5"
                />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Ministries() {
  const [activeAudience, setActiveAudience] = useState("churches");
  const [openPillars, setOpenPillars] = useState<Record<string, boolean>>({});

  const togglePillar = (audienceId: string, pillarNumber: string) => {
    const key = `${audienceId}-${pillarNumber}`;
    setOpenPillars((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isPillarOpen = (audienceId: string, pillarNumber: string) =>
    !!openPillars[`${audienceId}-${pillarNumber}`];

  const active = audiences.find((a) => a.id === activeAudience);

  return (
    <main>
      <PageHero
        tag="Our Reach"
        title="Ministries of WBM"
        subtitle="Word Biblical Ministries serves the Church through faithful Bible translation, New Testament commentary writing, and the unwavering defense of evangelical doctrine."
      />

      {/* ── Intro ── */}
      <AnimateOnScroll animation="fade-in">
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">
              Three Pillars of Ministry
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800 mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Translation. Commentary. Defense.
            </h2>
            <div className="flex items-center justify-center gap-3 my-5">
              <div className="h-px w-16 bg-amber-400" />
              <div className="w-2 h-2 bg-amber-600 rotate-45" />
              <div className="h-px w-16 bg-amber-400" />
            </div>
            <p className="text-stone-600 text-lg leading-relaxed">
              These three emphases form the backbone of everything WBM does. They
              are not isolated programs but a unified strategy — each one
              strengthening the others — for building churches, training scholars,
              and grounding students in the Word of God.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── Three Pillars Summary ── */}
      <section className="pb-20 px-6 bg-white">
        <div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200 rounded-lg overflow-hidden"
          style={{ gap: "1px", background: "rgb(231 229 228)" }}
        >
          {[
            {
              icon: <BookOpen size={20} />,
              title: "Bible Translation",
              body: "The African International New Testament (AFINT) — a theologically faithful, exegetically precise, and linguistically accurate English rendering of the Greek New Testament, serving churches, seminaries, and campuses worldwide.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              ),
              title: "NT Commentary",
              body: "The Word Expositor's Commentary on the New Testament (WECNT) — combining scholarly exegesis with practical application, designed for pastors, seminary students, and ministry leaders who need both depth and usefulness.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              title: "Evangelical Defense",
              body: "A stalwart, reasoned defense of historic evangelical doctrine — equipping churches, institutions, and students to stand firm against false teaching, theological drift, and the intellectual pressures of a post-Christian age.",
            },
          ].map((pillar, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={(i * 100) as 0 | 100 | 200}>
              <div
                className="bg-white p-8 group hover:bg-stone-50 transition-colors duration-200 h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 mb-5">
                  {pillar.icon}
                </div>
                <h3
                  className="text-lg font-bold text-stone-900 mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── Who We Serve — dark divider ── */}
      <AnimateOnScroll animation="zoom-in">
        <div className="bg-stone-900 py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 bg-stone-700" />
              <ChevronRight className="text-amber-500" size={18} />
              <div className="h-px flex-1 bg-stone-700" />
            </div>
            <p className="text-amber-500 text-xs uppercase tracking-widest font-bold mb-3">
              Our Reach
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Who We Serve
            </h2>
            <p className="text-stone-400 leading-relaxed max-w-xl mx-auto">
              WBM's three ministry pillars are deployed across three strategic
              spheres of Christian life and formation. Select your context below
              to see how WBM serves you.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Audience Tabs + Content ── */}
      <section className="bg-white px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Sticky tab bar */}
          <div className="sticky top-0 z-20 bg-white border-b border-stone-200 -mx-6 px-6">
            <div className="max-w-5xl mx-auto flex gap-0 overflow-x-auto">
              {audiences.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setActiveAudience(a.id)}
                  className={`shrink-0 py-5 px-5 md:px-8 text-sm font-semibold border-b-2 transition-all duration-200 focus:outline-none flex items-center gap-2 ${
                    activeAudience === a.id
                      ? "border-amber-600 text-amber-700"
                      : "border-transparent text-stone-400 hover:text-stone-700 hover:border-stone-300"
                  }`}
                >
                  <span
                    className={`${
                      activeAudience === a.id
                        ? "text-amber-600"
                        : "text-stone-400"
                    } transition-colors`}
                  >
                    {a.icon}
                  </span>
                  <span className="md:hidden">{a.shortLabel}</span>
                  <span className="hidden md:inline">{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active audience header */}
          <div className="pt-12 pb-8 border-b border-stone-100">
            <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-2">
              Ministry to {active?.shortLabel}
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {active?.label}
            </h3>
            <p className="text-stone-500 text-base leading-relaxed max-w-3xl">
              {active?.intro}
            </p>
          </div>

          {/* Pillars accordion */}
          <div className="mt-2 mb-14">
            {active?.pillars.map((pillar, idx) => (
              <AnimateOnScroll
                key={pillar.number}
                animation="fade-up"
                delay={(idx * 100) as any}
              >
                <PillarItem
                  pillar={pillar}
                  isOpen={isPillarOpen(activeAudience, pillar.number)}
                  onToggle={() => togglePillar(activeAudience, pillar.number)}
                />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Partnership benefits */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                <ChevronRight size={18} />
              </div>
              <div>
                <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-1">
                  Partnership Benefits
                </p>
                <h4
                  className="text-xl font-bold text-stone-800"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  How {active?.shortLabel} Can Partner with WBM
                </h4>
              </div>
            </div>
            <ul className="space-y-3">
              {active?.partnership.map((item, i) => (
                <AnimateOnScroll
                  key={i}
                  animation="fade-in"
                  delay={(i * 50) as any}
                >
                  <li className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-16 px-6 bg-amber-700 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Partner With Word Biblical Ministries
            </h2>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you lead a church, a seminary, or a campus fellowship — WBM
              exists to serve you with the tools of translation, commentary, and
              doctrinal defense. Let's build the Kingdom together.
            </p>
            <Link
              to="/contact"
              className="bg-white text-amber-800 hover:bg-amber-50 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Get in Touch <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </main>
  );
}
