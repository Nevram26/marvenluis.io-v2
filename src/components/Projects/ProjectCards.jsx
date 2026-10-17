import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function ProjectCard({ imgPath, title, description, ghLink, tech = [] }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      {imgPath ? <img src={imgPath} alt={`${title} project preview`} className="aspect-[16/10] w-full border-b border-border object-cover" loading="lazy" /> : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <a href={ghLink} target="_blank" rel="noreferrer" className="icon-link" aria-label={`View ${title} on GitHub`}><ArrowUpRightIcon className="size-4" /></a>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{tech.map((item) => <span key={item} className="badge badge-muted">{item}</span>)}</div>
      </div>
    </article>
  );
}

export default ProjectCard;
