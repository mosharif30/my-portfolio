"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/UI/Section";
import { Timeline } from "@/components/UI/Timeline";
import { Resume } from "@/types/resume";

export function ExperienceSection({ resume }: { resume: Resume }) {
  return (
    <Section id="experience" title="Experience" eyebrow="Work history">
      <motion.div {...fadeUp(0)}>
        <Timeline
          items={resume.experience.map((exp) => ({
            title: exp.title,
            org: exp.org,
            location: exp.location,
            period: exp.period,
            bullets: exp.bullets,
          }))}
        />
      </motion.div>
    </Section>
  );
}
