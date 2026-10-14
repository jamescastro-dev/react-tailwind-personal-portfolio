import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

// Everything here mirrors the CV (public/Castro_JamesCarl_Resume.pdf).
const experience = [
  {
    role: "Freelance Full-Stack Developer",
    period: "2026 – Present",
    points: [
      "Built two real estate websites for clients with Next.js and Supabase.",
      "Delivered property search, an admin portal, and an interactive lot map.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer Intern",
    org: "Simplevia Technologies Inc.",
    period: "January 2025 – May 2025",
    points: [
      "Developed responsive, user-friendly web interfaces using React, TypeScript, and Tailwind CSS.",
      "Built reusable React components and pages, implementing new features for the application.",
      "Participated in code reviews and applied feedback to improve code quality and maintainability.",
      "Collaborated with the team using Git and GitHub, following clean-code best practices.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Git", "GitHub"],
  },
];

const certifications = [
  {
    title: "Meta Full-Stack Developer Professional Certificate",
    issuer: "Coursera",
    year: "2025",
    href: "https://coursera.org/share/5e3ebe807d63ada725f3175e5fea5ab5",
  },
  {
    title: "Frontend Web Development with TypeScript",
    issuer: "Edureka",
    year: "2025",
    href: "https://coursera.org/share/d5dcd515516c71b730bedcf66451d189",
  },
  {
    title: "Meta Coding Interview Preparation",
    issuer: "Coursera",
    year: "2026",
    href: "https://coursera.org/share/b2954e15f7e8711faf29451d0ad4ed95",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Where I've
            <span className="font-serif italic font-normal text-white">
              {" "}
              worked and studied.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Work */}
          <div className="lg:col-span-3 space-y-6">
            {experience.map((job) => (
              <div
                key={job.role}
                className="glass rounded-2xl p-6 sm:p-8 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    {job.org && (
                      <p className="text-foreground font-medium">{job.org}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground list-disc pl-5 marker:text-primary">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education and certifications */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 sm:p-8 animate-fade-in animation-delay-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0 space-y-1">
                  <h3 className="text-xl font-semibold">
                    BS Information Technology
                  </h3>
                  <p className="text-foreground font-medium">
                    Bulacan State University – Main Campus
                  </p>
                  <p className="text-sm text-muted-foreground">2021 – 2025</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground list-disc pl-5 marker:text-primary">
                <li>Latin Honor: Cum Laude</li>
                <li>
                  Specialization: Web and Mobile Application Development
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8 animate-fade-in animation-delay-200">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-xl -m-2 p-2 hover:bg-surface transition-colors">
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {cert.title}
                        </span>
                        <ExternalLink className="w-4 h-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary" />
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        {cert.issuer} · {cert.year} · View certificate
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
