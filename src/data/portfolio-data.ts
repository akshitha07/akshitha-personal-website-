import type { AnalysisData, Project, SkillGroups, TimelineItem } from "../types/portfolio";

export const PROJECT_ANALYSIS: Record<string, AnalysisData> = {
  "Zenploy HRMS": {
    show: [
      "Secure Login system with session persistence",
      "Advanced Multi-step onboarding form architecture",
      "Real-time data-driven Admin Dashboard",
      "Complete Employee management lifecycle UI",
      "High-fidelity Responsive design for all devices",
      "Schema-based form Validation system",
      "Atomic Reusable components library",
      "Optimized Tailwind CSS utility patterns",
    ],
    explain: {
      problem:
        "Fragmented HR data and manual onboarding created massive bottlenecks, leading to significant delays in employee integration.",
      uiDecisions:
        "Focused on a 'Progressive Disclosure' strategy to simplify complex forms, utilizing a stepper-based UI to guide users.",
      componentStructure:
        "Implemented a custom-built component core following atomic design principles to ensure maximum portability.",
      responsiveness:
        "Built with a 'Desktop-First Precision' mindset, ensuring dense data views remain legible and interactive on smaller screens.",
      stateHandling:
        "Leveraged persistent context-based state management to preserve data across onboarding steps and handle API failures gracefully.",
      challengesSolved:
        "Implemented table virtualization and lazy-loading for employee directories, reducing initial load times by 70%.",
    },
    mention: ["React 19", "Tailwind CSS", "PostgreSQL", "Express.js", "Supabase Auth"],
    outcome: {
      value: "99%",
      label: "Internal workflow efficiency gain across decentralized HR teams.",
    },
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
      "Type-safe architecture for predictable behavior",
    ],
    explain: {
      problem:
        "Coordinating complex state transitions across multiple workflow columns while maintaining high performance and visual consistency during rapid user interactions.",
      uiDecisions:
        "Adopted a familiar agile board pattern with columns for To Do, In Progress, Peer Review, and Completed to reduce cognitive load.",
      componentStructure:
        "Engineered a modular architecture where components such as task cards, buttons, and board columns are structured for maximum scalability.",
      responsiveness:
        "Optimized the board for smaller screens through flexible layouts, ensuring visual consistency and usability across devices.",
      stateHandling:
        "React state with hooks efficiently handles task updates, drag-and-drop, and filtering while reducing unnecessary re-renders.",
      challengesSolved:
        "Integrated browser local storage to preserve task data across sessions and implemented an interactive drag-and-drop system with 60fps performance.",
    },
    mention: ["React 19", "Tailwind CSS", "Express.js", "PostgreSQL", "Supabase"],
    outcome: {
      value: "45%",
      label: "Reduction in task turnaround time through improved workflow visualization.",
    },
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
      "Optimized rendering patterns for large data",
    ],
    explain: {
      problem:
        "Managing complex dashboard layouts that handle multiple widgets and data sections without overwhelming users or losing visual clarity.",
      uiDecisions:
        "Implemented a scalable UI architecture using enterprise design system principles, focusing on consistent spacing and modular components.",
      componentStructure:
        "Engineered a composable architecture where dashboard sections act as independent smart containers for reusable widgets.",
      responsiveness:
        "Built with fluid grid systems and adaptive spacing to maintain usability across desktop, tablet, and mobile interface points.",
      stateHandling:
        "React hooks manage dynamic filters and search states, ensuring predictable rendering behavior and smooth chart interactions.",
      challengesSolved:
        "Designed responsive table systems and optimized component rendering to handle dynamic datasets without sacrificing performance.",
    },
    mention: ["React", "TypeScript", "Tailwind CSS", "Recharts", "React Hooks", "Figma"],
    outcome: {
      value: "Enterprise",
      label: "Ready dashboard system with scalable architecture and optimized UI workflows.",
    },
  },
};

