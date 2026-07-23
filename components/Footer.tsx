import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { footerLinks, legalLinks, footerTagline, copyrightText, socialLinks, contactMethods } from "@/lib/content";

const footerEmail = contactMethods.find((m) => m.label === "E-mail")?.value ?? "";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-cream/10">
      <div className="mx-auto max-w-content px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="flex flex-col leading-[1.05] w-fit">
              <span className="font-display text-xl text-cream tracking-[0.12em]">
                LOU&Eacute;N
              </span>
              <span className="eyebrow text-[0.62rem] text-gold tracking-widest2 mt-1">
                JURISTENKANTOOR
              </span>
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/50">
              {footerTagline}
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream/40 transition-colors duration-300 hover:text-gold"
              >
                <Instagram size={18} strokeWidth={1.4} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-cream/40 transition-colors duration-300 hover:text-gold"
              >
                <Linkedin size={18} strokeWidth={1.4} />
              </a>
              <a
                href={`mailto:${footerEmail}`}
                aria-label="E-mail"
                className="text-cream/40 transition-colors duration-300 hover:text-gold"
              >
                <Mail size={18} strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-cream/35 mb-5">Navigatie</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cream/35 mb-5">Juridisch</p>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-8">
          <p className="text-xs text-cream/30">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
