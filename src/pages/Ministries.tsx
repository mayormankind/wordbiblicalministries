import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ministriesList = [
  {
    emoji: '🧒',
    title: "Children's Ministry",
    tag: 'Ages 0–12',
    color: 'border-yellow-400',
    desc: `Our Children's Ministry is dedicated to laying a strong spiritual foundation in the hearts of the youngest members of our congregation. Through age-appropriate Bible lessons, worship, creative arts, and fun activities, we introduce children to the love of God and the truth of His Word at an early age.`,
    focus: ['Sunday School Programs', 'Kids Worship Sessions', 'Bible Memory Activities', 'Holiday Events & VBS'],
  },
  {
    emoji: '🔥',
    title: 'Youth Ministry',
    tag: 'Ages 13–25',
    color: 'border-red-500',
    desc: `The Youth Ministry of WBM is a dynamic space where young people encounter God, build godly friendships, and discover their God-given identity and purpose. We believe this generation is called and equipped by God for extraordinary impact in the Kingdom.`,
    focus: ['Weekly Youth Meetings', 'Leadership Development', 'Evangelism Training', 'Youth Retreats & Conferences'],
  },
  {
    emoji: '🌸',
    title: "Women's Fellowship",
    tag: 'Women of All Ages',
    color: 'border-pink-400',
    desc: `The Women's Fellowship at Word Biblical Ministries is a community of strength, prayer, and sisterhood. We are committed to helping women discover their identity in Christ, walk in the fullness of the Holy Spirit, and fulfill their God-given roles in the home, church, and marketplace.`,
    focus: ['Monthly Fellowships', 'Women\'s Bible Study', 'Prayer Circles', 'Mentorship & Empowerment'],
  },
  {
    emoji: '🦅',
    title: "Men's Fellowship",
    tag: 'Men of All Ages',
    color: 'border-blue-500',
    desc: `Word Biblical Ministries' Men's Fellowship exists to build men of God — men who are rooted in the Word, Spirit-empowered, and faithful in every sphere of responsibility. We believe godly men transform families, churches, and nations.`,
    focus: ['Men\'s Retreats', 'Bible-Based Discipleship', 'Accountability Partnerships', 'Community Outreach'],
  },
  {
    emoji: '📣',
    title: 'Evangelism & Outreach',
    tag: 'Community & Nations',
    color: 'border-green-500',
    desc: `The Great Commission is our mandate. Through street evangelism, community outreach, humanitarian aid, and missions, Word Biblical Ministries takes the Gospel to those who need it most — in our communities and to the ends of the earth.`,
    focus: ['Street Evangelism', 'Community Service Projects', 'Gospel Tracts & Media', 'Mission Trips'],
  },
  {
    emoji: '🙏',
    title: 'Prayer Ministry',
    tag: 'Intercession & Warfare',
    color: 'border-purple-500',
    desc: `Prayer is the engine room of Word Biblical Ministries. Our Prayer Ministry intercedes for the church, the nation, and the world — standing in the gap through fervent, Spirit-led prayer. We believe that through prayer, things change and nations are shaped.`,
    focus: ['Weekly Prayer Meetings', 'Early Morning Prayers', 'Corporate Intercession', '24-Hour Prayer Chains'],
  },
  {
    emoji: '🎵',
    title: 'Praise & Worship Ministry',
    tag: 'Music & Arts',
    color: 'border-amber-400',
    desc: `Our Praise and Worship Ministry leads the congregation into the manifest presence of God through anointed music, song, and creative expression. We train worshippers who understand that true worship is a lifestyle, not just a performance.`,
    focus: ['Worship Team Training', 'Sunday Worship Leading', 'Choir Ministry', 'Annual Worship Nights'],
  },
  {
    emoji: '📚',
    title: 'Discipleship & Bible School',
    tag: 'Christian Education',
    color: 'border-teal-500',
    desc: `WBM invests deeply in biblical education and discipleship. Through structured courses, mentorship programs, and our ministry school, we equip believers to rightly divide the Word of Truth and live out its principles in every area of life.`,
    focus: ['New Believers Class', 'Ministry School Programs', 'Bible Study Groups', 'Leadership Training'],
  },
];

export default function Ministries() {
  return (
    <main>
      <PageHero
        tag="Get Involved"
        title="Ministries of WBM"
        subtitle="There is a place for every believer in the Body of Christ. Discover the vibrant arms of WBM and find where you are called to serve."
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">One Body, Many Members</p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Every Ministry Matters
          </h2>
          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-16 bg-amber-400" />
            <div className="w-2 h-2 bg-amber-600 rotate-45" />
            <div className="h-px w-16 bg-amber-400" />
          </div>
          <p className="text-stone-600 text-lg leading-relaxed">
            At WBM, we believe every member of the Body of Christ has a role to play. Our various ministries are designed to meet people where they are, develop their gifts, and deploy them for Kingdom impact. Wherever you are in your journey, there is a place for you here.
          </p>
        </div>
      </section>

      {/* Ministries List */}
      <section className="pb-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto space-y-10">
          {ministriesList.map((m, i) => (
            <div key={i} className={`bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border-l-8 ${m.color} overflow-hidden`}>
              <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-4xl">{m.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>{m.title}</h3>
                      <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">{m.tag}</span>
                    </div>
                  </div>
                  <div className="h-0.5 w-12 bg-amber-500 my-4" />
                  <p className="text-stone-600 leading-relaxed">{m.desc}</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 text-sm uppercase tracking-widest mb-4">What We Offer</h4>
                  <ul className="space-y-2">
                    {m.focus.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-stone-600 text-sm">
                        <span className="text-amber-500 font-bold">›</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 px-6 bg-amber-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Find Your Place in the Body</h2>
        <p className="text-amber-100 mb-8 max-w-xl mx-auto">
          Contact us to learn more about any of our ministries, or come visit us in person. We'd love to welcome you!
        </p>
        <Link to="/contact" className="bg-white text-amber-800 hover:bg-amber-50 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2">
          Connect With Us <ChevronRight size={16} />
        </Link>
      </section>
    </main>
  );
}
