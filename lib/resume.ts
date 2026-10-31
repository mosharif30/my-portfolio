// Text wrapped in **double asterisks** is rendered in bold.
import type { Resume } from "@/types/resume";

export const resume: Resume = {
  photo: "/me.jpg",
  name: "Mohammadreza Sharifkhani",
  title: "MSc Data Science Student · Software Engineer",
  availability: "Open to internships & part-time roles",
  tagline:
    "I build real-time, data-intensive applications, and I'm now combining that engineering experience with machine learning and statistics to create reliable, explainable, data-driven products.",

  contact: {
    email: "Sharifkhani.mr@gmail.com",
    phone: "+39 352 272 1552",
    location: "Milan, Italy",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/msharifkhani/",
    github: "https://github.com/mosharif30",
    cv: "/cv.pdf",
  },

  highlights: [
    { label: "Studying", value: "MSc Data Science, University of Milano-Bicocca" },
    { label: "Experience", value: "3+ years of professional software engineering" },
    { label: "Based in", value: "Milan, Italy" },
    { label: "Looking for", value: "Data science, machine learning & data engineering roles" },
  ],

  about: [
    "Data Science MSc student at the University of Milano-Bicocca with **3+ years of professional software engineering experience** building real-time, data-intensive applications.",
    "Delivered the front end of a large-scale **AI-powered video analytics platform**, integrating face and license-plate recognition and turning model outputs into dashboards, alerts and visual analytics for operators.",
    "Strong foundations in algorithms, databases and SQL, including experience as a university Teaching Assistant for Database Systems. Now combining engineering experience with machine learning and statistics to build reliable, explainable, data-driven products.",
  ],

  researchInterests: [
    "Machine Learning & Deep Learning",
    "Explainable AI & Model Interpretability",
    "Predictive Analytics & Data-Driven Decision Support",
    "Intelligent and Adaptive Software Systems",
    "Human–AI Interaction",
  ],

  education: [
    {
      title: "MSc in Data Science",
      org: "University of Milano-Bicocca",
      summary: "Università degli Studi di Milano-Bicocca",
      location: "Milan, Italy",
      period: "Oct 2026 – Present",
      bullets: [
        "Two-year, English-taught programme covering machine learning, statistical modelling, data management and large-scale data analysis.",
      ],
    },
    {
      title: "BSc in Computer Science",
      org: "Islamic Azad University, Science & Research Branch",
      location: "Tehran, Iran",
      period: "Sep 2018 – Jul 2023",
      bullets: [
        "**Final grade:** 16.52 / 20 (GPA 3.22 / 4) · EQF level 6.",
        "**Key coursework:** Data Structures & Algorithms, Database Systems, Artificial Intelligence, Mathematical Logic.",
        "**Teaching Assistant, Database Systems:** supported students in database modelling, SQL query optimisation and course projects.",
        "Presented talks at university-level conferences on cryptographic algorithms and on applying the Rust programming language to artificial intelligence.",
        "**Thesis:** full-stack blogging platform (Node.js, GraphQL, React) with a modular architecture, API integration and secure authentication.",
      ],
    },
  ],

  experience: [
    {
      title: "Frontend Developer",
      org: "Didenegar Hoosh No",
      summary: "AI-powered video surveillance & analytics",
      location: "Tehran, Iran",
      period: "Jun 2023 – Sep 2026",
      bullets: [
        "Built the front end of a **large-scale Video Management System (VMS)** in React and Ant Design, delivering an intuitive dashboard for real-time monitoring of CCTV camera networks.",
        "Integrated **AI-based face and license-plate recognition** modules into the product, with automated alerts and analytics visualisations that turn model outputs into actionable insights.",
        "Implemented live and playback video streaming using **WebRTC** and **HLS/MSE**.",
        "Collaborated with backend and AI engineers through REST APIs and WebSockets to keep video streams, detection events and analytics in sync.",
      ],
      stack: ["React", "Ant Design", "WebRTC", "HLS / MSE", "REST APIs", "WebSocket"],
    },
    {
      title: "Front-End Developer",
      org: "Hamiket",
      location: "Tehran, Iran",
      period: "Feb 2023 – Jun 2023",
      bullets: [
        "Built and maintained the admin dashboard, seller portal and main customer-facing website using React and Next.js.",
      ],
      stack: ["React", "Next.js"],
    },
  ],

  projects: [
    {
      title: "Full-Stack Blog Platform",
      period: "Dec 2021 – May 2022",
      stack: ["React", "Node.js", "GraphQL"],
      description:
        "Designed and deployed a scalable blogging system with categorised content browsing and real-time interaction; focused on responsive UI, API performance and secure user authentication. Also my bachelor's thesis.",
      url: "https://amirsiadat-blog.fly.dev/",
      repo: "https://github.com/mosharif30/liarasiadatblog",
      image: "/projects/blog.jpg",
    },
    {
      title: "Portfolio Website for a Graphic Designer",
      period: "Jul 2022 – Oct 2022",
      stack: ["Next.js", "SEO", "Image optimisation"],
      description:
        "Developed a responsive, SEO-optimised portfolio platform with dynamic routing, image optimisation and component-based design.",
      repo: "https://github.com/mosharif30/MahshidPortfolio",
      cover: "Mahshid Asoudehkhah",
    },
  ],

  skillGroups: [
    {
      label: "Programming",
      skills: ["Python", "SQL", "JavaScript", "TypeScript"],
    },
    {
      label: "Data & Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Data modelling",
        "Query optimisation",
        "Analytics dashboards",
      ],
    },
    {
      label: "Web & Backend",
      skills: [
        "React",
        "Next.js",
        "Redux",
        "React Query",
        "Node.js",
        "REST APIs",
        "GraphQL",
        "WebSocket",
      ],
    },
    {
      label: "Real-time Media",
      skills: ["WebRTC", "HLS / MSE"],
    },
    {
      label: "Tools",
      skills: ["Git", "GitHub"],
    },
  ],

  languages: [
    { name: "Persian", detail: "Native" },
    { name: "English", detail: "C1, IELTS 7.0 (Listening C2)" },
  ],

  certifications: [
    {
      name: "Frontend Development",
      detail: "Udemy, 2022",
      note: "React, Next.js, TypeScript, Redux, React Query, Tailwind",
    },
    {
      name: "Backend Development",
      detail: "Udemy",
      note: "Node.js, MongoDB, RESTful API design, deployment",
    },
  ],

  honours: [
    {
      name: "Admission to NODET",
      detail: "National Organization for Development of Exceptional Talents, Iran (2014)",
    },
    { name: "Best Developer Award", detail: "School recognition (2017)" },
  ],

  interests: [
    {
      name: "Philosophy",
      detail: "Continental philosophy (Kant, Hegel, Heidegger) and its links to science and AI",
    },
    { name: "Tennis" },
  ],
};
