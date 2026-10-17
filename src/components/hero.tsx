import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

export function Hero() {
  return (
    <section
      className="pb-14 pt-16 md:pb-16 md:pt-24"
      aria-labelledby="intro-title"
    >
      <div className="mb-7 flex items-center gap-2 text-xs text-olive">
        <span className="size-1.5 rounded-full bg-olive" /> Building software
        that serves people
      </div>
      <div className="grid gap-10 lg:grid-cols-[1fr_220px] lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Hello, I&apos;m Marven Joffre Luis.
          </p>
          <h1
            id="intro-title"
            className="max-w-[730px] text-[40px] leading-[1.12] tracking-[-0.055em] sm:text-5xl md:text-[60px]"
          >
            Thoughtful engineering.
            <br />
            <span className="text-primary">Useful software.</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-base leading-7 text-muted-foreground">
            Full-stack software engineer turning complex workflows into
            practical web products. Built for real people, and built to last.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#work">
                View selected work <ArrowDown data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resume} download>
                <Download data-icon="inline-start" /> Download résumé
              </a>
            </Button>
          </div>
          <div className="mt-7 flex items-center gap-6 text-xs text-muted-foreground">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="size-3.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-1">
              Get in touch <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
        <aside
          className="hidden self-end border-l pl-7 pb-1 lg:block"
          aria-label="Engineering focus"
        >
          <p className="eyebrow mb-5">A little context</p>
          <p className="text-sm leading-6">
            From agricultural platforms to university systems.
          </p>
          <p className="mt-3 text-xs leading-6 text-muted-foreground">
            Full-stack development.
            <br />
            Real-world problems.
            <br />A considered approach.
          </p>
          <div className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5" /> Philippines
          </div>
        </aside>
      </div>
      <div className="mt-16 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="eyebrow">A few things I&apos;ve worked on</span>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-muted-foreground">
          <span>Agricultural technology</span>
          <span>Education platforms</span>
          <span>Distributed systems</span>
        </div>
      </div>
    </section>
  );
}
