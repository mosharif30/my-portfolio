import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-line py-14 sm:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-12">
        <div className="md:sticky md:top-24 md:self-start">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-2 font-serif text-3xl sm:text-4xl">
            {title}
          </h2>
        </div>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
