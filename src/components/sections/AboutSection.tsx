import { GraduationCap, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "VIT Chennai",
      description: "Second-year B.Tech student pursuing Computer Science",
    },
    {
      icon: Target,
      title: "Multi-disciplinary",
      description: "Bridging development, content creation & entrepreneurship",
    },
    {
      icon: Sparkles,
      title: "Problem Solver",
      description: "Each project reflects unique learning & creative thinking",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-heading font-medium uppercase tracking-wider text-sm">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Crafting Digital
                <span className="text-gradient"> Experiences</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate technologist who believes in the power of combining 
                diverse skills. My journey spans across <span className="text-foreground font-medium">full-stack development</span>, 
                <span className="text-foreground font-medium"> video production</span>, and 
                <span className="text-foreground font-medium"> brand building</span>.
              </p>
              <p>
                What drives me is not just building things that work, but creating 
                solutions that tell a story. Each project I undertake is an opportunity 
                to learn, experiment, and push boundaries.
              </p>
              <p>
                My broader knowledge combined with deep expertise in software engineering 
                allows me to approach problems from multiple angles, finding innovative 
                solutions that others might miss.
              </p>
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated p-6 rounded-2xl hover-lift flex items-start gap-5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
