// lib/resume.ts
import type { Resume } from "@/types/resume";

export const resume: Resume = {
  photo: "/me.jpg",
  name: "Mohammadreza Sharifkhani",
  title: "Frontend Developer",
  contact: {
    email: "Sharifkhani.mr@gmail.com",
    phone: "+989351017434",
    location: "Tehran, Iran",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/msharifkhani/",
    github: "https://github.com/mosharif30",
    // cv: "/cv.pdf", // optional, uncomment if you want explicit link
  },
  projects: [
    {
      title: "Full-Stack Blog Platform",
      period: "Dec 2021 — May 2022",
      stack: ["React", "GraphQL", "Node.js"],
      description:
        "Scalable blog with categorized browsing, real-time interaction, and secure auth. Focused on responsive UI and API performance.",
      url: "https://www.amirsiadat.com/",
      repo: "https://github.com/mosharif30/liarasiadatblog",
    },
    {
      title: "Portfolio Website — Graphic Designer",
      period: "Jul 2022 — Oct 2022",
      stack: ["Next.js", "SEO", "Image Optimization"],
      description:
        "Responsive, SEO-optimized portfolio with dynamic routing and component-based design.",
      url: "https://mahshidasoudehkhah.com/",
      repo: "https://github.com/mosharif30/MahshidPortfolio",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React.js",
    "Next.js",
    "Redux",
    "React Query",
    "Node.js",
    "REST APIs",
    "GraphQL",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
  ],
} as const;
