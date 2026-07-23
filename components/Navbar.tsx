"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, contactHref } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const externalContact = contactHref.startsWith("http");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-soft ${
          scrolled
            ? "bg-cream/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,27,25,0.06)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-content px-6 md:px-10 flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex flex-col leading-[1.05] shrink-0">
            <span className="font-display text-lg md:text-xl tracking-[0.12em] text-ink">
              LOU&Eacute;N
            </span>
            <span className="eyebrow text-[0.62rem] text-gold tracking-widest2">
              JURISTENKANTOOR
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.88rem] transition-colors duration-300 relative group ${
                  isActive(link.href) ? "text-ink" : "text-graphite hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a
              href={contactHref}
              target={externalContact ? "_blank" : undefined}
              rel={externalContact ? "noopener noreferrer" : undefined}
              className="ml-2 inline-flex items-center rounded-full border border-ink/15 bg-ink px-6 py-2.5 text-[0.85rem] text-cream transition-all duration-300 hover:bg-gold hover:border-gold"
            >
              Neem contact op
            </a>
          </div>

          <button
            aria-label="Menu openen"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-ink p-2 -mr-2"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink overflow-y-auto"
          >
            <div className="flex items-center justify-between h-20 px-6">
              <span className="flex flex-col leading-[1.05]">
                <span className="font-display text-lg text-cream tracking-[0.12em]">
                  LOU&Eacute;N
                </span>
                <span className="eyebrow text-[0.6rem] text-gold tracking-widest2">
                  JURISTENKANTOOR
                </span>
              </span>
              <button
                aria-label="Menu sluiten"
                onClick={() => setMenuOpen(false)}
                className="text-cream p-2 -mr-2"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col px-6 mt-6 gap-1 pb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-display text-2xl sm:text-3xl py-3 border-b border-cream/10 flex items-center justify-between ${
                      isActive(link.href) ? "text-gold" : "text-cream/90"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={contactHref}
                  target={externalContact ? "_blank" : undefined}
                  rel={externalContact ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-gold px-7 py-3 text-ink text-sm"
                >
                  Neem contact op
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
