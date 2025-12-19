import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Mail, 
  FileText, 
  Code2,
  ArrowUpRight
} from "lucide-react";

const ContactSection = () => {
  const links = [
    { icon: Linkedin, label: "LinkedIn", href: "#", description: "Connect professionally" },
    { icon: Github, label: "GitHub", href: "#", description: "View my code" },
    { icon: Code2, label: "LeetCode", href: "#", description: "Problem solving" },
    { icon: Youtube, label: "YouTube", href: "#", description: "Watch my content" },
    { icon: Mail, label: "Email", href: "mailto:hirthicksrinivaasan2@gmail.com", description: "Send a message" },
    { icon: FileText, label: "Resume", href: "https://drive.google.com/file/d/1QwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw/view?usp=sharing", description: "Download CV" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-heading font-medium uppercase tracking-wider text-sm">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open to opportunities, collaborations, and conversations about tech, 
            content, or entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group card-elevated rounded-2xl p-6 hover-lift text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <link.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-semibold mb-1 flex items-center justify-center gap-1">
                {link.label}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </h4>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Prefer a direct conversation?
          </p>
          <Button variant="hero" size="xl" asChild>
            <a
              href="mailto:hirthicksrinivaasan2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
              Send me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
