import { Calendar, TrendingUp, Users, Video, Palette, Code } from "lucide-react";

const WorkSection = () => {
  const experiences = [
    {
      icon: Video,
      title: "Freelance Video Editor",
      company: "Monish Cricket Commentary",
      period: "Aug 2024 – May 2025",
      highlights: [
        "Edited long-form cricket analysis videos with visual overlays and thumbnails",
        "Analyzed video performance and finalized content strategy for scripting & delivery",
        "Created 15+ high-engaging shorts achieving 10k+ views and 40% channel growth",
      ],
      metrics: { label: "Channel Growth", value: "+40%" },
    },
    {
      icon: Palette,
      title: "Brand Visual Identity Creator",
      company: "Daira Edtech",
      period: "Jun 2025 – Sep 2025",
      highlights: [
        "Created brand character for storytelling and problem-solution narrative",
        "Ran live marketing campaigns with on-ground content shooting",
        "Edited 10+ reels with consistent brand identity reaching 2k+ online visitors",
      ],
      metrics: { label: "Online Reach", value: "2k+" },
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      company: "LauncheEd Tech",
      period: "2024",
      highlights: [
        "Built cab ride booking & vendor management system",
        "Implemented JWT authentication with secure password hashing",
        "Created Node.js backend services with MySQL database integration",
        "Designed professional dashboards using React.js & Tailwind CSS",
      ],
      metrics: { label: "Tech Stack", value: "Full Stack" },
    },
  ];

  return (
    <section id="work" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-heading font-medium uppercase tracking-wider text-sm">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Work <span className="text-gradient">History</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experiences that shaped my approach to problem-solving
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="card-elevated rounded-2xl p-8 hover-lift group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0 w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <exp.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-heading font-semibold">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metric badge */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>{exp.metrics.label}:</span>
                      <span className="font-bold">{exp.metrics.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
