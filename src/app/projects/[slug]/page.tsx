import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { ProjectVisual } from "@/components/project-work";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return {
    title: `${project.name} — Engineering case study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | Marven Luis`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Marven Luis`,
      description: project.summary,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <main id="main-content" className="container-wide pb-20 pt-10 md:pt-16">
      <Link href="/#work" className="text-link">
        <ArrowLeft className="size-4" /> Back to selected work
      </Link>
      <header className="pb-12 pt-12 md:pt-16">
        <p className="eyebrow mb-4">
          Engineering case study / {project.category}
        </p>
        <h1 className="max-w-3xl text-4xl leading-tight tracking-[-0.045em] md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge variant="secondary" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </header>
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_260px]">
        <article>
          <ProjectVisual project={project} priority />
          <p className="mt-3 text-xs text-muted-foreground">
            {project.imageType === "logo"
              ? "Project identity. Product screenshots are not available in the portfolio."
              : "Application screenshot from the original project."}
          </p>
          <section className="mt-12" aria-labelledby="overview">
            <h2 id="overview" className="text-2xl tracking-tight">
              The problem
            </h2>
            <p className="body-copy mt-4">{project.problem}</p>
          </section>
          <section className="mt-10" aria-labelledby="contribution">
            <h2 id="contribution" className="text-2xl tracking-tight">
              My contribution
            </h2>
            <ul className="body-copy mt-4 flex list-disc flex-col gap-3 pl-5">
              {project.work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="mt-10" aria-labelledby="decisions">
            <h2 id="decisions" className="text-2xl tracking-tight">
              Architecture & approach
            </h2>
            <div className="mt-5 flex flex-col gap-6">
              {project.decisions.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base">{item.title}</h3>
                  <p className="body-copy mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section
            className="mt-10 rounded-lg bg-accent p-6 md:p-8"
            aria-labelledby="outcome"
          >
            <p className="eyebrow mb-3">The result</p>
            <h2 id="outcome" className="text-xl tracking-tight">
              What the work made possible
            </h2>
            <p className="body-copy mt-3">{project.outcome}</p>
          </section>
        </article>
        <aside
          className="border-t pt-7 lg:sticky lg:top-28 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"
          aria-label="Project details"
        >
          <p className="eyebrow">At a glance</p>
          <dl className="mt-6 flex flex-col gap-6">
            <div>
              <dt className="text-xs text-muted-foreground">My role</dt>
              <dd className="mt-2 text-sm leading-6">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Focus</dt>
              <dd className="mt-2 text-sm leading-6">{project.focus}</dd>
            </div>
          </dl>
          {project.github ? (
            <Button asChild variant="outline" className="mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          ) : (
            <p className="mt-8 text-xs leading-6 text-muted-foreground">
              Professional project. No public source repository is linked.
            </p>
          )}
          <nav
            aria-label="Case study sections"
            className="mt-8 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground"
          >
            <a href="#overview">The problem</a>
            <a href="#contribution">My contribution</a>
            <a href="#decisions">Architecture & approach</a>
            <a href="#outcome">Outcome</a>
          </nav>
        </aside>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-6 border-t pt-8 sm:flex-row">
        <Link href="/#contact" className="text-link">
          Let&apos;s discuss the work <ArrowUpRight className="size-4" />
        </Link>
        <Link href={`/projects/${next.slug}`} className="text-link">
          Next: {next.name} <ArrowRight className="size-4" />
        </Link>
      </div>
    </main>
  );
}
