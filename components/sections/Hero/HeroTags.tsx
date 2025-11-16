// src/components/hero/HeroTags.tsx
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Badge } from "@/components/Badge";

type HeroTagsProps = {
  tags: string[];
};

export function HeroTags({ tags }: HeroTagsProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center md:justify-start gap-2 pt-1"
      {...fadeUp(0.15)}
    >
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </motion.div>
  );
}
