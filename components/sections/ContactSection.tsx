import { Reveal } from "@/components/UI/Reveal";
import type { Resume } from "@/types/resume";
import { CopyEmailButton } from "./CopyEmailButton";

export function ContactSection({ resume }: { resume: Resume }) {
  const { email, phone, location } = resume.contact;

  const details = [
    {
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
    },
    { label: "Location", value: location },
    {
      label: "LinkedIn",
      value: "in/msharifkhani",
      href: resume.links.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "mosharif30",
      href: resume.links.github,
      external: true,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-6 pb-10">
      <Reveal className="rounded-3xl bg-accent p-7 text-accent-fg sm:p-12">
        <h2
          id="contact-title"
          className="font-serif text-4xl tracking-tight sm:text-5xl"
        >
          Let&apos;s talk
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          I&apos;m open to internships and part-time roles in data science,
          machine learning and data engineering.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${email}`}
            className="font-serif text-2xl break-all underline decoration-1 underline-offset-4 sm:text-3xl"
          >
            {email}
          </a>
          <CopyEmailButton email={email} />
        </div>

        <dl className="mt-10 grid gap-6 border-t border-current/30 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d) => (
            <div key={d.label}>
              <dt className="font-mono text-xs tracking-wider uppercase opacity-80">
                {d.label}
              </dt>
              <dd className="mt-1">
                {d.href ? (
                  <a
                    href={d.href}
                    {...(d.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="underline-offset-4 hover:underline"
                  >
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
