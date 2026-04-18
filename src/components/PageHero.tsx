interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  bgClass?: string;
}

export default function PageHero({ title, subtitle, tag, bgClass = 'bg-stone-900' }: PageHeroProps) {
  return (
    <section className={`relative pt-40 pb-24 px-6 ${bgClass} text-white`}>
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 to-stone-950/80" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {tag && (
          <p className="text-primary-container text-xs uppercase tracking-widest font-bold mb-4 font-label">{tag}</p>
        )}
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-5 italic text-on-error">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-3 my-5">
          <div className="h-px w-16 bg-primary-container" />
          <div className="w-2 h-2 bg-primary rotate-45" />
          <div className="h-px w-16 bg-primary-container" />
        </div>
        {subtitle && (
          <p className="text-inverse-on-surface text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
