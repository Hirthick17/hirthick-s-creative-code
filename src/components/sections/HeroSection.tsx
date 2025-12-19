import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Mail, FileText, Code2 } from "lucide-react";
import profileImage from "@/assets/WhatsApp Image 2025-12-17 at 7.00.31 PM.jpeg";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hirthick-srinivaasan-7b426b26b/", // TODO: replace with your actual LinkedIn profile URL
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Hirthick17", // TODO: replace with your actual GitHub profile URL
      label: "GitHub",
    },
    {
      icon: Code2,
      href: "https://leetcode.com/u/6Dkg6YOmcb/", // TODO: replace with your actual LeetCode profile URL
      label: "LeetCode",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Hirthicks-Vision", // TODO: replace with your actual YouTube channel URL
      label: "YouTube",
    },
    {
      icon: Mail,
      href: "mailto:hirthicksrinivaasan2@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-20 bg-gradient-to-br from-background via-surface-elevated/40 to-background relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#A020F0]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#A020F0]/15 blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Main content + CTA */}
          <div className="space-y-8 md:space-y-10 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A020F0]/20 bg-background/80 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A020F0]" />
              <span>Hi there</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                I&apos;m{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#A020F0] via-fuchsia-500 to-cyan-400">
                  Hirthick Srinivaasan V B
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
                Software Engineer, Content Creator & Aspiring Entrepreneur crafting clean interfaces,
                smooth interactions, and meaningful digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="lg"
                className="bg-[#A020F0] hover:bg-[#8A1BD0] text-white shadow-[0_0_25px_rgba(160,32,240,0.45)] hover:shadow-[0_0_35px_rgba(160,32,240,0.75)]"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1sFNLsmJIwpMbASpG7HE3ycyUDR3GY9iJ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="border-[#A020F0]/40 text-foreground hover:border-[#A020F0] hover:text-[#A020F0]"
                asChild
              >
                <a
                  href="mailto:hirthicksrinivaasan2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Open to internships & freelance work</span>
              </div>
              <div className="flex gap-4">
                <div>
                  <p className="font-heading text-base text-foreground">2+</p>
                  <p className="text-xs text-muted-foreground">Years building projects</p>
                </div>
                <div>
                  <p className="font-heading text-base text-foreground">10+</p>
                  <p className="text-xs text-muted-foreground">Projects shipped</p>
                </div>
              </div>
            </div>

            {/* Social links - horizontal row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-secondary/60 px-4 py-2 text-sm text-muted-foreground hover:border-[#A020F0] hover:text-white hover:bg-[#A020F0] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Profile image panel - adjacent to intro */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative flex items-center justify-center">
              {/* Outer decorative ring */}
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full border-2 border-dashed border-[#A020F0]/60" />

              {/* Card container */}
              <div className="relative rounded-3xl bg-card/90 backdrop-blur-xl border border-white/10 shadow-2xl px-6 py-6 md:px-8 md:py-8">
                <div className="relative mx-auto flex h-64 w-64 md:h-[18rem] md:w-[18rem] items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A020F0] via-fuchsia-500 to-slate-900 opacity-70 blur-3xl animate-glow-pulse" />
                  <a
                    href={socialLinks[0].href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View my main profile"
                    className="relative block h-56 w-56 md:h-64 md:w-64 rounded-full border-[6px] border-background/90 shadow-xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
                  >
                    <img
                      src={profileImage}
                      alt="Hirthick Srinivaasan V B"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center top" }}
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* Small tag under image */}
                <div className="mt-5 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-6 rounded-full bg-[#A020F0]" />
                    <span>Based in Chennai • VIT Student</span>
                  </span>
                  <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/80">
                    Portfolio 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
