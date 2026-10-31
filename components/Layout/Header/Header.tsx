"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { resume } from "@/lib/resume";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderItems } from "./HeaderItems";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlights the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;
          if (entry.isIntersecting) setActive(href);
          else setActive((current) => (current === href ? "" : current));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    HeaderItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container-prose flex h-16 items-center justify-between gap-4">
        <Link href="/" className="truncate font-serif text-lg font-medium">
          {resume.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {HeaderItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors hover:text-accent",
                active === item.href ? "text-accent" : "text-muted",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={resume.links.cv}
            download="Mohammadreza_Sharifkhani_CV.pdf"
            className="btn-ghost hidden lg:inline-flex"
          >
            <Download className="size-4" aria-hidden /> CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line lg:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="container-prose border-t border-line pt-2 pb-4 lg:hidden"
        >
          {HeaderItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
