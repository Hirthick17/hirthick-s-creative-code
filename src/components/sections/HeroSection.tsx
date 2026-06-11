import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Youtube, Zap, Bot, ShoppingCart, Code2, Cpu, Globe } from "lucide-react";
import profileImage from "@/assets/WhatsApp Image 2025-12-17 at 7.00.31 PM.jpeg";

/* ─── Stats ───────────────────────────────────────────── */
const stats = [
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 3,  suffix: "",  label: "Clients Worked" },
  { value: 2,  suffix: "",  label: "Hackathons Won" },
  { value: 117, suffix: "", label: "YouTube Subs" },
];

/* ─── Hire chips ──────────────────────────────────────── */
const hireChips = [
  { icon: Bot,          label: "AI Automation"       },
  { icon: Code2,        label: "MERN Stack"          },
  { icon: Cpu,          label: "ML Engineer"         },
  { icon: Globe,        label: "Full Stack Dev"      },
  { icon: Zap,          label: "AI Agents"           },
  { icon: ShoppingCart, label: "E-Commerce Tech"     },
];

/* ─── Animated counter hook ───────────────────────────── */
function useCounter(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Single animated stat ────────────────────────────── */
const StatItem = ({
  stat,
  index,
  started,
}: {
  stat: (typeof stats)[0];
  index: number;
  started: boolean;
}) => {
  const count = useCounter(stat.value, 1200 + index * 100, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center sm:items-start"
    >
      <span className="stat-number">
        {count}{stat.suffix}
      </span>
      <span className="text-[#6B7280] text-xs sm:text-sm leading-tight mt-0.5">{stat.label}</span>
    </motion.div>
  );
};

/* ─── Fade-up variant ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
};

/* ═══════════════════════════════════════════════════════ */
const HeroSection = () => {
  const statsRef   = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  /* Trigger counters when stats row is visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id  = href.slice(1);
    const el  = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden bg-white"
      style={{ minHeight: "calc(100vh - 0px)", maxHeight: "100vh" }}
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
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-[#5B3DF5]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-[#7C5CFF]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-20 pb-10 lg:pt-24 lg:pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* ── LEFT ──────────────────────────────────── */}
          <div className="space-y-4 sm:space-y-5">

            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#E5E7EB] bg-[#F8F8FC] text-[#5B3DF5] text-xs tracking-widest uppercase font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B3DF5] animate-pulse" />
              CSE Student · VIT Chennai · Open to Work
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] text-[#111827]">
                Building{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #5B3DF5 0%, #7C5CFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AI systems
                </span>{" "}
                that solve real workflow problems.
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-[#6B7280] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I'm <strong className="text-[#111827] font-semibold">Hirthick</strong> — a Computer Science student at VIT Chennai.
              I build AI automation tools, MERN stack apps, ML-powered products, and e-commerce
              platforms that cut friction and drive results.
            </motion.p>

            {/* ── Stats strip ──────────────────────────── */}
            <motion.div
              ref={statsRef}
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 px-4 rounded-2xl border border-[#E5E7EB] bg-[#F8F8FC]/80"
            >
              {stats.map((stat, i) => (
                <StatItem key={stat.label} stat={stat} index={i} started={statsStarted} />
              ))}
            </motion.div>

            {/* ── CTA buttons ──────────────────────────── */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#projects")}
                id="hero-cta-projects"
                className="cta-primary"
              >
                See My Work <ArrowRight size={16} />
              </button>
              <a
                href="mailto:hirthicksrinivaasan2@gmail.com"
                id="hero-cta-hire"
                className="cta-secondary"
              >
                <Mail size={15} /> Let's Collaborate
              </a>
              <a
                href="https://www.youtube.com/@Hirthicks-Vision"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-youtube"
                className="cta-ghost"
              >
                <Youtube size={15} className="text-[#FF0000]" /> Watch on YouTube
              </a>
            </motion.div>

            {/* ── Hire me chips ─────────────────────────── */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={5}
              className="space-y-2"
            >
              <p className="text-[#9CA3AF] text-xs uppercase tracking-widest font-medium">Available for hire in</p>
              <div className="flex flex-wrap gap-2">
                {hireChips.map(({ icon: Icon, label }) => (
                  <span key={label} className="hire-chip">
                    <Icon size={12} />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Image ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <div className="relative">
              {/* Profile image */}
              <div
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem] rounded-3xl overflow-hidden border-4 border-white"
                style={{ boxShadow: "0 8px 40px rgba(91,61,245,0.12), 0 2px 8px rgba(0,0,0,0.06)" }}
              >
                <img
                  src={profileImage}
                  alt="Hirthick Srinivaasan — Full Stack Developer & AI Engineer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                  loading="eager"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#5B3DF5]/20 to-transparent" />
              </div>

              {/* Open to hire badge — top right */}
              <div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-2 rounded-xl border border-[#5B3DF5]/30 flex items-center gap-2 z-10"
                style={{
                  background: "rgba(91,61,245,0.95)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(91,61,245,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white text-xs font-semibold whitespace-nowrap">Open to Hire</span>
              </div>

              {/* Name badge — bottom */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-xl border border-[#E5E7EB] flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#5B3DF5] animate-pulse" />
                <span className="text-[#111827] text-xs sm:text-sm font-semibold font-heading">Hirthick Srinivaasan</span>
                <span className="text-[#6B7280] text-xs sm:text-sm hidden xs:inline">· VIT Chennai</span>
              </div>

              {/* Floating accent dots */}
              <div className="absolute -top-3 -left-4 w-6 h-6 rounded-xl bg-[#5B3DF5]/10 border border-[#5B3DF5]/20 animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-8 -left-6 w-4 h-4 rounded-lg bg-[#7C5CFF]/10 border border-[#7C5CFF]/20 animate-float" style={{ animationDelay: "1.2s" }} />
              <div className="absolute bottom-12 -right-6 w-5 h-5 rounded-xl bg-[#EAE4FF] border border-[#7C5CFF]/20 animate-float" style={{ animationDelay: "0.8s" }} />

              {/* YouTube subs mini badge */}
              <div
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 px-3 py-2.5 rounded-xl border border-[#FF0000]/20 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                <Youtube size={14} className="text-[#FF0000] flex-shrink-0" />
                <div>
                  <p className="text-[#111827] text-xs font-bold leading-none">117</p>
                  <p className="text-[#6B7280] text-[10px] leading-none mt-0.5">Subscribers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1"
        >
          <span className="text-[#6B7280] text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-6 bg-gradient-to-b from-[#5B3DF5] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
