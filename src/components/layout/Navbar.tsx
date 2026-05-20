import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#design-system", label: "Design System" },
  { href: "#journey", label: "Journey" },
  { href: "#ai-workflow", label: "AI Workflow" },
  { href: "#skills", label: "Skills" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">A</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-brand-dark">Akshitha</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-blue transition-colors">
              {link.label}
            </a>
          ))}
          <button
            id="contact-btn"
            className="bg-white text-brand-blue px-5 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-lg shadow-black/10 cursor-pointer text-sm font-bold"
          >
            Get in Touch
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-brand-dark"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
