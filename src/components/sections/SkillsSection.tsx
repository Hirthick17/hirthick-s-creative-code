import { 
  Video, 
  Camera, 
  PenTool, 
  Sparkles,
  Code,
  Database,
  Globe,
  Cpu,
  Terminal,
  Wand2
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Creative & Content",
      icon: Video,
      skills: [
        { name: "Video Editing", icon: Video },
        { name: "Videography", icon: Camera },
        { name: "Graphic Design", icon: PenTool },
        { name: "Content Creation", icon: Sparkles },
        { name: "Storytelling", icon: Wand2 },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", icon: Code },
        { name: "C & C++", icon: Terminal },
        { name: "JavaScript", icon: Code },
        { name: "Data Structures", icon: Database },
        { name: "Operating Systems", icon: Cpu },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React.js", icon: Code },
        { name: "HTML & CSS", icon: Globe },
        { name: "Node.js & Axios", icon: Terminal },
        { name: "MySQL & Supabase", icon: Database },
        { name: "Docker", icon: Cpu },
      ],
    },
    {
      title: "Modern Tools",
      icon: Wand2,
      skills: [
        { name: "Prompt Engineering", icon: Wand2 },
        { name: "Vibe Coding", icon: Sparkles },
        { name: "AI Tools", icon: Cpu },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-heading font-medium uppercase tracking-wider text-sm">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse toolkit built through hands-on projects and real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="card-elevated rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
                  >
                    <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
