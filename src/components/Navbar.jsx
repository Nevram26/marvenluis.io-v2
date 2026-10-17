import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-border/80 backdrop-blur">
      <nav className="container-max section-padding flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="text-base font-semibold tracking-tight text-foreground">
          Marven Luis<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted hover:text-primary">
              {item.label}
            </a>
          ))}
          <a href="mailto:marvenjoffreluis@gmail.com" className="button button-primary">
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="button button-ghost md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <XMarkIcon className="size-5" /> : <Bars3Icon className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="container-max flex flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary">
                {item.label}
              </a>
            ))}
            <a href="mailto:marvenjoffreluis@gmail.com" className="button button-primary mt-2">Let&apos;s talk</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default NavBar;
