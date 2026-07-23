import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactMethods from "@/components/ContactMethods";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Louén Juristenkantoor via WhatsApp, Instagram, e-mail of het contactformulier.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Laten we kennismaken"
        intro="Heb je een juridische vraag of wil je vrijblijvend kennismaken? Neem gerust contact op via onderstaande kanalen of het contactformulier."
      />

      <section className="bg-cream pb-20 md:pb-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <ContactMethods />
        </div>
      </section>

      <section className="bg-beige/40 py-20 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
