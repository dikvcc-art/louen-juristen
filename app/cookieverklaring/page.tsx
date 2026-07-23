import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cookieverklaring" };

export default function Page() {
  return <LegalPage eyebrow="Juridisch document" title="Cookieverklaring" />;
}
