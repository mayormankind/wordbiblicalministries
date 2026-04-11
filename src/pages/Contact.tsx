import PageHero from "../components/PageHero";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactDetails = [
  {
    icon: <MapPin size={22} className="text-amber-600" />,
    title: "Visit Us",
    lines: ["Akure, Ondo State", "Nigeria"],
  },
  {
    icon: <Mail size={22} className="text-amber-600" />,
    title: "Email Us",
    lines: ["wordbiblicalministries@gmail.com", "drkerux@gmail.com"],
  },
  {
    icon: <Clock size={22} className="text-amber-600" />,
    title: "Office Hours",
    lines: ["Monday – Friday: 9AM – 5PM", "Saturday: 10AM – 2PM"],
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactDetails.map((c, i) => (
              <div
                key={i}
                className="bg-stone-50 border border-stone-200 rounded-sm p-7 text-center hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{c.icon}</div>
                <h3
                  className="font-bold text-stone-800 mb-3 text-lg"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {c.title}
                </h3>
                {c.lines.map((l, j) => (
                  <p key={j} className="text-stone-500 text-sm">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-3">
                Send a Message
              </p>
              <h2
                className="text-3xl font-bold text-stone-800 mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                We'd Love to Hear From You
              </h2>
              <div className="h-1 w-12 bg-amber-600 mb-7" />

              {sent ? (
                <div className="bg-green-50 border border-green-300 text-green-700 rounded-sm p-8 text-center">
                  <div className="text-4xl mb-3">🙌</div>
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Message Received!
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Thank you for reaching out to WBM. We will get back to you
                    shortly. God bless you!
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
                      <label className="block text-xs uppercase tracking-widest font-bold text-stone-600 mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-stone-800 bg-stone-50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-stone-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-stone-800 bg-stone-50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-stone-600 mb-2">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-stone-800 bg-stone-50"
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-stone-600 mb-2">
                        Subject
                      </label>
                      <select
                        title="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-stone-800 bg-stone-50"
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
                    <label className="block text-xs uppercase tracking-widest font-bold text-stone-600 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-stone-300 focus:border-amber-500 focus:outline-none px-4 py-3 text-sm rounded-sm text-stone-800 bg-stone-50 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-amber-700 hover:bg-amber-600 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Map + Service Times */}
            <div>
              <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-3">
                Find Us
              </p>
              <h2
                className="text-3xl font-bold text-stone-800 mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Location
              </h2>
              <div className="h-1 w-12 bg-amber-600 mb-7" />

              {/* Map Placeholder */}
              <div className="bg-stone-200 rounded-sm h-64 flex items-center justify-center mb-8 border border-stone-300 overflow-hidden">
                <div className="text-center text-stone-500">
                  <MapPin size={36} className="mx-auto text-amber-600 mb-2" />
                  <p className="text-sm font-semibold">Interactive Map</p>
                  <p className="text-xs mt-1">
                    Google Maps embed will be placed here
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    Akure, Ondo State, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Banner */}
      <section className="py-16 px-6 bg-stone-900 text-white text-center">
        <div className="text-4xl mb-4">🙏</div>
        <h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Do You Need Prayer?
        </h2>
        <p className="text-stone-400 mb-6 max-w-md mx-auto">
          Our prayer team is available to stand with you in faith. Share your
          request and we will pray with and for you.
        </p>
        <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all">
          Submit a Prayer Request
        </button>
      </section>
    </main>
  );
}
