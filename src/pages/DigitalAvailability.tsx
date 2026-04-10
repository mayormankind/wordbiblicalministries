import PageHero from '../components/PageHero';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    icon: '📺',
    name: 'YouTube Channel',
    handle: '@AFINTMinistry',
    desc: 'Watch full sermons, teaching series, and special broadcasts from AFINT and Word Biblical Ministries on our official YouTube channel.',
    cta: 'Watch on YouTube',
    link: '#',
    color: 'bg-red-50 border-red-400',
    badge: 'Video',
  },
  {
    icon: '📻',
    name: 'Podcast / Audio Messages',
    handle: 'AFINT Podcast',
    desc: 'Listen to our messages, teaching series, and devotionals on the go. Available on all major podcast platforms including Spotify, Apple Podcasts, and more.',
    cta: 'Listen Now',
    link: '#',
    color: 'bg-purple-50 border-purple-400',
    badge: 'Audio',
  },
  {
    icon: '📘',
    name: 'Facebook',
    handle: '@WBMMinistry',
    desc: 'Connect with our growing Facebook community for live streams, updates, devotionals, and encouraging content from WBM and AFINT.',
    cta: 'Follow on Facebook',
    link: '#',
    color: 'bg-blue-50 border-blue-500',
    badge: 'Social',
  },
  {
    icon: '📸',
    name: 'Instagram',
    handle: '@afint_wbm',
    desc: 'Follow us on Instagram for daily Scripture quotes, ministry highlights, event announcements, and behind-the-scenes glimpses of WBM.',
    cta: 'Follow on Instagram',
    link: '#',
    color: 'bg-pink-50 border-pink-400',
    badge: 'Social',
  },
  {
    icon: '🐦',
    name: 'Twitter / X',
    handle: '@AFINTMinistry',
    desc: 'Stay up-to-date with real-time ministry updates, Scripture encouragements, and announcements on Twitter/X.',
    cta: 'Follow on X',
    link: '#',
    color: 'bg-sky-50 border-sky-400',
    badge: 'Social',
  },
  {
    icon: '📱',
    name: 'WhatsApp Community',
    handle: 'WBM Prayer Chain',
    desc: 'Join our WhatsApp community to receive daily devotionals, prayer points, and ministry updates directly on your phone.',
    cta: 'Join Community',
    link: '#',
    color: 'bg-green-50 border-green-500',
    badge: 'Community',
  },
  {
    icon: '✉️',
    name: 'Email Newsletter',
    handle: 'AFINT Weekly Digest',
    desc: 'Subscribe to our email newsletter to receive weekly messages, ministry reports, upcoming events, and resources from WBM and AFINT.',
    cta: 'Subscribe',
    link: '#',
    color: 'bg-amber-50 border-amber-400',
    badge: 'Newsletter',
  },
  {
    icon: '🌐',
    name: 'Ministry Website',
    handle: 'Word Biblical Ministries',
    desc: 'You are here! Our official website is the central hub for all resources, sermons, ministry information, and more from WBM and AFINT.',
    cta: 'Explore Website',
    link: '#',
    color: 'bg-stone-50 border-stone-400',
    badge: 'Web',
  },
];

export default function DigitalAvailability() {
  return (
    <main>
      <PageHero
        tag="Stay Connected"
        title="Digital Availability of AFINT"
        subtitle="The Gospel knows no borders. Access the Word of God, ministry resources, and AFINT content from anywhere in the world through our digital platforms."
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">Online & On Air</p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Gospel Without Borders
          </h2>
          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-16 bg-amber-400" />
            <div className="w-2 h-2 bg-amber-600 rotate-45" />
            <div className="h-px w-16 bg-amber-400" />
          </div>
          <p className="text-stone-600 text-lg leading-relaxed">
            In this digital age, AFINT is committed to ensuring that no geographical barrier prevents anyone from accessing the life-transforming Word of God. Whether you are in a major city or a remote village, the Gospel is available to you — 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="pb-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <div key={i} className={`rounded-sm border-t-4 ${p.color} bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group`}>
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{p.icon}</span>
                  <span className="text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded font-semibold uppercase tracking-wide">{p.badge}</span>
                </div>
                <h3 className="font-bold text-stone-800 text-base mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{p.name}</h3>
                <p className="text-amber-600 text-xs font-semibold mb-3">{p.handle}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="px-6 pb-6">
                <a
                  href={p.link}
                  className="flex items-center justify-center gap-2 w-full border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-semibold text-xs uppercase tracking-widest py-2.5 rounded-sm transition-all duration-200"
                >
                  {p.cta} <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Stream Banner */}
      <section className="bg-stone-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Live Stream Every Sunday
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Can't Make It In Person? Watch Live!
          </h2>
          <p className="text-stone-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Every Sunday service is streamed live across our platforms. Join thousands of viewers from around the world as we worship, pray, and encounter God together — no matter where you are.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2">
              📺 Watch on YouTube
            </a>
            <a href="#" className="bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2">
              📘 Watch on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-6 bg-amber-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          Never Miss a Message
        </h2>
        <p className="text-amber-100 mb-8 max-w-lg mx-auto">
          Subscribe to our newsletter and receive sermons, devotionals, and ministry updates directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-sm text-stone-800 text-sm outline-none focus:ring-2 ring-amber-400"
          />
          <button
            type="submit"
            className="bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
