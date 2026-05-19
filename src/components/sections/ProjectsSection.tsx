import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  problem: string;
  system: string;
  outcome: string;
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
          Selected Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight max-w-2xl"
        >
          Systems built to solve{" "}
          <span style={{ backgroundImage: "linear-gradient(135deg, #5B3DF5, #7C5CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            real problems
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[#6B7280] text-base mt-4 max-w-xl"
        >
          Every project follows a Problem → System → Outcome framework. No side-project clones — only things that solve something real.
        </motion.p>
      </div>

      {/* Project cards */}
      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i}
            className="group relative p-6 md:p-8 rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:border-[#5B3DF5]/30 hover:shadow-[0_4px_20px_rgba(91,61,245,0.06)] hover:-translate-y-0.5"
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
              style={{ background: `linear-gradient(to bottom, ${project.accent}, transparent)` }}
            />

            <div className="grid md:grid-cols-[1fr,auto] gap-6 items-start pl-4">
              {/* Content */}
              <div className="space-y-5">
                {/* Domain badge + title */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-lg"
                    style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30`, color: project.accent }}
                  >
                    {project.domain}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-[#111827] leading-tight">
                  {project.title}
                </h3>

                {/* PSO Framework */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Problem", text: project.problem },
                    { label: "System", text: project.system },
                    { label: "Outcome", text: project.outcome },
                  ].map(({ label, text }) => (
                    <div key={label} className="space-y-1.5">
                      <p
                        className="text-[10px] font-semibold tracking-widest uppercase"
                        style={{ color: label === "Outcome" ? "#5B3DF5" : label === "System" ? "#7C5CFF" : "#5B3DF5" }}
                      >
                        {label}
                      </p>
                      <p className="text-[#6B7280] text-base leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2.5 min-w-max">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#6B7280] hover:text-[#111827] text-sm border border-[#E5E7EB] bg-[#F8F8FC] hover:bg-white hover:border-[#5B3DF5]/30 transition-all duration-200"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border"
                  style={{
                    background: `${project.accent}15`,
                    borderColor: `${project.accent}30`,
                    color: project.accent,
                  }}
                >
                  <ExternalLink size={14} /> Case Study
                </a>
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
        className="mt-10 flex justify-center"
      >
        <a
          href="https://github.com/Hirthick17"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#6B7280] hover:text-[#111827] hover:border-[#5B3DF5]/30 hover:shadow-[0_4px_20px_rgba(91,61,245,0.06)] text-sm transition-all duration-200"
        >
          <Github size={14} /> View all on GitHub
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
