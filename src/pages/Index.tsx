import { useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const progressRef  = useRef<HTMLDivElement>(null);
  const cursorRef    = useRef<HTMLDivElement>(null);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrollTop   = window.scrollY;
      const docHeight   = document.documentElement.scrollHeight - window.innerHeight;
      const progress    = docHeight > 0 ? scrollTop / docHeight : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cursor glow
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
    document.title = "Hirthick Srinivaasan | AI Systems · Workflow Automation · Product Engineering";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Hirthick Srinivaasan V B — CSE student at VIT Chennai building AI-assisted operational systems, workflow automation tools, and e-commerce products."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111827] overflow-x-hidden font-sans">
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        ref={progressRef}
        className="fixed top-0 left-0 h-[2px] z-[9999] pointer-events-none"
        style={{
          background: "#5B3DF5",
          width: "0%",
          transition: "width 0.1s linear",
        }}
      />

      {/* Cursor glow */}
      <div
        id="cursor-glow"
        ref={cursorRef}
        className="fixed pointer-events-none z-[9998] w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(91, 61, 245, 0.04) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s ease",
        }}
      />

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
