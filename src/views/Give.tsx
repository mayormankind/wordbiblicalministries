"use client";

import PageHero from "../components/PageHero";
import { Heart, Shield, Globe, ChevronRight, Landmark } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { countries } from "@/content/countries";
import { CheckCircle, Send } from "lucide-react";

const accountDetails = [
  {
    label: "Account Name",
    value: "Word Biblical Ministries",
  },
  {
    label: "Bank Name",
    value: "[Enter Bank Name Here]",
  },
  {
    label: "Account Number",
    value: "[Enter Account Number Here]",
  },
  {
    label: "SWIFT/BIC Code",
    value: "[Enter SWIFT Code Here]",
  },
  {
    label: "Routing Number",
    value: "[Enter Routing Number Here]",
  },
];

export default function Give() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        country: form.country,
        message: form.message,
      };

      // 1. Send to Admin
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_GIVE_ADMIN!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      // 2. Send Confirmation to Visitor
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_GIVE_VISITOR!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSent(true);
      setForm({
        name: "",
        email: "",
        country: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED to send message:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };
  return (
    <main>
      <PageHero
        tag="Partner With Us"
        title="Give to WBM"
        subtitle="Your generosity is not just a financial transaction — it is a spiritual investment in the Kingdom of God that carries eternal rewards."
      />

      {/* Scripture */}
      <AnimateOnScroll animation="fade-in">
        <section className="bg-surface-tint py-10 px-6 text-center">
          <p className="text-amber-50 text-xl max-w-3xl mx-auto font-headline italic">
            "Each one must give* just as he has purposed in his heart, not with
            reluctance or under coercion, for God loves a cheerful giver."
          </p>
          <p className="text-amber-200 text-sm mt-2 uppercase tracking-widest">
            — 2 Corinthians 9:7 (AFINTLIT)
          </p>
        </section>
      </AnimateOnScroll>

      {/* Why Give */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4 font-headline italic">
              Why Your Gift Matters
            </h2>
            <div className="flex items-center justify-center gap-3 my-5">
              <div className="h-px w-16 bg-amber-400" />
              <div className="w-2 h-2 bg-primary rotate-45" />
              <div className="h-px w-16 bg-amber-400" />
            </div>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
              Your partnership strengthens the ministry of Word Biblical
              Ministries in several key ways:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={28} className="text-primary" />,
                title: "Impacting the Church",
                desc: "Funding theological initiatives that equip pastors, students, and Christian leaders with biblically resources.",
              },
              {
                icon: <Globe size={28} className="text-primary" />,
                title: "Translating the Word",
                desc: "Enabling us to expand digital platforms, educational tools, and ministry outreach around the world.",
              },
              {
                icon: <Shield size={28} className="text-primary" />,
                title: "Faithful Stewardship",
                desc: "Sustaining the operational needs of a ministry committed to prayer, Scripture, and the Great Commission.",
              },
              {
                icon: <Shield size={28} className="text-primary" />,
                title: "Progressive Strengthening",
                desc: "Every gift -large or small -helps WBM continue strengthening the Church through Christ-centered and Scripture-rooted ministry.",
              },
            ].map((w, i) => (
              <AnimateOnScroll
                key={i}
                animation="fade-up"
                delay={i === 0 ? 0 : i === 1 ? 100 : 200}
              >
                <div className="text-center p-6 bg-surface-container-low rounded-sm border border-surface-dim hover:border-amber-300 transition-all h-full">
                  <div className="flex justify-center mb-4">{w.icon}</div>
                  <h3 className="font-bold text-on-surface text-lg mb-2 font-headline italic">
                    {w.title}
                  </h3>
                  <p className="text-outline text-sm leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      {/* Global Partnership Form with Country Dropdown */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-on-surface mb-4 font-headline italic">
                Partner With Us
              </h2>
              <p className="text-on-surface-variant">
                If you have made a gift or intend to partner with us, please let
                us know. We would love to stay in touch and keep you updated on
                our progress.
              </p>
            </div>

            {sent ? (
              <div className="bg-green-50 border border-green-300 text-green-700 rounded-sm p-8 text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-4">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="font-bold text-xl mb-2 font-headline italic">
                  Thank You for Your Interest!
                </h3>
                <p className="text-sm leading-relaxed">
                  We have received your message and our team will be in touch
                  shortly to discuss our partnership. God bless you!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-5 text-xs uppercase tracking-widest font-bold text-green-700 underline hover:text-green-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-lowest p-8 rounded-sm border border-surface-dim shadow-sm"
              >
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border border-surface-dim focus:border-primary outline-none px-4 py-3 text-sm rounded-sm bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border border-surface-dim focus:border-primary outline-none px-4 py-3 text-sm rounded-sm bg-white"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    Your Country
                  </label>
                  <select
                    title="countries"
                    name="country"
                    required
                    value={form.country}
                    onChange={handleChange}
                    className="w-full border border-surface-dim focus:border-primary outline-none px-4 py-3 text-sm rounded-sm bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select your country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your heart for this ministry..."
                    className="w-full border border-surface-dim focus:border-primary outline-none px-4 py-3 text-sm rounded-sm bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="md:col-span-2 bg-on-surface hover:bg-primary text-white font-bold text-sm uppercase tracking-widest py-4 rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && <Send size={16} />}
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </section>
      {/* Mission & Stewardship */}
      <section className="py-24 px-6 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="items-start">
            <div className="">
              <AnimateOnScroll animation="fade-right">
                <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-8 font-headline italic leading-tight">
                  Support the Mission of Word Biblical Ministries
                </h2>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                  <p>
                    Word Biblical Ministries exists to advance faithful biblical
                    teaching, sound exegesis, and the spread of Scripture
                    through translation and theological resources for the
                    Church. Through our work, we aim to strengthen believers,
                    equip leaders, and contribute to the global understanding of
                    the New Testament.
                  </p>
                  <p>
                    WBM is fiscally sponsored in the United States by{" "}
                    <span className="text-on-surface font-semibold text-primary">
                      Christian Ministry Alliance (Tax ID: 46-3408177)
                    </span>
                    , a recognized nonprofit organization. This partnership
                    enables us to receive donations securely and steward them
                    with accountability and transparency.
                  </p>
                  <p>
                    By giving, you become a partner in this ministry—helping to
                    produce resources, expand outreach, and sustain the ongoing
                    work of biblical scholarship and teaching.
                  </p>
                  <div className="pt-6 border-l-2 border-primary pl-6 mt-8">
                    <p className="font-headline italic text-2xl text-on-surface">
                      We invite you to prayerfully consider supporting WBM.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      {/* Third Party Giving CTA */}
      <section className="py-20 px-6 bg-surface-container-low border-y border-surface-dim">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="zoom-in">
            <div className="bg-white rounded-sm shadow-xl p-8 md:p-12 text-center border-t-4 border-primary">
              <p className="text-surface-tint text-xs uppercase tracking-widest font-bold mb-4">
                Secure Giving Portal
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 font-headline italic">
                Support Our Global Impact
              </h2>
              <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                We use the Christian Ministry Alliance portal to process our
                online donations securely. Your gift directly supports the
                advancement of the Gospel and our translation efforts.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                  href="https://fso.christianministryalliance.org/member-profile/word-vision-impact-ministry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto bg-surface-tint hover:bg-primary text-white font-bold text-sm uppercase tracking-widest py-5 px-12 rounded-sm transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/20"
                >
                  Give Securely Now <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
