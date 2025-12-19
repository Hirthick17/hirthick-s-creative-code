import { GraduationCap, Award, Trophy } from "lucide-react";

const EducationSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Class 10th",
      score: "91%",
      description: "Strong foundation in academics",
    },
    {
      icon: Award,
      title: "Class 12th",
      score: "91.6%",
      description: "Consistent academic excellence",
    },
    {
      icon: Trophy,
      title: "JEE Mains",
      score: "89%ile",
      description: "Competitive exam performance",
    },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-heading font-medium uppercase tracking-wider text-sm">
            Academics
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        {/* Current Education */}
        <div className="card-elevated rounded-3xl p-8 md:p-12 mb-12 text-center hover-lift">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
            Vellore Institute of Technology
          </h3>
          <p className="text-primary font-medium text-lg mb-2">Chennai Campus</p>
          <p className="text-muted-foreground">
            B.Tech in Computer Science • Second Year
          </p>
        </div>

        {/* Academic Achievements */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="card-elevated rounded-2xl p-8 text-center hover-lift group"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <achievement.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">
                {achievement.title}
              </h4>
              <p className="text-4xl font-heading font-bold text-gradient mb-2">
                {achievement.score}
              </p>
              <p className="text-muted-foreground text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
