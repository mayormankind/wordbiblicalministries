import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const values = [
  {
    icon: "🙏",
    title: "Prayer Dependence",
    desc: "We affirm that prayer is the indispensable foundation of all ministry, following the apostolic pattern of Acts 6:4. We labor in the Word only after laboring before God in intercession.",
  },
  {
    icon: "📖",
    title: "Scriptural Authority",
    desc: "We hold to the authority, sufficiency, inerrancy, infallibility, and clarity of Holy Scripture as the final rule for faith and life.",
  },
  {
    icon: "✍️",
    title: "Exegetical Integrity",
    desc: "We aim for rigorous, contextually faithful exegesis reflecting the intended meaning of Scripture and honors God’s inspiration of the text.",
  },
  {
    icon: "🤝",
    title: "Faithful Stewardship",
    desc: "We commit to translating, explaining, and presenting God’s Word with utmost fidelity, clarity, and care, ensuring it faithfully communicates the truth of Scripture to all readers.",
  },
  {
    icon: "🛡️",
    title: "Doctrinal Fidelity",
    desc: "We defend historic, conservative evangelical theology, standing firm against error and upholding the apostolic gospel.",
  },
  {
    icon: "🌍",
    title: "Christ-Centered Mission",
    desc: "Our work exists for the supremacy of Christ in evangelization and discipleship for the fulfillment of seeking to strengthen His Church for the fulfillment of the Great Commission.",
  },
  {
    icon: "🛠️",
    title: "Practical Ministry Application",
    desc: "Our commentaries unite sound scholarship with pastoral usefulness, ensuring biblical truth is applied to real Christian living and discipleship.",
  },
  {
    icon: "⚖️",
    title: "Ministry Integrity",
    desc: "We conduct all work—translation, writing, and teaching—with humility, honesty, and godliness.",
  },
  {
    icon: "⛪",
    title: "Service to the Church",
    desc: "We exist not for academic prestige but for the strengthening of Christ's church—pastors, theologians, students, campus ministries and everyday believers.",
  },
  {
    icon: "✨",
    title: "Doxological Orientation",
    desc: "All ministry begins with God, depends on God, and ends in the glory of God.",
  },
];

const leadership = [
  {
    name: "Founder & Senior Pastor",
    role: "Senior Leadership",
    placeholder: true,
  },
  { name: "Associate Pastor", role: "Pastoral Team", placeholder: true },
  {
    name: "Director of Ministries",
    role: "Ministry Leadership",
    placeholder: true,
  },
  {
    name: "Director of AFINT",
    role: "International Outreach",
    placeholder: true,
  },
];

