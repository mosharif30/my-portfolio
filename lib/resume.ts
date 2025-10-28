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
    // cv: "/cv.pdf",
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

  skillGroups: [
    {
      label: "Frontend / UI",
      skills: [
        "React.js",
        "Next.js",
        "Redux",
        "React Query",
        "TypeScript",
        "JavaScript",
      ],
    },
    {
      label: "Backend & APIs",
      skills: ["Node.js", "REST APIs", "GraphQL"],
    },
    {
      label: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      label: "Tooling & Workflow",
      skills: ["Git", "GitHub"],
    },
    {
      label: "General / Extra",
      skills: ["Python"],
    },
  ],

  experience: [
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
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science",
      org: "Islamic Azad University, Science & Research Branch",
      location: "Tehran, Iran",
      period: "Sep 2018 — Jul 2023",
      bullets: [
        "Strong results in DSA, DB Systems, AI, Mathematical Logic.",
        "TA for Database Systems: modeling, SQL optimization, projects.",
        "Talks on cryptographic algorithms and Rust in AI.",
        "Final Project: Full-Stack Blog (Node.js, GraphQL, React). Final grade: 16.52 / 20 (≈3.22/4).",
      ],
    },
  ],

  languages: [
    { name: "Persian", level: "native" },
    { name: "English", level: "IELTS 7.0 (C1 overall)" },
  ],

  certifications: [
    {
      name: "Backend Development",
      issuer: "Udemy",
    },
    {
      name: "Frontend Development",
      issuer: "Udemy",
      date: "Sep 14, 2022",
    },
  ],
} as const;
