import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import PricingCard from "@/components/PricingCard";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import {
  pricingPackagesOndernemers,
  hourlyRate,
  pricingClosing,
  pricingNote,
  extraSupportNote,
  contactHref,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarieven",
  description: "Tarieven van Louén Juristenkantoor voor ondernemers.",
};

export default function TarievenPage() {
  const external = contactHref.startsWith("http");

  return (
    <>
      <PageHero
        eyebrow="Tarieven"
        title="Tarieven"
        intro="Heldere pakketten voor ondernemers, plus een uurtarief voor losse werkzaamheden."
      />

      <section className="bg-cream pb-10 md:pb-14">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <SectionTitle eyebrow="Voor ondernemers" title="Kies het pakket dat bij je past" align="center" />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
            {pricingPackagesOndernemers.map((pkg, i) => (
              <PricingCard key={pkg.name} {...pkg} delay={i * 0.1} />
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-xl text-center text-[0.92rem] leading-relaxed text-graphite">
              {extraSupportNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-20 pt-6 md:pb-28 md:pt-10">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-beige/40 p-8 md:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="eyebrow text-gold">{hourlyRate.title}</span>
                  <p className="mt-2 font-display text-xl text-ink">{hourlyRate.label}</p>
                </div>
                <p className="font-display text-2xl text-ink">{hourlyRate.price}</p>
              </div>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-graphite">
                {hourlyRate.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-xl text-center">
              <p className="text-[0.98rem] leading-relaxed text-graphite">{pricingNote}</p>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-graphite">{pricingClosing}</p>
              <a
                href={contactHref}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-cream transition-all duration-300 ease-soft hover:bg-gold"
              >
                Neem contact op
                <ArrowRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
