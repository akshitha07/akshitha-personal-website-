import { motion } from "motion/react";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { FlipWords } from "../ui/flip-words";

const HERO_WORDS =["Scalable", "user-friendly","Responsive","Interactive", "Accessible", "Modern"];

export function HeroSection() {
  return (
 <section id="hero" className="pt-32 pb-20 md:pt-21 md:pb-8 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-6 font-sans uppercase tracking-[0.1em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue/40 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
          </span>
          Based at Zenbeta Technologies
        </div> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-8 tracking-[-0.02em] font-sans">
          Building{" "}
          <FlipWords
            words={HERO_WORDS}
            className="text-brand-blue italic px-0"
          />
          <br />
          Frontend Architectures.
        </h1>

        <p className="text-xl md:text-xl text-brand-gray mb-10 max-w-2xl leading-relaxed font-sans">
          I build{" "}
          <span className="text-brand-dark font-medium underline decoration-brand-blue/30 decoration-4 underline-offset-4">
            scalable UI systems
          </span>{" "}
          and accessible web applications.
        </p>

        <div className="flex flex-wrap gap-4">
<a
  href="#projects"
  id="view-work-btn"
  className="px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold text-lg flex items-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all shadow-xl shadow-brand-blue/20"
>
  View Projects
  <ChevronRight size={20} />
</a>

<div className="flex items-center gap-4 px-6 py-4 bg-neutral-100 rounded-xl border border-neutral-200">

  <a
    href="https://github.com/akshitha07"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition duration-300"
  >
    <Github size={22} />
  </a>

  <a
    href="https://www.linkedin.com/in/m-akshitha-36b69124b/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition duration-300"
  >
    <Linkedin size={22} />
  </a>

  <a
    href="mailto:akshithamekala04@gmail.com"
    className="hover:scale-110 transition duration-300"
  >
    <Mail size={22} />
  </a>

</div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src="https://res.cloudinary.com/dwliqhmpe/image/upload/v1779351438/img1_seibwf.png"
          alt="Profile"
          className="w-[450px] md:w-[550px] "
        />
      </motion.div>

    </div>
  </div>
</section>
  );
}
