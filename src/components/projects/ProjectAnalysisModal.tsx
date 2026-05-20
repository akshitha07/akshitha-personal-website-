import { motion } from "motion/react";
import { Code2, Monitor, X } from "lucide-react";
import { PROJECT_ANALYSIS, PROJECTS } from "../../data/portfolio-data";

interface ProjectAnalysisModalProps {
  activeAnalysis: string;
  onClose: () => void;
}

export function ProjectAnalysisModal({ activeAnalysis, onClose }: ProjectAnalysisModalProps) {
  const analysis = PROJECT_ANALYSIS[activeAnalysis];
  const project = PROJECTS.find((item) => item.title === activeAnalysis);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 pointer-events-auto"
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-white w-full max-w-4xl max-h-full overflow-y-auto rounded-[2rem] shadow-2xl p-8 md:p-12 border border-neutral-200"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2 hover:bg-neutral-100 rounded-full transition-colors text-brand-dark"
          aria-label="Close project analysis"
        >
          <X size={24} />
        </button>

        <div className="mb-12">
          <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Case Study Analysis
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 italic leading-none text-brand-dark">
            {activeAnalysis}
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {project?.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-800 rounded-full text-xs font-bold font-sans uppercase text-gray-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {analysis ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-12">
              <section>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray mb-6 flex items-center gap-2 font-sans">
                  <Monitor size={14} className="text-brand-blue" /> Project Core Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {analysis.show.map((item) => (
                    <div key={item} className="flex gap-3 text-sm font-sans">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-1.5 shrink-0" />
                      <span className="text-brand-dark leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray mb-2 font-sans">
                  Deep Dive & Logic
                </h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">
                      The Problem
                    </p>
                    <p className="text-lg leading-relaxed text-brand-gray italic">{analysis.explain.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">
                      UI Decisions
                    </p>
                    <p className="text-lg leading-relaxed text-brand-gray italic">{analysis.explain.uiDecisions}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">
                      Component Structure
                    </p>
                    <p className="text-lg leading-relaxed text-brand-gray italic">
                      {analysis.explain.componentStructure}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">
                        State Handling
                      </p>
                      <p className="text-base text-brand-gray italic">{analysis.explain.stateHandling}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">
                        Responsiveness
                      </p>
                      <p className="text-base text-brand-gray italic">{analysis.explain.responsiveness}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-brand-dark mt-8 underline decoration-brand-blue/30 decoration-4 underline-offset-4">
                      Challenges Solved
                    </p>
                    <p className="text-lg leading-relaxed text-brand-gray mt-2 italic">
                      {analysis.explain.challengesSolved}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="md:col-span-4 space-y-8">
              <div className="p-6 bg-neutral-800 rounded-3xl text-white font-sans border border-white/5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
                  Technical Stack
                </h4>
                <ul className="space-y-4">
                  {analysis.mention.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold">
                      <Code2 size={16} className="text-brand-blue" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border border-white/5 bg-neutral-900 shadow-xl rounded-3xl font-sans">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-4">Outcome</h4>
                <p className="text-4xl font-bold text-white mb-2">{analysis.outcome.value}</p>
                <p className="text-xs text-brand-gray leading-relaxed font-medium">{analysis.outcome.label}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-xl text-brand-gray italic">
              Detailed analysis for this project is currently being drafted. Please check back shortly.
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
