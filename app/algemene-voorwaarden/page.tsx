import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { LegalDownloadLink } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden van Louén Juristenkantoor.",
};

function Article({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line pb-10 pt-10 first:pt-0">
      <h2 className="font-display text-xl text-ink sm:text-2xl">
        Artikel {number} &ndash; {title}
      </h2>
      <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-graphite">
        {children}
      </div>
    </div>
  );
}

function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal space-y-3 pl-5 marker:text-graphite/50">{children}</ol>
  );
}

function SubOL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mt-2 list-[lower-alpha] space-y-1.5 pl-5 marker:text-graphite/50">
      {children}
    </ol>
  );
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <PageHero eyebrow="Juridisch document" title="Algemene Voorwaarden" />

      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <LegalDownloadLink href="/documents/algemene-voorwaarden-louen.pdf" />

              <div className="mb-14 flex flex-wrap gap-x-8 gap-y-2 text-sm text-graphite/70">
                <p>Louén Juristenkantoor</p>
                <p>Versie: 1.0</p>
                <p>Datum: 23 juli 2026</p>
              </div>

              <Article number={1} title="Definities">
                <p>In deze algemene voorwaarden wordt verstaan onder:</p>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-ink">Louén Juristenkantoor</dt>
                    <dd>
                      de eenmanszaak van Louelle Jo-Ann Boot, gevestigd te Rotterdam en
                      handelend onder de naam Louén Juristenkantoor.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">Opdrachtgever</dt>
                    <dd>
                      iedere natuurlijke persoon, rechtspersoon of andere organisatie die een
                      overeenkomst aangaat met Louén Juristenkantoor of aan wie een offerte is
                      uitgebracht.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">Overeenkomst</dt>
                    <dd>
                      iedere overeenkomst van opdracht als bedoeld in artikel 7:400 van het
                      Burgerlijk Wetboek, alsmede iedere aanvullende of vervolgopdracht tussen
                      Louén Juristenkantoor en opdrachtgever.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">Werkzaamheden</dt>
                    <dd>
                      alle juridische, adviserende, ondersteunende, administratieve en overige
                      diensten die Louén Juristenkantoor in opdracht verricht, waaronder &ndash;
                      maar niet uitsluitend &ndash; juridisch advies, dossierbeoordeling, het
                      opstellen of beoordelen van documenten, correspondentie, contracten,
                      bezwaarschriften, ingebrekestellingen, klachten, incassowerkzaamheden en
                      overige juridische ondersteuning.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">Partijen</dt>
                    <dd>Louén Juristenkantoor en opdrachtgever gezamenlijk.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">Schriftelijk</dt>
                    <dd>
                      iedere communicatie per brief of langs elektronische weg, waaronder
                      e-mail, zolang de inhoud duurzaam kan worden opgeslagen.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">Derden</dt>
                    <dd>
                      iedere natuurlijke persoon of rechtspersoon die geen partij is bij de
                      overeenkomst.
                    </dd>
                  </div>
                </dl>
              </Article>

              <Article number={2} title="Identiteit van Louén Juristenkantoor">
                <p>Louén Juristenkantoor is een eenmanszaak gevestigd te Rotterdam.</p>
                <p>De onderneming wordt gedreven door Louelle Jo-Ann Boot.</p>
                <div className="mt-6 rounded-2xl border border-line bg-beige/30 p-6">
                  <p className="mb-3 text-sm font-medium text-ink">Contactgegevens</p>
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-2 text-[0.92rem] sm:grid-cols-2">
                    <div className="flex gap-2">
                      <dt className="text-graphite/60">Vestigingsplaats:</dt>
                      <dd>Rotterdam</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-graphite/60">E-mailadres:</dt>
                      <dd>info@louenjuristen.nl</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-graphite/60">Telefoonnummer:</dt>
                      <dd>+31 6 38970314</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-graphite/60">Website:</dt>
                      <dd>www.louenjuristen.nl</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-graphite/60">KvK-nummer:</dt>
                      <dd>volgt</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-graphite/60">BTW-identificatienummer:</dt>
                      <dd>volgt</dd>
                    </div>
                  </dl>
                </div>
              </Article>

              <Article number={3} title="Toepasselijkheid">
                <OL>
                  <li>
                    Deze algemene voorwaarden zijn van toepassing op alle offertes,
                    overeenkomsten, werkzaamheden, adviezen, diensten en overige
                    rechtsverhoudingen tussen Louén Juristenkantoor en opdrachtgever.
                  </li>
                  <li>
                    Door een opdracht te verstrekken verklaart opdrachtgever kennis te hebben
                    genomen van deze algemene voorwaarden en daarmee akkoord te gaan.
                  </li>
                  <li>
                    Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien deze
                    uitdrukkelijk en schriftelijk door Louén Juristenkantoor zijn bevestigd.
                  </li>
                  <li>
                    De toepasselijkheid van algemene voorwaarden van opdrachtgever wordt
                    uitdrukkelijk van de hand gewezen, tenzij schriftelijk anders is
                    overeengekomen.
                  </li>
                  <li>
                    Indien één of meerdere bepalingen uit deze algemene voorwaarden geheel of
                    gedeeltelijk nietig blijken te zijn of worden vernietigd, blijven de
                    overige bepalingen volledig van kracht. Partijen zullen in dat geval een
                    vervangende bepaling overeenkomen die zoveel mogelijk aansluit bij het
                    doel en de strekking van de oorspronkelijke bepaling.
                  </li>
                  <li>
                    Indien Louén Juristenkantoor niet steeds strikte naleving van deze
                    voorwaarden verlangt, betekent dit niet dat deze voorwaarden niet langer
                    van toepassing zijn of dat afstand wordt gedaan van enig recht.
                  </li>
                </OL>
              </Article>

              <Article number={4} title="Offertes en totstandkoming van de overeenkomst">
                <OL>
                  <li>
                    Alle offertes, prijsopgaven en aanbiedingen van Louén Juristenkantoor zijn
                    vrijblijvend, tenzij uitdrukkelijk schriftelijk anders is vermeld.
                  </li>
                  <li>
                    Offertes zijn geldig gedurende dertig (30) dagen na dagtekening, tenzij
                    anders aangegeven.
                  </li>
                  <li>
                    Kennelijke schrijffouten, rekenfouten of vergissingen in offertes of
                    prijsopgaven binden Louén Juristenkantoor niet.
                  </li>
                  <li>
                    Een overeenkomst komt tot stand op het moment dat:
                    <SubOL>
                      <li>opdrachtgever een offerte schriftelijk of elektronisch accepteert;</li>
                      <li>
                        opdrachtgever mondeling opdracht verstrekt en Louén Juristenkantoor
                        deze aanvaardt; of
                      </li>
                      <li>
                        Louén Juristenkantoor feitelijk een aanvang maakt met de uitvoering van
                        de werkzaamheden.
                      </li>
                    </SubOL>
                  </li>
                  <li>
                    Indien meerdere personen gezamenlijk opdrachtgever zijn, zijn zij
                    hoofdelijk aansprakelijk voor alle verplichtingen die uit de overeenkomst
                    voortvloeien.
                  </li>
                  <li>
                    Aanbiedingen of prijsafspraken gelden uitsluitend voor de betreffende
                    opdracht en kunnen niet automatisch worden toegepast op toekomstige
                    opdrachten.
                  </li>
                </OL>
              </Article>

              <Article number={5} title="Uitvoering van de opdracht">
                <OL>
                  <li>
                    Louén Juristenkantoor zal de overeenkomst naar beste inzicht, deskundigheid
                    en zorgvuldigheid uitvoeren, overeenkomstig de eisen van goed vakmanschap.
                  </li>
                  <li>
                    De dienstverlening van Louén Juristenkantoor betreft een
                    inspanningsverbintenis en nadrukkelijk geen resultaatsverbintenis. Er wordt
                    geen garantie gegeven op een bepaald juridisch resultaat, de uitkomst van
                    een procedure of het succes van een bezwaar, klacht, onderhandeling of
                    andere juridische actie.
                  </li>
                  <li>
                    Louén Juristenkantoor is geen advocatenkantoor en verricht geen
                    werkzaamheden waarvoor de wet verplichte procesvertegenwoordiging door een
                    advocaat voorschrijft. Indien een zaak daarom vraagt, kan opdrachtgever
                    worden geadviseerd zich te wenden tot een advocaat of andere
                    gespecialiseerde rechtsbijstandverlener.
                  </li>
                  <li>
                    Louén Juristenkantoor is gerechtigd werkzaamheden geheel of gedeeltelijk
                    door derden te laten verrichten indien dit naar haar oordeel noodzakelijk
                    of wenselijk is voor een zorgvuldige uitvoering van de opdracht. Vooraf zal
                    opdrachtgever hierover, voor zover redelijkerwijs mogelijk, worden
                    geïnformeerd.
                  </li>
                  <li>
                    Termijnen die door Louén Juristenkantoor worden genoemd zijn indicatief,
                    tenzij uitdrukkelijk schriftelijk is overeengekomen dat sprake is van een
                    fatale termijn.
                  </li>
                  <li>
                    Opdrachtgever blijft te allen tijde verantwoordelijk voor het tijdig
                    aanleveren van correcte, volledige en actuele informatie die noodzakelijk
                    is voor de uitvoering van de opdracht.
                  </li>
                  <li>
                    Indien opdrachtgever benodigde informatie niet, niet volledig of niet
                    tijdig verstrekt, is Louén Juristenkantoor gerechtigd de uitvoering van de
                    werkzaamheden op te schorten en eventuele daaruit voortvloeiende extra
                    kosten aan opdrachtgever in rekening te brengen.
                  </li>
                  <li>
                    Louén Juristenkantoor behoudt zich het recht voor een opdracht te weigeren
                    of tussentijds te beëindigen indien voortzetting in strijd zou zijn met
                    wet- en regelgeving, beroepsethiek, de goede zeden of indien sprake is van
                    misbruik van dienstverlening of een vertrouwensbreuk.
                  </li>
                </OL>
              </Article>

              <Article number={6} title="Verplichtingen van de opdrachtgever">
                <OL>
                  <li>
                    Opdrachtgever verplicht zich alle gegevens, documenten en overige
                    informatie die voor de uitvoering van de overeenkomst van belang zijn
                    volledig, juist en tijdig aan Louén Juristenkantoor te verstrekken.
                  </li>
                  <li>
                    Opdrachtgever staat in voor de juistheid, volledigheid en betrouwbaarheid
                    van de verstrekte informatie, ook indien deze afkomstig is van derden.
                  </li>
                  <li>
                    Indien opdrachtgever onjuiste, onvolledige of misleidende informatie
                    verstrekt, is Louén Juristenkantoor niet aansprakelijk voor de gevolgen
                    daarvan.
                  </li>
                  <li>
                    Opdrachtgever is zelf verantwoordelijk voor het bewaken van wettelijke
                    termijnen, bezwaar- en beroepstermijnen en overige vervaltermijnen, tenzij
                    uitdrukkelijk schriftelijk is overeengekomen dat Louén Juristenkantoor deze
                    verantwoordelijkheid op zich neemt.
                  </li>
                  <li>
                    Opdrachtgever dient Louén Juristenkantoor direct te informeren over iedere
                    wijziging die van invloed kan zijn op de uitvoering van de opdracht.
                  </li>
                  <li>
                    Opdrachtgever zal zich gedurende de uitvoering van de opdracht redelijk en
                    coöperatief opstellen en alle medewerking verlenen die noodzakelijk is voor
                    een correcte uitvoering van de werkzaamheden.
                  </li>
                  <li>
                    Indien opdrachtgever zijn verplichtingen uit dit artikel niet nakomt, is
                    Louén Juristenkantoor gerechtigd de uitvoering van de opdracht op te
                    schorten of de overeenkomst geheel of gedeeltelijk te beëindigen, zonder
                    gehouden te zijn tot enige schadevergoeding.
                  </li>
                </OL>
              </Article>

              <Article number={7} title="Communicatie en elektronische dienstverlening">
                <OL>
                  <li>
                    Louén Juristenkantoor biedt haar dienstverlening onder meer aan via
                    e-mail, telefoon, WhatsApp, videobellen en andere digitale
                    communicatiemiddelen.
                  </li>
                  <li>
                    Opdrachtgever stemt ermee in dat communicatie langs elektronische weg
                    rechtsgeldig kan plaatsvinden.
                  </li>
                  <li>
                    Verzending van e-mails of andere digitale berichten geschiedt voor
                    rekening en risico van opdrachtgever vanaf het moment waarop het bericht
                    het verzendsysteem van Louén Juristenkantoor heeft verlaten.
                  </li>
                  <li>
                    Louén Juristenkantoor is niet aansprakelijk voor vertragingen, storingen
                    of verlies van elektronische communicatie veroorzaakt door
                    internetstoringen, technische defecten, spamfilters, softwareproblemen of
                    omstandigheden buiten haar invloed.
                  </li>
                  <li>
                    Via WhatsApp of vergelijkbare berichtenapps verstrekte informatie is
                    uitsluitend bedoeld als praktische communicatie en mag niet zonder meer
                    worden beschouwd als een volledig juridisch advies, tenzij uitdrukkelijk
                    anders is overeengekomen.
                  </li>
                  <li>
                    Louén Juristenkantoor behoudt zich het recht voor communicatiekanalen
                    tijdelijk of permanent te wijzigen.
                  </li>
                </OL>
              </Article>

              <Article number={8} title="Tarieven en prijswijzigingen">
                <OL>
                  <li>
                    Tenzij schriftelijk anders overeengekomen bedraagt het standaarduurtarief
                    van Louén Juristenkantoor &euro; 100,00 exclusief btw.
                  </li>
                  <li>
                    Voor bepaalde werkzaamheden kunnen vaste prijzen, abonnementen of
                    pakketprijzen worden overeengekomen.
                  </li>
                  <li>
                    Indien tijdens de uitvoering van de opdracht blijkt dat de omvang van de
                    werkzaamheden aanzienlijk groter is dan vooraf redelijkerwijs kon worden
                    voorzien, zal opdrachtgever hierover zo spoedig mogelijk worden
                    geïnformeerd.
                  </li>
                  <li>
                    Werkzaamheden die buiten de oorspronkelijke opdracht vallen worden
                    beschouwd als meerwerk en afzonderlijk in rekening gebracht.
                  </li>
                  <li>
                    Louén Juristenkantoor behoudt zich het recht voor haar tarieven jaarlijks
                    te wijzigen. Tariefswijzigingen hebben geen terugwerkende kracht op reeds
                    overeengekomen werkzaamheden, tenzij partijen schriftelijk anders
                    overeenkomen.
                  </li>
                  <li>
                    Reis-, parkeer-, griffie-, koeriers-, print-, verzend- of andere
                    noodzakelijke externe kosten kunnen afzonderlijk aan opdrachtgever worden
                    doorbelast.
                  </li>
                </OL>
              </Article>

              <Article number={9} title="Facturering en betaling">
                <OL>
                  <li>Facturen worden digitaal verzonden, tenzij schriftelijk anders is overeengekomen.</li>
                  <li>
                    De betalingstermijn bedraagt veertien (14) dagen na factuurdatum, tenzij
                    schriftelijk een andere termijn is overeengekomen.
                  </li>
                  <li>Betaling dient zonder opschorting, korting, verrekening of inhouding plaats te vinden.</li>
                  <li>
                    Indien opdrachtgever niet tijdig betaalt, verkeert hij van rechtswege in
                    verzuim zonder dat een ingebrekestelling is vereist.
                  </li>
                  <li>
                    Vanaf het moment van verzuim is opdrachtgever de wettelijke rente
                    verschuldigd overeenkomstig artikel 6:119 BW dan wel artikel 6:119a BW
                    indien opdrachtgever handelt in de uitoefening van een beroep of bedrijf.
                  </li>
                  <li>
                    Alle redelijke buitengerechtelijke incassokosten komen voor rekening van
                    opdrachtgever. Deze worden berekend overeenkomstig de Wet normering
                    buitengerechtelijke incassokosten en het daarbij behorende Besluit.
                  </li>
                  <li>
                    Door opdrachtgever gedane betalingen strekken eerst in mindering op
                    verschuldigde rente en kosten en vervolgens op de oudste openstaande
                    factuur.
                  </li>
                  <li>
                    Louén Juristenkantoor kan verlangen dat een voorschot wordt voldaan
                    alvorens met de werkzaamheden wordt aangevangen of deze worden voortgezet.
                  </li>
                </OL>
              </Article>

              <Article number={10} title="Opschorting, beëindiging en weigering van werkzaamheden">
                <OL>
                  <li>
                    Louén Juristenkantoor is gerechtigd de uitvoering van werkzaamheden
                    onmiddellijk op te schorten indien:
                    <SubOL>
                      <li>opdrachtgever zijn betalingsverplichtingen niet nakomt;</li>
                      <li>opdrachtgever onvoldoende medewerking verleent;</li>
                      <li>noodzakelijke informatie uitblijft;</li>
                      <li>sprake is van misbruik van dienstverlening;</li>
                      <li>
                        de opdracht naar het oordeel van Louén Juristenkantoor strijdig is met
                        de wet, de openbare orde of de goede zeden.
                      </li>
                    </SubOL>
                  </li>
                  <li>
                    Tijdens de opschorting blijven alle betalingsverplichtingen van
                    opdrachtgever onverminderd van kracht.
                  </li>
                  <li>
                    Louén Juristenkantoor is gerechtigd de overeenkomst zonder rechterlijke
                    tussenkomst geheel of gedeeltelijk te beëindigen indien voortzetting
                    redelijkerwijs niet van haar kan worden verlangd.
                  </li>
                  <li>
                    Reeds verrichte werkzaamheden blijven volledig verschuldigd, ook indien de
                    overeenkomst tussentijds wordt beëindigd.
                  </li>
                  <li>
                    Louén Juristenkantoor is niet aansprakelijk voor schade die ontstaat
                    doordat werkzaamheden overeenkomstig dit artikel worden opgeschort of
                    beëindigd.
                  </li>
                </OL>
              </Article>

              <Article number={11} title="Annulering en verplaatsing van afspraken">
                <OL>
                  <li>
                    Afspraken voor een intakegesprek, adviesgesprek of andere dienstverlening
                    kunnen kosteloos worden geannuleerd of verplaatst tot uiterlijk
                    vierentwintig (24) uur v&oacute;&oacute;r het afgesproken tijdstip.
                  </li>
                  <li>
                    Bij annulering binnen vierentwintig (24) uur of indien opdrachtgever
                    zonder bericht niet verschijnt, is Louén Juristenkantoor gerechtigd de
                    voor de afspraak gereserveerde tijd geheel of gedeeltelijk in rekening te
                    brengen.
                  </li>
                  <li>
                    Indien sprake is van aantoonbare overmacht aan de zijde van opdrachtgever
                    kan Louén Juristenkantoor besluiten hiervan af te wijken.
                  </li>
                  <li>
                    Louén Juristenkantoor behoudt zich het recht voor een afspraak wegens
                    onvoorziene omstandigheden te verplaatsen. In dat geval wordt zo spoedig
                    mogelijk een nieuwe afspraak aangeboden.
                  </li>
                </OL>
              </Article>

              <Article number={12} title="Meerwerk en aanvullende opdrachten">
                <OL>
                  <li>
                    Werkzaamheden die niet uitdrukkelijk onder de oorspronkelijke opdracht
                    vallen, worden aangemerkt als meerwerk.
                  </li>
                  <li>
                    Meerwerk wordt uitgevoerd na overleg met opdrachtgever, tenzij
                    onmiddellijke uitvoering noodzakelijk is om schade, verval van rechten of
                    het verstrijken van een wettelijke termijn te voorkomen.
                  </li>
                  <li>
                    Meerwerk wordt in rekening gebracht tegen het op dat moment geldende
                    uurtarief, tenzij schriftelijk een andere prijs is overeengekomen.
                  </li>
                  <li>
                    Een uitbreiding van de opdracht kan gevolgen hebben voor de
                    oorspronkelijke planning. Louén Juristenkantoor is hiervoor niet
                    aansprakelijk.
                  </li>
                  <li>
                    Mondeling of per e-mail gegeven aanvullende instructies worden eveneens
                    beschouwd als een opdracht, tenzij opdrachtgever deze direct gemotiveerd
                    betwist.
                  </li>
                </OL>
              </Article>

              <Article number={13} title="Geheimhouding">
                <OL>
                  <li>
                    Louén Juristenkantoor behandelt alle vertrouwelijke informatie die zij in
                    het kader van de overeenkomst ontvangt strikt vertrouwelijk.
                  </li>
                  <li>
                    Vertrouwelijke informatie wordt uitsluitend gebruikt voor de uitvoering
                    van de opdracht en wordt niet aan derden verstrekt, tenzij:
                    <SubOL>
                      <li>opdrachtgever hiervoor uitdrukkelijk toestemming heeft gegeven;</li>
                      <li>een wettelijke verplichting tot verstrekking bestaat;</li>
                      <li>verstrekking noodzakelijk is voor de uitvoering van de opdracht.</li>
                    </SubOL>
                  </li>
                  <li>De geheimhoudingsplicht blijft ook na beëindiging van de overeenkomst van kracht.</li>
                  <li>
                    Opdrachtgever behandelt eveneens alle vertrouwelijke informatie over de
                    werkwijze, tarieven, modellen, documenten en interne processen van Louén
                    Juristenkantoor vertrouwelijk.
                  </li>
                  <li>
                    Indien opdrachtgever in strijd handelt met dit artikel, is hij
                    aansprakelijk voor de daardoor ontstane schade.
                  </li>
                </OL>
              </Article>

              <Article number={14} title="Privacy en verwerking van persoonsgegevens">
                <OL>
                  <li>
                    Louén Juristenkantoor verwerkt persoonsgegevens overeenkomstig de
                    Algemene Verordening Gegevensbescherming (AVG), de Uitvoeringswet AVG en
                    overige toepasselijke wet- en regelgeving.
                  </li>
                  <li>
                    Persoonsgegevens worden uitsluitend verwerkt voor:
                    <SubOL>
                      <li>het uitvoeren van de overeenkomst;</li>
                      <li>communicatie met opdrachtgever;</li>
                      <li>facturering en administratie;</li>
                      <li>het voldoen aan wettelijke verplichtingen;</li>
                      <li>het beschermen van gerechtvaardigde belangen van Louén Juristenkantoor.</li>
                    </SubOL>
                  </li>
                  <li>
                    Louén Juristenkantoor treft passende technische en organisatorische
                    maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde
                    toegang of onrechtmatige verwerking.
                  </li>
                  <li>
                    Indien voor de uitvoering van de overeenkomst derden worden ingeschakeld
                    die persoonsgegevens verwerken, zal Louén Juristenkantoor waar nodig
                    passende afspraken maken.
                  </li>
                  <li>
                    Opdrachtgever heeft, voor zover de wet daarin voorziet, recht op inzage,
                    correctie, verwijdering, beperking van verwerking en
                    gegevensoverdraagbaarheid.
                  </li>
                  <li>
                    Een uitgebreide toelichting op de verwerking van persoonsgegevens is
                    opgenomen in de afzonderlijke privacyverklaring van Louén Juristenkantoor.
                  </li>
                </OL>
              </Article>

              <Article number={15} title="Dossierbeheer en bewaartermijnen">
                <OL>
                  <li>
                    Louén Juristenkantoor bewaart dossiers gedurende de termijn die
                    noodzakelijk is voor een zorgvuldige dienstverlening en voor zover
                    wettelijk vereist.
                  </li>
                  <li>
                    Na afloop van de bewaartermijn is Louén Juristenkantoor gerechtigd
                    dossiers en de daarin opgenomen gegevens te vernietigen, tenzij een
                    wettelijke verplichting zich daartegen verzet.
                  </li>
                  <li>
                    Digitale dossiers kunnen worden opgeslagen bij zorgvuldig geselecteerde
                    dienstverleners die passende beveiligingsmaatregelen treffen.
                  </li>
                  <li>
                    Op verzoek van opdrachtgever kan, voor zover wettelijk toegestaan, een
                    afschrift van het dossier worden verstrekt. Louén Juristenkantoor kan
                    hiervoor redelijke administratie- en kopieerkosten in rekening brengen.
                  </li>
                  <li>
                    Originele documenten die door opdrachtgever zijn verstrekt, worden op
                    verzoek geretourneerd. Indien opdrachtgever deze niet binnen een redelijke
                    termijn na afronding van de opdracht ophaalt of laat toezenden, mag Louén
                    Juristenkantoor deze vernietigen, tenzij de wet anders voorschrijft.
                  </li>
                  <li>
                    Louén Juristenkantoor is niet aansprakelijk voor verlies van gegevens als
                    gevolg van overmacht, technische storingen of omstandigheden die ondanks
                    passende beveiligingsmaatregelen redelijkerwijs niet konden worden
                    voorkomen.
                  </li>
                </OL>
              </Article>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
