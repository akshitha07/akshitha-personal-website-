import { useState } from "react";
import FloatingDockDemo from "./components/floating-dock-demo";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ProjectAnalysisModal } from "./components/projects/ProjectAnalysisModal";
import { DesignSystemSection } from "./components/sections/DesignSystemSection";
import { HeroSection } from "./components/sections/HeroSection";
import { JourneySection } from "./components/sections/JourneySection";
import { MarqueeSection } from "./components/sections/MarqueeSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { WorkflowSection } from "./components/sections/WorkflowSection";

export default function App() {
  const [activeAnalysis, setActiveAnalysis] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <MarqueeSection />
        <ProjectsSection onSelectProject={setActiveAnalysis} />
        <DesignSystemSection />
        <WorkflowSection />
        <JourneySection />
        <SkillsSection />
        <Footer />
        {/* <FloatingDockDemo /> */}

        {activeAnalysis && (
          <ProjectAnalysisModal
            activeAnalysis={activeAnalysis}
            onClose={() => setActiveAnalysis(null)}
          />
        )}
      </main>
    </div>
  );
}
