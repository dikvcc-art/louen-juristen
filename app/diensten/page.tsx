import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFullList from "@/components/ServiceFullList";
import CTASection from "@/components/CTASection";
import { servicesParticulieren, servicesOndernemers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Overzicht van de juridische diensten van Louén Juristenkantoor voor particulieren en ondernemers.",
};

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title="Onze diensten"
        intro="Louén Juristenkantoor biedt juridische ondersteuning aan zowel particulieren als ondernemers. Hieronder vind je een overzicht van de diensten per doelgroep."
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-3xl text-ink">Voor particulieren</h2>
            <Link
              href="/voor-particulieren"
              className="group inline-flex items-center gap-2 text-sm text-ink transition-colors duration-300 hover:text-gold"
            >
              Bekijk de volledige pagina
              <ArrowRight
                size={15}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
          <div className="mt-10">
            <ServiceFullList items={servicesParticulieren} />
          </div>
        </div>
      </section>

      <section className="bg-beige/50 py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-3xl text-ink">Voor ondernemers</h2>
            <Link
              href="/voor-ondernemers"
              className="group inline-flex items-center gap-2 text-sm text-ink transition-colors duration-300 hover:text-gold"
            >
              Bekijk de volledige pagina
              <ArrowRight
                size={15}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
          <div className="mt-10">
            <ServiceFullList items={servicesOndernemers} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
