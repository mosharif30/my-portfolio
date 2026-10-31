import type { Highlight } from "@/types/resume";

export function HeroFacts({ items }: { items: Highlight[] }) {
  return (
    <dl
      className="rise mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
      style={{ "--delay": "200ms" } as React.CSSProperties}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt className="eyebrow">{item.label}</dt>
          <dd className="mt-2 leading-snug">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
