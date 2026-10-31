import { Badge } from "@/components/UI/Badge";
import { Section } from "@/components/UI/Section";
import type { Resume } from "@/types/resume";

export function SkillsSection({ resume }: { resume: Resume }) {
  return (
    <Section id="skills" title="Skills" eyebrow="Toolbox">
      <dl className="divide-y divide-line border-y border-line">
        {resume.skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid gap-3 py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="font-medium">{group.label}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
