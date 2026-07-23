"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

interface ServiceTeaserProps {
  title: string;
  items: string[];
  href: string;
  delay?: number;
}

export default function ServiceTeaser({ title, items, href, delay = 0 }: ServiceTeaserProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-3xl border border-line bg-cream p-9 md:p-10 shadow-card">
        <h3 className="font-display text-2xl text-ink">{title}</h3>
        <ul className="mt-7 space-y-3 flex-1">
          {items.slice(0, 5).map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.92rem] text-graphite">
              <Check size={15} strokeWidth={1.6} className="mt-1 shrink-0 text-gold" />
              <span>{item}</span>
            </li>
          ))}
          {items.length > 5 && (
            <li className="text-[0.88rem] text-graphite/60 pl-7">
              en {items.length - 5} andere diensten
            </li>
          )}
        </ul>
        <Link
          href={href}
          className="group mt-8 inline-flex items-center gap-2 text-sm text-ink transition-colors duration-300 hover:text-gold w-fit"
        >
          Meer informatie
          <ArrowRight
            size={15}
            strokeWidth={1.6}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </Reveal>
  );
}
