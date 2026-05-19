import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Youtube, ExternalLink } from "lucide-react";

interface TimelineItem {
  type: "education" | "work" | "brand";
  period: string;
  title: string;
  org: string;
  location: string;
  accent: string;
  icon: React.FC<{ size?: number }>;
  points: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "education",
    period: "2024 – 2028",
    org: "Vellore Institute of Technology (VIT Chennai)",
    location: "Chennai, Tamil Nadu",
    accent: "#5B3DF5",
    icon: GraduationCap,
    points: [
      "Focused on systems design, AI/ML fundamentals, and software engineering practices.",
      "Built AI-assisted tooling, browser extensions, and e-commerce platforms alongside academics.",
      "Developed a strong product-thinking lens by working on real operational problems during coursework.",
      "Active contributor to the intersection of AI tooling and business workflow optimization.",
    ],
  },
  {
    type: "work",
    period: "2024 (3 months)",
    org: "Daira",
    location: "Remote",
    accent: "#7C5CFF",
    icon: Briefcase,
    points: [
      "Created brand character for storytelling and problem-solution narrative",
      "Ran live marketing campaigns with on-ground content shooting",
      "Edited 10+ reels with consistent brand identity reaching 2k+ online visitors",
    ],
  },
  {
    type: "brand",
    period: "2025 – Present",
    org: "Hirthick's Vision",
    location: "YouTube · LinkedIn · GitHub",
    accent: "#5B3DF5",
    icon: Youtube,
    points: [
      "Building a personal brand around operational thinking, AI-assisted workflows, and product engineering.",
      "Creating structured content that explains complex systems in business-first language.",
      "Documenting real project case studies — problem, system built, and measurable outcome.",
      "Growing an audience of engineers and founders interested in practical AI-assisted tooling.",
    ],
  },
];

const EducationSection = () => (
  <section id="education" className="relative py-24 md:py-32 px-4 md:px-6 bg-[#F8F8FC] overflow-hidden">
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#5B3DF5]/5 rounded-full blur-[80px] pointer-events-none" />

    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-14">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#5B3DF5] text-xs tracking-[0.2em] uppercase font-medium mb-4"
        >
          Education & Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight"
        >
          The journey that{" "}
          <span style={{ backgroundImage: "linear-gradient(135deg, #5B3DF5, #7C5CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            shapes the thinking
          </span>
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-[#5B3DF5]/60 via-[#5B3DF5]/30 to-transparent" />

        <div className="space-y-10">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1">
                  <div
                    className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border border-[#E5E7EB] bg-white shadow-sm"
                    style={{ background: `${item.accent}10` }}
                  >
                    <Icon size={14} style={{ color: item.accent }} />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="p-6 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#5B3DF5]/30 hover:shadow-[0_4px_20px_rgba(91,61,245,0.06)] transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded"
                          style={{ background: `${item.accent}15`, color: item.accent }}
                        >
                          {item.period}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-[#111827] text-lg leading-tight">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#6B7280] text-sm">{item.org}</span>
                        <span className="text-[#D1D5DB] text-xs">·</span>
                        <span className="text-[#6B7280] text-sm">{item.location}</span>
                      </div>
                    </div>
                    {item.type === "brand" && (
                      <a
                        href="https://www.youtube.com/@Hirthicks-Vision"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#5B3DF5] transition-colors"
                      >
                        <ExternalLink size={12} />
                        Visit Channel
                      </a>
                    )}
                  </div>

                  {/* Points */}
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.accent }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
