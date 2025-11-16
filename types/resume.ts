// types/resume.ts

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface Links {
  linkedin: string;
  github: string;
  website?: string;
  cv?: string;
}

export interface Project {
  title: string;
  period: string;
  stack: string[];
  description: string;
  url?: string;
  repo?: string;
}

export interface ExperienceItem {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
}

// typed skill groups
export interface SkillGroup {
  label: string; // e.g. "Frontend / UI"
  skills: string[]; // e.g. ["React.js", "Next.js", ...]
}

export interface Resume {
  photo: string;
  name: string;
  title: string;
  contact: ContactInfo;
  links: Links;
  about?: string;
  projects: Project[];

  // flat skills (good for badges in Hero/projects)
  skills: string[];

  // grouped skills
  skillGroups: SkillGroup[];

  experience: ExperienceItem[];
  education: EducationItem[];
  languages: Language[];
  certifications: Certification[];
  hobbies?: string[];
}
