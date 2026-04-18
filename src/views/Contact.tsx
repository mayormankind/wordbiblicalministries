"use client";

import PageHero from "../components/PageHero";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Heart,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";

const contactDetails = [
  {
    icon: <MapPin size={22} className="text-primary" />,
    title: "Visit Us",
    lines: ["Akure, Ondo State", "Nigeria"],
  },
  {
    icon: <Mail size={22} className="text-primary" />,
    title: "Email Us",
    lines: ["wordbiblicalministries@gmail.com", "drkerux@gmail.com"],
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <PageHero
        tag="Get In Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question, a prayer request, or simply want to connect — we are here for you."
      />

      {/* Contact Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Cards */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {contactDetails.map((c, i) => (
                <AnimateOnScroll
                  key={i}
                  animation="fade-up"
                  delay={((i % 4) * 100) as 0 | 100 | 200 | 300}
                >
                  <div className="bg-surface-container-low border border-surface-dim rounded-sm p-7 text-center hover:border-primary-fixed hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center">
                    <div className="flex justify-center mb-4">{c.icon}</div>
                    <h3 className="font-bold text-on-surface mb-3 text-lg font-headline italic">
                      {c.title}
                    </h3>
                    {c.lines.map((l, j) => (
                      <p key={j} className="text-outline text-sm">
                        {l}
                      </p>
                    ))}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <AnimateOnScroll animation="fade-right">
                <div>
                  <p className="text-surface-tint text-xs uppercase tracking-widest font-bold mb-3">
                    Send a Message
                  </p>
                  <h2 className="text-3xl font-bold text-on-surface mb-2 font-headline italic">
                    We'd Love to Hear From You
                  </h2>
                  <div className="h-1 w-12 bg-primary mb-7" />

                  {sent ? (
                    <div className="bg-green-50 border border-green-300 text-green-700 rounded-sm p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <CheckCircle size={40} className="text-green-600" />
                      </div>
                      <h3 className="font-bold text-xl mb-2 font-headline italic">
                        Message Received!
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Thank you for reaching out to WBM. We will get back to
                        you shortly. God bless you!
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="mt-5 text-xs uppercase tracking-widest font-bold text-green-700 underline hover:text-green-600"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2">
                            Full Name *
                          </label>
                          <input
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-on-surface bg-surface-container-low"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-on-surface bg-surface-container-low"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2">
                            Phone Number
                          </label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-on-surface bg-surface-container-low"
                            placeholder="+1 (000) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2">
                            Subject
                          </label>
                          <select
                            title="subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-on-surface bg-surface-container-low"
                          >
                            <option value="">Select a subject</option>
                            <option>General Inquiry</option>
                            <option>Prayer Request</option>
                            <option>Join a Ministry</option>
                            <option>Giving / Partnership</option>
                            <option>AFINT Inquiry</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-on-surface bg-surface-container-low resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-surface-tint hover:bg-primary text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2"
                      >
                        Send Message <Send size={16} />
                      </button>
                    </form>
                  )}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Banner */}
      <AnimateOnScroll animation="zoom-in">
        <section className="py-16 px-6 bg-stone-900 text-white text-center">
          <div className="flex justify-center mb-6">
            <Heart size={48} className="text-primary-container" />
          </div>
          <h2 className="text-3xl font-bold mb-4 font-headline italic">
            Do You Need Prayer?
          </h2>
          <p className="text-outline-variant mb-6 max-w-md mx-auto">
            Our prayer team is available to stand with you in faith. Share your
            request and we will pray with and for you.
          </p>
          <button className="bg-primary hover:bg-primary-container hover:text-on-primary-container text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all">
            Submit a Prayer Request
          </button>
        </section>
      </AnimateOnScroll>
    </main>
  );
}
