"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
  light = false,
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`eyebrow mb-5 ${light ? "text-goldlight" : "text-gold"}`}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`title-rule ${inView ? "is-revealed" : ""} font-display text-[2.1rem] leading-[1.15] sm:text-4xl md:text-[2.75rem] font-medium ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
