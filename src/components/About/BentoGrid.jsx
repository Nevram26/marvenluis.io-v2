import React from "react";
import { AcademicCapIcon, CodeBracketIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const languages = ["JavaScript", "TypeScript", "Java", "Python", "Go", "PHP"];
const platforms = ["React", "React Native", "Node.js", "Django", "PostgreSQL", "Supabase", "Docker", "Git"];

const strengths = [
  { icon: CodeBracketIcon, title: "End-to-end delivery", body: "From interface and API design to data models, testing, and deployment." },
  { icon: UserGroupIcon, title: "Team-minded", body: "Clear communication, thoughtful handoffs, and solutions that others can maintain." },
  { icon: AcademicCapIcon, title: "Always learning", body: "Dean’s Lister for 7 of 8 semesters and a 2025 Meralco IDOL Hackathon awardee." },
];

function BentoGrid() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {strengths.map(({ icon: Icon, title, body }) => (
        <article key={title} className="card p-6">
          <div className="icon-tile"><Icon className="size-5" /></div>
          <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
        </article>
      ))}
      <article className="card p-6 lg:col-span-2">
        <p className="card-label">Core languages</p>
        <div className="mt-4 flex flex-wrap gap-2">{languages.map((item) => <span key={item} className="badge">{item}</span>)}</div>
      </article>
      <article className="card p-6">
        <p className="card-label">Frameworks &amp; tools</p>
        <div className="mt-4 flex flex-wrap gap-2">{platforms.map((item) => <span key={item} className="badge">{item}</span>)}</div>
      </article>
    </div>
  );
}

export default BentoGrid;
