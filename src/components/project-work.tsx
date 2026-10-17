import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { additionalProjects, projects, type Project } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function ProjectVisual({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "project-surface",
        project.surface === "sage" && "bg-accent",
        project.surface === "sand" && "bg-secondary",
      )}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 90vw, 500px"
        className={cn(
          "object-contain",
          project.imageType === "logo" ? "p-16 md:p-20" : "p-7",
        )}
      />
      <span className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        {project.imageType === "logo"
          ? project.category
          : "Application preview"}
      </span>
      <ArrowUpRight
        className="absolute right-5 top-5 size-4 text-muted-foreground"
        aria-hidden="true"
      />
    </div>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="pb-20 pt-5 md:pb-24"
      aria-labelledby="work-title"
    >
      <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">Selected work</p>
          <h2 id="work-title" className="section-title">
            Real problems. Practical solutions.
          </h2>
        </div>
        <span className="text-xs text-muted-foreground">
          A closer look at the work behind the code.
        </span>
      </div>
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`Read ${project.name} case study`}
            >
              <ProjectVisual project={project} priority={index < 2} />
            </Link>
            <div className="mt-5 flex items-baseline justify-between gap-3">
              <h3 className="text-xl tracking-tight">
                <Link href={`/projects/${project.slug}`}>{project.name}</Link>
              </h3>
              <span className="text-[11px] text-muted-foreground">
                0{index + 1}
              </span>
            </div>
            <p className="body-copy mt-2">{project.summary}</p>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              <span className="font-medium text-foreground">My role:</span>{" "}
              {project.role}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <Link href={`/projects/${project.slug}`} className="text-link mt-5">
              Read case study <ArrowRight className="size-4" />
            </Link>
          </article>
        ))}
      </div>
      <details className="mt-12 border-y py-5">
        <summary className="cursor-pointer text-sm font-medium">
          More projects{" "}
          <span className="ml-2 text-muted-foreground">
            — experiments and academic work
          </span>
        </summary>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {additionalProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                {project.name}
                <ArrowUpRight className="size-3.5 text-muted-foreground" />
              </div>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {project.category}
              </p>
            </a>
          ))}
        </div>
      </details>
    </section>
  );
}
