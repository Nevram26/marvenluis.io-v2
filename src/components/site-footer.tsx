import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-space section-rule"
      aria-labelledby="contact-title"
    >
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="eyebrow mb-4">Let&apos;s connect</p>
          <h2 id="contact-title" className="section-title">
            Good work starts
            <br />
            with a conversation.
          </h2>
          <p className="body-copy mt-4 max-w-md">
            Have an opportunity or a project in mind?
            <br />
            I&apos;d be glad to hear about it.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5">
          <Button asChild size="lg">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s talk on LinkedIn{" "}
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
          <a href={profile.resume} download className="text-link">
            Or, start with my résumé <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container-wide flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marven Joffre Luis{" "}
          <span className="mx-2 text-border">/</span> Built with intention.
        </p>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#top" className="flex items-center gap-1">
            Back to top <ArrowUp className="size-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
