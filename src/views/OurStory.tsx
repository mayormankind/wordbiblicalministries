"use client";

import PageHero from "../components/PageHero";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { HandHeart, BookOpen, MapPin, Church, Globe, Sparkles, BookHeart, Compass } from "lucide-react";

const timeline = [
  {
    year: "2012",
    endYear: "2017",
    name: "Fullness of Christ Global Initiative Ministry",
    abbr: "FCGIM",
    location: "Ogbomosho, Oyo State, Nigeria",
    desc: "The ministry was first established as FCGIM — a foundational phase emphasizing the nurturing of believers through sound teaching and fostering a deeper experiential knowledge of Christ.",
    accent: "bg-stone-700",
    ringAccent: "ring-stone-700/30",
    textAccent: "text-stone-800",
    borderAccent: "border-stone-700",
    icon: <Compass size={24} className="text-white" />
  },
  {
    year: "2018",
    endYear: "2022",
    name: "Word Vision Impact Ministry International",
    abbr: "WVIM",
    location: "Ibadan, Oyo State, Nigeria",
    desc: "Officially registered with the Corporate Affairs Commission (CAC) of Nigeria, this transition marked a clearer articulation of the vision — to bring the transforming power of God's Word to individuals, churches, and communities.",
    accent: "bg-amber-700",
    ringAccent: "ring-amber-700/30",
    textAccent: "text-amber-800",
    borderAccent: "border-amber-700",
    icon: <Globe size={24} className="text-white" />
  },
  {
    year: "2023",
    endYear: "Present",
    name: "Word Biblical Ministries",
    abbr: "WBM",
    location: "Ibadan & Akure, Nigeria",
    desc: "The present name reflects a sharpened identity and renewed commitment — to uphold the authority, sufficiency, and centrality of Scripture in all aspects of ministry and Christian life.",
    accent: "bg-amber-500",
    ringAccent: "ring-amber-500/30",
    textAccent: "text-amber-700",
    borderAccent: "border-amber-500",
    icon: <BookHeart size={24} className="text-white" />
  },
];

