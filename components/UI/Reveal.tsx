"use client";

import { MotionConfig, motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div className={className} {...fadeUp(delay)}>
        {children}
      </motion.div>
    </MotionConfig>
  );
}
