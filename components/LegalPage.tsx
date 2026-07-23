import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { placeholderLegal } from "@/lib/content";

interface LegalPageProps {
  eyebrow: string;
  title: string;
}

export default function LegalPage({ eyebrow, title }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl rounded-3xl border border-line bg-beige/30 p-10 md:p-12">
              <p className="italic text-graphite">{placeholderLegal}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
