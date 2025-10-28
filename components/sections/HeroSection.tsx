"use client";

import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, staggerChild } from "@/lib/motionPresets";
import { Badge } from "@/components/Badge";
import { Resume } from "@/types/resume";

export function HeroSection({
  photo,
  cvUrl,
  isExternalCV,
  resume,
}: {
  photo: string;
  cvUrl: string;
  isExternalCV: boolean;
  resume: Resume;
}) {
  return (
    <section className="relative pt-10 pb-16">
      {/* background aura behind hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex justify-center z-0"
      >
        <div className="h-[400px] w-[600px] max-w-full rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--brand)/0.18)_0%,transparent_70%)] dark:opacity-30" />
      </div>

      {/* content */}
      <div className="relative z-10 grid items-center gap-10 md:grid-cols-[280px,1fr]">
        {/* Portrait */}
        <motion.div
          className="mx-auto md:mx-0 w-48 h-48 md:w-64 md:h-64 relative"
          {...fadeUp(0)}
        >
          {/* Glow frame */}
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2rem] blur-2xl bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),_transparent_60%)]"
          />
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <Image
              src={photo}
              alt={`Portrait of ${resume.name}`}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          className="text-center md:text-left space-y-6"
          {...fadeUp(0.05)}
        >
          <div className="inline-flex items-center gap-2 badge">
            <span className="size-2 rounded-full bg-[hsl(var(--brand))] shadow-[0_0_8px_hsl(var(--brand)/0.8)]" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {resume.name.split(" ")[0]}{" "}
            <span className="text-[hsl(var(--brand))]">
              {resume.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[hsl(var(--muted))] max-w-3xl md:max-w-2xl md:pr-6 mx-auto md:mx-0 leading-relaxed">
            {resume.title} with 3+ years of experience. I build resilient,
            data-driven interfaces with React &amp; Next.js, and I’m passionate
            about machine learning and intelligent software systems.
          </p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3"
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Download CV */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {/* CV download: internal files use <a download>, external links open in new tab */}
              {isExternalCV ? (
                <Link
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Download className="size-4" aria-hidden /> Download CV
                </Link>
              ) : (
                <a href={cvUrl} download className="btn-primary">
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

            {/* LinkedIn */}
            <motion.div variants={staggerChild}>
              <Link
                href={resume.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
              >
                <Linkedin className="size-4" aria-hidden />{" "}
                <span>LinkedIn</span>
              </Link>
            </motion.div>

            {/* GitHub */}
            <motion.div variants={staggerChild}>
              <Link
                href={resume.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
              >
                <Github className="size-4" aria-hidden /> <span>GitHub</span>
              </Link>
            </motion.div>

            {/* Email */}
            <motion.div variants={staggerChild}>
              <Link
                href={`mailto:${resume.contact.email}`}
                className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
              >
                <Mail className="size-4" aria-hidden /> <span>Email</span>
              </Link>
            </motion.div>

            {/* See Projects */}
            <motion.div variants={staggerChild}>
              <Link
                href="#projects"
                className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
              >
                <span>See projects</span>{" "}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick tags */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2 pt-1"
            {...fadeUp(0.15)}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
