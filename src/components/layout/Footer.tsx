import { Github, Linkedin, Youtube, Mail, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Code2, href: "#", label: "LeetCode" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-heading font-bold text-xl inline-block mb-2">
              <span className="text-primary">H</span>irthick
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Hirthick Srinivaasan V B. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
