# Louén Juristenkantoor — Website

Volledige, meerpagige website gebouwd met Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion en Lucide React Icons.

## Starten

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000).

## Deployen op Vercel

1. Push deze map naar een Git-repository (GitHub, GitLab of Bitbucket).
2. Ga naar [vercel.com](https://vercel.com) → **Add New Project** → selecteer de repository.
3. Vercel herkent automatisch Next.js. Klik op **Deploy**.
4. Klaar — geen extra configuratie nodig.

Zonder Git: installeer de Vercel CLI (`npm i -g vercel`) en run `vercel` in deze map.

## Paginastructuur

Dit is een volwaardige meerpagige website, geen one-page scroller:

```
/                    Home — samenvatting met doorklikmogelijkheden
/diensten            Volledig overzicht van alle diensten
/voor-particulieren  Volledige pagina gericht op particulieren
/voor-ondernemers    Volledige pagina gericht op ondernemers
/tarieven            Tarievenpagina (nog geen definitieve bedragen)
/over-mij            Over Louelle Jo-Ann Boot
/contact             Contactpagina met formulier en contactkanalen

/algemene-voorwaarden
/privacyverklaring
/cookieverklaring
/disclaimer
/klachtenregeling
```

## Structuur van de code

```
app/
  layout.tsx        -> fonts, SEO/metadata, Navbar + Footer om elke pagina heen
  page.tsx           -> homepage (samenvatting van alle onderdelen)
  diensten/, voor-ondernemers/, voor-particulieren/,
  tarieven/, over-mij/, contact/, en de 5 juridische paginas
                      -> elk een eigen route met eigen layout

components/
  Navbar.tsx         -> sticky navbar, scroll-blur, actieve pagina herkenbaar, mobiel menu
  Hero.tsx            -> hero op de homepage
  PageHero.tsx        -> compacte paginakop, gebruikt op alle subpaginas
  WhyChoose.tsx       -> "Waarom kiezen voor Louén" grid
  ServiceTeaser.tsx   -> korte dienstenkaart op de homepage
  ServiceFullList.tsx -> volledige dienstenlijst op de dienstenpaginas
  AboutPreview.tsx    -> korte introductie van Louén op de homepage
  Timeline.tsx        -> "Zo werken wij" stappen
  CTASection.tsx      -> herbruikbare call-to-action sectie
  ContactMethods.tsx  -> WhatsApp / Instagram / e-mail placeholders
  ContactForm.tsx      -> contactformulier (nog zonder backend)
  LegalPage.tsx       -> layout voor de 5 juridische documentpaginas
  Footer.tsx           -> footer met navigatie en juridische links
  Reveal.tsx / SectionTitle.tsx -> herbruikbare scroll-animaties

lib/
  content.ts          -> ALLE teksten, dienstenlijsten en placeholders op één plek
```

## Belangrijk: inhoud aanpassen

Vrijwel alle tekst staat gecentraliseerd in **`lib/content.ts`**. Pas daar aan:

- `hero` — titel, subtitel, introductietekst en tagline op de homepage
- `whyChoosePoints` — de 6 voordelen
- `servicesParticulieren` / `servicesOndernemers` — de dienstenlijsten
- `aboutText` — de tekst over Louelle (gebruikt op home én op de "Over mij"-pagina)
- `workSteps` — de 5 stappen van "Zo werken wij"
- `contactMethods` — WhatsApp/Instagram/e-mail. Vervang de waarden
  `[WhatsApp-nummer]`, `[Instagram-link]` en `[E-mailadres]` door de
  definitieve gegevens zodra deze bekend zijn.
- `placeholderCopy`, `placeholderPricing`, `placeholderLegal` — de drie
  placeholderteksten die op meerdere plekken worden hergebruikt

Zodra je een tekst in `content.ts` wijzigt, wordt deze overal op de site
bijgewerkt waar die tekst gebruikt wordt.

### Contactformulier

Het formulier op `/contact` is nu alleen een werkende interface: bij
versturen verschijnt een bevestiging in beeld, maar er is nog geen
backend gekoppeld. Zodra je weet waar de inzendingen naartoe moeten
(bijvoorbeeld een API-route, e-maildienst of formulierdienst zoals
Formspree), kan dat eenvoudig toegevoegd worden in
`components/ContactForm.tsx`, in de functie `handleSubmit`.

### Afbeeldingen

Alle afbeeldingen zijn nu gestileerde placeholdervlakken (geen externe
links die kunnen breken). Vervang ze door `next/image` zodra er
definitieve foto's zijn, bijvoorbeeld in `components/AboutPreview.tsx`
en `app/over-mij/page.tsx`:

```tsx
import Image from "next/image";
<Image src="/foto-louen.jpg" alt="Louelle Jo-Ann Boot" fill className="object-cover" />
```

Plaats de foto dan in de map `public/`.

### Logo

Het logo is nu tekstueel: "LOUÉN" / "JURISTENKANTOOR" gestapeld, in
`Navbar.tsx`, `Hero.tsx` en `Footer.tsx`. Zodra er een definitief
beeldmerk is, plaats je dat bestand in `public/` en vervang je de tekst
door een `<Image>`-component op die drie plekken.

### Juridische documenten

De 5 documentpagina's (`algemene-voorwaarden`, `privacyverklaring`,
`cookieverklaring`, `disclaimer`, `klachtenregeling`) tonen nu allemaal
`[Definitieve juridische tekst volgt]`. Vul de definitieve tekst per
pagina in door de placeholder in het betreffende bestand onder
`app/` te vervangen door de echte inhoud (via `<LegalPage>` in
`components/LegalPage.tsx`, of rechtstreeks in de paginabestanden).

## Technische opmerkingen

- Alle animaties respecteren `prefers-reduced-motion` en zijn rustig
  gehouden — geen overdreven bewegingen.
- Toetsenbordfocus is zichtbaar gestyled voor toegankelijkheid.
- De navigatie toont de actieve pagina duidelijk, op desktop en mobiel.
- De site is volledig responsive (mobiel, tablet, desktop).
- Metadata, Open Graph en semantische HTML-structuur zijn ingesteld per
  pagina in de bijbehorende `page.tsx`-bestanden.
