import { motion } from "framer-motion";
import { Github, ExternalLink, TrendingUp } from "lucide-react";

interface Project {
  title: string;
  problem: string;
  system: string;
  outcome: string;
  metric: { value: string; label: string };
  tags: string[];
  github: string;
  caseStudy: string;
  accent: string;
  domain: string;
}

const projects: Project[] = [
  {
    title: "Yadhra Closet",
    problem: "Small fashion boutiques couldn't manage inventory, orders, and customer communication without expensive software or manual WhatsApp chaos.",
    system: "Full-stack e-commerce platform with WhatsApp-centric order flow, Cloudinary image management, admin portal, and automated order tracking.",
    outcome: "Reduced order confusion by 80%. Boutique now operates with zero manual tracking overhead.",
    metric: { value: "−80%", label: "Order Confusion" },
    tags: ["E-commerce", "React", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/Hirthick17",
    caseStudy: "#case-studies",
    accent: "#5B3DF5",
    domain: "E-Commerce Operations",
  },
  {
    title: "SafeGuard (Child Safety)",
    problem: "Parents had no real-time control over what content their children were accessing during online learning sessions.",
    system: "Chrome extension using hybrid AI (TensorFlow.js + Gemini) to detect and block unsafe content patterns in real time without DNS-level changes.",
    outcome: "Deployed with configurable safety thresholds. Works across YouTube, search, and dynamic SPAs using MutationObserver.",
    metric: { value: "100%", label: "Privacy Local" },
    tags: ["Chrome Extension", "TensorFlow.js", "Gemini API", "Privacy-First"],
    github: "https://github.com/Hirthick17/Childsafety_Extension",
    caseStudy: "#case-studies",
    accent: "#7C5CFF",
    domain: "AI Safety Tools",
  },
  {
    title: "Cardiac Triage Engine",
    problem: "High-volume patient triage delays critical cardiac analysis, requiring doctors to spend valuable time manually validating junior reports.",
    system: "AI-driven health monitoring system integrating signal processing (Kalman/Wavelet), DenseNet1D for ECG analysis, and NEWS clinical risk scoring.",
    outcome: "Achieved 85% accuracy in cardiac risk classification, providing Explainable AI (XAI) insights to accelerate the physician triage process.",
    metric: { value: "85%", label: "Cardiac Accuracy" },
    tags: ["Python", "PyTorch", "Streamlit", "Machine Learning", "Explainable AI"],
    github: "https://github.com/Hirthick17/Healthmonitoring_system",
    caseStudy: "#case-studies",
    accent: "#5B3DF5",
    domain: "AI Healthcare",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
};

const ProjectsSection = () => (
  <section id="projects" className="relative py-24 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5B3DF5]/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-14">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#5B3DF5] text-xs tracking-[0.2em] uppercase font-medium mb-4"
        >
          Proof of Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight max-w-2xl"
        >
          10+ projects.{" "}
          <span style={{ backgroundImage: "linear-gradient(135deg, #5B3DF5, #7C5CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Real results.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[#6B7280] text-base mt-4 max-w-xl"
        >
          Every project follows a Problem → System → Outcome framework. No tutorial clones — only things built to solve real problems.
        </motion.p>
      </div>

      {/* Project cards */}
      <div className="space-y-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i}
            className="group relative p-6 md:p-8 rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:border-[#5B3DF5]/30 hover:shadow-[0_8px_30px_rgba(91,61,245,0.08)] hover:-translate-y-1"
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
              style={{ background: `linear-gradient(to bottom, ${project.accent}, ${project.accent}40)` }}
            />

            <div className="pl-5">
              {/* Top row: domain badge + metric */}
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-lg"
                    style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30`, color: project.accent }}
                  >
                    {project.domain}
                  </span>
                  {/* Verified results badge */}
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600">
                    <TrendingUp size={10} /> Verified Result
                  </span>
                </div>

                {/* Big metric */}
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{ background: `${project.accent}10`, border: `1px solid ${project.accent}25` }}
                >
                  <span className="font-heading font-bold text-2xl md:text-3xl" style={{ color: project.accent }}>
                    {project.metric.value}
                  </span>
                  <span className="text-[#6B7280] text-xs leading-tight max-w-[70px]">
                    {project.metric.label}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl md:text-2xl text-[#111827] leading-tight mb-5">
                {project.title}
              </h3>

              {/* PSO Framework */}
              <div className="grid sm:grid-cols-3 gap-4 mb-5">
                {[
                  { label: "Problem", text: project.problem, color: "#5B3DF5" },
                  { label: "System",  text: project.system,  color: "#7C5CFF" },
                  { label: "Outcome", text: project.outcome, color: "#10B981" },
                ].map(({ label, text, color }) => (
                  <div key={label} className="space-y-1.5">
                    <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color }}>
                      {label}
                    </p>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* Bottom row: tags + action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[#6B7280] hover:text-[#111827] text-sm border border-[#E5E7EB] bg-[#F8F8FC] hover:bg-white hover:border-[#5B3DF5]/30 transition-all duration-200 font-medium"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={project.caseStudy}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("case-studies");
                      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border"
                    style={{
                      background: `${project.accent}`,
                      borderColor: `${project.accent}`,
                      color: "#ffffff",
                      boxShadow: `0 4px 14px ${project.accent}40`,
                    }}
                  >
                    <ExternalLink size={14} /> Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="https://github.com/Hirthick17"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#6B7280] hover:text-[#111827] hover:border-[#5B3DF5]/30 hover:shadow-[0_4px_20px_rgba(91,61,245,0.06)] text-sm font-medium transition-all duration-200"
        >
          <Github size={15} /> View all 10+ projects on GitHub
        </a>
        <a
          href="mailto:hirthicksrinivaasan2@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
          style={{ background: "#5B3DF5", color: "#fff", boxShadow: "0 4px 20px rgba(91,61,245,0.25)" }}
        >
          Hire Me for Your Project →
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
