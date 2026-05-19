import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/WhatsApp Image 2025-12-17 at 7.00.31 PM.jpeg";

const trustItems = ["AI Systems", "Workflow Automation", "Product Thinking", "Operational Design"];



const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
};

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(91,61,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,61,245,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#5B3DF5]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#7C5CFF]/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT ─────────────────────────────────── */}
          <div className="space-y-8">

            {/* Trust badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#E5E7EB] bg-[#F8F8FC] text-[#5B3DF5] text-xs tracking-widest uppercase font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B3DF5] animate-pulse" />
              CSE Student · VIT Chennai · AI Systems Builder
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem] font-bold leading-[1.05] lg:leading-[1.1] text-[#111827]">
                Building{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #5B3DF5 0%, #7C5CFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AI-assisted
                </span>{" "}
                systems for real-world workflow problems.
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[#6B7280] text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              I'm Hirthick — a Computer Science Engineering student at VIT Chennai focused on
              operational systems, automation, and AI-assisted products that reduce friction
              in real business workflows.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#5B3DF5] hover:bg-[#4E3AAD] text-white font-medium text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(91,61,245,0.12)] hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <a
                href="mailto:hirthicksrinivaasan2@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] font-medium text-sm transition-all duration-300 hover:border-[#5B3DF5] hover:text-[#5B3DF5] hover:-translate-y-0.5 shadow-sm"
              >
                Work with Hirthick
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap items-center gap-2 pt-2"
            >
              {trustItems.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Image ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile image container */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem] rounded-full overflow-hidden border-4 border-white bg-white"
                style={{ boxShadow: "0 8px 40px rgba(91,61,245,0.08)" }}
              >
                <img
                  src={profileImage}
                  alt="Hirthick Srinivaasan"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </div>

              {/* Name badge */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2.5 rounded-xl border border-[#E5E7EB] flex items-center gap-2.5"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#5B3DF5] animate-pulse" />
                <span className="text-[#111827] text-sm font-medium font-heading">Hirthick Srinivaasan</span>
                <span className="text-[#6B7280] text-sm">· VIT Chennai</span>
              </div>

              {/* Floating accent dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-xl bg-[#5B3DF5]/10 border border-[#5B3DF5]/20 animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-8 -left-5 w-4 h-4 rounded-lg bg-[#7C5CFF]/10 border border-[#7C5CFF]/20 animate-float" style={{ animationDelay: "1.2s" }} />
              <div className="absolute bottom-12 -right-6 w-5 h-5 rounded-xl bg-[#EAE4FF] border border-[#7C5CFF]/20 animate-float" style={{ animationDelay: "0.8s" }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-[#6B7280] text-sm tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#5B3DF5] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

