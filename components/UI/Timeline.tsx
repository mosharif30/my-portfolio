import { cn } from "@/lib/utils";
import type { TimelineItem } from "@/types/resume";
import { Badge } from "./Badge";
import { Emphasis } from "./Emphasis";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-12 border-l border-line pl-6 sm:pl-8">
      {items.map((it) => (
        <li key={`${it.title}-${it.org}`} className="relative">
          <span
            aria-hidden
            className={cn(
              "absolute top-2 -left-[calc(1.5rem+5px)] size-[9px] rounded-full ring-4 ring-bg sm:-left-[calc(2rem+5px)]",
              it.period.includes("Present") ? "bg-accent" : "bg-muted",
            )}
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="shrink-0 font-mono text-xs text-muted">{it.period}</p>
          </div>
          <p className="mt-1 text-sm text-muted">
            <span className="font-medium text-accent">{it.org}</span>
            {it.summary && ` · ${it.summary}`} · {it.location}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-4 leading-relaxed text-muted marker:text-accent">
            {it.bullets.map((b) => (
              <li key={b}>
                <Emphasis text={b} />
              </li>
            ))}
          </ul>
          {it.stack && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {it.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
