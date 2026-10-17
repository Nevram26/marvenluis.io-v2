"use client";

import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

export function MobileNav({ resumeUrl }: { resumeUrl: string }) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open navigation">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Marven Luis</SheetTitle>
            <SheetDescription>
              Software engineer. Thoughtful, practical products.
            </SheetDescription>
          </SheetHeader>
          <nav
            aria-label="Mobile navigation"
            className="mt-10 flex flex-col gap-2"
          >
            {["Work", "Experience", "About", "Contact"].map((label) => (
              <SheetClose asChild key={label}>
                <a className="py-3 text-lg" href={`/#${label.toLowerCase()}`}>
                  {label}
                </a>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <a
                href={resumeUrl}
                className="mt-4 flex items-center gap-2 py-3 text-primary"
                download
              >
                Download résumé <ArrowUpRight className="size-4" />
              </a>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
