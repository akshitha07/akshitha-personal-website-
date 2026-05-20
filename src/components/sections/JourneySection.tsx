import { motion } from "motion/react";
import { JOURNEY_ITEMS } from "../../data/portfolio-data";

export function JourneySection() {
  return (
    <section id="journey" className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <div className="sticky top-40">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] text-brand-dark">
                My <br />Journey
              </h2>
              <p className="text-xl text-brand-gray font-sans leading-relaxed">
                A timeline of my evolution from a B.Tech graduate to a design system-focused UI Engineer.
              </p>
              <div className="mt-12 p-8 bg-brand-blue/5 rounded-3xl border border-brand-blue/20">
                <p className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 font-sans">
                  Current Role
                </p>
                <p className="text-lg font-bold text-brand-dark mb-1">Software Engineer</p>
                <p className="text-brand-gray">Zenbeta Technologies Pvt Ltd</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 relative">
            <div className="absolute left-[17px] top-4 bottom-4 w-[2px] bg-neutral-800" />

            <div className="space-y-24 pt-4">
              {JOURNEY_ITEMS.map((item, index) => (
                <motion.div
                  key={`${item.date}-${item.title}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-black border-4 border-brand-blue z-10 shadow-sm transition-transform group-hover:scale-110" />
                  <span className="text-sm font-bold text-brand-blue uppercase tracking-widest font-sans mb-2 block">
                    {item.date}
                  </span>
                  <h4 className="text-3xl font-bold mb-4 italic leading-tight text-brand-dark group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-lg text-brand-gray mb-6 leading-relaxed font-sans max-w-xl">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-gray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
