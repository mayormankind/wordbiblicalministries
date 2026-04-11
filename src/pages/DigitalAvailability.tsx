import PageHero from "../components/PageHero";
import {
  Smartphone,
  BookOpen,
  Layers,
  Search,
  Share2,
  ArrowRight,
} from "lucide-react";

export default function DigitalAvailability() {
  return (
    <main className="bg-stone-50">
      <PageHero
        tag="Global Access"
        title="Digital Availability of AFINT"
        subtitle="Access the Word of God anytime, anywhere through our official digital platform integration."
      />

      {/* The Big Announcement */}
      <section className="py-24 px-6 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <Smartphone
            className="w-16 h-16 mx-auto text-amber-600 mb-8"
            strokeWidth={1.5}
          />
          <p className="text-amber-700 text-sm uppercase tracking-widest font-bold mb-6">
            Now Available Worldwide
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-stone-800 mb-8 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            AFINT on the YouVersion Bible App
          </h2>
          <div className="flex items-center justify-center gap-3 my-8">
            <div className="h-px w-24 bg-amber-400" />
            <div className="w-2 h-2 bg-amber-600 rotate-45" />
            <div className="h-px w-24 bg-amber-400" />
          </div>
          <p className="text-stone-600 text-xl leading-relaxed font-medium">
            We are pleased to announce that the African International New
            Testament (AFINT) is available on the YouVersion Bible App, making
            it easily accessible to readers around the world for study,
            devotion, and ministry use.
          </p>
          <p className="text-stone-500 mt-6 text-lg italic">
            Two carefully developed editions are currently available:
          </p>
        </div>
      </section>

      {/* The Two Editions - Side by Side Editorial Layout */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Edition 1: Literal */}
            <div className="bg-white p-10 md:p-12 rounded-sm shadow-xl border-t-4 border-stone-800 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 text-stone-100 group-hover:text-stone-200 transition-colors duration-500">
                <Search size={120} />
              </div>
              <div className="relative z-10 flex-1">
                <p className="text-stone-500 text-xs uppercase tracking-widest font-bold mb-3">
                  British English Edition
                </p>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  African International New Testament: <br />
                  <span className="text-amber-700">
                    Literal Translation
                  </span>{" "}
                </h3>
                <div className="space-y-5 text-stone-600 leading-relaxed">
                  <p>
                    This edition seeks to present a close, word-for-word
                    rendering of the original Greek text, prioritising accuracy,
                    transparency, and fidelity to the structure and wording of
                    Scripture.
                  </p>
                  <p className="font-medium text-stone-800 bg-stone-50 p-4 border-l-4 border-stone-300">
                    It follows British English conventions and is especially
                    suited for careful study, teaching, and readers who desire
                    to engage the biblical text with minimal interpretive
                    mediation.
                  </p>
                </div>
              </div>
            </div>

            {/* Edition 2: Paraphrase */}
            <div className="bg-white p-10 md:p-12 rounded-sm shadow-xl border-t-4 border-amber-600 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 text-amber-50 group-hover:text-amber-100 transition-colors duration-500">
                <Layers size={120} />
              </div>
              <div className="relative z-10 flex-1">
                <p className="text-amber-600 text-xs uppercase tracking-widest font-bold mb-3">
                  American English Edition
                </p>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  African International New Testament: <br />
                  <span className="text-amber-700">
                    Explanatory Paraphrase
                  </span>{" "}
                </h3>
                <div className="space-y-5 text-stone-600 leading-relaxed">
                  <p>
                    This edition is designed to make the meaning of the biblical
                    text clear and explicit through carefully guided expansion.
                    It unpacks theological, grammatical, and contextual elements
                    within the text itself, following American English
                    conventions.
                  </p>
                  <p className="font-medium text-amber-900 bg-amber-50 p-4 border-l-4 border-amber-400">
                    It is particularly helpful for discipleship, devotional
                    reading, and readers seeking deeper understanding without
                    requiring technical tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Purpose & Integration */}
      <section className="py-24 px-6 bg-stone-900 text-stone-300">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                A Dual Purpose for a Broad Audience
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                By offering both a literal translation and an explanatory
                paraphrase, AFINT serves the dual purpose of preserving the
                integrity of the original text while also making its meaning
                accessible and clear to a broad audience.
              </p>
              <div className="flex gap-4 items-center text-amber-500 font-semibold uppercase tracking-widest text-sm mt-8">
                <BookOpen size={20} /> Rigorous Study
                <span className="w-1.5 h-1.5 bg-stone-600 rounded-full mx-2" />
                <Share2 size={20} /> Spiritual Growth
              </div>
            </div>

            <div className="bg-stone-800 p-10 border border-stone-700 rounded-sm relative">
              <div className="absolute -top-5 -left-5 bg-amber-600 text-white p-3 rounded-sm shadow-lg">
                <Smartphone size={24} />
              </div>
              <h4
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Fully Integrated Platform
              </h4>
              <p className="leading-relaxed">
                Both editions are fully integrated into the YouVersion platform,
                allowing users to read, compare, share, and engage Scripture in
                a format that supports both rigorous study and spiritual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-amber-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Start Reading Today
          </h2>
          <p className="text-amber-100 mb-8 text-lg">
            Download the YouVersion Bible App and search for "AFINT" to access
            both the Literal Translation and the Explanatory Paraphrase.
          </p>
          <a
            href="https://www.youversion.com/the-bible-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-stone-900 hover:bg-stone-100 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2 shadow-xl"
          >
            Open YouVersion <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
