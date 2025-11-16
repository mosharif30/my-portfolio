"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Resume } from "@/types/resume";

export function AboutSection({ resume }: { resume: Resume }) {
  const aboutText =
    resume.about ??
    "Motivated Computer Science graduate with strong academic foundations in algorithms, databases, and AI. Experienced in building production UI for large-scale video management and e-commerce systems. I enjoy teaching and communicating complex ideas, and I’m exploring how ML can augment developer workflows.";

  return (
    <Section id="about" title="About me" eyebrow="Introduction">
      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* soft corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-16 size-40 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,hsl(var(--brand)/0.12)_0%,transparent_70%)]"
        />

        <motion.div className="md:col-span-2" {...fadeUp(0)}>
          <Card>
            <p className="leading-8">{aboutText}</p>
          </Card>
        </motion.div>

        <motion.div {...fadeUp(0.05)}>
          <Card>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Based:</strong> {resume.contact.location}
              </li>
              <li>
                <strong>Nationality:</strong> Iranian
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${resume.contact.phone}`}
                  className="underline decoration-dotted"
                >
                  {resume.contact.phone}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${resume.contact.email}`}
                  className="underline decoration-dotted"
                >
                  {resume.contact.email}
                </a>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
