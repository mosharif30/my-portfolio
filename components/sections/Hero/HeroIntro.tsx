type HeroIntroProps = {
  firstName: string;
  lastName: string;
  title: string;
  availability: string;
  tagline: string;
};

export function HeroIntro({
  firstName,
  lastName,
  title,
  availability,
  tagline,
}: HeroIntroProps) {
  return (
    <div className="rise">
      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm">
        <span aria-hidden className="size-2 rounded-full bg-accent" />
        {availability}
      </p>

      <h1 className="mt-6 font-serif text-[clamp(2.75rem,6.5vw,5rem)] leading-[1.02] tracking-tight">
        {firstName} <br />
        <em className="text-accent">{lastName}</em>
      </h1>

      <p className="mt-5 text-lg font-medium">{title}</p>
      <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{tagline}</p>
    </div>
  );
}
