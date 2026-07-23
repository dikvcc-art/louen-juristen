"use client";

import Reveal from "./Reveal";
import { serviceDescriptions, placeholderCopy } from "@/lib/content";

interface ServiceFullListProps {
  items: string[];
}

export default function ServiceFullList({ items }: ServiceFullListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item} delay={(i % 4) * 0.08}>
          <div className="h-full rounded-2xl border border-line bg-cream p-7 transition-all duration-[400ms] ease-soft hover:border-gold/40 hover:shadow-card">
            <h3 className="font-display text-lg text-ink">{item}</h3>
            <p className="mt-2.5 text-[0.9rem] leading-relaxed text-graphite/75">
              {serviceDescriptions[item] ?? placeholderCopy}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
