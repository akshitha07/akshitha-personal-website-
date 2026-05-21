import { motion, AnimatePresence } from "framer-motion";
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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>

            <span className="font-bold text-brand-dark text-lg">
              Akshitha
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-brand-blue text-white px-5 py-2 rounded-full"
            >
              Get in Touch
            </a>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </nav>

      {/* Mobile Overlay */}

<AnimatePresence>
  {isMenuOpen && (
    <>
      {/* Background Overlay */}

      <motion.div
        className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="
        fixed
        top-0
        right-0
        h-screen
        w-[85%]
        max-w-[320px]
        bg-white
        z-[100]
        shadow-2xl
        lg:hidden
      "
      >
        <div className="h-full flex flex-col p-6">

          {/* Header */}

          <div className="flex justify-between items-center mb-8">

            <span className="font-bold text-xl text-brand-dark">
              Menu
            </span>

            <button onClick={closeMenu}>
              <X size={28} />
            </button>

          </div>

          {/* Links */}

          <div className="flex flex-col gap-6">

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                text-lg
                font-medium
                text-brand-dark
                hover:text-brand-blue
                transition
              "
              >
                {link.label}
              </a>
            ))}

          </div>

          {/* Bottom Button */}

          <div className="mt-auto">

            <a
              href="#contact"
              onClick={closeMenu}
              className="
              block
              text-center
              bg-brand-blue
              text-white
              py-3
              rounded-xl
              font-medium
            "
            >
              Get in Touch
            </a>

          </div>

        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
}