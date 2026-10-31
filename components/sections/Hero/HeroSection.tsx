import type { Resume } from "@/types/resume";

import { HeroAvatar } from "./HeroAvatar";
import { HeroCTAs } from "./HeroCTAs";
import { HeroFacts } from "./HeroFacts";
import { HeroIntro } from "./HeroIntro";

export function HeroSection({ resume }: { resume: Resume }) {
  const [firstName, ...restName] = resume.name.split(" ");

  return (
    <section className="pt-10 pb-14 sm:pt-16 sm:pb-20">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
        <div>
          <HeroIntro
            firstName={firstName}
            lastName={restName.join(" ")}
            title={resume.title}
            availability={resume.availability}
            tagline={resume.tagline}
          />
          <HeroCTAs
            cvUrl={resume.links.cv}
            linkedin={resume.links.linkedin}
            github={resume.links.github}
            email={resume.contact.email}
          />
        </div>
        <HeroAvatar photo={resume.photo} name={resume.name} />
      </div>
      <HeroFacts items={resume.highlights} />
    </section>
  );
}
