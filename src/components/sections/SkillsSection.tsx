import { ChevronRight, Github, Globe } from "lucide-react";
import { SKILLS } from "../../data/portfolio-data";
import BorderGlow from "../ui/BorderGlow";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-brand-dark">
            Tech Stack & Mastery
          </h2>
          <p className="text-brand-gray text-center text-lg">
            Categorized by industrial application and depth of knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[160px]">
          <BorderGlow
            className="md:col-span-8 md:row-span-2"
            borderRadius={32}
            glowColor="243 23 32"
            backgroundColor="#FFFFFF"
            glowIntensity={0.5}
            colors={["#685fa7", "#c084fc", "#f472b6"]}
          >
            <div className="p-10">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-blue mb-8">Expert Focus</h4>
              <div className="flex flex-wrap gap-4">
                {SKILLS.high.map((skill) => (
                  <div
                    key={skill}
                    className="px-6 py-4 bg-neutral-900 rounded-2xl border border-white/5 flex items-center gap-3 shadow-md shadow-black/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="font-bold text-lg text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </BorderGlow>

          <div className="md:col-span-4 md:row-span-4 bg-brand-blue rounded-[2rem] p-10 text-white relative overflow-hidden shadow-xl shadow-brand-blue/20">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-200 mb-8">
              System Architecture
            </h4>
            <ul className="space-y-6">
              {SKILLS.medium.map((skill) => (
                <li key={skill} className="text-xl font-bold flex items-center gap-3">
                  <ChevronRight size={20} className="text-blue-300" /> {skill}
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <BorderGlow
            className="md:col-span-4 md:row-span-2"
            borderRadius={32}
            glowColor="243 23 32"
            backgroundColor="#FFFFFF"
            glowIntensity={0.5}
            colors={["#685fa7", "#c084fc", "#f472b6"]}
          >
            <div className="p-10">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-500 mb-8">
                Currently Exploring
              </h4>
              <div className="space-y-4">
                {SKILLS.low.map((skill) => (
                  <div key={skill} className="text-lg font-medium text-brand-gray flex items-center gap-2">
                    <Globe size={18} className="text-brand-blue/40" /> {skill}
                  </div>
                ))}
              </div>
            </div>
          </BorderGlow>

          <div className="md:col-span-4 md:row-span-2 bg-neutral-50 rounded-[2rem] p-10 text-brand-dark flex flex-col justify-between border border-neutral-200">
            <p className="text-2xl font-bold leading-tight">Explore the code architecture on GitHub.</p>
            <button className="flex items-center justify-center gap-3 w-full py-4 bg-white text-brand-blue rounded-xl font-bold hover:bg-gray-100 transition-colors cursor-pointer">
              <Github size={20} /> Open Repositories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
