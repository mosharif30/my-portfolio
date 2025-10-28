"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" eyebrow="Work history">
      <motion.div {...fadeUp(0)}>
        <Timeline
          items={[
            {
              title: "Frontend Developer",
              org: "Didenegar Hoosh No",
              location: "Tehran, Iran",
              period: "Jun 2023 — Present",
              bullets: [
                "Built a VMS dashboard with React + Ant Design for real-time CCTV monitoring.",
                "Integrated WebRTC & HLS/MSE for live and playback streaming.",
                "Implemented AI-based face & LPR modules with automated alerts and analytics.",
              ],
            },
            {
              title: "Frontend Developer",
              org: "Hamiket",
              location: "Tehran, Iran",
              period: "Feb 2023 — Jun 2023",
              bullets: [
                "Developed admin dashboard, seller portal, and main site using React & Next.js.",
              ],
            },
          ]}
        />
      </motion.div>
    </Section>
  );
}
