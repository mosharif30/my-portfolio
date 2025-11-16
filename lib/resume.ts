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
  },

  about:
    "Computer Science graduate with experience in intelligent web applications, AI-driven systems, and optimization techniques. Passionate about integrating artificial intelligence with software engineering.",

  projects: [
    {
      title: "Full-Stack Blog Platform",
      period: "Dec 2021 — May 2022",
      stack: ["React", "GraphQL", "Node.js"],
      description:
        "Scalable blogging system with categorized browsing, real-time interactions, modular architecture, and secure authentication.",
      url: "https://www.amirsiadat.com/",
      repo: "https://github.com/mosharif30/liarasiadatblog",
    },
    {
      title: "Portfolio Website — Graphic Designer",
      period: "Jul 2022 — Oct 2022",
      stack: ["Next.js", "SEO", "Image Optimization"],
      description:
        "Responsive, SEO‑optimized portfolio with dynamic routing, image optimization, and component‑based design.",
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
    "Docker",
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
      label: "Tooling / DevOps",
      skills: ["Git", "GitHub", "Docker"],
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
        "Developed the front end of a large‑scale VMS using React + Ant Design.",
        "Integrated WebRTC and HLS/MSE for live and playback streaming.",
        "Implemented AI‑based face & license‑plate recognition with automated alerts and analytics.",
        "Collaborated with backend engineers using REST APIs and WebSocket for synchronized workflows.",
      ],
    },
    {
      title: "Frontend Developer",
      org: "Hamiket",
      location: "Tehran, Iran",
      period: "Feb 2023 — Jun 2023",
      bullets: [
        "Built and maintained the admin dashboard, seller portal, and main website using React & Next.js.",
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
        "Strong results in DSA, Database Systems, AI, and Mathematical Logic.",
        "Teaching Assistant for Database Systems (ER/EER modeling, SQL, optimization).",
        "Final Project: Full‑Stack Blog using Node.js, GraphQL, and React.",
        "Final grade: 16.52 / 20 (≈3.22/4).",
      ],
    },
  ],

  languages: [
    { name: "Persian", level: "Native" },
    { name: "English", level: "C1" },
  ],

  certifications: [
    {
      name: "Frontend Development",
      issuer: "Udemy",
      date: "Sep 14, 2022",
    },
    {
      name: "Backend Development",
      issuer: "Maktab Sharif",
      date: "Apr 21, 2019",
    },
  ],

  hobbies: ["Philosophy", "Tennis"],
} as const;
