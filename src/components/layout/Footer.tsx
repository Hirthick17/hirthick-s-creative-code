import { Github, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-white border-t border-[#E5E7EB] py-10 px-4 md:px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#5B3DF5] to-[#7C5CFF] flex items-center justify-center text-white text-xs font-bold">
          H
        </span>
        <span className="font-heading font-semibold text-[#111827]">
          Hirthick<span className="text-[#5B3DF5]">.</span>
        </span>
      </div>

      {/* Tag */}
      <p className="text-[#6B7280] text-sm text-center">
        "I build systems that reduce operational friction." ·{" "}
        <span className="text-[#111827]">Hirthick Srinivaasan V B</span>
      </p>

      {/* Social links */}
      <div className="flex items-center gap-3">
        {[
          { icon: Github,   href: "https://github.com/Hirthick17",                                    label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/hirthick-srinivaasan-7b426b26b/",     label: "LinkedIn" },
          { icon: Youtube,  href: "https://www.youtube.com/@Hirthicks-Vision",                       label: "YouTube" },
          { icon: Mail,     href: "mailto:hirthicksrinivaasan2@gmail.com",                            label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-8 h-8 rounded-lg border border-[#E5E7EB] bg-[#F8F8FC] flex items-center justify-center text-[#6B7280] hover:text-[#5B3DF5] hover:border-[#5B3DF5]/30 hover:bg-white transition-all duration-200"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-[#E5E7EB] text-center">
      <p className="text-[#6B7280] text-sm">
        © {new Date().getFullYear()} Hirthick Srinivaasan V B · VIT Chennai · All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
