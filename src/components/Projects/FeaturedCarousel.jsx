import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import escaLogo from "../../assets/projects/esca-logo.svg";
import panpacificLogo from "../../assets/projects/panpacific-logo.webp";

const experience = [
  {
    title: "ESCA Agricultural Trading Platform",
    type: "Government-funded agtech platform",
    description: "Building tools that help farmers scan harvests, track produce flow, and monitor greenhouse conditions while shipping five or more production features each week.",
    result: "Used by farming communities in daily operations",
    tech: ["React", "TypeScript", "Django", "PostgreSQL"],
    logo: escaLogo,
  },
  {
    title: "Panpacific University CMS",
    type: "Self-service content platform",
    description: "Created reusable content blocks and no-code workflows so non-technical university staff can independently manage academic, admissions, and sustainability pages.",
    result: "Reduced reliance on developers for routine content updates",
    tech: ["React", "Node.js", "Supabase", "Tailwind CSS"],
    logo: panpacificLogo,
  },
];

export default function FeaturedCarousel() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-2">
      {experience.map((item) => (
        <article key={item.title} className="card flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <img src={item.logo} alt="" className="h-10 max-w-32 object-contain object-left" />
            <ArrowUpRightIcon className="size-5 text-muted" aria-hidden="true" />
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{item.type}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{item.title}</h3>
          <p className="mt-4 flex-grow text-sm leading-7 text-muted">{item.description}</p>
          <p className="mt-6 border-l-2 border-primary pl-4 text-sm font-medium text-foreground">{item.result}</p>
          <div className="mt-6 flex flex-wrap gap-2">{item.tech.map((tech) => <span key={tech} className="badge">{tech}</span>)}</div>
        </article>
      ))}
    </div>
  );
}
