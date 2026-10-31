"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    const theme = isDark ? "dark" : "light";
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
    >
      <Sun className="hidden size-4 dark:block" aria-hidden />
      <Moon className="size-4 dark:hidden" aria-hidden />
    </button>
  );
}
