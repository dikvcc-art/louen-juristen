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
  title: "Privacyverklaring",
  description: "Privacyverklaring van Louén Juristenkantoor.",
};

export default function PrivacyverklaringPage() {
  return (
    <>
      <PageHero eyebrow="Juridisch document" title="Privacyverklaring" />

      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <LegalDownloadLink href="/documents/privacyverklaring-louen.pdf" />

              <LegalMeta
                lines={["Louén Juristenkantoor", "Versie 1.0", "Laatst bijgewerkt: 23 juli 2026"]}
              />

              <LegalSection heading="1. Inleiding">
                <p>
                  Louén Juristenkantoor hecht veel waarde aan de bescherming van
                  persoonsgegevens. Persoonsgegevens worden zorgvuldig, vertrouwelijk en in
                  overeenstemming met de Algemene Verordening Gegevensbescherming (AVG), de
                  Uitvoeringswet AVG en overige toepasselijke wet- en regelgeving verwerkt.
                </p>
                <p>
                  Deze privacyverklaring legt uit welke persoonsgegevens worden verwerkt,
                  waarom dit gebeurt, hoe lang gegevens worden bewaard en welke rechten
                  betrokkenen hebben.
                </p>
              </LegalSection>

              <LegalSection heading="2. Verantwoordelijke">
                <p>De verwerkingsverantwoordelijke is:</p>
                <LegalInfoCard
                  label="Louén Juristenkantoor"
                  rows={[
                    { key: "Oprichtster", value: "Louelle Jo-Ann Boot" },
                    { key: "Vestigingsplaats", value: "Rotterdam" },
                    { key: "E-mailadres", value: "info@louenjuristen.nl" },
                    { key: "Telefoon", value: "+31 6 38970314" },
                    { key: "Website", value: "www.louenjuristen.nl" },
                    { key: "KvK-nummer", value: "volgt" },
                  ]}
                />
              </LegalSection>

              <LegalSection heading="3. Welke persoonsgegevens verwerken wij?">
                <p>
                  Afhankelijk van de dienstverlening kunnen onder meer de volgende
                  persoonsgegevens worden verwerkt:
                </p>
                <LegalUL>
                  <li>naam;</li>
                  <li>adres;</li>
                  <li>woonplaats;</li>
                  <li>telefoonnummer;</li>
                  <li>e-mailadres;</li>
                  <li>geboortedatum (indien noodzakelijk);</li>
                  <li>bedrijfsgegevens;</li>
                  <li>KvK-nummer;</li>
                  <li>btw-nummer;</li>
                  <li>correspondentie;</li>
                  <li>factuurgegevens;</li>
                  <li>betaalgegevens;</li>
                  <li>gegevens die u zelf verstrekt in documenten of e-mails;</li>
                  <li>overige gegevens die noodzakelijk zijn voor de uitvoering van de opdracht.</li>
                </LegalUL>
                <p>
                  Bijzondere of gevoelige persoonsgegevens worden uitsluitend verwerkt indien
                  dit noodzakelijk is voor de uitvoering van de opdracht of wanneer daarvoor
                  een wettelijke grondslag bestaat.
                </p>
              </LegalSection>

              <LegalSection heading="4. Doeleinden van de verwerking">
                <p>Persoonsgegevens worden uitsluitend verwerkt voor:</p>
                <LegalUL>
                  <li>het uitvoeren van de overeenkomst;</li>
                  <li>het geven van juridisch advies;</li>
                  <li>het opstellen en beoordelen van juridische documenten;</li>
                  <li>communicatie met cliënten;</li>
                  <li>het plannen van afspraken;</li>
                  <li>het versturen van offertes en facturen;</li>
                  <li>de financiële administratie;</li>
                  <li>het voldoen aan wettelijke verplichtingen;</li>
                  <li>het behandelen van klachten;</li>
                  <li>het beschermen van gerechtvaardigde belangen van Louén Juristenkantoor.</li>
                </LegalUL>
              </LegalSection>

              <LegalSection heading="5. Grondslagen">
                <p>
                  Louén Juristenkantoor verwerkt persoonsgegevens uitsluitend indien daarvoor
                  een wettelijke grondslag bestaat, waaronder:
                </p>
                <LegalUL>
                  <li>uitvoering van een overeenkomst;</li>
                  <li>toestemming van betrokkene;</li>
                  <li>wettelijke verplichting;</li>
                  <li>gerechtvaardigd belang.</li>
                </LegalUL>
              </LegalSection>

              <LegalSection heading="6. Bewaartermijnen">
                <p>Persoonsgegevens worden niet langer bewaard dan noodzakelijk is.</p>
                <p>
                  Voor administratieve gegevens geldt in beginsel de fiscale bewaarplicht van
                  zeven jaar, tenzij een langere wettelijke bewaartermijn van toepassing is.
                </p>
                <p>
                  Dossiers worden bewaard zolang dit noodzakelijk is voor een zorgvuldige
                  dienstverlening en het kunnen beantwoorden van eventuele vragen of
                  geschillen.
                </p>
              </LegalSection>

              <LegalSection heading="7. Verstrekking aan derden">
                <p>Louén Juristenkantoor verkoopt persoonsgegevens nooit aan derden.</p>
                <p>Persoonsgegevens worden uitsluitend gedeeld indien dit noodzakelijk is voor:</p>
                <LegalUL>
                  <li>uitvoering van de overeenkomst;</li>
                  <li>wettelijke verplichtingen;</li>
                  <li>
                    de inschakeling van professionele dienstverleners, zoals ICT-, hosting-,
                    boekhoud- of betaaldienstverleners;
                  </li>
                  <li>een uitdrukkelijk verzoek of toestemming van de cliënt.</li>
                </LegalUL>
                <p>
                  Met partijen die in opdracht persoonsgegevens verwerken worden, indien
                  wettelijk vereist, passende afspraken gemaakt.
                </p>
              </LegalSection>

              <LegalSection heading="8. Beveiliging">
                <p>
                  Louén Juristenkantoor neemt passende technische en organisatorische
                  maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde
                  toegang, misbruik, vernietiging of openbaarmaking.
                </p>
                <p>Hieronder vallen onder meer:</p>
                <LegalUL>
                  <li>beveiligde apparaten;</li>
                  <li>sterke wachtwoorden;</li>
                  <li>tweestapsverificatie waar mogelijk;</li>
                  <li>beveiligde e-mail;</li>
                  <li>beperkte toegang tot dossiers.</li>
                </LegalUL>
              </LegalSection>

              <LegalSection heading="9. Rechten van betrokkenen">
                <p>
                  Iedere betrokkene heeft, voor zover de wet daarin voorziet, het recht op:
                </p>
                <LegalUL>
                  <li>inzage;</li>
                  <li>rectificatie;</li>
                  <li>verwijdering;</li>
                  <li>beperking van verwerking;</li>
                  <li>overdraagbaarheid van gegevens;</li>
                  <li>bezwaar tegen verwerking;</li>
                  <li>intrekking van eerder gegeven toestemming.</li>
                </LegalUL>
                <p>Verzoeken kunnen worden gericht aan:</p>
                <p>info@louenjuristen.nl</p>
                <p>Louén Juristenkantoor reageert in beginsel binnen één maand.</p>
              </LegalSection>

              <LegalSection heading="10. Cookies">
                <p>
                  De website van Louén Juristenkantoor kan gebruikmaken van functionele
                  cookies die noodzakelijk zijn voor een goede werking van de website.
                </p>
                <p>
                  Indien analytische of marketingcookies worden gebruikt, worden bezoekers
                  hierover geïnformeerd en wordt &ndash; indien wettelijk vereist &ndash;
                  vooraf toestemming gevraagd.
                </p>
              </LegalSection>

              <LegalSection heading="11. Links naar andere websites">
                <p>De website kan links bevatten naar websites van derden.</p>
                <p>
                  Louén Juristenkantoor is niet verantwoordelijk voor de inhoud of het
                  privacybeleid van deze websites.
                </p>
              </LegalSection>

              <LegalSection heading="12. Klachten">
                <p>
                  Indien u van mening bent dat Louén Juristenkantoor uw persoonsgegevens niet
                  zorgvuldig verwerkt, verzoeken wij u eerst contact met ons op te nemen
                  zodat wij samen naar een passende oplossing kunnen zoeken.
                </p>
                <p>
                  Daarnaast heeft u het recht een klacht in te dienen bij de Autoriteit
                  Persoonsgegevens.
                </p>
              </LegalSection>

              <LegalSection heading="13. Wijzigingen">
                <p>Louén Juristenkantoor behoudt zich het recht voor deze privacyverklaring te wijzigen.</p>
                <p>De meest actuele versie wordt gepubliceerd op de website.</p>
              </LegalSection>

              <LegalSection heading="14. Contact">
                <p>
                  Voor vragen over deze privacyverklaring of over de verwerking van
                  persoonsgegevens kunt u contact opnemen met:
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
