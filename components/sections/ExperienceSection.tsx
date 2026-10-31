import { Section } from "@/components/UI/Section";
import { Timeline } from "@/components/UI/Timeline";
import type { Resume } from "@/types/resume";

export function ExperienceSection({ resume }: { resume: Resume }) {
  return (
    <Section id="experience" title="Experience" eyebrow="Work history">
      <Timeline items={resume.experience} />
    </Section>
  );
}