export const PROJECTS: Project[] = [
  {
    title: "Zenploy HRMS",
    description:
      "Enterprise-grade Human Resource Management System with multi-step onboarding and employee lifecycle management.",
    longDescription:
      "A massive internal tool built to automate HR workflows. Focused on high-performance data handling and complex form architectures.",
    tech: ["React", "Tailwind CSS", "Express", "PostgreSQL", "Supabase"],
    features: [
      "Multi-step Onboarding",
      "Dynamic Dashboards",
      "Employee Lifecycle Tracking",
      "Role-based Access Control",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Kanban Performance Engine",
    description:
      "Highly performant drag-and-drop task management system built with accessibility and state management at its core.",
    longDescription:
      "A design-system-first implementation of a Kanban board. Features complex state handling with optimized re-renders for large data sets.",
    tech: ["React", "Tailwind CSS", "Express", "PostgreSQL", "Supabase"],
    features: ["Drag & Drop", "Column Reordering", "Search & Filtering", "A11y Compliant Drag Handlers"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Aforro Analytics Dashboard",
    description: "Responsive sales and admin management system built with React, TypeScript, and Tailwind CSS.",
    longDescription:
      "A modern analytics platform developed to simulate enterprise reporting. Focused on visual business metrics through charts, activity sections, and scalable UI architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    features: [
      "Responsive Dashboard Layout",
      "Interactive Data Vis",
      "Modular UI Widgets",
      "Optimized Data Tables",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    subCards: [
      {
        title: "Performance Metrics",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        desc: "Real-time tracking of key business performance indicators.",
      },
      {
        title: "Sales Analytics",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        desc: "Detailed breakdowns of sales trends and revenue growth.",
      },
      {
        title: "User Management",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
        desc: "Scalable admin tools for managing enterprise user roles.",
      },
      {
        title: "Reporting Engine",
        img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600",
        desc: "Automated generation of complex business intelligence reports.",
      },
      {
        title: "Activity Monitoring",
        img: "https://images.unsplash.com/photo-1504868584819-f8e90526354a?auto=format&fit=crop&q=80&w=600",
        desc: "Live stream of system-wide activities and audit logs.",
      },
    ],
  },
];

export const SKILLS: SkillGroups = {
  high: [
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Accessibility (WCAG)",
    "Design Systems",
    "Cursor IDE",
    "Git/GitHub",
  ],
  medium: ["Figma Dev Mode", "Design Tokens", "React Hooks", "Framer Motion", "Component Architecture"],
  low: ["LIT/Web Components", "MCP", "Figma Plugin Dev"],
};

export const JOURNEY_ITEMS: TimelineItem[] = [
  {
    title: "Learning Frontend",
    date: "2021",
    desc: "Mastering HTML/CSS fundamentals and diving into modern JavaScript ES6+.",
    tags: ["HTML5", "CSS3", "JS"],
  },
  {
    title: "Building Projects",
    date: "2022",
    desc: "Developing responsive React applications and exploring styling with Tailwind CSS.",
    tags: ["React", "Tailwind", "Git"],
  },
  {
    title: "HRMS Development",
    date: "2023",
    desc: "Building Zenploy HRMS, focusing on complex forms and data-heavy enterprise UI at Zenbeta.",
    tags: ["Enterprise", "Forms", "Node.js"],
  },
  {
    title: "Dashboard Systems",
    date: "2024",
    desc: "Architecting analytical visualization suites with optimized rendering and real-time updates.",
    tags: ["D3.js", "Recharts", "Performance"],
  },
  {
    title: "AI-Assisted Workflows",
    date: "2024-Present",
    desc: "Integrating Cursor and LLMs into my daily dev loop to 10x production velocity.",
    tags: ["AI", "Automation", "Cursor"],
  },
  {
    title: "Design System Exploration",
    date: "2025",
    desc: "Focusing on scalable UI components, accessibility (WCAG), and atomic design principles.",
    tags: ["Accessibility", "Tokens", "UI Engineering"],
  },
];

export const MARQUEE_ITEMS = ["REACT 19", "TYPESCRIPT", "TAILWIND V4", "ACCESSIBILITY", "FIGMA"];
