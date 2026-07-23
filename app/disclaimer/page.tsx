import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  LegalSection,
  LegalUL,
  LegalMeta,
  LegalInfoCard,
  LegalDownloadLink,
} from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer van Louén Juristenkantoor.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="Juridisch document" title="Disclaimer" />

      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <LegalDownloadLink href="/documents/disclaimer-louen.pdf" />

              <LegalMeta
                lines={["Louén Juristenkantoor", "Versie 1.0", "Laatst bijgewerkt: 23 juli 2026"]}
              />

              <LegalSection heading="1. Algemeen">
                <p>
                  Deze disclaimer is van toepassing op het gebruik van de website van Louén
                  Juristenkantoor (www.louenjuristen.nl) en op alle informatie die via deze
                  website beschikbaar wordt gesteld.
                </p>
                <p>
                  Door deze website te bezoeken of de daarop aangeboden informatie te
                  gebruiken, stemt u in met de inhoud van deze disclaimer.
                </p>
              </LegalSection>

              <LegalSection heading="2. Informatief karakter">
                <p>De informatie op deze website is uitsluitend bedoeld voor algemene informatiedoeleinden.</p>
                <p>
                  Hoewel Louén Juristenkantoor de inhoud van deze website met de grootst
                  mogelijke zorg samenstelt, kan niet worden gegarandeerd dat alle informatie
                  volledig, juist, actueel of foutloos is.
                </p>
                <p>Aan de inhoud van deze website kunnen geen rechten worden ontleend.</p>
              </LegalSection>

              <LegalSection heading="3. Geen juridisch advies">
                <p>
                  De informatie op deze website vormt geen individueel juridisch advies en
                  kan niet worden beschouwd als een juridisch oordeel over een specifieke
                  situatie.
                </p>
                <p>
                  Iedere juridische kwestie is afhankelijk van de feiten en omstandigheden
                  van het individuele geval.
                </p>
                <p>
                  Voor persoonlijk juridisch advies wordt geadviseerd contact op te nemen met
                  Louén Juristenkantoor.
                </p>
              </LegalSection>

              <LegalSection heading="4. Geen advocatenkantoor">
                <p>Louén Juristenkantoor is een juristenkantoor en geen advocatenkantoor.</p>
                <p>
                  Voor procedures waarbij de wet verplichte procesvertegenwoordiging door een
                  advocaat voorschrijft, zal Louén Juristenkantoor u hiervan op de hoogte
                  stellen en kan, indien gewenst, worden doorverwezen naar een advocaat of
                  andere gespecialiseerde rechtsbijstandverlener.
                </p>
              </LegalSection>

              <LegalSection heading="5. Aansprakelijkheid">
                <p>
                  Louén Juristenkantoor aanvaardt geen aansprakelijkheid voor directe of
                  indirecte schade die voortvloeit uit:
                </p>
                <LegalUL>
                  <li>het gebruik van deze website;</li>
                  <li>het vertrouwen op informatie die op deze website is geplaatst;</li>
                  <li>tijdelijke onbereikbaarheid van de website;</li>
                  <li>technische storingen;</li>
                  <li>onjuistheden of onvolledigheden in de verstrekte informatie.</li>
                </LegalUL>
                <p>
                  Voor zover aansprakelijkheid wettelijk niet kan worden uitgesloten, geldt
                  deze uitsluitend binnen de grenzen zoals opgenomen in de algemene
                  voorwaarden van Louén Juristenkantoor.
                </p>
              </LegalSection>

              <LegalSection heading="6. Externe links">
                <p>De website kan hyperlinks bevatten naar websites van derden.</p>
                <p>
                  Louén Juristenkantoor heeft geen invloed op de inhoud of beschikbaarheid
                  van deze websites en aanvaardt hiervoor geen enkele verantwoordelijkheid of
                  aansprakelijkheid.
                </p>
                <p>
                  Het opnemen van een hyperlink betekent niet dat Louén Juristenkantoor de
                  inhoud van die website onderschrijft.
                </p>
              </LegalSection>

              <LegalSection heading="7. Intellectuele eigendom">
                <p>
                  Alle teksten, afbeeldingen, logo&rsquo;s, ontwerpen, documenten, modellen,
                  downloads en overige inhoud van deze website zijn eigendom van Louén
                  Juristenkantoor of worden met toestemming gebruikt.
                </p>
                <p>
                  Zonder voorafgaande schriftelijke toestemming van Louén Juristenkantoor is
                  het niet toegestaan om inhoud van deze website geheel of gedeeltelijk te
                  kopiëren, publiceren, verspreiden, wijzigen of op andere wijze te gebruiken,
                  behalve voor persoonlijk en niet-commercieel gebruik voor zover wettelijk
                  toegestaan.
                </p>
              </LegalSection>

              <LegalSection heading="8. E-mail en elektronische communicatie">
                <p>
                  Hoewel Louén Juristenkantoor zorgvuldigheid betracht bij elektronische
                  communicatie, kan niet worden gegarandeerd dat e-mails of andere digitale
                  berichten altijd tijdig, volledig of zonder fouten worden ontvangen.
                </p>
                <p>
                  Louén Juristenkantoor is niet aansprakelijk voor schade die voortvloeit uit
                  storingen in elektronische communicatie, internetverbindingen of technische
                  systemen.
                </p>
              </LegalSection>

              <LegalSection heading="9. Wijzigingen">
                <p>
                  Louén Juristenkantoor behoudt zich het recht voor de inhoud van deze
                  website en deze disclaimer op ieder moment te wijzigen zonder
                  voorafgaande aankondiging.
                </p>
                <p>De meest actuele versie van de disclaimer is steeds via de website beschikbaar.</p>
              </LegalSection>

              <LegalSection heading="10. Toepasselijk recht">
                <p>Op deze disclaimer is uitsluitend Nederlands recht van toepassing.</p>
                <p>
                  Eventuele geschillen die voortvloeien uit of verband houden met deze
                  disclaimer of het gebruik van de website worden voorgelegd aan de bevoegde
                  rechter in het arrondissement waarin Louén Juristenkantoor is gevestigd,
                  tenzij dwingend recht anders bepaalt.
                </p>
              </LegalSection>

              <LegalSection heading="11. Contact">
                <p>
                  Heeft u vragen over deze disclaimer of over de inhoud van de website? Neem
                  dan gerust contact op met:
                </p>
                <LegalInfoCard
                  label="Louén Juristenkantoor"
                  rows={[
                    { key: "Vestigingsplaats", value: "Rotterdam" },
                    { key: "E-mail", value: "info@louenjuristen.nl" },
                    { key: "Telefoon", value: "+31 6 38970314" },
                    { key: "Website", value: "www.louenjuristen.nl" },
                  ]}
                />
              </LegalSection>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
