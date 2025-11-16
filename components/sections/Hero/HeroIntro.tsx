type HeroIntroProps = {
  firstName: string;
  lastName: string;
  title: string;
};

export function HeroIntro({ firstName, lastName, title }: HeroIntroProps) {
  return (
    <>
      <div className="inline-flex items-center gap-2 badge">
        <span className="size-2 rounded-full bg-[hsl(var(--brand))] shadow-[0_0_8px_hsl(var(--brand)/0.8)]" />
        Available for opportunities
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
        {firstName} <span className="text-[hsl(var(--brand))]">{lastName}</span>
      </h1>
    </>
  );
}
