import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { profile } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Marven Luis home"
          className="flex items-center gap-3"
        >
          <span
            className="flex size-8 items-center justify-center rounded-md bg-primary text-xs font-semibold tracking-tight text-primary-foreground"
            aria-hidden="true"
          >
            ml.
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Marven Luis<span className="text-primary">.</span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          <Link href="/#work" className="text-sm text-muted-foreground">
            Work
          </Link>
          <Link href="/#experience" className="text-sm text-muted-foreground">
            Experience
          </Link>
          <Link href="/#about" className="text-sm text-muted-foreground">
            About
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground">
            Contact
          </Link>
          <Button asChild variant="outline" size="sm">
            <a href={profile.resume} download>
              Résumé <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </nav>
        <MobileNav resumeUrl={profile.resume} />
      </div>
    </header>
  );
}
