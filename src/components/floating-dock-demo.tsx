import React from "react";
import { FloatingDock } from "@/src/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconBriefcase,
  IconSettings,
  IconTerminal2,
  IconBolt,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full" />
      ),
      href: "#projects",
    },
    {
       title: "Design System",
       icon: (
         <IconSettings className="h-full w-full" />
       ),
       href: "#design-system",
    },
    {
       title: "Journey",
       icon: (
         <IconHome className="h-full w-full rotate-180" />
       ),
       href: "#journey",
    },
    {
       title: "AI Workflow",
       icon: (
         <IconBolt className="h-full w-full" />
       ),
       href: "#ai-workflow",
    },
    {
       title: "Skills",
       icon: (
         <IconTerminal2 className="h-full w-full" />
       ),
       href: "#skills",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full" />
      ),
      href: "mailto:akshithamekala04@gmail.com",
    },
  ];
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[90]">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
