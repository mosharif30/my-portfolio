import { Section } from "@/components/UI/Section";
import type { Entry, Resume } from "@/types/resume";

function EntryList({ heading, entries }: { heading: string; entries: Entry[] }) {
  return (
    <div>
      <h3 className="eyebrow">{heading}</h3>
      <ul className="mt-4 space-y-3">
        {entries.map((entry) => (
          <li key={entry.name} className="leading-snug">
            <span className="font-medium">{entry.name}</span>
            {entry.detail && (
              <span className="text-muted"> · {entry.detail}</span>
            )}
            {entry.note && (
              <span className="mt-1 block text-sm text-muted">{entry.note}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExtraSection({ resume }: { resume: Resume }) {
  return (
    <Section id="background" title="Background" eyebrow="And more">
      <div className="grid gap-10 sm:grid-cols-2">
        <EntryList heading="Languages" entries={resume.languages} />
        <EntryList heading="Certifications" entries={resume.certifications} />
        <EntryList heading="Honours & awards" entries={resume.honours} />
        <EntryList heading="Interests" entries={resume.interests} />
      </div>
    </Section>
  );
}
