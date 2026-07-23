"use client";

import SlideImageText from "./SlideImageText";
import { Check } from "lucide-react";
import { whyChoosePoints } from "@/lib/content";

export default function WhyChoose() {
  return (
    <section id="waarom" className="bg-beige/50 py-24 md:py-32">
      <SlideImageText src="/images/why-choose-desk.jpg" alt="Rustige werkplek van Louén Juristenkantoor">
        <span className="eyebrow text-gold">Waarom kiezen voor Lou&eacute;n</span>
        <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
          Waarom kiezen voor Lou&eacute;n Juristenkantoor?
        </h2>

        <ul className="mt-9 space-y-4">
          {whyChoosePoints.map((point) => (
            <li key={point} className="flex items-start gap-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Check size={14} strokeWidth={1.8} />
              </div>
              <p className="text-[0.95rem] leading-relaxed text-ink/85">{point}</p>
            </li>
          ))}
        </ul>
      </SlideImageText>
    </section>
  );
}
