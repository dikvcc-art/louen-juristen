import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.louenjuristen.nl"),
  title: {
    default: "Louén Juristenkantoor | Juridische ondersteuning met een persoonlijke aanpak",
    template: "%s | Louén Juristenkantoor",
  },
  description:
    "Heldere juridische oplossingen voor particulieren én ondernemers. Persoonlijk, betrokken en deskundig.",
  keywords: [
    "Louén Juristenkantoor",
    "juridisch advies",
    "jurist Rotterdam",
    "juridische ondersteuning particulieren",
    "juridische ondersteuning ondernemers",
  ],
  authors: [{ name: "Louén Juristenkantoor" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Louén Juristenkantoor | Juridische ondersteuning met een persoonlijke aanpak",
    description:
      "Heldere juridische oplossingen voor particulieren én ondernemers. Persoonlijk, betrokken en deskundig.",
    url: "https://www.louenjuristen.nl",
    siteName: "Louén Juristenkantoor",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Louén Juristenkantoor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Louén Juristenkantoor",
    description: "Juridische ondersteuning met een persoonlijke aanpak.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
