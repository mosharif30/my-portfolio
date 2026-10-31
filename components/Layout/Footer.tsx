import { resume } from "@/lib/resume";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="container-prose flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {resume.name}
      </p>
      <a
        href={siteConfig.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 hover:text-accent hover:underline"
      >
        Source on GitHub
      </a>
    </footer>
  );
}
