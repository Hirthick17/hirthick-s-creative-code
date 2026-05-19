import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, TrendingUp, AlertCircle, Wrench, CheckCircle2, BookOpen } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  domain: string;
  accent: string;
  tagline: string;
  problem: string;
  friction: string;
  system: string;
  outcome: string;
  lessons: string[];
  metrics: { label: string; value: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "yadhra",
    title: "Yadhra Closet",
    domain: "E-Commerce Operations",
    accent: "#5B3DF5",
    tagline: "From WhatsApp chaos to operational clarity for a fashion boutique.",
    problem:
      "Managing large product inventories with multiple variants and WhatsApp chaos. High-resolution images impacted page loads, and there was a need for transparent order tracking without losing the trust built via direct WhatsApp communication.",
    friction:
      "The previous process relied on individual memory — no system, no audit trail, no product catalog. Every order was a manual negotiation. High-resolution images made the site slow, negatively impacting the customer experience.",
    system:
      "Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Integrated Cloudinary for image optimization, a WhatsApp-centric order flow for customer engagement, and a robust Admin Dashboard for real-time inventory tracking.",
    outcome:
      "Reduced order confusion by 80%. Delivered fast responsive interfaces with lazy loading. Post-purchase engagement through WhatsApp strengthened customer relationships and drastically improved conversion rates.",
    lessons: [
      "Meeting users where they already operate (WhatsApp) reduces purchase hesitation.",
      "Admin tooling is just as important as the customer-facing experience.",
      "Cloudinary image optimization drastically improves performance.",
      "Stateless backend design enables horizontal scaling."
    ],
    metrics: [
      { label: "Order Confusion", value: "−80%" },
      { label: "Image Delivery", value: "Optimized" },
      { label: "Tracking Chaos", value: "Zero" },
    ],
  },
  {
    id: "safeguard",
    title: "SafeGuard (Child Safety)",
    domain: "AI Safety · Chrome Extension",
    accent: "#7C5CFF",
    tagline: "Privacy-First Content Moderation for Children using Hybrid AI.",
    problem:
      "Parents had no real-time control over content. Existing solutions required DNS-level changes, technical knowledge, or expensive subscriptions, and didn't process dynamic web content properly.",
    friction:
      "Needed to detect unsafe images and text locally without transmitting sensitive child data to the cloud. Dynamic content (like Single Page Applications) completely bypassed traditional URL-based blockers.",
    system:
      "Built 'SafeGuard', a Manifest V3 Chrome Extension. Uses local TensorFlow.js (NSFWJS) for image classification and a dual-layer text analysis (local profanity + Gemini 2.5 API semantic analysis). Tracks dynamic DOM changes via MutationObserver.",
    outcome:
      "Achieved real-time content protection across YouTube, search, and dynamic SPAs. Privacy-first architecture ensures sensitive data remains local in chrome.storage.local without server dependency.",
    lessons: [
      "Hybrid AI architecture (local edge + cloud API) perfectly balances privacy and processing power.",
      "Client-side image classification (TensorFlow.js) is fast enough for real-time filtering.",
      "Configurability trumps strict defaults — parents need tuning control.",
    ],
    metrics: [
      { label: "Processing", value: "Real-time" },
      { label: "Data Privacy", value: "100% Local" },
      { label: "Setup Complexity", value: "1-Click" },
    ],
  },
  {
    id: "cardiac-triage",
    title: "Cardiac Triage Engine",
    domain: "AI Healthcare · ML Engine",
    accent: "#5B3DF5",
    tagline: "AI-Powered Health Monitoring & Cardiac Triage Engine.",
    problem:
      "Early symptom patterns signaling serious cardiac conditions are routinely missed during high-volume patient intake. Doctors need rapid AI insights to cross-reference junior doctor reports.",
    friction:
      "Raw ECG signals are noisy and hard to process. Black-box AI models aren't trusted by clinicians, who require transparent reasoning. Needed a standardized clinical scoring integration.",
    system:
      "Developed an AI-driven triage engine in Python/Streamlit. Preprocesses ECGs using Kalman/Wavelet filtering. Uses DenseNet1D for cardiac analysis, TriBoostEnsemble for risk scoring, and calculates standardized NEWS clinical scores. Integrated Captum for Explainable AI (XAI).",
    outcome:
      "Consistently achieves 85% accuracy for cardiac risk classification. Provides transparent AI decisions (XAI) to help doctors quickly validate patient health status and accelerate triage.",
    lessons: [
      "Explainable AI (XAI) is critical for clinical adoption—doctors must understand the 'why'.",
      "Advanced signal preprocessing (Kalman filters) dramatically improves deep learning accuracy.",
      "Integrating standard medical frameworks (NEWS) bridges the gap between AI and clinical practice.",
    ],
    metrics: [
      { label: "ECG Accuracy", value: "85%" },
      { label: "HR Error", value: "~8.4 BPM" },
      { label: "SpO2 Error", value: "~1.46%" },
    ],
  },
];

