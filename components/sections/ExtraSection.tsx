"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export function ExtraSection() {
  return (
    <Section id="extra" title="Languages & Certifications" eyebrow="More">
      <motion.div className="grid md:grid-cols-2 gap-6" {...fadeUp(0)}>
        <Card className="hover:-translate-y-1 transition-transform duration-200">
          <h3 className="font-semibold mb-2">Languages</h3>
          <ul className="space-y-1 text-sm leading-relaxed">
            <li>Persian — native</li>
            <li>English — IELTS 7.0 (C1 overall)</li>
          </ul>
        </Card>

        <Card className="hover:-translate-y-1 transition-transform duration-200">
          <h3 className="font-semibold mb-2">Certifications</h3>
          <ul className="space-y-1 text-sm leading-relaxed">
            <li>Backend Development — Udemy</li>
            <li>Frontend Development — Udemy (Sep 14, 2022)</li>
          </ul>
        </Card>
      </motion.div>
    </Section>
  );
}