export default function OurStory() {
  return (
    <main>
      <PageHero
        tag="Our Journey"
        title="Our Story"
        subtitle="Discover how God has led and shaped this ministry from its inception to the present day."
      />

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-20 relative z-10">
              <p className="text-amber-700 text-xs uppercase tracking-widest font-bold mb-4">
                Our History
              </p>
              <h2
                className="text-3xl md:text-5xl font-bold text-stone-800 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A Ministry Born Out of Divine Calling
              </h2>
              <div className="flex items-center justify-center gap-3 my-8">
                <div className="h-px w-20 bg-amber-400" />
                <div className="w-3 h-3 bg-amber-600 rotate-45" />
                <div className="h-px w-20 bg-amber-400" />
              </div>
              <p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Word Biblical Ministries is the product of a journey shaped by
                divine calling, theological conviction, and a steadfast
                commitment to the proclamation of God's Word. What began as a
                small but earnest ministry expression has, over the years, grown
                into a mission devoted to advancing biblical truth with clarity,
                depth, and spiritual power.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Captivating Timeline */}
          <div className="relative mt-10 md:mt-24">
            {/* Main Central Line for Desktop / Left Line for Mobile */}
            <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-1 md:w-1.5 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 rounded-full md:-translate-x-1/2 shadow-inner" />

            <div className="space-y-16 md:space-y-28">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimateOnScroll
                    key={i}
                    animation={isLeft ? "fade-right" : "fade-left"}
                  >
                    <div className="relative group w-full flex flex-col md:flex-row items-start md:items-center justify-between">
                      
                      {/* Timeline Icon */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${item.accent} ring-8 ${item.ringAccent} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 z-20`}>
                          {item.icon}
                        </div>
                      </div>

                      {/* Content Mobile */}
                      <div className="pl-24 w-full md:hidden">
                        <div className={`bg-stone-50 border-t-4 ${item.borderAccent} rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative`}>
                          <div className={`inline-flex items-center gap-2 mb-4 bg-white px-3 py-1.5 rounded-full shadow-sm border border-stone-100`}>
                            <span className={`text-sm font-black ${item.textAccent}`}>
                              {item.year}
                            </span>
                            <span className="text-xs text-stone-400 font-medium tracking-wider uppercase">— {item.endYear}</span>
                          </div>
                          
                          <p className={`text-xs font-bold uppercase tracking-widest ${item.textAccent} mb-2`}>
                            {item.abbr}
                          </p>
                          <h4 className="font-bold text-stone-800 text-xl mb-3 leading-snug" style={{ fontFamily: "Playfair Display, serif" }}>
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 text-stone-500 text-xs mb-4 uppercase tracking-wider font-semibold">
                            <MapPin size={12} className={item.textAccent} />
                            {item.location}
                          </div>
                          <p className="text-stone-600 text-[15px] leading-relaxed relative z-10">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Content Desktop Left Box */}
                      <div className={`hidden md:flex w-[calc(50%-3rem)] ${isLeft ? "justify-end text-right" : "justify-start"} ${!isLeft && 'order-last'}`}>
                        {isLeft ? (
                          <div className={`bg-white border text-left ${item.borderAccent} border-r-4 rounded-xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group-hover:border-amber-400 z-10 before:content-[''] before:absolute before:top-1/2 before:-right-[9px] before:-translate-y-1/2 before:w-4 before:h-4 before:rotate-45 before:bg-white before:border-t before:border-r before:${item.borderAccent}`}>
                            <div className="flex justify-between items-start mb-4">
                              <p className={`text-xs font-bold uppercase tracking-widest ${item.textAccent} bg-stone-50 px-3 py-1 rounded border border-stone-100`}>
                                {item.abbr}
                              </p>
                            </div>
                            <h4 className="font-bold text-stone-800 text-2xl mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-2 text-stone-500 text-xs mb-5 uppercase tracking-wider font-semibold">
                              <MapPin size={14} className={item.textAccent} />
                              {item.location}
                            </div>
                            <p className="text-stone-600 text-base leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ) : (
                          // Large Year Display for Right side element (placed on the left visually)
                          <div className="w-full flex justify-end items-center pr-12 opacity-80 group-hover:opacity-100 transition-opacity">
                            <div className="text-right">
                              <span className={`block text-6xl font-black mb-1 ${item.textAccent}`} style={{ fontFamily: 'Playfair Display, serif' }}>{item.year}</span>
                              <span className="text-stone-500 font-bold tracking-[0.2em] uppercase text-sm">{item.endYear}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content Desktop Right Box */}
                      <div className={`hidden md:flex w-[calc(50%-3rem)] ${isLeft ? "justify-start" : "justify-start"}`}>
                        {!isLeft ? (
                          <div className={`bg-white border ${item.borderAccent} border-l-4 rounded-xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group-hover:border-amber-400 z-10 before:content-[''] before:absolute before:top-1/2 before:-left-[9px] before:-translate-y-1/2 before:w-4 before:h-4 before:rotate-45 before:bg-white before:border-b before:border-l before:${item.borderAccent}`}>
                            <div className="flex justify-between items-start mb-4">
                              <p className={`text-xs font-bold uppercase tracking-widest ${item.textAccent} bg-stone-50 px-3 py-1 rounded border border-stone-100`}>
                                {item.abbr}
                              </p>
                            </div>
                            <h4 className="font-bold text-stone-800 text-2xl mb-3 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-2 text-stone-500 text-xs mb-5 uppercase tracking-wider font-semibold">
                              <MapPin size={14} className={item.textAccent} />
                              {item.location}
                            </div>
                            <p className="text-stone-600 text-base leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ) : (
                          // Large Year display for Left side element (placed on the right visually)
                          <div className="w-full flex justify-start items-center pl-12 opacity-80 group-hover:opacity-100 transition-opacity">
                            <div className="text-left">
                              <span className={`block text-6xl font-black mb-1 ${item.textAccent}`} style={{ fontFamily: 'Playfair Display, serif' }}>{item.year}</span>
                              <span className="text-stone-500 font-bold tracking-[0.2em] uppercase text-sm">{item.endYear}</span>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Two pillars note */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="mt-28 border border-amber-200/50 rounded-2xl p-10 bg-gradient-to-br from-amber-50 to-stone-50 grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              
              <div className="flex gap-5 items-start relative z-10 group">
                <div className="w-14 h-14 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 shadow-md group-hover:bg-amber-700 transition-colors duration-300">
                  <HandHeart size={24} className="text-amber-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4
                    className="font-bold text-stone-800 text-xl mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Prayer
                  </h4>
                  <p className="text-stone-600 text-[15px] leading-relaxed">
                    Not treated as a mere activity but as the spiritual
                    foundation upon which all ministry flows — seeking divine
                    direction, empowerment, and fruitfulness.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start relative z-10 group">
                <div className="w-14 h-14 rounded-xl bg-amber-600 flex items-center justify-center shrink-0 shadow-md group-hover:bg-amber-500 transition-colors duration-300">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div>
                  <h4
                    className="font-bold text-stone-800 text-xl mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Ministry of the Word
                  </h4>
                  <p className="text-stone-600 text-[15px] leading-relaxed">
                    An unwavering dedication to the teaching and preaching of
                    the whole counsel of God — rightly interpreted, faithfully
                    taught, and practically applied.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
