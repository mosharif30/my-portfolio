import { Emphasis } from "@/components/UI/Emphasis";
import { Section } from "@/components/UI/Section";
import type { Resume } from "@/types/resume";

export function AboutSection({ resume }: { resume: Resume }) {
  return (
    <Section id="about" title="About" eyebrow="Profile">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
        {resume.about.map((paragraph) => (
          <p key={paragraph}>
            <Emphasis text={paragraph} />
          </p>
        ))}
      </div>

      <h3 className="eyebrow mt-12">Research interests</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {resume.researchInterests.map((interest) => (
          <li key={interest} className="py-3 font-serif text-xl">
            {interest}
          </li>
        ))}
      </ul>
    </Section>
  );
}
