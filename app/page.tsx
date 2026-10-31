import { resume } from "@/lib/resume";

import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExtraSection } from "@/components/sections/ExtraSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection resume={resume} />
      <AboutSection resume={resume} />
      <EducationSection resume={resume} />
      <ExperienceSection resume={resume} />
      <ProjectsSection resume={resume} />
      <SkillsSection resume={resume} />
      <ExtraSection resume={resume} />
      <ContactSection resume={resume} />
    </>
  );
}
