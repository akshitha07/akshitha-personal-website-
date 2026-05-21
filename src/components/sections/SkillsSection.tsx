import { ChevronRight, Github, Globe } from "lucide-react";
import { SKILLS } from "../../data/portfolio-data";
import BorderGlow from "../ui/BorderGlow";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14 md:mb-20">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-brand-dark">
            Tech Stack & Mastery
          </h2>

          <p className="text-brand-gray text-center text-base md:text-lg max-w-2xl mx-auto">
            Categorized by industrial application and depth of knowledge.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Expert Focus */}

          <BorderGlow
            className="lg:col-span-8"
            borderRadius={32}
            glowColor="243 23 32"
            backgroundColor="#FFFFFF"
            glowIntensity={0.5}
            colors={["#685fa7", "#c084fc", "#f472b6"]}
          >
            <div className="p-6 md:p-10">

              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-blue mb-6">
                Expert Focus
              </h4>

              <div className="flex flex-wrap gap-3">

                {SKILLS.high.map((skill) => (

                  <div
                    key={skill}
                    className="px-4 py-3 md:px-6 md:py-4 bg-neutral-900 rounded-2xl border border-white/5 flex items-center gap-3 shadow-md"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />

                    <span className="font-bold text-sm sm:text-base md:text-lg text-white">
                      {skill}
                    </span>

                  </div>

                ))}

              </div>

            </div>
          </BorderGlow>

          {/* Architecture */}

          <div className="lg:col-span-4 bg-brand-blue rounded-[2rem] p-6 md:p-10 text-white relative overflow-hidden shadow-xl">

            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-200 mb-6">
              System Architecture
            </h4>

            <ul className="space-y-5">

              {SKILLS.medium.map((skill) => (

                <li
                  key={skill}
                  className="text-lg md:text-xl font-bold flex items-center gap-3"
                >
                  <ChevronRight
                    size={18}
                    className="text-blue-300 shrink-0"
                  />

                  {skill}
                </li>

              ))}

            </ul>

            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

          </div>

          {/* Learning */}

          <BorderGlow
            className="lg:col-span-4"
            borderRadius={32}
            glowColor="243 23 32"
            backgroundColor="#FFFFFF"
            glowIntensity={0.5}
            colors={["#685fa7", "#c084fc", "#f472b6"]}
          >
            <div className="p-6 md:p-10">

              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-500 mb-6">
                Currently Exploring
              </h4>

              <div className="space-y-4">

                {SKILLS.low.map((skill) => (

                  <div
                    key={skill}
                    className="text-sm md:text-lg font-medium text-brand-gray flex items-center gap-2"
                  >
                    <Globe
                      size={18}
                      className="text-brand-blue/40 shrink-0"
                    />

                    {skill}
                  </div>

                ))}

              </div>

            </div>

          </BorderGlow>

          {/* Github */}

          <div className="lg:col-span-8 bg-neutral-50 rounded-[2rem] p-6 md:p-10 text-brand-dark flex flex-col justify-between border border-neutral-200">

            <p className="text-xl md:text-2xl font-bold leading-tight mb-6">
              Explore the code architecture on GitHub.
            </p>

            <a
              href="https://github.com/akshitha07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-white text-brand-blue rounded-xl font-bold hover:bg-gray-100 transition"
            >
              <Github size={20} />

              Open Repositories
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}