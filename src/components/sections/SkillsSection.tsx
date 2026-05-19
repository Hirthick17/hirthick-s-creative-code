import { motion } from "framer-motion";
import {
  Code2, Database, Lock, Globe, BrainCircuit,
  MessageSquare, GitBranch, Boxes, BarChart3, FileText, Camera, Video,
} from "lucide-react";

interface SkillGroup {
  category: string;
  accent: string;
  span: string;
  skills: { icon: React.FC<{ size?: number; className?: string }>; name: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Product Development",
    accent: "#5B3DF5",
    span: "col-span-12 md:col-span-7",
    skills: [
      { icon: Code2,    name: "Frontend Systems (React, TypeScript)" },
      { icon: Database, name: "Backend Systems (Node.js, Express)" },
      { icon: Database, name: "Database Design (MongoDB, SQL)" },
      { icon: Lock,     name: "Authentication & Security" },
      { icon: Globe,    name: "REST APIs & Integrations" },
    ],
  },
  {
    category: "AI & Automation",
    accent: "#7C5CFF",
    span: "col-span-12 md:col-span-5",
    skills: [
      { icon: BrainCircuit, name: "AI-Assisted Workflows" },
      { icon: MessageSquare, name: "Prompt Engineering" },
      { icon: GitBranch,    name: "Automation Systems" },
      { icon: Boxes,        name: "AI Product Integration" },
    ],
  },
  {
    category: "Operational Thinking",
    accent: "#5B3DF5",
    span: "col-span-12 md:col-span-5",
    skills: [
      { icon: BarChart3,  name: "Workflow Analysis" },
      { icon: GitBranch,  name: "Process Optimization" },
      { icon: Boxes,      name: "System Design" },
      { icon: Globe,      name: "Business Problem Understanding" },
    ],
  },
  {
    category: "Communication & UI/UX",
    accent: "#7C5CFF",
    span: "col-span-12 md:col-span-7",
    skills: [
      { icon: FileText,     name: "Technical Storytelling & Docs" },
      { icon: MessageSquare, name: "Product Explanation" },
      { icon: Camera,       name: "Photoshop & Visual Design" },
      { icon: Camera,       name: "Google Stitch" },
      { icon: Video,        name: "Premiere Pro" },
      { icon: Video,        name: "DaVinci Resolve" },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="relative py-24 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#5B3DF5]/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-14">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#5B3DF5] text-xs tracking-[0.2em] uppercase font-medium mb-4"
        >
          Skills & Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight"
        >
          Not just a stack —{" "}
          <span style={{ backgroundImage: "linear-gradient(135deg, #5B3DF5, #7C5CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            a capability set
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[#6B7280] text-base mt-4 max-w-xl"
        >
          Organized by what I can do — not vanity metrics or skill percentages.
        </motion.p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-12 gap-4">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1, duration: 0.5 }}
            className={`${group.span} group p-6 md:p-7 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#5B3DF5]/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(91,61,245,0.06)] hover:-translate-y-0.5`}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1 h-6 rounded-full"
                style={{ background: `linear-gradient(to bottom, ${group.accent}, ${group.accent}40)` }}
              />
              <h3 className="font-heading font-semibold text-[#111827] text-base">{group.category}</h3>
            </div>

            {/* Skills list */}
            <div className="grid sm:grid-cols-2 gap-2.5">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-[#E5E7EB] bg-[#F8F8FC] hover:border-[#5B3DF5]/20 hover:bg-white transition-all duration-200 group/skill cursor-default"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover/skill:scale-110"
                      style={{ background: `${group.accent}15` }}
                    >
                      <Icon size={12} style={{ color: group.accent }} />
                    </div>
                    <span className="text-[#6B7280] text-sm font-medium group-hover/skill:text-[#111827] transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
