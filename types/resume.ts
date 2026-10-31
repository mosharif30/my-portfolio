export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface Links {
  linkedin: string;
  github: string;
  cv: string;
}

export interface Highlight {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  period: string;
  stack: string[];
  description: string;
  url?: string;
  repo?: string;
  image?: string;
  /** Text shown on a typographic cover when there is no image. */
  cover?: string;
}

export interface TimelineItem {
  title: string;
  org: string;
  summary?: string;
  location: string;
  period: string;
  bullets: string[];
  stack?: string[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Entry {
  name: string;
  detail?: string;
  note?: string;
}

export interface Resume {
  photo: string;
  name: string;
  title: string;
  availability: string;
  tagline: string;
  contact: ContactInfo;
  links: Links;
  highlights: Highlight[];
  about: string[];
  researchInterests: string[];
  education: TimelineItem[];
  experience: TimelineItem[];
  projects: Project[];
  skillGroups: SkillGroup[];
  languages: Entry[];
  certifications: Entry[];
  honours: Entry[];
  interests: Entry[];
}
