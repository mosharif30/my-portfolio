"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";

export function EducationSection() {
  return (
    <Section id="education" title="Education" eyebrow="Academic">
      <motion.div {...fadeUp(0)}>
        <Timeline
          items={[
            {
              title: "B.Sc. in Computer Science",
              org: "Islamic Azad University, Science & Research Branch",
              location: "Tehran, Iran",
              period: "Sep 2018 — Jul 2023",
              bullets: [
                "Strong results in DSA, DB Systems, AI, Mathematical Logic.",
                "TA for Database Systems: modeling, SQL optimization, projects.",
                "Talks on cryptographic algorithms and Rust in AI.",
                "Final Project: Full-Stack Blog (Node.js, GraphQL, React). Final grade: 16.52 / 20 (≈3.22/4).",
              ],
            },
          ]}
        />
      </motion.div>
    </Section>
  );
}
