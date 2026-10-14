import { ArrowUpRight, Github } from "lucide-react";
import ardc from "@/assets/projects/ardc.webp";
import smgcproperties from "@/assets/projects/smgc-properties.webp";
import bookinventory from "@/assets/projects/book-inventory.webp";
import gymai from "@/assets/projects/gymai-planner.webp";

// Screenshots are 1280x800 (16:10). A project with no working live demo
// leaves demoUrl out, so only the GitHub button renders.
const IMAGE_WIDTH = 1280;
const IMAGE_HEIGHT = 800;

const projects = [
  {
    title: "Archer Realty and Development Corporation (ARDC) Website",
    description:
      "A website for a real estate developer's subdivisions, with an interactive lot map (lot selection, filters, full-screen mode), house model pages, and inquiry forms for prospective buyers. Mobile-first.",
    image: ardc,
    imageAlt:
      "ARDC website lot map for St. Agatha Homes Phase 5, with status filters, zoom controls, and the details panel for a selected lot.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    status: "Live preview, content rollout in progress",
    featured: true,
    demoUrl: "https://ardc-website-eight.vercel.app/",
    demoLabel: "Live preview",
  },
  {
    title: "SMGC Properties",
    description:
      "A real estate platform for a licensed broker: property search with buy/rent filters, listing pages with inquiry forms, and an admin portal for managing listings and leads.",
    image: smgcproperties,
    imageAlt:
      "SMGC Properties listings page with All, For Sale, and For Rent filters above a grid of property cards.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    status: "Live",
    demoUrl: "https://www.smgcproperties.com/",
    githubUrl: "https://github.com/jamescastro-dev/smgc-properties",
  },
  {
    title: "Book Inventory System",
    description:
      "A library app with reader and librarian roles. Readers borrow and return books; librarians add books by ISBN or barcode scan and manage loans.",
    image: bookinventory,
    imageAlt:
      "Book Inventory public catalogue with a search box, genre filters, and a grid of book covers marked Available.",
    tags: [
      "React",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Cloudinary",
      "GitHub Actions",
    ],
    status: "Live",
    demoUrl: "https://book-inventory-wheat.vercel.app/",
    githubUrl: "https://github.com/jamescastro-dev/book-inventory",
  },
  {
    title: "GymAI Planner",
    description:
      "An AI workout planner that builds a personalized weekly plan from a short questionnaire. Includes a public sample plan, a nutrition calculator, and AI meal ideas.",
    image: gymai,
    imageAlt:
      "GymAI Planner sample training plan page showing the goal, a 4-day upper/lower split, program notes, and the weekly schedule.",
    tags: [
      "React",
      "TypeScript",
      "Express.js",
      "Prisma ORM",
      "OpenRouter API",
      "GitHub Actions",
    ],
    status: "Live",
    // Links to the sample plan, which works without an account.
    demoUrl: "https://gym-ai-planner.vercel.app/sample",
    githubUrl: "https://github.com/jamescastro-dev/gym-ai-planner",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-46 bg-highlight/5 rounded-full blur-3xl" />
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
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
            full stack development.
          </p>
        </div>

        {/* Projects Grid */}
        {/* The featured project spans the full row; the rest sit three across
            on large screens and stack below that, so they're always equal size. */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            // The image links to the live demo when there is one. The button
            // below is the accessible link, so the image link is skipped by
            // keyboard and screen readers.
            const Media = project.demoUrl ? "a" : "div";
            const mediaProps = project.demoUrl
              ? {
                  href: project.demoUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  tabIndex: -1,
                  "aria-hidden": true,
                }
              : {};

            return (
              <div
                key={project.title}
                className={`group glass rounded-2xl overflow-hidden animate-fade-in ${
                  project.featured
                    ? "lg:col-span-3 lg:grid lg:grid-cols-2"
                    : "flex flex-col"
                }`}
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                {/* Image */}
                <Media
                  {...mediaProps}
                  className={`relative block overflow-hidden aspect-16/10 ${
                    project.featured ? "lg:self-center" : ""
                  }`}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t
                         from-card via-card/50 to-transparent
                         opacity-60"
                  />
                </Media>

                {/* Content */}
                <div
                  className={`p-6 space-y-4 ${
                    project.featured
                      ? "lg:p-10 lg:flex lg:flex-col lg:justify-center"
                      : "flex flex-col flex-1"
                  }`}>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.featured && (
                      <span className="terminal-badge uppercase">Featured</span>
                    )}
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground">
                      <span className="w-2 h-2 bg-green-500 rounded-full shrink-0" />
                      {project.status}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-semibold group-hover:text-primary transition-colors ${
                      project.featured ? "lg:text-2xl" : ""
                    }`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg shadow-primary/25 hover:bg-primary/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                        {project.demoLabel ?? "Live demo"}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-full glass text-sm font-medium hover:bg-primary/10 hover:text-primary transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
