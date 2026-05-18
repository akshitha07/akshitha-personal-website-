import { motion } from "motion/react";
import { 
  Briefcase, 
  Layout, 
  Code2, 
  Accessibility, 
  Sparkles, 
  Github, 
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Linkedin,
  Mail,
  Zap,
  Globe,
  Monitor,
  Search,
  Layers,
  Palette,
  Rocket,
  Figma,
  Database
} from "lucide-react";
import { useState, useEffect } from "react";
import { FlipWords } from "./components/ui/flip-words";

// Types
interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  image: string;
  subCards?: {
    title: string;
    img: string;
    desc: string;
  }[];
}

interface AnalysisData {
  show: string[];
  explain: {
    problem: string;
    uiDecisions: string;
    componentStructure: string;
    responsiveness: string;
    stateHandling: string;
    challengesSolved: string;
  };
  mention: string[];
  outcome: {
    value: string;
    label: string;
  };
}

const PROJECT_ANALYSIS: Record<string, AnalysisData> = {
  "Zenploy HRMS": {
    show: [
      "Secure Login system with session persistence",
      "Advanced Multi-step onboarding form architecture",
      "Real-time data-driven Admin Dashboard",
      "Complete Employee management lifecycle UI",
      "High-fidelity Responsive design for all devices",
      "Schema-based form Validation system",
      "Atomic Reusable components library",
      "Optimized Tailwind CSS utility patterns"
    ],
    explain: {
      problem: "Fragmented HR data and manual onboarding created massive bottlenecks, leading to significant delays in employee integration.",
      uiDecisions: "Focused on a 'Progressive Disclosure' strategy to simplify complex forms, utilizing a stepper-based UI to guide users.",
      componentStructure: "Implemented a custom-built component core following atomic design principles to ensure maximum portability.",
      responsiveness: "Built with a 'Desktop-First Precision' mindset, ensuring dense data views remain legible and interactive on smaller screens.",
      stateHandling: "Leveraged persistent context-based state management to preserve data across onboarding steps and handle API failures gracefully.",
      challengesSolved: "Implemented table virtualization and lazy-loading for employee directories, reducing initial load times by 70%."
    },
    mention: ["React 19", "Tailwind CSS", "PostgreSQL", "Express.js", "Supabase Auth"],
    outcome: {
      value: "99%",
      label: "Internal workflow efficiency gain across decentralized HR teams."
    }
  },
  "Kanban Performance Engine": {
    show: [
      "Dynamic Drag-and-drop task management system",
      "Real-time task creation and stage progression",
      "Advanced Search and multi-criteria filtering",
      "Fully Responsive agile board dashboard layout",
      "Persistent data layer via Browser Local Storage",
      "Reusable Atomic UI cards and column components",
      "Synchronized UI state across workflow stages",
      "Type-safe architecture for predictable behavior"
    ],
    explain: {
      problem: "Coordinating complex state transitions across multiple workflow columns while maintaining high performance and visual consistency during rapid user interactions.",
      uiDecisions: "Adopted a familiar agile board pattern with columns for To Do, In Progress, Peer Review, and Completed to reduce cognitive load.",
      componentStructure: "Engineered a modular architecture where components such as task cards, buttons, and board columns are structured for maximum scalability.",
      responsiveness: "Optimized the board for smaller screens through flexible layouts, ensuring visual consistency and usability across devices.",
      stateHandling: "React state with hooks efficiently handles task updates, drag-and-drop, and filtering while reducing unnecessary re-renders.",
      challengesSolved: "Integrated browser local storage to preserve task data across sessions and implemented an interactive drag-and-drop system with 60fps performance."
    },
    mention: ["React 19", "Tailwind CSS", "Express.js", "PostgreSQL", "Supabase"],
    outcome: {
      value: "45%",
      label: "Reduction in task turnaround time through improved workflow visualization."
    }
  },
  "Aforro Analytics Dashboard": {
    show: [
      "Responsive admin dashboard layout",
      "Analytics and KPI cards",
      "Interactive charts and data visualization",
      "Dynamic tables and reporting sections",
      "Performance cards & trend indicators",
      "Search and filtering functionality",
      "Modular dashboard widgets",
      "Optimized rendering patterns for large data"
    ],
    explain: {
      problem: "Managing complex dashboard layouts that handle multiple widgets and data sections without overwhelming users or losing visual clarity.",
      uiDecisions: "Implemented a scalable UI architecture using enterprise design system principles, focusing on consistent spacing and modular components.",
      componentStructure: "Engineered a composable architecture where dashboard sections act as independent smart containers for reusable widgets.",
      responsiveness: "Built with fluid grid systems and adaptive spacing to maintain usability across desktop, tablet, and mobile interface points.",
      stateHandling: "React hooks manage dynamic filters and search states, ensuring predictable rendering behavior and smooth chart interactions.",
      challengesSolved: "Designed responsive table systems and optimized component rendering to handle dynamic datasets without sacrificing performance."
    },
    mention: ["React", "TypeScript", "Tailwind CSS", "Recharts", "React Hooks", "Figma"],
    outcome: {
      value: "Enterprise",
      label: "Ready dashboard system with scalable architecture and optimized UI workflows."
    }
  }
};

