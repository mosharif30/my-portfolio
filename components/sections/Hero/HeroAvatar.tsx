// src/components/hero/HeroAvatar.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";

type HeroAvatarProps = {
  photo: string;
  name: string;
};

export function HeroAvatar({ photo, name }: HeroAvatarProps) {
  return (
    <motion.div
      className="mx-auto md:mx-0 w-48 h-48 md:w-64 md:h-64 relative"
      {...fadeUp(0)}
    >
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[2rem] blur-2xl bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),_transparent_60%)]"
      />
      <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
        <Image
          src={photo}
          alt={`Portrait of ${name}`}
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
