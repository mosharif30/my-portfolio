import { Card } from "./Card";

type Item = {
  title: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
};

export function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <Card key={i}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">
                {it.title} —{" "}
                <span className="text-[hsl(var(--brand))]">{it.org}</span>
              </h3>
              {it.location && (
                <p className="text-sm text-[hsl(var(--muted))]">
                  {it.location}
                </p>
              )}
            </div>
            <p className="text-sm">{it.period}</p>
          </div>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            {it.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
