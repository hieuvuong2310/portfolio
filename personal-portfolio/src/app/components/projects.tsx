import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import projectsData from "../resources/projects.json";
import { CONTACT_INFO } from "../constants/config";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A handful of products that blend human-centered design with scalable
            DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <Card
              key={project.projectName}
              className="group overflow-hidden border border-border/60 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-56 bg-muted overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.projectName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/10 to-background/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold">{project.projectName}</h3>
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:underline whitespace-nowrap"
                  >
                    View repo →
                  </Link>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techstacks.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/20 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-6">
          <Link
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-semibold hover:border-primary transition-colors"
          >
            Explore more builds on GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}
