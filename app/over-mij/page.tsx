import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SlideImageText from "@/components/SlideImageText";
import { aboutText, contactHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Over mij",
  description: "Maak kennis met Louelle Jo-Ann Boot, oprichtster van Louén Juristenkantoor.",
};

export default function OverMijPage() {
  return (
    <>
      <PageHero eyebrow="Over mij" title="Over Louén Juristenkantoor" />

      <section className="bg-cream pb-24 md:pb-32">
        <SlideImageText
          src="/images/louelle-portrait.jpg"
          alt="Louelle Jo-Ann Boot, oprichtster van Louén Juristenkantoor"
          imageSide="left"
          aspect="aspect-[3/4]"
        >
          <div className="space-y-5 text-graphite leading-relaxed">
            {aboutText.paragraphs.map((p) => (
              <p key={p} className={p === aboutText.paragraphs[0] ? "font-display text-2xl text-ink" : ""}>
                {p}
              </p>
            ))}
          </div>
          <a
            href={contactHref}
            target={contactHref.startsWith("http") ? "_blank" : undefined}
            rel={contactHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-cream transition-all duration-300 ease-soft hover:bg-gold w-fit"
          >
            Neem contact op
            <ArrowRight
              size={15}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </SlideImageText>
      </section>
    </>
  );
}
