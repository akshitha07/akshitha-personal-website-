import { motion } from "motion/react";
import {
  Code2,
  Database,
  Figma,
  Layers,
  Monitor,
  Palette,
  Rocket,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

const WORKFLOW_STAGES = [
  {
    id: 1,
    title: "Research & Analysis",
    desc: "Understanding business goals, user pain points, and requirements.",
    items: ["User needs analysis", "Workflow understanding", "Requirement gathering", "Feature planning", "UI problem identification"],
    icon: Search,
  },
  {
    id: 2,
    title: "Info Architecture",
    desc: "Structuring scalable application flows and frontend systems.",
    items: ["Component hierarchy", "Navigation structure", "Dashboard organization", "Data flow", "Folder architecture"],
    icon: Layers,
  },
  {
    id: 3,
    title: "UI/UX Design Thinking",
    desc: "Designing intuitive interfaces that improve usability and engagement.",
    items: ["User-centered design", "Responsive layouts", "Visual consistency", "Accessibility focus", "Interaction patterns"],
    icon: Figma,
  },
  {
    id: 4,
    title: "Design System Eng.",
    desc: "Creating reusable UI systems to maintain consistency across apps.",
    items: ["Reusable components", "Design tokens", "Typography systems", "Color systems", "Scalable UI architecture"],
    icon: Palette,
  },
  {
    id: 5,
    title: "Frontend Development",
    desc: "Building modern apps using scalable engineering practices.",
    items: ["React architecture", "TypeScript integration", "State management", "Responsive development", "API integration"],
    icon: Code2,
  },
  {
    id: 6,
    title: "Accessibility & Opt.",
    desc: "Ensuring applications remain inclusive, fast, and user-friendly.",
    items: ["Semantic HTML", "ARIA accessibility", "Keyboard navigation", "Performance optimization", "Reduce re-renders"],
    icon: Zap,
  },
  {
    id: 7,
    title: "AI-Assisted Workflow",
    desc: "Leveraging AI tools to accelerate dev while maintaining quality.",
    items: ["Cursor IDE workflows", "Prompt engineering", "AI debugging", "Code validation", "Workflow automation"],
    icon: Sparkles,
  },
  {
    id: 8,
    title: "Testing & Validation",
    desc: "Testing interfaces thoroughly to ensure quality and responsiveness.",
    items: ["UI validation", "Responsive testing", "Accessibility checks", "Debugging workflows", "Performance audits"],
    icon: Database,
  },
  {
    id: 9,
    title: "Deployment & CI",
    desc: "Monitoring and refactoring frontend systems for scalability.",
    items: ["Deployment workflows", "UI refinements", "System optimization", "Component scalability", "Continuous refactoring"],
    icon: Rocket,
  },
];

export function WorkflowSection() {
  return (
    <section id="ai-workflow" className="py-20 md:py-32 px-6 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">
              Execution Strategy
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 italic leading-tight text-brand-dark font-display">
              Systematic Design <br />Thinking Workflow
            </h2>
            <p className="text-xl text-brand-gray font-sans">
              A structured process combining Design System Thinking, Enterprise Engineering, and AI-Assisted efficiency.
            </p>
          </div>
          <div className="flex items-center gap-4 text-brand-blue font-bold text-sm bg-brand-blue/5 border border-brand-blue/20 px-6 py-3 rounded-2xl">
            <Sparkles size={18} /> AGENTIC WORKFLOW ENABLED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOW_STAGES.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group h-full p-8 bg-white border border-neutral-200 rounded-[2rem] hover:border-brand-blue/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-blue/10 transition-colors" />

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-brand-blue" />
                    </div>
                    <span className="text-neutral-700 font-display font-bold text-4xl italic opacity-50 group-hover:text-brand-blue/20 transition-colors">
                      0{stage.id}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
                    {stage.title}
                  </h4>
                  <p className="text-sm text-brand-gray mb-6 leading-relaxed font-sans">{stage.desc}</p>

                  <div className="space-y-2 relative z-10">
                    {stage.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-semibold text-neutral-500 group-hover:text-neutral-400 transition-colors"
                      >
                        <div className="w-1 h-1 rounded-full bg-brand-blue/30 group-hover:bg-brand-blue transition-colors" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 p-12 bg-neutral-50 rounded-[3rem] border border-neutral-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-brand-blue mb-6 italic">Workflow Philosophy</h3>
              <p className="text-brand-gray leading-relaxed mb-8">
                Scalable frontend engineering is not only about writing code, but also about building structured,
                reusable, accessible, and user-focused systems that evolved efficiently with product growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-5 py-2.5 bg-brand-blue border border-white/5 rounded-full flex items-center gap-2 text-sm font-bold text-white">
                  <Monitor size={16} className="text-white" /> Cursor & Composer
                </div>
                <div className="px-5 py-2.5 bg-brand-blue border border-white/5 rounded-full flex items-center gap-2 text-sm font-bold text-white">
                  <Sparkles size={16} className="text-white" /> Agentic Pair Programming
                </div>
              </div>
            </div>
<div className="grid grid-cols-2 gap-4">
  {[
    ["98%", "Code Consistency"],
    ["Ax", "Accessibility Aware"],
    ["2.5x", "Velocity Boost"],
    ["100%", "Type Coverage"],
  ].map(([value, label]) => (
    <div
      key={label}
      className="
      p-6
      bg-brand-blue
      backdrop-blur-xl
      border border-brand-blue
      rounded-2xl
      shadow-[0_8px_32px_rgba(104,95,167,0.25)]
      hover:scale-105
      transition-all
      duration-300
      "
    >
      <p className="text-2xl font-bold text-white mb-1">
        {value}
      </p>

      <p className="text-xs font-bold text-white/50 uppercase tracking-widest">
        {label}
      </p>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
