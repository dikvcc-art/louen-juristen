import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  LegalSection,
  LegalOL,
  LegalUL,
  LegalMeta,
  LegalDownloadLink,
} from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Klachtenregeling",
  description: "Klachtenregeling van Louén Juristenkantoor.",
};

export default function KlachtenregelingPage() {
  return (
    <>
      <PageHero eyebrow="Juridisch document" title="Klachtenregeling" />

      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <LegalDownloadLink href="/documents/klachtenregeling-louen.pdf" />

              <LegalMeta lines={["Louén Juristenkantoor", "Versie 1.0"]} />

              <LegalSection heading="Artikel 1 – Doel">
                <p>
                  Louén Juristenkantoor streeft naar een professionele, zorgvuldige en
                  klantgerichte dienstverlening. Ondanks deze inzet kan het voorkomen dat een
                  opdrachtgever niet tevreden is over de dienstverlening. Deze
                  klachtenregeling beschrijft hoe klachten worden behandeld.
                </p>
              </LegalSection>

              <LegalSection heading="Artikel 2 – Begripsbepaling">
                <p>Onder een klacht wordt verstaan:</p>
                <p>
                  Iedere schriftelijke uiting van ontevredenheid van een (voormalige)
                  opdrachtgever over de totstandkoming, uitvoering of kwaliteit van de
                  dienstverlening van Louén Juristenkantoor, of over de wijze waarop een
                  medewerker of de eigenaar zich heeft gedragen.
                </p>
              </LegalSection>

              <LegalSection heading="Artikel 3 – Indienen van een klacht">
                <LegalOL>
                  <li>
                    Een klacht dient zo spoedig mogelijk, maar bij voorkeur binnen 30 dagen
                    nadat de aanleiding voor de klacht zich heeft voorgedaan of redelijkerwijs
                    bekend had kunnen zijn, schriftelijk te worden ingediend.
                  </li>
                  <li>
                    Een klacht kan worden ingediend via:
                    <p className="mt-2">E-mail: info@louenjuristen.nl</p>
                    <p className="mt-2">Of per post aan:</p>
                    <p>Louén Juristenkantoor</p>
                    <p>Rotterdam</p>
                  </li>
                  <li>
                    De klacht bevat bij voorkeur:
                    <LegalUL>
                      <li>naam en contactgegevens van de opdrachtgever;</li>
                      <li>omschrijving van de klacht;</li>
                      <li>datum waarop de gebeurtenis heeft plaatsgevonden;</li>
                      <li>eventuele relevante documenten.</li>
                    </LegalUL>
                  </li>
                </LegalOL>
              </LegalSection>

              <LegalSection heading="Artikel 4 – Ontvangstbevestiging">
                <LegalOL>
                  <li>
                    Binnen vijf werkdagen na ontvangst van de klacht ontvangt de klager een
                    schriftelijke ontvangstbevestiging.
                  </li>
                  <li>
                    Indien aanvullende informatie nodig is, wordt de klager verzocht deze
                    binnen een redelijke termijn aan te leveren.
                  </li>
                </LegalOL>
              </LegalSection>

              <LegalSection heading="Artikel 5 – Behandeling van de klacht">
                <LegalOL>
                  <li>Iedere klacht wordt zorgvuldig, objectief en vertrouwelijk behandeld.</li>
                  <li>
                    Louén Juristenkantoor onderzoekt de klacht en stelt de opdrachtgever zo
                    nodig in de gelegenheid zijn of haar klacht nader toe te lichten.
                  </li>
                  <li>
                    Indien gewenst kan een persoonlijk of digitaal gesprek worden ingepland om
                    gezamenlijk tot een oplossing te komen.
                  </li>
                  <li>
                    Louén Juristenkantoor streeft ernaar klachten zoveel mogelijk in onderling
                    overleg op te lossen.
                  </li>
                </LegalOL>
              </LegalSection>

              <LegalSection heading="Artikel 6 – Beslissing">
                <LegalOL>
                  <li>
                    Binnen veertien dagen na ontvangst van de volledige klacht ontvangt de
                    opdrachtgever een inhoudelijke reactie.
                  </li>
                  <li>
                    Indien meer tijd nodig is voor het onderzoek, wordt de opdrachtgever
                    hiervan tijdig op de hoogte gesteld, onder vermelding van de reden en de
                    verwachte afhandelingstermijn.
                  </li>
                  <li>
                    De beslissing bevat een gemotiveerde reactie op de klacht en &ndash;
                    indien van toepassing &ndash; de voorgestelde oplossing.
                  </li>
                </LegalOL>
              </LegalSection>

              <LegalSection heading="Artikel 7 – Vertrouwelijkheid">
                <p>
                  Alle betrokkenen behandelen de klacht en de daarbij verstrekte informatie
                  vertrouwelijk, tenzij de wet of een rechterlijke uitspraak anders vereist.
                </p>
              </LegalSection>

              <LegalSection heading="Artikel 8 – Kosten">
                <p>
                  Aan het indienen en behandelen van een klacht zijn voor de opdrachtgever
                  geen kosten verbonden.
                </p>
              </LegalSection>

              <LegalSection heading="Artikel 9 – Geen opschorting van betalingsverplichtingen">
                <p>
                  Het indienen van een klacht schort de betalingsverplichtingen van de
                  opdrachtgever niet op, tenzij Louén Juristenkantoor schriftelijk anders
                  bevestigt.
                </p>
              </LegalSection>

              <LegalSection heading="Artikel 10 – Bewaartermijn">
                <p>
                  Klachten en de daarbij behorende correspondentie worden gedurende minimaal
                  twee jaar na afhandeling bewaard, tenzij een langere wettelijke
                  bewaartermijn geldt.
                </p>
              </LegalSection>

              <LegalSection heading="Artikel 11 – Slotbepalingen">
                <LegalOL>
                  <li>
                    Deze klachtenregeling maakt onderdeel uit van de algemene voorwaarden van
                    Louén Juristenkantoor.
                  </li>
                  <li>Op deze klachtenregeling is uitsluitend Nederlands recht van toepassing.</li>
                  <li>
                    Indien een klacht niet in onderling overleg kan worden opgelost, blijven
                    partijen bevoegd hun geschil voor te leggen aan de bevoegde Nederlandse
                    rechter, tenzij dwingend recht anders bepaalt.
                  </li>
                  <li>
                    Louén Juristenkantoor behoudt zich het recht voor deze klachtenregeling te
                    wijzigen. De meest actuele versie is beschikbaar via de website of wordt
                    op verzoek kosteloos toegezonden.
                  </li>
                </LegalOL>
              </LegalSection>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
