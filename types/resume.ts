// types/resume.ts
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface Links {
  linkedin: string;
  github: string;
  cv?: string; // optional, used in your HeroSection logic
}

export interface Project {
  title: string;
  period: string;
  stack: string[];
  description: string;
  url?: string;
  repo?: string;
}

export interface Resume {
  photo: string;
  name: string;
  title: string;
  contact: ContactInfo;
  links: Links;
  projects: Project[];
  skills: string[];
}
