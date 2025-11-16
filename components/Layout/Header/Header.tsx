"use client";

import Link from "next/link";
import { resume } from "@/lib/resume";
import { HeaderItems } from "./HeaderItems";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 bg-[hsl(var(--bg))]/70">
      <div className="container-prose flex items-center justify-between h-16">
        <Link href="/" className="font-bold tracking-tight">
          {resume.name}
        </Link>
        <nav className="hidden sm:flex items-center gap-1">
          {HeaderItems.map((l) => (
            <a key={l.href} href={l.href} className="btn-ghost text-sm">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
