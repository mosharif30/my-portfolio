import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/UI/Badge";
import { Section } from "@/components/UI/Section";
import type { Resume } from "@/types/resume";

export function ProjectsSection({ resume }: { resume: Resume }) {
  return (
    <Section id="projects" title="Projects" eyebrow="Selected work">
      <div className="grid gap-6 lg:grid-cols-2">
        {resume.projects.map((p) => (
          <article key={p.title} className="card flex flex-col overflow-hidden">
            <div className="border-b border-line">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  width={1000}
                  height={625}
                  sizes="(min-width: 1024px) 440px, (min-width: 768px) 560px, 100vw"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex aspect-[16/10] items-center justify-center bg-accent-soft p-6 text-center font-serif text-3xl text-accent italic sm:text-4xl"
                >
                  {p.cover}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="font-mono text-xs text-muted">{p.period}</p>
              <h3 className="mt-2 font-serif text-2xl leading-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title}: live site`}
                    className="btn-primary"
                  >
                    Live site <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title}: source code`}
                    className="btn-ghost"
                  >
                    <Github className="size-4" aria-hidden /> Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