const stepIcons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Problem:  AlertCircle,
  Friction: TrendingUp,
  System:   Wrench,
  Outcome:  CheckCircle2,
  Lessons:  BookOpen,
};

const stepColors: Record<string, string> = {
  Problem:  "#5B3DF5",
  Friction: "#7C5CFF",
  System:   "#5B3DF5",
  Outcome:  "#7C5CFF",
  Lessons:  "#5B3DF5",
};

const CaseStudiesSection = () => {
  const [openId, setOpenId] = useState<string | null>("yadhra");

  return (
    <section id="case-studies" className="relative py-24 md:py-32 px-4 md:px-6 bg-[#F8F8FC] overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#5B3DF5]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#5B3DF5] text-xs tracking-[0.2em] uppercase font-medium mb-4"
          >
            Case Studies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight"
          >
            From problem to production —{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg, #5B3DF5, #7C5CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              the full story
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#6B7280] text-base mt-4 max-w-xl"
          >
            Investor-ready deep dives into the operational problems, engineering decisions, and measurable outcomes.
          </motion.p>
        </div>

        {/* Accordion case studies */}
        <div className="space-y-4">
          {caseStudies.map((cs, idx) => {
            const isOpen = openId === cs.id;
            return (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border transition-all duration-300"
                style={{
                  borderColor: isOpen ? `${cs.accent}40` : "#E5E7EB",
                  background: isOpen
                    ? `linear-gradient(145deg, ${cs.accent}08 0%, white 100%)`
                    : "white",
                }}
              >
                {/* Accordion header */}
                <button
                  className="w-full flex items-center gap-4 p-6 md:p-8 text-left"
                  onClick={() => setOpenId(isOpen ? null : cs.id)}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: cs.accent, boxShadow: `0 0 8px ${cs.accent}60` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ background: `${cs.accent}15`, color: cs.accent }}
                      >
                        {cs.domain}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-[#111827]">{cs.title}</h3>
                    <p className="text-[#6B7280] text-sm mt-0.5">{cs.tagline}</p>
                  </div>

                  {/* Metrics preview */}
                  <div className="hidden sm:flex gap-4 mr-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-right">
                        <p className="font-heading font-bold text-base" style={{ color: cs.accent }}>{m.value}</p>
                        <p className="text-[#6B7280] text-sm">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <ChevronDown
                    size={18}
                    className="text-[#AEAECE] flex-shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 space-y-6">
                        <div className="h-px bg-[#E5E7EB]" />

                        {/* Mobile metrics */}
                        <div className="sm:hidden flex gap-4 mb-6">
                          {cs.metrics.map((m) => (
                            <div key={m.label} className="p-3 rounded-xl flex-1 text-center bg-white"
                              style={{ border: `1px solid ${cs.accent}20` }}>
                              <p className="font-heading font-bold text-lg" style={{ color: cs.accent }}>{m.value}</p>
                              <p className="text-[#6B7280] text-sm">{m.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Five-step breakdown */}
                        <div className="space-y-5">
                          {[
                            { key: "Problem",  text: cs.problem },
                            { key: "Friction", text: cs.friction },
                            { key: "System",   text: cs.system },
                            { key: "Outcome",  text: cs.outcome },
                          ].map(({ key, text }) => {
                            const Icon = stepIcons[key];
                            const color = stepColors[key];
                            return (
                              <div key={key} className="flex gap-4">
                                <div className="flex-shrink-0 mt-0.5">
                                  <div
                                    className="w-7 h-7 rounded-xl flex items-center justify-center"
                                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                                  >
                                    <Icon size={13} style={{ color }} />
                                  </div>
                                </div>
                                <div>
                                  <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color }}>
                                    {key}
                                  </p>
                                  <p className="text-[#6B7280] text-base leading-relaxed">{text}</p>
                                </div>
                              </div>
                            );
                          })}

                          {/* Lessons */}
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-0.5">
                              <div
                                className="w-7 h-7 rounded-xl flex items-center justify-center"
                                style={{ background: `${stepColors.Lessons}15`, border: `1px solid ${stepColors.Lessons}25` }}
                              >
                                <BookOpen size={13} style={{ color: stepColors.Lessons }} />
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: stepColors.Lessons }}>
                                Lessons Learned
                              </p>
                              <ul className="space-y-1.5">
                                {cs.lessons.map((lesson, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-[#6B7280]">
                                    <span className="mt-2 w-1 h-1 rounded-full bg-[#5B3DF5] flex-shrink-0" />
                                    {lesson}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
