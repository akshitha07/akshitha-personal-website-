import { MARQUEE_ITEMS } from "../../data/portfolio-data";

export function MarqueeSection() {
  return (
    <section id="marquee" className="py-12 bg-neutral-50 border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-gray opacity-90">
          Focused on modern technologies
        </p>
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center gap-12 mx-6">
            {MARQUEE_ITEMS.map((item) => (
              <span key={`${index}-${item}`} className="text-3xl font-display font-bold text-neutral-800">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