export default function AboutWBM() {
  return (
    <main>
      <PageHero
        tag="Who We Are"
        title="About WBM"
        subtitle="Word Biblical Ministries — exalting Christ and strengthening the Church through prayer-dependent, Scripture-rooted ministry."
      />

      {/* Our Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">
              Our Story
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800 mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              A Ministry Born Out of God's Call
            </h2>
            <div className="h-1 w-16 bg-amber-600 mb-7" />
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                Word Biblical Ministries (WBM) exists to exalt Christ,
                strengthen the Church, and contribute to the fulfillment of the
                Great Commission through prayer, faithful Bible translation, and
                rigorous exegetical work.
              </p>
              <p>
                Based in Akure, Nigeria, WBM is committed to producing accurate
                New Testament translations and developing scholarly yet
                practical commentaries that shape believers in Christlike
                maturity.
              </p>
              <p>
                We uphold the authority and sufficiency of Scripture, defending
                historic evangelical doctrine while equipping the global Body of
                Christ for mission and discipleship.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-stone-100 rounded-sm overflow-hidden shadow-xl">
              <img
                src="/images/about-bg.jpg"
                alt="WBM Community"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-sm shadow-lg">
              <p
                className="text-3xl font-black"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                God First.
              </p>
              <p className="text-amber-200 text-sm uppercase tracking-wide">
                Always & Forever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          {/* Changed to flex-col so the longer Mission text has room to breathe */}
          <div className="flex flex-col gap-10">
            {/* Vision Statement */}
            <div className="bg-stone-800 text-white p-10 rounded-sm">
              <div className="text-4xl mb-4">🔭</div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Vision
              </h3>
              <div className="h-0.5 w-12 bg-amber-400 mb-5" />
              <p className="text-stone-300 leading-relaxed">
                To glorify God by strengthening the Church of Jesus Christ
                through prayer-dependent, Scripture-rooted ministry that
                advances the Great Commission.
              </p>
            </div>

            {/* Mission Statement (Exact match from PDF) */}
            <div className="bg-amber-700 text-white p-10 rounded-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Mission
              </h3>
              <div className="h-0.5 w-12 bg-amber-400 mb-5" />
              <p className="text-amber-100 font-semibold text-lg leading-relaxed mb-8">
                Word Biblical Ministries exists to exalt Christ, strengthen the
                Church, and contribute to the fulfillment of the Great
                Commission—evangelization and discipleship—through the following
                commitments:
              </p>

              <div className="space-y-6 text-amber-50">
                <div>
                  <h4 className="font-bold text-lg">
                    1. Prayer as the Foundation of All Ministry
                  </h4>
                  <p className="text-amber-100/90 mt-1 leading-relaxed">
                    Following Acts 6:4, we devote ourselves first to prayer and
                    intercession, believing that all effective proclamation of
                    God's Word must flow from dependence on the Holy Spirit and
                    persevering prayer.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    2. Faithful Bible Translation
                  </h4>
                  <p className="text-amber-100/90 mt-1 leading-relaxed">
                    Producing accurate, reliable, and readable New Testament
                    translations—especially the African International New
                    Testament: Literal Translation and Explanatory Paraphrase
                    (British and American Editions) that serve the Church and
                    the ongoing task of gospel proclamation.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    3. Exegetical and Pastoral New Testament Commentary Writing
                  </h4>
                  <p className="text-amber-100/90 mt-1 leading-relaxed">
                    Developing commentaries—Word Expositor's Commentary on the
                    New Testament (WECNT) series—that unite rigorous exegesis
                    with practical application, providing tools that nurture
                    Christian discipleship, strengthen preaching, and shape
                    believers in Christlike maturity.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    4. Stalwart Defense of Conservative Evangelicalism
                  </h4>
                  <p className="text-amber-100/90 mt-1 leading-relaxed">
                    Upholding the authority, sufficiency, and infallibility of
                    Scripture; defending historic evangelical doctrine; and
                    equipping believers and leaders to stand firm against
                    theological error and spiritual drift.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    5. Equipping the Body of Christ for Gospel Mission
                  </h4>
                  <p className="text-amber-100/90 mt-1 leading-relaxed">
                    Providing biblically grounded resources and teaching that
                    empower churches, seminaries, campus ministries, and
                    Christian leaders to proclaim Christ, make disciples, and
                    live for the glory of God.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-stone-50 p-7 rounded-sm border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3
                  className="font-bold text-stone-800 text-lg mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
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
              Led by God-called, Spirit-filled servants committed to shepherding
              the flock of Christ with humility, integrity, and love.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l, i) => (
              <div key={i} className="text-center group">
                <div className="w-28 h-28 bg-stone-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl group-hover:ring-4 ring-amber-400 transition-all duration-300">
                  👤
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
            ))}
          </div>
          <p className="text-center text-stone-400 text-sm mt-10 italic">
            * Full leadership profiles and bios will be updated with provided
            content.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-amber-700 text-white text-center">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Ready to Be Part of Something Greater?
        </h2>
        <p className="text-amber-100 mb-8 max-w-xl mx-auto">
          Join us this Sunday and experience the life-transforming power of
          God's Word in a warm, welcoming community.
        </p>
        <Link
          to="/contact"
          className="bg-white text-amber-800 hover:bg-amber-50 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2"
        >
          Find Us <ChevronRight size={16} />
        </Link>
      </section>
    </main>
  );
}
