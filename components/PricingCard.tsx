"use client";

import { Check } from "lucide-react";
import Reveal from "./Reveal";

interface PricingCardProps {
  name: string;
  accent: "bronze" | "silver" | "gold";
  price: string;
  period: string;
  description: string;
  features: string[];
  delay?: number;
}

const accentStyles = {
  bronze: {
    border: "border-t-bronze",
    dot: "bg-bronze",
    label: "text-bronze",
  },
  silver: {
    border: "border-t-silver",
    dot: "bg-silver",
    label: "text-[#8B8F96]",
  },
  gold: {
    border: "border-t-gold",
    dot: "bg-gold",
    label: "text-gold",
  },
};

export default function PricingCard({
  name,
  accent,
  price,
  period,
  description,
  features,
  delay = 0,
}: PricingCardProps) {
  const styles = accentStyles[accent];
  const featured = accent === "gold";

  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`flex h-full flex-col rounded-3xl border-l border-r border-b border-t-4 border-l-line border-r-line border-b-line ${styles.border} bg-cream p-8 md:p-9 ${
          featured ? "shadow-soft md:-translate-y-3" : "shadow-card"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
          <span className={`eyebrow ${styles.label}`}>{name}</span>
        </div>

        <div className="mt-5 flex items-baseline gap-2">
          <span className="font-display text-3xl text-ink">{price}</span>
        </div>
        <p className="mt-1 text-[0.82rem] text-graphite/60">{period}</p>

        <p className="mt-5 text-[0.92rem] leading-relaxed text-graphite">{description}</p>

        <ul className="mt-7 space-y-3 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[0.88rem] text-graphite">
              <Check size={14} strokeWidth={1.8} className={`mt-1 shrink-0 ${styles.label}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
