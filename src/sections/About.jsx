import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, maintainable, and efficient code following best practices and design patterns.",
  },

  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing applications for speed and efficiency, ensuring smooth user experiences.",
  },

  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with teams to deliver high-quality software solutions.",
  },

  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Bringing creative ideas to life through innovative problem-solving and cutting-edge technologies.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Always learning,
              <span className="font-serif italic font-normal text-white">
                {" "}
                always building.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm James, a full stack developer passionate about building
                complete web applications from the ground up. I enjoy working
                across the entire stack — crafting intuitive user interfaces and
                building reliable, scalable backends.
              </p>
              <p>
                I believe great software is more than just working code. It's
                about the details — clean architecture, smooth user experience,
                and solutions that actually solve real problems.
              </p>
              <p>
                I'm constantly growing as a developer, exploring new
                technologies and approaches to build better, more impactful
                applications.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="font-lg font-medium italic text-foreground">
                "I believe the best developers never stop learning — they
                embrace every challenge as an opportunity to grow."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
