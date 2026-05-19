import { motion } from "framer-motion";
import { Linkedin, Github, Youtube, Mail } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/hirthick-srinivaasan",
    href: "https://www.linkedin.com/in/hirthick-srinivaasan-7b426b26b/",
    color: "#0A66C2",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "@Hirthick17",
    href: "https://github.com/Hirthick17",
    color: "#111827",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "Hirthick's Vision",
    href: "https://www.youtube.com/@Hirthicks-Vision",
    color: "#FF0000",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "hirthicksrinivaasan2@gmail.com",
    href: "mailto:hirthicksrinivaasan2@gmail.com",
    color: "#5B3DF5",
  },
];

const ContactSection = () => {

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5B3DF5]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#5B3DF5] text-xs tracking-[0.2em] uppercase font-medium mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight"
          >
            Let's build something{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg, #5B3DF5, #7C5CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              operationally intelligent
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#6B7280] text-base mt-4 max-w-xl mx-auto"
          >
            I'm interested in conversations around operational systems, AI-assisted workflows, and
            product engineering. Founders, engineers, and recruiters — let's talk.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Social links + status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Availability card */}
            <div
              className="p-5 rounded-2xl border border-[#E5E7EB] bg-white shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5B3DF5] animate-pulse" />
                <span className="text-[#5B3DF5] font-medium text-sm">Available for opportunities</span>
              </div>
              <p className="text-[#6B7280] text-base leading-relaxed">
                Open to internships, freelance projects, and collaborative builds in operational AI and e-commerce tooling.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-2.5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#5B3DF5]/30 hover:shadow-[0_4px_20px_rgba(91,61,245,0.06)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: `${social.color}15`, border: `1px solid ${social.color}25` }}
                    >
                      <Icon size={16} style={{ color: social.color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#111827] text-sm font-medium">{social.label}</p>
                      <p className="text-[#6B7280] text-sm truncate">{social.handle}</p>
                    </div>
                    <div className="ml-auto text-[#6B7280] group-hover:text-[#111827] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
