import React from "react";
import { ArrowDownTrayIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import resumePdf from "../../assets/documents/Marven_Luis_Resume.pdf";

const proofPoints = [
  "Shipping production features weekly",
  "Full-stack and mobile experience",
  "Open to software engineering roles",
];

function Home() {
  return (
    <section id="home" className="section border-b border-border">
      <div className="container-max section-padding grid gap-12 pt-14 lg:grid-cols-[1.5fr_0.8fr] lg:items-end lg:pt-24">
        <div>
          <div className="eyebrow mb-6"><span className="status-dot" /> Available for opportunities</div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            I build reliable software that turns complex workflows into <span className="text-primary">useful products.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            I&apos;m Marven, a full-stack developer working across web, backend, and mobile. I currently build production tools for agricultural communities and university teams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#experience" className="button button-primary">View my experience <ArrowRightIcon className="size-4" /></a>
            <a href={resumePdf} download className="button button-outline"><ArrowDownTrayIcon className="size-4" /> Download résumé</a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href="https://www.linkedin.com/in/marven-luis/" target="_blank" rel="noreferrer" className="icon-button" aria-label="Marven Luis on LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com/Nevram26" target="_blank" rel="noreferrer" className="icon-button" aria-label="Marven Luis on GitHub"><FaGithub /></a>
          </div>
        </div>

        <aside className="card p-6 sm:p-7" aria-label="Professional summary">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">At a glance</p>
          <ul className="mt-5 flex flex-col gap-4">
            {proofPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-foreground">
                <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-sm text-muted">Based in the Philippines · Open to remote and hybrid work</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Home;
