"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Resume } from "@/types/resume";

export function ExtraSection({ resume }: { resume: Resume }) {
  return (
    <Section id="extra" title="Languages & Certifications" eyebrow="More">
      <motion.div className="grid md:grid-cols-2 gap-6" {...fadeUp(0)}>
        {/* Languages */}
        <Card className="hover:-translate-y-1 transition-transform duration-200">
          <h3 className="font-semibold mb-2">Languages</h3>
          <ul className="space-y-1 text-sm leading-relaxed">
            {resume.languages.map((lang) => (
              <li key={lang.name}>
                {lang.name} — {lang.level}
              </li>
            ))}
          </ul>
        </Card>

        {/* Certifications */}
        <Card className="hover:-translate-y-1 transition-transform duration-200">
          <h3 className="font-semibold mb-2">Certifications</h3>
          <ul className="space-y-1 text-sm leading-relaxed">
            {resume.certifications.map((cert, i) => (
              <li key={i}>
                {cert.name}
                {cert.issuer ? ` — ${cert.issuer}` : ""}
                {cert.date ? ` (${cert.date})` : ""}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </Section>
  );
}
