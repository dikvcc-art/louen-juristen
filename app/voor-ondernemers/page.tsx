import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFullList from "@/components/ServiceFullList";
import SlideImageText from "@/components/SlideImageText";
import { servicesOndernemers, contactHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voor ondernemers",
  description:
    "Praktische juridische ondersteuning voor ondernemers en het MKB: contracten, algemene voorwaarden, incasso en meer.",
};

export default function VoorOndernemersPage() {
  return (
    <>
      <PageHero
        eyebrow="Voor ondernemers"
        title="Juridische ondersteuning voor ondernemers"
        intro="Als ondernemer heb je behoefte aan praktische, betrouwbare juridische ondersteuning. Louén Juristenkantoor denkt met je mee."
      />

      <section className="bg-cream pb-14 pt-2 md:py-20">
        <SlideImageText
          src="/images/about-desk.jpg"
          alt="Rustige werkplek van Louén Juristenkantoor"
          imageSide="right"
        >
          <span className="eyebrow text-gold">Praktisch &amp; toegankelijk</span>
          <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
            Juridische ondersteuning die aansluit bij het tempo van je onderneming.
          </p>
        </SlideImageText>
      </section>

      <section className="bg-cream pb-20 pt-8 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <ServiceFullList items={servicesOndernemers} />

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
