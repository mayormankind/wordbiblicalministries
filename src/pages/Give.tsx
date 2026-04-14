import PageHero from '../components/PageHero';
import { useState } from 'react';
import { Heart, Shield, Globe, ChevronRight, CreditCard, Landmark, Mail, Smartphone } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

const amounts = [25, 50, 100, 250, 500, 1000];

const givingPurposes = [
  { label: 'General Ministry Fund', desc: 'Supports all WBM operations and programs' },
  { label: 'Bible Translation (AFINT)', desc: 'Fuels our international translation efforts' },
  { label: 'WECNT Commentary Project', desc: 'Supports the production of scholarly biblical tools' },
  { label: 'Theological Education', desc: 'Equips leaders and students with rooted resources' },
  { label: 'Benevolence Fund', desc: 'Provides support for those in need' },
  { label: 'Campus Ministries', desc: 'Invests in reaching the next generation of believers' },
];

const methods = [
  { icon: <CreditCard size={36} className="text-stone-800 flex-shrink-0" />, title: 'Online Giving', desc: 'Give securely online using your debit or credit card through our payment portal.' },
  { icon: <Landmark size={36} className="text-stone-800 flex-shrink-0" />, title: 'Bank Transfer', desc: 'Make a direct bank transfer to our official ministry account. Contact us for details.' },
  { icon: <Mail size={36} className="text-stone-800 flex-shrink-0" />, title: 'Mail a Check', desc: 'Send your check payable to "Word Biblical Ministries" to our church address.' },
  { icon: <Smartphone size={36} className="text-stone-800 flex-shrink-0" />, title: 'Mobile Money', desc: 'Give easily via mobile money platforms available in your region.' },
];

export default function Give() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly' | 'annually'>('once');
  const [purpose, setPurpose] = useState('General Ministry Fund');

  return (
    <main>
      <PageHero
        tag="Partner With Us"
        title="Give to WBM"
        subtitle="Your generosity is not just a financial transaction — it is a spiritual investment in the Kingdom of God that carries eternal rewards."
      />

      {/* Scripture */}
      <AnimateOnScroll animation="fade-in">
        <section className="bg-amber-700 py-10 px-6 text-center">
          <p className="text-amber-50 text-xl italic max-w-3xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </p>
          <p className="text-amber-200 text-sm mt-2 uppercase tracking-widest">— 2 Corinthians 9:7</p>
        </section>
      </AnimateOnScroll>

      {/* Why Give */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-3">Why Your Gift Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Every Seed Carries Eternal Significance
            </h2>
            <div className="flex items-center justify-center gap-3 my-5">
              <div className="h-px w-16 bg-amber-400" />
              <div className="w-2 h-2 bg-amber-600 rotate-45" />
              <div className="h-px w-16 bg-amber-400" />
            </div>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Your giving enables WBM to preach the Gospel, disciple nations, support missionaries, produce media content, and meet the practical needs of our community. When you give, you are partnering with God's work on the earth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart size={28} className="text-amber-600" />, title: 'Impacting the Church', desc: 'Your gift directly empowers pastors, students, and believers through biblically grounded resources and training.' },
              { icon: <Globe size={28} className="text-amber-600" />, title: 'Translating the Word', desc: 'Through AFINT, your generosity sends the Gospel to the nations in accurate, readable translations.' },
              { icon: <Shield size={28} className="text-amber-600" />, title: 'Faithful Stewardship', desc: 'We are committed to transparent, accountable, and Spirit-led management of every resource entrusted to us.' },
            ].map((w, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i === 0 ? 0 : i === 1 ? 100 : 200}>
                <div className="text-center p-6 bg-stone-50 rounded-sm border border-stone-200 hover:border-amber-300 transition-all h-full">
                  <div className="flex justify-center mb-4">{w.icon}</div>
                  <h3 className="font-bold text-stone-800 text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{w.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Form */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="zoom-in">
            <div className="text-center mb-10">
              <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-3">Make a Gift</p>
              <h2 className="text-3xl font-bold text-stone-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Give Securely Online
              </h2>
              <div className="h-1 w-12 bg-amber-600 mx-auto mt-5" />
            </div>

            <div className="bg-white rounded-sm shadow-lg p-8 md:p-10">

            {/* Frequency */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-widest font-bold text-stone-600 mb-3">Giving Frequency</label>
              <div className="flex rounded-sm overflow-hidden border border-stone-200">
                {(['once', 'monthly', 'annually'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-all ${
                      frequency === f ? 'bg-amber-600 text-white' : 'bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {f === 'once' ? 'One Time' : f}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-widest font-bold text-stone-600 mb-3">Select Amount (USD)</label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => { setSelectedAmount(a); setCustomAmount(''); }}
                    className={`py-3 text-sm font-bold rounded-sm border-2 transition-all ${
                      selectedAmount === a && !customAmount
                        ? 'border-amber-600 bg-amber-600 text-white'
                        : 'border-stone-200 text-stone-700 hover:border-amber-400'
                    }`}
                  >
                    ${a}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold">$</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                  className="w-full border-2 border-stone-200 focus:border-amber-500 outline-none pl-8 pr-4 py-3 text-sm rounded-sm text-stone-800"
                />
              </div>
            </div>

            {/* Purpose */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-widest font-bold text-stone-600 mb-3">Giving Purpose</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {givingPurposes.map((p, idx) => (
                  <AnimateOnScroll
                    key={p.label}
                    animation="fade-in"
                    delay={(idx * 50) as any}
                  >
                    <label
                      className={`flex items-start gap-3 p-4 border-2 rounded-sm cursor-pointer transition-all h-full ${
                        purpose === p.label
                          ? "border-amber-600 bg-amber-50"
                          : "border-stone-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="purpose"
                        value={p.label}
                        checked={purpose === p.label}
                        onChange={() => setPurpose(p.label)}
                        className="mt-1 accent-amber-600"
                      />
                      <div>
                        <p className="font-bold text-stone-800 text-sm">
                          {p.label}
                        </p>
                        <p className="text-stone-500 text-xs">{p.desc}</p>
                      </div>
                    </label>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Proceed Button */}
            <button className="w-full bg-amber-700 hover:bg-amber-600 text-white font-bold text-sm uppercase tracking-widest py-4 rounded-sm transition-all flex items-center justify-center gap-2">
              Proceed to Secure Checkout <ChevronRight size={16} />
            </button>
            <p className="text-center text-stone-400 text-xs mt-4">🔒 All transactions are secure and encrypted</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-3">More Ways to Give</p>
              <h2 className="text-3xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Give in the Way That Works for You
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((m, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={(i % 4) * 100 as 0 | 100 | 200 | 300}>
                <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center hover:border-amber-400 transition-all h-full">
                  <div className="flex justify-center mb-3 text-amber-600">{m.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{m.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
