import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ServiceTeaser from "@/components/ServiceTeaser";
import SectionTitle from "@/components/SectionTitle";
import AboutPreview from "@/components/AboutPreview";
import SlideImageText from "@/components/SlideImageText";
import Timeline from "@/components/Timeline";
import CTASection from "@/components/CTASection";
import { servicesParticulieren, servicesOndernemers, aboutText } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />

      <section id="diensten" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <SectionTitle eyebrow="Diensten" title="Onze diensten" align="center" />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <ServiceTeaser
              title="Voor particulieren"
              items={servicesParticulieren}
              href="/voor-particulieren"
            />
            <ServiceTeaser
              title="Voor ondernemers"
              items={servicesOndernemers}
              href="/voor-ondernemers"
              delay={0.12}
            />
          </div>
        </div>
      </section>

      <AboutPreview />

      <section className="bg-beige/40 py-24 md:py-32">
        <SlideImageText
          src="/images/approach-desk.jpg"
          alt="Rustige werkplek van Louén Juristenkantoor"
          imageSide="right"
        >
          <span className="eyebrow text-gold">Onze aanpak</span>
          <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-3xl">
            {aboutText.paragraphs[2]}
          </p>
        </SlideImageText>
      </section>

      <Timeline />
      <CTASection />
    </>
  );
}
