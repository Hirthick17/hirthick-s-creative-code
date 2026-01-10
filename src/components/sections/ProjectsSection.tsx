import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Heart, Cpu } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Heart,
      title: "Liraza",
      subtitle: "AI Emotional Companion",
      description:
        "A user-friendly, high-empathy emotional support interface with LLM integration tuned for companionship and emotional closeness.",
      techStack: ["React", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "Supabase"],
      highlights: [
        "Containerized with Docker Desktop for scalable deployment",
        "Complex backend structure with Supabase for data management",
        "AI-vibe coding approach saving dozens of development hours",
      ],
      color: "from-rose-500/20 to-pink-500/20",
      links: { demo: "#", github: "https://github.com/Hirthick17/Liraza-AI-Powered-Mood-Tracking-Emotional-Support-Web-App" },
    },
    {
      icon: Cpu,
      title: "Embedded ML",
      subtitle: "TinyML for Microcontrollers",
      description:
        "A lightweight machine learning model running on Arduino Nano, bringing AI capabilities to resource-constrained devices.",
      techStack: ["Python", "TensorFlow", "Keras", "Arduino", "MLP"],
      highlights: [
        "Trained MLP model compressed to 8-bit for microcontrollers",
        "Tested in simulation environment before hardware deployment",
        "Enables smart features on basic electronic devices",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      links: { demo: "#", github: "https://github.com/Hirthick17/Embedded-ML-Based-Environmental-Sensor-System-using-Arduino-Nano" },
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-heading font-medium uppercase tracking-wider text-sm">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each project explicitly conveys my learning and thinking process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative card-elevated rounded-3xl overflow-hidden hover-lift"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                    <project.icon className="w-8 h-8" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.demo}
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
