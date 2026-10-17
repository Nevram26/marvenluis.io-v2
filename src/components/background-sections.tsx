import { ArrowUpRight } from "lucide-react";
import { profile, skills } from "@/lib/portfolio";

export function Experience() {
  const roles = [
    {
      company: "ESCA",
      role: "Full-stack development",
      duration: "4-month engagement",
      context: "Government-funded agricultural platform",
      work: [
        "Built harvest-scanning, produce-tracking, and greenhouse-monitoring tools.",
        "Delivered features across React, TypeScript, Django, and PostgreSQL.",
      ],
    },
    {
      company: "Panpacific University",
      role: "Full-stack development",
      duration: "7-month engagement",
      context: "University content management system",
      work: [
        "Built reusable content blocks that let non-technical staff manage pages.",
        "Delivered Academics, Admissions, and Sustainability sections.",
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="section-space section-rule"
      aria-labelledby="experience-title"
    >
      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-14">
        <div>
          <p className="eyebrow mb-3">Experience</p>
          <h2 id="experience-title" className="section-title">
            Work with
            <br className="hidden md:block" /> a purpose.
          </h2>
          <a className="text-link mt-6" href={profile.resume} download>
            View full résumé <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="flex flex-col gap-9">
          {roles.map((role) => (
            <article
              key={role.company}
              className="border-b pb-9 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg tracking-tight">{role.company}</h3>
                <span className="text-xs text-muted-foreground">
                  {role.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-primary">{role.role}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {role.context}
              </p>
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-4 text-sm leading-6 text-muted-foreground">
                {role.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="section-space section-rule"
      aria-labelledby="about-title"
    >
      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-14">
        <div>
          <p className="eyebrow mb-3">A bit about me</p>
          <h2 id="about-title" className="section-title">
            Curious by nature.
            <br />
            Practical by choice.
          </h2>
        </div>
        <div>
          <div className="body-copy flex flex-col gap-4">
            <p>
              I build web products that make everyday work easier. My experience
              spans agricultural technology, university systems, and the backend
              services that connect them.
            </p>
            <p>
              I enjoy untangling complex workflows, making existing systems
              easier to maintain, and taking a feature from the data layer to
              the interface. I&apos;m interested in software engineering
              opportunities where thoughtful implementation matters as much as
              shipping.
            </p>
          </div>
          <div className="mt-7 border-l-2 border-olive/40 pl-4">
            <p className="text-sm">3rd place · 2025 Meralco IDOL Hackathon</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Dean&apos;s Lister in 7 of 8 semesters
            </p>
          </div>
          <h3 className="eyebrow mb-5 mt-10">Tools I work with</h3>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.name}>
                <h4 className="text-sm font-medium">{group.name}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
