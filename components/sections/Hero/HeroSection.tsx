"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Resume } from "@/types/resume";

import { HeroAvatar } from "./HeroAvatar";
import { HeroIntro } from "./HeroIntro";
import { HeroCTAs } from "./HeroCTAs";
import { HeroTags } from "./HeroTags";

type HeroSectionProps = {
  photo: string;
  cvUrl: string;
  isExternalCV: boolean;
  resume: Resume;
};

export function HeroSection({
  photo,
  cvUrl,
  isExternalCV,
  resume,
}: HeroSectionProps) {
  const heroTags =
    resume.skills && resume.skills.length > 0
      ? resume.skills.slice(0, 6)
      : ["React", "Next.js", "TypeScript", "GraphQL", "WebRTC", "ML-curious"];

  const [firstName, ...restName] = resume.name.split(" ");
  const lastName = restName.join(" ");

  return (
    <section className="relative pt-10 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex justify-center z-0"
      >
        <div className="h-[400px] w-[600px] max-w-full rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--brand)/0.18)_0%,transparent_70%)] dark:opacity-30" />
      </div>

      <div className="relative z-10 grid items-center gap-10 md:grid-cols-[280px,1fr]">
        <HeroAvatar photo={photo} name={resume.name} />

        <motion.div
          className="text-center md:text-left space-y-6"
          {...fadeUp(0.05)}
        >
          <HeroIntro
            firstName={firstName}
            lastName={lastName}
            title={resume.title}
          />

          <HeroCTAs
            cvUrl={cvUrl}
            isExternalCV={isExternalCV}
            linkedin={resume.links.linkedin}
            github={resume.links.github}
            email={resume.contact.email}
          />

          <HeroTags tags={heroTags} />
        </motion.div>
      </div>
    </section>
  );
}
