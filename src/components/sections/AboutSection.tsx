import { motion } from "framer-motion";
import { Settings2, BrainCircuit, Package2 } from "lucide-react";

const focusCards = [
  {
    icon: Settings2,
    title: "Operational Systems",
    desc: "Designing software that eliminates broken manual processes in real business environments.",
    color: "#5B3DF5",
  },
  {
    icon: BrainCircuit,
    title: "AI-Assisted Workflows",
    desc: "Integrating AI into the right parts of a workflow — where it reduces effort without adding complexity.",
    color: "#7C5CFF",
  },
  {
    icon: Package2,
    title: "Product Engineering",
    desc: "Building complete products with business logic, user flows, and operational clarity at their core.",
    color: "#5B3DF5",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
};

const AboutSection = () => (
  <section id="about" className="relative py-24 md:py-32 px-4 md:px-6 bg-[#F8F8FC] overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-[#5B3DF5]/5 rounded-full blur-[80px] pointer-events-none" />

    <div className="max-w-[1400px] mx-auto">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[#5B3DF5] text-xs tracking-[0.2em] uppercase font-medium mb-4"
      >
        Who is Hirthick?
      </motion.p>

      {/* Layout: video + text */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="video-wrapper p-1 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm"
        >
          <div className="aspect-video bg-[#F8F8FC] flex items-center justify-center rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed?listType=user_uploads&list=Hirthicks-Vision"
              title="Who is Hirthick?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Identity statement */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6 pt-2"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
            Most operational problems are not caused by lack of effort —{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #5B3DF5 0%, #7C5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              they are caused by broken systems.
            </span>
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed">
            I build software systems focused on reducing friction using AI, automation, and
            product thinking. My work sits at the intersection of operational intelligence
            and practical engineering — not just writing code, but designing systems that
            genuinely change how work gets done.
          </p>
          <p className="text-[#6B7280] text-base leading-relaxed">
            As a CSE student at VIT Chennai with hands-on experience through Daira and
            personal projects, I focus on the e-commerce and operational domain — building
            tools that replace repetitive human effort with intelligent systems.
          </p>

          <div className="pt-2 flex flex-col gap-2.5">
            {[
              "E-commerce · Operational tooling · Workflow systems",
              "Based in Chennai · Open to remote collaboration",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                <span className="w-4 h-px bg-[#5B3DF5]" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Focus cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        {focusCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group p-6 rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:border-[#5B3DF5]/30 hover:shadow-[0_4px_20px_rgba(91,61,245,0.06)] hover:-translate-y-1"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${card.color}15`, border: `1px solid ${card.color}20` }}
              >
                <Icon size={18} style={{ color: card.color }} />
              </div>
              <h3 className="font-heading font-semibold text-[#111827] text-base mb-2">{card.title}</h3>
              <p className="text-[#6B7280] text-base leading-relaxed">{card.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;
