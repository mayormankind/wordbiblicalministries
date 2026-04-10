import PageHero from '../components/PageHero';

const doctrines = [
  {
    title: 'The Holy Scriptures',
    ref: '2 Timothy 3:16–17 · 2 Peter 1:20–21',
    body: `We believe the Bible — both the Old and New Testaments — is the inspired, infallible, and authoritative Word of God. It is the supreme standard for all Christian faith, doctrine, and practice. Scripture is God-breathed and profitable for doctrine, reproof, correction, and instruction in righteousness.`,
  },
  {
    title: 'The Holy Trinity',
    ref: 'Matthew 28:19 · 2 Corinthians 13:14',
    body: `We believe in one God, eternally existent in three Persons: God the Father, God the Son (Jesus Christ), and God the Holy Spirit. Each Person is fully God, co-equal, co-eternal, and co-existent — one in essence, distinct in Person and function.`,
  },
  {
    title: 'The Lord Jesus Christ',
    ref: 'John 1:1–14 · Philippians 2:5–11',
    body: `We believe in the deity of our Lord Jesus Christ — His virgin birth, His sinless life, His miracles, His atoning death on the cross, His bodily resurrection, His ascension to the right hand of the Father, and His personal, visible return in power and glory.`,
  },
  {
    title: 'Salvation by Grace Through Faith',
    ref: 'Ephesians 2:8–9 · Romans 10:9–10',
    body: `We believe that humanity, fallen in sin, can only be reconciled to God through repentance and faith in the Lord Jesus Christ. Salvation is not earned by works but is a gift of God's grace, received through faith. Every born-again believer is justified, regenerated, and sealed by the Holy Spirit.`,
  },
  {
    title: 'The Holy Spirit',
    ref: 'Acts 2:1–4 · John 14:16–17',
    body: `We believe in the present-day ministry of the Holy Spirit, who indwells every believer at salvation and empowers them for holy living and effective service. We affirm the gifts of the Holy Spirit as active and available to the Church today for the edification of the Body of Christ.`,
  },
  {
    title: 'The Church',
    ref: 'Matthew 16:18 · Ephesians 4:11–16',
    body: `We believe in the universal Church — the Body of Christ — comprising all who have been born again by the Spirit of God. We also affirm the importance of the local church as God's primary vehicle for discipleship, worship, fellowship, and world evangelism.`,
  },
  {
    title: 'The Second Coming of Christ',
    ref: 'Acts 1:11 · 1 Thessalonians 4:16–17',
    body: `We believe in the personal, visible, and glorious return of the Lord Jesus Christ to establish His Kingdom. This blessed hope is an anchor for the believer's soul and a motivation for righteous living and fervent evangelism.`,
  },
  {
    title: 'Resurrection & Eternal Life',
    ref: 'John 11:25–26 · Revelation 20:11–15',
    body: `We believe in the bodily resurrection of the dead — the saved unto eternal life, and the unsaved unto eternal judgment. Heaven and Hell are real places, and every human soul will spend eternity in one or the other based on their response to the Gospel.`,
  },
];

export default function OurTheology() {
  return (
    <main>
      <PageHero
        tag="What We Believe"
        title="Our Theology"
        subtitle="The doctrinal convictions that form the unshakeable foundation of Word Biblical Ministries — beliefs rooted in Scripture and tested through the ages."
      />

      {/* Intro Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">Our Foundation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Standing on the Truth of God's Word
          </h2>
          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-16 bg-amber-400" />
            <div className="w-2 h-2 bg-amber-600 rotate-45" />
            <div className="h-px w-16 bg-amber-400" />
          </div>
          <p className="text-stone-600 leading-relaxed text-lg">
            At WBM, theology is not merely academic — it is the living breath of who we are and how we minister. Our doctrinal convictions shape our worship, our preaching, our discipleship, and our engagement with the world. Below are the core beliefs that define us as a ministry.
          </p>
        </div>
      </section>

      {/* Doctrines Grid */}
      <section className="py-10 pb-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctrines.map((d, i) => (
              <div key={i} className="bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-amber-600">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl font-black text-amber-100 select-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{d.title}</h3>
                <p className="text-amber-600 text-xs font-semibold uppercase tracking-wide mb-4">{d.ref}</p>
                <p className="text-stone-600 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture CTA */}
      <section className="bg-amber-700 py-16 px-6 text-center">
        <p className="text-amber-100 text-xs uppercase tracking-widest font-bold mb-3">Rooted & Grounded</p>
        <blockquote className="text-white text-2xl md:text-3xl italic max-w-3xl mx-auto mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          "Sanctify them through thy truth: thy word is truth."
        </blockquote>
        <p className="text-amber-200 tracking-widest text-sm uppercase">— John 17:17</p>
      </section>
    </main>
  );
}
