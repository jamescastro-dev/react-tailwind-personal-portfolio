import { Button } from "@/components/Button";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import profileImg from "@/assets/profile.webp";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "Django REST Framework",
  "Node.js",
  "Express.js",
  "Prisma ORM",
  "PostgreSQL",
  "Supabase",
  "Neon",
  "Cloudinary",
  "Tailwind CSS",
  "Vite",
  "Git",
  "GitHub",
  "OpenRouter API",
  "Vercel",
  "Render",
  "Responsive Design"
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-md text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full-Stack Web Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              {/* Sized so the intro and buttons stay above the fold on common laptops */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] animate-fade-in animation-delay-100">
                <span className="text-primary glow-text">Custom</span> websites{" "}
                <span className="font-serif italic font-normal text-white">
                  that turn visitors into inquiries.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm James, a full-stack web developer in the Philippines. I
                build each site around the client's business: a listings
                platform with an admin portal for a licensed broker, and an
                interactive lot map for a real estate developer. Fast and
                mobile-first by default.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/Castro_JamesCarl_Resume.pdf" download="Castro_JamesCarl_Resume.pdf">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[
                { icon: Github, href: "https://github.com/jamescastro-dev" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/james-carl-castro-7828a2392",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.icon.name}`}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Image Content */}

          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
                  rounded-3xl bg-linear-to-br
                  from-primary/30 via-transparent
                  to-primary/10 blur-xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profileImg}
                  alt="Portrait of James Carl Castro"
                  width={409}
                  height={511}
                  className="w-full max-w-md aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
