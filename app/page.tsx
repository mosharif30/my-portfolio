import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { resume } from "@/lib/resume";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";

export default function Home() {
  // If you already store a CV link in your resume lib, we'll use it.
  // Otherwise, drop a file named "cv.pdf" in /public and we'll link to that.
  const CV_URL = (resume as any)?.links?.cv ?? "/cv.pdf";
  const isExternalCV = typeof CV_URL === "string" && CV_URL.startsWith("http");

  // Optional portrait path (drop /me.jpg in /public). If you already have resume.photo, use that.
  const PHOTO_URL = (resume as any)?.photo ?? "/me.jpg";

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-10 pb-4">
        <div className="grid items-center gap-10 md:grid-cols-[280px,1fr]">
          {/* Portrait */}
          <div className="mx-auto md:mx-0 w-48 h-48 md:w-64 md:h-64 relative">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] blur-2xl bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),_transparent_60%)]"
            />
            <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src={PHOTO_URL}
                alt="Portrait of Mohammadreza Sharifkhani"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Intro */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 badge">
              <span className="size-2 rounded-full bg-[hsl(var(--brand))]" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Mohammadreza{" "}
              <span className="text-[hsl(var(--brand))]">Sharifkhani</span>
            </h1>

            <p className="text-lg sm:text-xl text-[hsl(var(--muted))] max-w-3xl md:max-w-2xl md:pr-6 mx-auto md:mx-0">
              Frontend developer with 3+ years of experience. I build resilient,
              data-driven interfaces with React & Next.js, and I’m passionate
              about machine learning and intelligent software systems.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {/* CV download: internal files use <a download>, external links open in new tab */}
              {isExternalCV ? (
                <Link
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Download className="size-4" aria-hidden /> Download CV
                </Link>
              ) : (
                <a href={CV_URL} download className="btn-primary">
                  <Download className="size-4" aria-hidden /> Download CV
                </a>
              )}

              <Link
                href={resume.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Linkedin className="size-4" aria-hidden /> LinkedIn
              </Link>

              <Link
                href={resume.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github className="size-4" aria-hidden /> GitHub
              </Link>

              <Link
                href={`mailto:${resume.contact.email}`}
                className="btn-ghost"
              >
                <Mail className="size-4" aria-hidden /> Email
              </Link>

              <Link href="#projects" className="btn-ghost">
                See projects <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            {/* Quick tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "GraphQL",
                "WebRTC",
                "ML-curious",
              ].map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About me" eyebrow="Introduction">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <p className="leading-8">
              Motivated Computer Science graduate with strong academic
              foundations in algorithms, databases, and AI. Experienced in
              building production UI for large-scale video management and
              e‑commerce systems. I enjoy teaching and communicating complex
              ideas, and I’m exploring how ML can augment developer workflows.
            </p>
          </Card>
          <Card>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Based:</strong> Tehran, Iran
              </li>
              <li>
                <strong>Nationality:</strong> Iranian
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+989351017434"
                  className="underline decoration-dotted"
                >
                  (+98) 935 101 7434
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${resume.contact.email}`}
                  className="underline decoration-dotted"
                >
                  {resume.contact.email}
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" eyebrow="Work history">
        <Timeline
          items={[
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
          ]}
        />
      </Section>

      {/* Education */}
      <Section id="education" title="Education" eyebrow="Academic">
        <Timeline
          items={[
            {
              title: "B.Sc. in Computer Science",
              org: "Islamic Azad University, Science & Research Branch",
              location: "Tehran, Iran",
              period: "Sep 2018 — Jul 2023",
              bullets: [
                "Strong results in DSA, DB Systems, AI, Mathematical Logic.",
                "TA for Database Systems: modeling, SQL optimization, projects.",
                "Talks on cryptographic algorithms and Rust in AI.",
                "Final Project: Full‑Stack Blog (Node.js, GraphQL, React). Final grade: 16.52 / 20 (≈3.22/4).",
              ],
            },
          ]}
        />
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" eyebrow="Selected work">
        <div className="grid md:grid-cols-2 gap-6">
          {resume.projects.map((p: any) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-[hsl(var(--muted))]">{p.period}</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  {p.stack.map((s: string) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
              <p className="mt-3 leading-7">{p.description}</p>
              <div className="mt-4 flex gap-3">
                {p.url && (
                  <Link
                    href={p.url}
                    className="btn-ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </Link>
                )}
                {p.repo && (
                  <Link
                    href={p.repo}
                    className="btn-ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" eyebrow="Toolbox">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resume.skills.map((s: string) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Section>

      {/* Languages & Certs */}
      <Section id="extra" title="Languages & Certifications" eyebrow="More">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold mb-2">Languages</h3>
            <ul className="space-y-1">
              <li>Persian — native</li>
              <li>English — IELTS 7.0 (C1 overall)</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Certifications</h3>
            <ul className="space-y-1">
              <li>Backend Development — Udemy</li>
              <li>Frontend Development — Udemy (Sep 14, 2022)</li>
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  );
}
