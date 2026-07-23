import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFullList from "@/components/ServiceFullList";
import SlideImageText from "@/components/SlideImageText";
import { servicesParticulieren, contactHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voor particulieren",
  description:
    "Juridische ondersteuning voor particulieren: van juridisch advies tot arbeidsrecht, huurrecht en consumentenrecht.",
};

export default function VoorParticulierenPage() {
  return (
    <>
      <PageHero
        eyebrow="Voor particulieren"
        title="Juridische ondersteuning voor particulieren"
        intro="Heb je als particulier te maken met een juridisch vraagstuk? Louén Juristenkantoor helpt je met heldere, persoonlijke begeleiding."
      />

      <section className="bg-cream pb-14 pt-2 md:py-20">
        <SlideImageText
          src="/images/over-mij-desk.jpg"
          alt="Rustige werkplek van Louén Juristenkantoor"
          imageSide="right"
        >
          <span className="eyebrow text-gold">Persoonlijk &amp; toegankelijk</span>
          <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
            Juridische hulp die aansluit bij jouw persoonlijke situatie.
          </p>
        </SlideImageText>
      </section>

      <section className="bg-cream pb-20 pt-8 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <ServiceFullList items={servicesParticulieren} />

          <div className="mt-16 flex justify-center">
            <a
              href={contactHref}
              target={contactHref.startsWith("http") ? "_blank" : undefined}
              rel={contactHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 text-sm tracking-wide text-cream transition-all duration-300 ease-soft hover:bg-gold"
            >
              Neem contact op
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
