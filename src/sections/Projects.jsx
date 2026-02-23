import { ArrowUpRight } from "lucide-react";
import personalportflio from "@/assets/personal-portfolio.png";
import bookinventory from "@/assets/book-inventory.png";
import capstone from "@/assets/capstone.png";

const projects = [
  {
    title: "Book Inventory System",
    description:
      "A full stack web application for managing book collections. Features JWT authentication, CRUD operations, image uploads via Cloudinary, and a REST API backend.",
    image: bookinventory,
    tags: ["React", "Django", "PostgreSQL", "Cloudinary", "Tailwind CSS"],
    link: "https://book-inventory-wheat.vercel.app",
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal developer portfolio showcasing my projects and skills. Built with a modern dark theme, smooth animations, and fully responsive design.",
    image: personalportflio,
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "#",
  },
  {
    title: "Web-Based Appointment System",
    description:
      "A capstone project — a web-based appointment system that allows users to book, manage, and track appointments efficiently.",
    image: capstone,
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
    link: "https://sta-cruz-multispeciality-hospital-home.onrender.com/index.html",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-46 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              showcase my skills and creativity.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent projects that highlight my expertise in
            full stack development,
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 ${
                idx === projects.length - 1 && projects.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-xl md:mx-auto w-full"
                  : ""
              }`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t
                         from-card via-card/50 to-transparent 
                         opacity-60"
                />

                {/* Overlay Link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link || "#"}
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transitions-color">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary
                            group-hover:translate-x-1
                            group-hover:translatey-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
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
