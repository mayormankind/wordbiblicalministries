"use client";

import PageHero from "../components/PageHero";
import {
  Heart,
  Shield,
  Globe,
  ChevronRight,
  CreditCard,
  Landmark,
  Mail,
  Smartphone,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { countries } from "@/content/countries";

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

const methods = [
  {
    icon: <CreditCard size={36} className="text-on-surface shrink-0" />,
    title: "Online Giving",
    desc: "The fastest and most secure way to give using your debit or credit card through our official portal.",
    cta: "Give Online",
    link: "https://fso.christianministryalliance.org/member-profile/word-vision-impact-ministry/",
  },
  {
    icon: <Landmark size={36} className="text-on-surface shrink-0" />,
    title: "Bank Transfer",
    desc: "Make a direct bank transfer to our official ministry account. See account details below.",
    cta: "View Details",
    scrollTarget: "bank-details",
  },
  {
    icon: <Mail size={36} className="text-on-surface shrink-0" />,
    title: "Mail a Check",
    desc: 'Send your check payable to "Word Biblical Ministries" to our official ministry address.',
  },
  {
    icon: <Smartphone size={36} className="text-on-surface shrink-0" />,
    title: "Mobile Money",
    desc: "Give easily via mobile money platforms. Please contact us for the specific numbers for your region.",
  },
];

export default function Give() {
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
            — 2 Corinthians 9:7
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

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-lowest p-8 rounded-sm border border-surface-dim shadow-sm">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                  Full Name
                </label>
                <input
                  type="text"
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
                  placeholder="Tell us about your heart for this ministry..."
                  className="w-full border border-surface-dim focus:border-primary outline-none px-4 py-3 text-sm rounded-sm bg-white resize-none"
                />
              </div>
              <button
                type="button"
                className="md:col-span-2 bg-on-surface hover:bg-primary text-white font-bold text-sm uppercase tracking-widest py-4 rounded-sm transition-all"
              >
                Send Message
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-surface-tint text-xs uppercase tracking-widest font-bold mb-3">
                Other Ways to Give
              </p>
              <h2 className="text-3xl font-bold text-on-surface mb-4 font-headline italic">
                Give in the Way That Works for You
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {methods.map((m, i) => (
              <AnimateOnScroll
                key={i}
                animation="fade-up"
                delay={((i % 4) * 100) as 0 | 100 | 200 | 300}
              >
                <div className="bg-white border border-surface-dim rounded-sm p-6 text-center hover:border-primary-fixed transition-all h-full flex flex-col">
                  <div className="flex justify-center mb-3 text-primary">
                    {m.icon}
                  </div>
                  <h3 className="font-bold text-on-surface mb-2 font-headline italic">
                    {m.title}
                  </h3>
                  <p className="text-outline text-sm leading-relaxed mb-4 grow">
                    {m.desc}
                  </p>
                  {(m as any).cta && (
                    <div className="mt-auto">
                      {(m as any).link ? (
                        <a
                          href={(m as any).link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-primary hover:text-amber-600 transition-colors flex items-center justify-center gap-1"
                        >
                          {(m as any).cta} <ChevronRight size={14} />
                        </a>
                      ) : (
                        <button
                          onClick={() => {
                            if ((m as any).scrollTarget) {
                              document
                                .getElementById((m as any).scrollTarget)
                                ?.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="text-xs font-bold uppercase tracking-widest text-primary hover:text-amber-600 transition-colors flex items-center justify-center gap-1"
                        >
                          {(m as any).cta} <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Bank Details Section */}
          <div id="bank-details" className="pt-10 border-t border-surface-dim">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-2xl mx-auto bg-white border border-surface-dim rounded-sm overflow-hidden shadow-sm">
                <div className="bg-surface-tint py-4 px-6 text-white text-center">
                  <h3 className="font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                    <Landmark size={18} /> Direct Bank Transfer Details
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-sm text-outline-variant mb-6 text-center italic">
                    Please use your full name as the transaction reference.
                  </p>
                  <div className="space-y-4">
                    {accountDetails.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-surface-dim last:border-0"
                      >
                        <span className="text-xs uppercase tracking-wider font-bold text-outline-variant mb-1 sm:mb-0">
                          {detail.label}
                        </span>
                        <span className="font-mono text-sm text-on-surface font-bold bg-surface-container-low px-3 py-1 rounded-sm">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
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

              <div className="mt-8 flex items-center justify-center gap-6 text-outline-variant">
                <div className="flex items-center gap-2 text-xs">
                  <Shield size={14} /> Encrypted
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Heart size={14} /> Tax Deductible
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Globe size={14} /> Global Impact
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
