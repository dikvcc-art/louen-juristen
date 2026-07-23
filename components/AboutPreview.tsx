"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SlideImageText from "./SlideImageText";
import SectionTitle from "./SectionTitle";
import { aboutText } from "@/lib/content";

export default function AboutPreview() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <SlideImageText
        src="/images/louelle-portrait.jpg"
        alt="Louelle Jo-Ann Boot, oprichtster van Louén Juristenkantoor"
        imageSide="left"
        aspect="aspect-[3/4]"
      >
        <SectionTitle eyebrow="Over Louén" title="Over Louén Juristenkantoor" />
        <p className="mt-8 text-graphite leading-relaxed">
          {aboutText.paragraphs[0]}
        </p>
        <p className="mt-4 text-graphite leading-relaxed line-clamp-4">
          {aboutText.paragraphs[1]}
        </p>
        <Link
          href="/over-mij"
          className="group mt-8 inline-flex items-center gap-2 text-sm text-ink transition-colors duration-300 hover:text-gold w-fit"
        >
          Lees meer over Louén
          <ArrowRight
            size={15}
            strokeWidth={1.6}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </SlideImageText>
    </section>
  );
}
