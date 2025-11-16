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

      <p className="text-lg sm:text-xl text-[hsl(var(--muted))] max-w-3xl md:max-w-2xl md:pr-6 mx-auto md:mx-0 leading-relaxed">
        {title} with experience in building resilient, data-driven interfaces
        using React &amp; Next.js, and a strong interest in intelligent software
        systems &amp; machine learning.
      </p>
    </>
  );
}
