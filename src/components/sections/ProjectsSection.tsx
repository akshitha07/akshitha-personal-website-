import { motion } from "motion/react";
import { ExternalLink, Zap } from "lucide-react";
import { PROJECTS } from "../../data/portfolio-data";
import type { Project } from "../../types/portfolio";
import BorderGlow from "../ui/BorderGlow";

interface ProjectsSectionProps {
  onSelectProject: (projectTitle: string) => void;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (projectTitle: string) => void;
}

function ProjectCard({ project, index, onSelectProject }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 group`}
      >
        <div className="flex-1 relative z-10">
          <BorderGlow
            className="w-full h-full"
            glowColor="243 23 32"
            backgroundColor="transparent"
            borderRadius={32}
            glowRadius={40}
            glowIntensity={0.8}
            animated={true}
            colors={["#685fa7", "#c084fc", "#f472b6"]}
          >
            <div className="overflow-hidden rounded-[2rem] h-[400px] md:h-[500px] relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </BorderGlow>
        </div>

        <div className="flex-1 flex flex-col justify-center py-4">
          <div className="flex gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 border border-white/10 rounded-full text-brand-gray"
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-4xl md:text-6xl font-bold mb-6 group-hover:text-brand-blue transition-colors leading-none tracking-tight italic">
            {project.title}
          </h3>
          <p className="text-xl text-brand-gray mb-8 leading-relaxed font-sans">{project.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-sans">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                <Zap size={14} className="text-brand-blue" /> {feature}
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={() => onSelectProject(project.title)}
              className="inline-flex items-center gap-2 text-brand-dark font-bold text-lg border-b-2 border-brand-dark transition-all hover:border-brand-blue hover:text-brand-blue cursor-pointer"
            >
              View Project Analysis <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {project.subCards && (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-4 mb-16">
          {project.subCards.map((subCard, subCardIndex) => (
            <motion.div
              key={subCard.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: subCardIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-all group/sub"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={subCard.img}
                  alt={subCard.title}
                  className="w-full h-full object-cover transition-transform group-hover/sub:scale-110 duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-white mb-1">{subCard.title}</h4>
                <p className="text-[10px] text-brand-gray leading-tight">{subCard.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-xl font-bold mb-6">Selected Case Studies</h2>
            <p className="text-xl text-brand-gray font-sans">
              A deep dive into systems thinking, complex component architecture, and user-centric problem solving.
            </p>
          </div>
          <div className="flex gap-2 font-sans font-bold">
            {["Design Systems", "SaaS UI", "AI Automation"].map((label) => (
              <div
                key={label}
                className="px-4 py-2 bg-neutral-900 border border-white/5 rounded-full text-xs uppercase tracking-wider text-brand-gray"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-24">
          {PROJECTS.map((project, index) => (
            <div key={project.title}>
              <ProjectCard project={project} index={index} onSelectProject={onSelectProject} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
