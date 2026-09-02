import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const progressRef      = useRef<HTMLDivElement>(null);
  const cursorRef        = useRef<HTMLDivElement>(null);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  // Scroll progress bar + floating CTA trigger
  useEffect(() => {
    const onScroll = () => {
      const scrollTop   = window.scrollY;
      const docHeight   = document.documentElement.scrollHeight - window.innerHeight;
      const progress    = docHeight > 0 ? scrollTop / docHeight : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }
      // Show floating CTA after scrolling past ~60vh
      setShowFloatingCTA(scrollTop > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cursor glow (desktop only)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Page title & meta
  useEffect(() => {
    document.title = "Hirthick Srinivaasan | AI Automation · MERN Stack · ML Engineer · Full Stack Developer";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Hirthick Srinivaasan V B — CSE student at VIT Chennai. Hire for AI Automation, MERN Stack, ML Engineering, AI Agents, E-Commerce. 10+ projects shipped."
      );
    }
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] overflow-x-hidden font-sans">
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        ref={progressRef}
        className="fixed top-0 left-0 h-[3px] z-[9999] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #5B3DF5, #7C5CFF)",
          width: "0%",
          transition: "width 0.1s linear",
        }}
      />

      {/* Cursor glow */}
      <div
        id="cursor-glow"
        ref={cursorRef}
        className="fixed pointer-events-none z-[9998] w-[300px] h-[300px] rounded-full hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(91, 61, 245, 0.04) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Floating Sticky CTA ───────────────────────── */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9990] floating-cta"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
            <span className="text-white text-sm font-medium whitespace-nowrap hidden xs:block">
              Hirthick is Open to Work —
            </span>
            <button
              onClick={scrollToContact}
              id="floating-cta-hire"
              className="text-white text-sm font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200 whitespace-nowrap"
            >
              Let's Talk <ArrowRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CaseStudiesSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
