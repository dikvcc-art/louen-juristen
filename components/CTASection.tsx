"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { cta, contactHref } from "@/lib/content";

export default function CTASection() {
  const external = contactHref.startsWith("http");

  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-28">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[45vmax] w-[45vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(169,135,86,0.12)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-content px-6 md:px-10 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
            {cta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-[1.02rem] leading-relaxed text-cream/60">
            {cta.text}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href={contactHref}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-9 py-4 text-sm tracking-wide text-ink transition-all duration-300 ease-soft hover:bg-goldlight"
          >
            {cta.button}
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
