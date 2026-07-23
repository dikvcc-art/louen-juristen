"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero, contactHref } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="absolute -left-1/4 top-0 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(169,135,86,0.07)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/logo-devices.jpg"
                alt="Louén Juristenkantoor huisstijl"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-gold/25" />
            </div>
          </motion.div>

          {/* Tekst */}
          <div className="order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-gold"
            >
              Juridisch Advies &middot; Rotterdam
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-[2.2rem] font-medium leading-[1.14] text-ink sm:text-5xl md:text-[3rem]"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[1.05rem] leading-relaxed text-graphite"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 space-y-4 text-[0.96rem] leading-relaxed text-graphite/90"
            >
              {hero.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-lg italic text-ink/85"
            >
              {hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={contactHref}
                target={contactHref.startsWith("http") ? "_blank" : undefined}
                rel={contactHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-3 rounded-md border border-ink px-8 py-3.5 text-sm tracking-wide text-ink transition-all duration-300 ease-soft hover:bg-ink hover:text-cream"
              >
                Neem contact op
                <ArrowRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <Link
                href="/diensten"
                className="group inline-flex items-center gap-2 text-sm tracking-wide text-graphite transition-colors duration-300 hover:text-gold"
              >
                Bekijk onze diensten
                <ArrowRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
