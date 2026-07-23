"use client";

import Reveal from "./Reveal";
import { MessageCircle, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { contactMethods, whatsappNumber, socialLinks } from "@/lib/content";

const icons = {
  WhatsApp: MessageCircle,
  Instagram: Instagram,
  "E-mail": Mail,
};

const hrefFor = (label: string, value: string) => {
  if (label === "WhatsApp" && whatsappNumber) return `https://wa.me/${whatsappNumber}`;
  if (label === "Instagram" && socialLinks.instagram) return socialLinks.instagram;
  if (label === "E-mail" && value && !value.startsWith("[")) return `mailto:${value}`;
  return null;
};

export default function ContactMethods() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {contactMethods.map((method, i) => {
        const Icon = icons[method.label as keyof typeof icons];
        const href = hrefFor(method.label, method.value);
        const external = href?.startsWith("http");
        const Wrapper = href ? "a" : "div";

        return (
          <Reveal key={method.label} delay={i * 0.1}>
            <Wrapper
              {...(href
                ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
                : {})}
              className={`group flex h-full flex-col items-start rounded-3xl border border-line bg-cream p-8 shadow-card transition-all duration-[400ms] ease-soft ${
                href ? "hover:border-gold/40 hover:shadow-soft" : ""
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-beige text-gold">
                  <Icon size={18} strokeWidth={1.4} />
                </div>
                {href && (
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="text-graphite/30 transition-all duration-300 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </div>
              <p className="eyebrow mt-7 text-graphite/50">{method.label}</p>
              <p className="mt-2 font-display text-lg text-ink">{method.value}</p>
            </Wrapper>
          </Reveal>
        );
      })}
    </div>
  );
}
