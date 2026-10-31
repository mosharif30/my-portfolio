import { Section } from "@/components/UI/Section";
import { Timeline } from "@/components/UI/Timeline";
import type { Resume } from "@/types/resume";

export function EducationSection({ resume }: { resume: Resume }) {
  return (
    <Section id="education" title="Education" eyebrow="Academic">
      <Timeline items={resume.education} />
    </Section>
  );
}
