import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home",        href: "#hero" },
  { label: "About",       href: "#about" },
  { label: "Projects",    href: "#projects" },
  { label: "Case Studies",href: "#case-studies" },
  { label: "Skills",      href: "#skills" },
  { label: "Education",   href: "#education" },
  { label: "Contact",     href: "#contact" },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeSection, setActive]    = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map(n => n.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="font-heading font-bold text-lg tracking-tight group flex items-center gap-2"
          >
            <span className="w-7 h-7 rounded-lg bg-[#5B3DF5] flex items-center justify-center text-white text-xs font-bold">
              H
            </span>
            <span className="text-[#111827]">
              Hirthick<span className="text-[#5B3DF5]">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className={`relative px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#5B3DF5]"
                      : "text-[#6B7280] hover:text-[#111827]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-[#F8F8FC]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hirthicksrinivaasan2@gmail.com"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5B3DF5] hover:bg-[#4a32c7] text-white text-sm font-medium transition-all duration-200 shadow-[0_4px_20px_rgba(91,61,245,0.06)]"
            >
              Work with me
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-[#F8F8FC] transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E5E7EB] md:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="block px-4 py-3 rounded-xl text-[#6B7280] hover:text-[#111827] hover:bg-[#F8F8FC] text-sm font-medium transition-all"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:hirthicksrinivaasan2@gmail.com"
                className="block mt-3 px-4 py-3 rounded-xl bg-[#5B3DF5] text-white text-sm font-medium text-center shadow-[0_4px_20px_rgba(91,61,245,0.06)]"
              >
                Work with me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
