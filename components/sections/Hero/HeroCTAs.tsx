import { Download, Github, Linkedin, Mail } from "lucide-react";

type HeroCTAsProps = {
  cvUrl: string;
  linkedin: string;
  github: string;
  email: string;
};

export function HeroCTAs({ cvUrl, linkedin, github, email }: HeroCTAsProps) {
  return (
    <div
      className="rise mt-8 flex flex-wrap gap-3"
      style={{ "--delay": "100ms" } as React.CSSProperties}
    >
      <a
        href={cvUrl}
        download="Mohammadreza_Sharifkhani_CV.pdf"
        className="btn-primary"
      >
        <Download className="size-4" aria-hidden /> Download CV
      </a>
      <a href={`mailto:${email}`} className="btn-ghost">
        <Mail className="size-4" aria-hidden /> Email
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost"
      >
        <Linkedin className="size-4" aria-hidden /> LinkedIn
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost"
      >
        <Github className="size-4" aria-hidden /> GitHub
      </a>
    </div>
  );
}
