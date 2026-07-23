"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 pb-12 md:pt-48 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,#EDE6DA_0%,#FAF7F2_60%)]" />
      <div className="absolute inset-0 grain opacity-50" />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-gold"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.15] text-ink sm:text-5xl md:text-[3.4rem]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-graphite"
          >
            {intro}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