const PROJECTS: Project[] = [
  {
    title: "Zenploy HRMS",
    description: "Enterprise-grade Human Resource Management System with multi-step onboarding and employee lifecycle management.",
    longDescription: "A massive internal tool built to automate HR workflows. Focused on high-performance data handling and complex form architectures.",
    tech: ["React", "Tailwind CSS", "Express", "PostgreSQL", "Supabase"],
    features: ["Multi-step Onboarding", "Dynamic Dashboards", "Employee Lifecycle Tracking", "Role-based Access Control"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kanban Performance Engine",
    description: "Highly performant drag-and-drop task management system built with accessibility and state management at its core.",
    longDescription: "A design-system-first implementation of a Kanban board. Features complex state handling with optimized re-renders for large data sets.",
    tech: ["React", "Tailwind CSS", "Express", "PostgreSQL", "Supabase"],
    features: ["Drag & Drop", "Column Reordering", "Search & Filtering", "A11y Compliant Drag Handlers"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Aforro Analytics Dashboard",
    description: "Responsive sales and admin management system built with React, TypeScript, and Tailwind CSS.",
    longDescription: "A modern analytics platform developed to simulate enterprise reporting. Focused on visual business metrics through charts, activity sections, and scalable UI architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    features: ["Responsive Dashboard Layout", "Interactive Data Vis", "Modular UI Widgets", "Optimized Data Tables"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    subCards: [
      {
        title: "Performance Metrics",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        desc: "Real-time tracking of key business performance indicators."
      },
      {
        title: "Sales Analytics",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        desc: "Detailed breakdowns of sales trends and revenue growth."
      },
      {
        title: "User Management",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
        desc: "Scalable admin tools for managing enterprise user roles."
      },
      {
        title: "Reporting Engine",
        img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600",
        desc: "Automated generation of complex business intelligence reports."
      },
      {
        title: "Activity Monitoring",
        img: "https://images.unsplash.com/photo-1504868584819-f8e90526354a?auto=format&fit=crop&q=80&w=600",
        desc: "Live stream of system-wide activities and audit logs."
      }
    ]
  }
];

const SKILLS = {
  high: ["React 19", "TypeScript", "Tailwind CSS 4", "Accessibility (WCAG)", "Design Systems", "Cursor IDE", "Git/GitHub"],
  medium: ["Figma Dev Mode", "Design Tokens", "React Hooks", "Framer Motion", "Component Architecture"],
  low: ["LIT/Web Components", "MCP", "Figma Plugin Dev"]
};

// @ts-ignore - unused but kept for descriptive purposes in task
const DESIGN_SYSTEM_COMPONENTS = [
  { name: "Button", variants: ["Primary", "Secondary", "Ghost", "Outline"] },
  { name: "Input", variants: ["Default", "With Icon", "Error State", "Fluid"] },
  { name: "Card", variants: ["Bento", "Elevated", "Flat", "Link"] },
];

import FloatingDockDemo from "./components/floating-dock-demo";
import BorderGlow from "./components/ui/BorderGlow";

const WORKFLOW_STAGES = [
  {
    id: 1,
    title: "Research & Analysis",
    desc: "Understanding business goals, user pain points, and requirements.",
    items: ["User needs analysis", "Workflow understanding", "Requirement gathering", "Feature planning", "UI problem identification"],
    icon: <Search size={24} className="text-brand-blue" />
  },
  {
    id: 2,
    title: "Info Architecture",
    desc: "Structuring scalable application flows and frontend systems.",
    items: ["Component hierarchy", "Navigation structure", "Dashboard organization", "Data flow", "Folder architecture"],
    icon: <Layers size={24} className="text-brand-blue" />
  },
  {
    id: 3,
    title: "UI/UX Design Thinking",
    desc: "Designing intuitive interfaces that improve usability and engagement.",
    items: ["User-centered design", "Responsive layouts", "Visual consistency", "Accessibility focus", "Interaction patterns"],
    icon: <Figma size={24} className="text-brand-blue" />
  },
  {
    id: 4,
    title: "Design System Eng.",
    desc: "Creating reusable UI systems to maintain consistency across apps.",
    items: ["Reusable components", "Design tokens", "Typography systems", "Color systems", "Scalable UI architecture"],
    icon: <Palette size={24} className="text-brand-blue" />
  },
  {
    id: 5,
    title: "Frontend Development",
    desc: "Building modern apps using scalable engineering practices.",
    items: ["React architecture", "TypeScript integration", "State management", "Responsive development", "API integration"],
    icon: <Code2 size={24} className="text-brand-blue" />
  },
  {
    id: 6,
    title: "Accessibility & Opt.",
    desc: "Ensuring applications remain inclusive, fast, and user-friendly.",
    items: ["Semantic HTML", "ARIA accessibility", "Keyboard navigation", "Performance optimization", "Reduce re-renders"],
    icon: <Zap size={24} className="text-brand-blue" />
  },
  {
    id: 7,
    title: "AI-Assisted Workflow",
    desc: "Leveraging AI tools to accelerate dev while maintaining quality.",
    items: ["Cursor IDE workflows", "Prompt engineering", "AI debugging", "Code validation", "Workflow automation"],
    icon: <Sparkles size={24} className="text-brand-blue" />
  },
  {
    id: 8,
    title: "Testing & Validation",
    desc: "Testing interfaces thoroughly to ensure quality and responsiveness.",
    items: ["UI validation", "Responsive testing", "Accessibility checks", "Debugging workflows", "Performance audits"],
    icon: <Database size={24} className="text-brand-blue" />
  },
  {
    id: 9,
    title: "Deployment & CI",
    desc: "Monitoring and refactoring frontend systems for scalability.",
    items: ["Deployment workflows", "UI refinements", "System optimization", "Component scalability", "Continuous refactoring"],
    icon: <Rocket size={24} className="text-brand-blue" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAnalysis, setActiveAnalysis] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav id="nav" className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">A</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-brand-dark">Akshitha</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#projects" className="hover:text-brand-blue transition-colors">Projects</a>
            <a href="#design-system" className="hover:text-brand-blue transition-colors">Design System</a>
            <a href="#journey" className="hover:text-brand-blue transition-colors">Journey</a>
            <a href="#ai-workflow" className="hover:text-brand-blue transition-colors">AI Workflow</a>
            <a href="#skills" className="hover:text-brand-blue transition-colors">Skills</a>
            <button id="contact-btn" className="bg-white text-brand-blue px-5 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-lg shadow-black/10 cursor-pointer text-sm font-bold">
              Get in Touch
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-dark">Projects</a>
            <a href="#design-system" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-dark">Design System</a>
            <a href="#journey" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-dark">Journey</a>
            <a href="#ai-workflow" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-dark">AI Workflow</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-dark">Skills</a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-6 font-sans uppercase tracking-[0.1em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue/40 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                Based at Zenbeta Technologies
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-8 tracking-[-0.02em] font-sans">
                Building <FlipWords words={["Scalable", "High-Performance", "Interactive", "Accessible", "Modern"]} className="text-brand-blue italic px-0" /> <br />
                Frontend Architectures.
              </h1>
              <p className="text-xl md:text-3xl text-brand-gray mb-10 max-w-2xl leading-relaxed font-sans">
                I build <span className="text-brand-dark font-medium underline decoration-brand-blue/30 decoration-4 underline-offset-4">scalable UI systems</span> and accessible web applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <button id="view-work-btn" className="px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold text-lg flex items-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all shadow-xl shadow-brand-blue/20 cursor-pointer">
                  View Case Studies <ChevronRight size={20} />
                </button>
                <div className="flex items-center gap-4 px-6 py-4 bg-neutral-100 rounded-xl border border-neutral-200">
                  <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors"><Github size={22} /></a>
                  <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors"><Linkedin size={22} /></a>
                  <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors"><Mail size={22} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand/Marquee Section */}
        <section id="marquee" className="py-12 bg-neutral-50 border-y border-neutral-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-gray opacity-90">Focused on modern technologies</p>
          </div>
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-6">
                <span className="text-3xl font-display font-bold text-neutral-800">REACT 19</span>
                <span className="text-3xl font-display font-bold text-neutral-800 tracking-tighter">TYPESCRIPT</span>
                <span className="text-3xl font-display font-bold text-neutral-800">TAILWIND V4</span>
                <span className="text-3xl font-display font-bold text-neutral-800">ACCESSIBILITY</span>
                <span className="text-3xl font-display font-bold text-neutral-800">FIGMA</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-bold mb-6">Selected Case Studies</h2>
                <p className="text-xl text-brand-gray font-sans">A deep dive into systems thinking, complex component architecture, and user-centric problem solving.</p>
              </div>
              <div className="flex gap-2 font-sans font-bold">
                <div className="px-4 py-2 bg-neutral-900 border border-white/5 rounded-full text-xs uppercase tracking-wider text-brand-gray">Design Systems</div>
                <div className="px-4 py-2 bg-neutral-900 border border-white/5 rounded-full text-xs uppercase tracking-wider text-brand-gray">SaaS UI</div>
                <div className="px-4 py-2 bg-neutral-900 border border-white/5 rounded-full text-xs uppercase tracking-wider text-brand-gray">AI Automation</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-24">
              {PROJECTS.map((project, index) => (
                <div key={project.title} className="flex flex-col gap-12">
                  <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={project.title} 
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 group`}
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
                      colors={['#413f63', '#c084fc', '#f472b6']}
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
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 border border-white/10 rounded-full text-brand-gray">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold mb-6 group-hover:text-brand-blue transition-colors leading-none tracking-tight italic">{project.title}</h3>
                    <p className="text-xl text-brand-gray mb-8 leading-relaxed font-sans">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-sans">
                       {project.features.map(f => (
                         <div key={f} className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                           <Zap size={14} className="text-brand-blue" /> {f}
                         </div>
                       ))}
                    </div>
                    <div>
                      <button 
                        onClick={() => setActiveAnalysis(project.title)}
                        className="inline-flex items-center gap-2 text-brand-dark font-bold text-lg border-b-2 border-brand-dark transition-all hover:border-brand-blue hover:text-brand-blue cursor-pointer"
                      >
                        View Project Analysis <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
                {project.subCards && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-4 mb-16">
                    {project.subCards.map((sub, idx) => (
                      <motion.div 
                        key={sub.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-all group/sub"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img src={sub.img} alt={sub.title} className="w-full h-full object-cover transition-transform group-hover/sub:scale-110 duration-500" />
                        </div>
                        <div className="p-4">
                          <h4 className="text-sm font-bold text-white mb-1">{sub.title}</h4>
                          <p className="text-[10px] text-brand-gray leading-tight">{sub.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Design System Showcase */}
        <section id="design-system" className="py-20 md:py-32 bg-neutral-50 text-brand-dark rounded-[3rem] mx-4 md:mx-10 px-6 border border-neutral-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-6 block">Foundations</span>
                <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 leading-[0.9]">Systematic <br />Design Thinking</h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-sans">
                  I don't just build components; I build systems. Every interface is derived from a core set of design tokens—ensuring absolute consistency across 100+ screens.
                </p>
                <div className="space-y-10 font-sans">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center shrink-0">
                      <Layout className="text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Atomic Architecture</h4>
                      <p className="text-gray-400">Organized into Atoms, Molecules, and Organisms for maximum reusability.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center shrink-0">
                      <Accessibility className="text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">A11y First (WCAG 2.1)</h4>
                      <p className="text-gray-400">Strict adherence to contrast ratios, keyboard navigation, and ARIA patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                   <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                     <span className="text-gray-400 font-mono text-sm">ui-library / Buttons.tsx</span>
                     <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                       <div className="w-3 h-3 rounded-full bg-green-500/50" />
                     </div>
                   </div>
                   
                   <div className="space-y-8">
                     <div className="flex flex-wrap gap-4 items-center">
                        <button className="px-6 py-3 bg-brand-blue text-white rounded-lg font-bold cursor-pointer">Primary Action</button>
                        <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-bold border border-white/20 cursor-pointer">Secondary</button>
                        <button className="px-6 py-3 text-brand-blue font-bold hover:bg-brand-blue/10 rounded-lg transition-colors cursor-pointer">Ghost Button</button>
                     </div>
                     
                     <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input 
                            disabled 
                            placeholder="akshitha@portfolio.dev" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-gray-300 pointer-events-none" 
                          />
                        </div>
                     </div>

                     <div className="flex items-center gap-4 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                        <Monitor className="text-brand-blue" size={24} />
                        <div>
                          <p className="text-sm font-bold">Responsive Pattern</p>
                          <p className="text-xs text-gray-400">Adapts layout based on container size</p>
                        </div>
                     </div>
                   </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue rounded-full blur-[100px] opacity-20" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/30 rounded-full blur-[100px] opacity-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Systematic Design Thinking Workflow */}
        <section id="ai-workflow" className="py-20 md:py-32 px-6 bg-white border-y border-neutral-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">Execution Strategy</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 italic leading-tight text-brand-dark font-display">Systematic Design <br />Thinking Workflow</h2>
                <p className="text-xl text-brand-gray font-sans">A structured process combining Design System Thinking, Enterprise Engineering, and AI-Assisted efficiency.</p>
              </div>
              <div className="flex items-center gap-4 text-brand-blue font-bold text-sm bg-brand-blue/5 border border-brand-blue/20 px-6 py-3 rounded-2xl">
                <Sparkles size={18} /> AGENTIC WORKFLOW ENABLED
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKFLOW_STAGES.map((stage, idx) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group h-full p-8 bg-white border border-neutral-200 rounded-[2rem] hover:border-brand-blue/30 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-blue/10 transition-colors" />
                    
                    <div className="flex items-start justify-between mb-8 relative z-10">
                      <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                        {stage.icon}
                      </div>
                      <span className="text-neutral-700 font-display font-bold text-4xl italic opacity-50 group-hover:text-brand-blue/20 transition-colors">0{stage.id}</span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">{stage.title}</h4>
                    <p className="text-sm text-brand-gray mb-6 leading-relaxed font-sans">{stage.desc}</p>
                    
                    <div className="space-y-2 relative z-10">
                      {stage.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-neutral-500 group-hover:text-neutral-400 transition-colors">
                          <div className="w-1 h-1 rounded-full bg-brand-blue/30 group-hover:bg-brand-blue transition-colors" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-neutral-50 rounded-[3rem] border border-neutral-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-grid opacity-20" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 italic">Workflow Philosophy</h3>
                  <p className="text-brand-gray leading-relaxed mb-8">
                    Scalable frontend engineering is not only about writing code, but also about building structured, reusable, accessible, and user-focused systems that evolved efficiently with product growth.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-5 py-2.5 bg-neutral-900 border border-white/5 rounded-full flex items-center gap-2 text-sm font-bold text-white">
                      <Monitor size={16} className="text-brand-blue" /> Cursor & Composer
                    </div>
                    <div className="px-5 py-2.5 bg-neutral-900 border border-white/5 rounded-full flex items-center gap-2 text-sm font-bold text-white">
                    <Sparkles size={16} className="text-brand-blue" /> Agentic Pair Programming
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-neutral-900 border border-white/5 rounded-2xl">
                    <p className="text-2xl font-bold text-white mb-1">98%</p>
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-widest">Code Consistency</p>
                  </div>
                  <div className="p-6 bg-neutral-900 border border-white/5 rounded-2xl">
                    <p className="text-2xl font-bold text-white mb-1">Ax</p>
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-widest">Accessibility Aware</p>
                  </div>
                  <div className="p-6 bg-neutral-900 border border-white/5 rounded-2xl">
                    <p className="text-2xl font-bold text-white mb-1">2.5x</p>
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-widest">Velocity Boost</p>
                  </div>
                  <div className="p-6 bg-neutral-900 border border-white/5 rounded-2xl">
                    <p className="text-2xl font-bold text-white mb-1">100%</p>
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-widest">Type Coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey/Timeline Section */}
        <section id="journey" className="py-20 md:py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row gap-20">
                <div className="md:w-1/3">
                   <div className="sticky top-40">
                      <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] text-brand-dark">My <br />Journey</h2>
                      <p className="text-xl text-brand-gray font-sans leading-relaxed">
                        A timeline of my evolution from a B.Tech graduate to a design system-focused UI Engineer.
                      </p>
                      <div className="mt-12 p-8 bg-brand-blue/5 rounded-3xl border border-brand-blue/20">
                         <p className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 font-sans">Current Role</p>
                         <p className="text-lg font-bold text-brand-dark mb-1">Software Engineer</p>
                         <p className="text-brand-gray">Zenbeta Technologies Pvt Ltd</p>
                      </div>
                   </div>
                </div>
                
                <div className="md:w-2/3 relative">
                   <div className="absolute left-[17px] top-4 bottom-4 w-[2px] bg-neutral-800" />
                   
                   <div className="space-y-24 pt-4">
                      {[
                        { 
                          title: "Learning Frontend", 
                          date: "2021", 
                          desc: "Mastering HTML/CSS fundamentals and diving into modern JavaScript ES6+.",
                          tags: ["HTML5", "CSS3", "JS"]
                        },
                        { 
                          title: "Building Projects", 
                          date: "2022", 
                          desc: "Developing responsive React applications and exploring styling with Tailwind CSS.",
                          tags: ["React", "Tailwind", "Git"]
                        },
                        { 
                          title: "HRMS Development", 
                          date: "2023", 
                          desc: "Building Zenploy HRMS, focusing on complex forms and data-heavy enterprise UI at Zenbeta.",
                          tags: ["Enterprise", "Forms", "Node.js"]
                        },
                        { 
                          title: "Dashboard Systems", 
                          date: "2024", 
                          desc: "Architecting analytical visualization suites with optimized rendering and real-time updates.",
                          tags: ["D3.js", "Recharts", "Performance"]
                        },
                        { 
                          title: "AI-Assisted Workflows", 
                          date: "2024-Present", 
                          desc: "Integrating Cursor and LLMs into my daily dev loop to 10x production velocity.",
                          tags: ["AI", "Automation", "Cursor"]
                        },
                        { 
                          title: "Design System Exploration", 
                          date: "2025", 
                          desc: "Focusing on scalable UI components, accessibility (WCAG), and atomic design principles.",
                          tags: ["Acccessibility", "Tokens", "UI Engineering"]
                        }
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="relative pl-12 group"
                        >
                          <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-black border-4 border-brand-blue z-10 shadow-sm transition-transform group-hover:scale-110" />
                          <span className="text-sm font-bold text-brand-blue uppercase tracking-widest font-sans mb-2 block">{item.date}</span>
                          <h4 className="text-3xl font-bold mb-4 italic leading-tight text-brand-dark group-hover:text-brand-blue transition-colors">{item.title}</h4>
                          <p className="text-lg text-brand-gray mb-6 leading-relaxed font-sans max-w-xl">
                            {item.desc}
                          </p>
                          <div className="flex flex-wrap gap-2">
                             {item.tags.map(tag => (
                               <span key={tag} className="px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-gray">
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

        {/* Skills Bento */}
        <section id="skills" className="py-20 md:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
             <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-brand-dark">Tech Stack & Mastery</h2>
              <p className="text-brand-gray text-center text-lg">Categorized by industrial application and depth of knowledge.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[160px]">
                {/* Core Skills */}
                <BorderGlow
                  className="md:col-span-8 md:row-span-2"
                  borderRadius={32}
                  glowColor="243 23 32"
                  backgroundColor="#FFFFFF"
                  glowIntensity={0.5}
                  colors={['#413f63', '#c084fc', '#f472b6']}
                >
                  <div className="p-10">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-blue mb-8">Expert Focus</h4>
                    <div className="flex flex-wrap gap-4">
                        {SKILLS.high.map(s => (
                          <div key={s} className="px-6 py-4 bg-neutral-900 rounded-2xl border border-white/5 flex items-center gap-3 shadow-md shadow-black/20">
                             <div className="w-2 h-2 rounded-full bg-brand-blue" />
                             <span className="font-bold text-lg text-white">{s}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </BorderGlow>

                {/* Secondary Skills */}
                <div className="md:col-span-4 md:row-span-4 bg-brand-blue rounded-[2rem] p-10 text-white relative overflow-hidden shadow-xl shadow-brand-blue/20">
                   <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-200 mb-8">System Architecture</h4>
                   <ul className="space-y-6">
                      {SKILLS.medium.map(s => (
                        <li key={s} className="text-xl font-bold flex items-center gap-3">
                          <ChevronRight size={20} className="text-blue-300" /> {s}
                        </li>
                      ))}
                   </ul>
                   <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>

                {/* Learning/Low */}
                <BorderGlow
                  className="md:col-span-4 md:row-span-2"
                  borderRadius={32}
                  glowColor="243 23 32"
                  backgroundColor="#FFFFFF"
                  glowIntensity={0.5}
                  colors={['#413f63', '#c084fc', '#f472b6']}
                >
                  <div className="p-10">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-500 mb-8">Currently Exploring</h4>
                    <div className="space-y-4">
                       {SKILLS.low.map(s => (
                         <div key={s} className="text-lg font-medium text-brand-gray flex items-center gap-2">
                            <Globe size={18} className="text-brand-blue/40" /> {s}
                         </div>
                       ))}
                    </div>
                  </div>
                </BorderGlow>

                {/* GitHub CTA */}
                <div className="md:col-span-4 md:row-span-2 bg-neutral-50 rounded-[2rem] p-10 text-brand-dark flex flex-col justify-between border border-neutral-200">
                   <p className="text-2xl font-bold leading-tight">Explore the code architecture on GitHub.</p>
                   <button className="flex items-center justify-center gap-3 w-full py-4 bg-white text-brand-blue rounded-xl font-bold hover:bg-gray-100 transition-colors cursor-pointer">
                      <Github size={20} /> Open Repositories
                   </button>
                </div>
             </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-32 pb-20 px-6 border-t border-neutral-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 transition-colors hover:text-brand-blue cursor-default text-brand-dark">Let's build the <br />future system.</h2>
                <p className="text-xl text-brand-gray mb-10 max-w-md font-sans">Currently open for leadership roles in UI Engineering and Design Systems.</p>
                <div className="flex flex-col gap-6 font-sans">
                   <a href="mailto:akshithamekala04@gmail.com" className="text-2xl md:text-3xl font-bold hover:text-brand-blue transition-colors underline decoration-brand-blue/20 text-brand-dark">akshithamekala04@gmail.com</a>
                   <div className="flex flex-wrap gap-x-8 gap-y-4 mt-4">
                      <a href="#" className="font-bold text-brand-gray hover:text-white text-sm">LINKEDIN</a>
                      <a href="#" className="font-bold text-brand-gray hover:text-white text-sm">GITHUB</a>
                      <a href="#" className="font-bold text-brand-gray hover:text-white text-sm">RESUME</a>
                   </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-200">
                 <h4 className="text-2xl font-bold mb-8 text-brand-dark">Send a Quick Brief</h4>
                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-brand-gray">NAME</label>
                       <input type="text" className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-brand-blue focus:outline-none transition-colors text-brand-dark" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-brand-gray">EMAIL</label>
                       <input type="email" className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-brand-blue focus:outline-none transition-colors text-brand-dark" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-brand-gray">MESSAGE</label>
                       <textarea rows={4} className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-brand-blue focus:outline-none transition-colors text-brand-dark"></textarea>
                    </div>
                    <button className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-all cursor-pointer">
                       Submit Request
                    </button>
                 </form>
              </div>
            </div>
            
            <div className="mt-32 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-gray font-medium">
               <p>© 2026 Akshitha. Built with React 19, TypeScript & AI.</p>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-white text-nowrap">Accessibility Statement</a>
                  <a href="#" className="hover:text-white text-nowrap">Privacy Policy</a>
               </div>
            </div>
          </div>
        </footer>
        <FloatingDockDemo />

        {/* Project Analysis Modal */}
        {activeAnalysis && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 pointer-events-auto"
          >
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" onClick={() => setActiveAnalysis(null)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="relative bg-white w-full max-w-4xl max-h-full overflow-y-auto rounded-[2rem] shadow-2xl p-8 md:p-12 border border-neutral-200"
            >
              <button 
                onClick={() => setActiveAnalysis(null)}
                className="absolute top-8 right-8 p-2 hover:bg-neutral-100 rounded-full transition-colors text-brand-dark"
              >
                <X size={24} />
              </button>

              <div className="mb-12">
                <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">Case Study Analysis</span>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 italic leading-none text-brand-dark">{activeAnalysis}</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {PROJECTS.find(p => p.title === activeAnalysis)?.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-neutral-800 rounded-full text-xs font-bold font-sans uppercase text-gray-300 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>

              {PROJECT_ANALYSIS[activeAnalysis] ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  <div className="md:col-span-8 space-y-12">
                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray mb-6 flex items-center gap-2 font-sans">
                        <Monitor size={14} className="text-brand-blue" /> Project Core Focus
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {PROJECT_ANALYSIS[activeAnalysis].show.map((item, i) => (
                          <div key={i} className="flex gap-3 text-sm font-sans">
                            <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-1.5 shrink-0" />
                            <span className="text-brand-dark leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="space-y-8">
                       <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray mb-2 font-sans">Deep Dive & Logic</h4>
                       <div className="space-y-6">
                          <div>
                            <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">The Problem</p>
                            <p className="text-lg leading-relaxed text-brand-gray italic">{PROJECT_ANALYSIS[activeAnalysis].explain.problem}</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">UI Decisions</p>
                            <p className="text-lg leading-relaxed text-brand-gray italic">{PROJECT_ANALYSIS[activeAnalysis].explain.uiDecisions}</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">Component Structure</p>
                            <p className="text-lg leading-relaxed text-brand-gray italic">{PROJECT_ANALYSIS[activeAnalysis].explain.componentStructure}</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                             <div>
                               <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">State Handling</p>
                               <p className="text-base text-brand-gray italic">{PROJECT_ANALYSIS[activeAnalysis].explain.stateHandling}</p>
                             </div>
                             <div>
                               <p className="text-sm font-bold text-brand-blue mb-1 uppercase font-sans tracking-wide">Responsiveness</p>
                               <p className="text-base text-brand-gray italic">{PROJECT_ANALYSIS[activeAnalysis].explain.responsiveness}</p>
                             </div>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-brand-dark mt-8 underline decoration-brand-blue/30 decoration-4 underline-offset-4">Challenges Solved</p>
                            <p className="text-lg leading-relaxed text-brand-gray mt-2 italic">{PROJECT_ANALYSIS[activeAnalysis].explain.challengesSolved}</p>
                          </div>
                       </div>
                    </section>
                  </div>

                  <div className="md:col-span-4 space-y-8">
                    <div className="p-6 bg-neutral-800 rounded-3xl text-white font-sans border border-white/5">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">Technical Stack</h4>
                      <ul className="space-y-4">
                        {PROJECT_ANALYSIS[activeAnalysis].mention.map(m => (
                          <li key={m} className="flex items-center gap-3 text-sm font-bold">
                            <Code2 size={16} className="text-brand-blue" /> {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-6 border border-white/5 bg-neutral-900 shadow-xl rounded-3xl font-sans">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-4">Outcome</h4>
                       <p className="text-4xl font-bold text-white mb-2">{PROJECT_ANALYSIS[activeAnalysis].outcome.value}</p>
                       <p className="text-xs text-brand-gray leading-relaxed font-medium">{PROJECT_ANALYSIS[activeAnalysis].outcome.label}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-xl text-brand-gray italic">Detailed analysis for this project is currently being drafted. Please check back shortly.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
