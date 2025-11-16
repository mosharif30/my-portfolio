// src/components/hero/HeroCTAs.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { staggerParent, staggerChild } from "@/lib/motionPresets";

type HeroCTAsProps = {
  cvUrl: string;
  isExternalCV: boolean;
  linkedin: string;
  github: string;
  email: string;
};

export function HeroCTAs({
  cvUrl,
  isExternalCV,
  linkedin,
  github,
  email,
}: HeroCTAsProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center md:justify-start gap-3"
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Download CV */}
      <motion.div variants={staggerChild}>
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
      </motion.div>

      {/* LinkedIn */}
      <motion.div variants={staggerChild}>
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
        >
          <Linkedin className="size-4" aria-hidden /> <span>LinkedIn</span>
        </Link>
      </motion.div>

      {/* GitHub */}
      <motion.div variants={staggerChild}>
        <Link
          href={github}
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
          href={`mailto:${email}`}
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
  );
}
