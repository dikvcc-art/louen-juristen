"use client";

import { useState, FormEvent } from "react";
import { Send, Check } from "lucide-react";
import Reveal from "./Reveal";

const fieldClasses =
  "w-full rounded-xl border border-line bg-cream px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-graphite/40 outline-none transition-colors duration-300 focus:border-gold";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Nog geen backend gekoppeld — dit toont alleen een bevestiging in de interface.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Reveal>
        <div className="flex flex-col items-center rounded-3xl border border-gold/25 bg-beige/40 px-8 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-cream">
            <Check size={22} strokeWidth={1.6} />
          </div>
          <h3 className="mt-6 font-display text-2xl text-ink">Bedankt voor je bericht</h3>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-graphite">
            We nemen zo spoedig mogelijk contact met je op.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-line bg-cream p-8 shadow-card md:p-10"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="naam" className="mb-2 block text-sm text-graphite">
              Naam
            </label>
            <input id="naam" name="naam" type="text" required className={fieldClasses} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-2 block text-sm text-graphite">
              E-mailadres
            </label>
            <input id="email" name="email" type="email" required className={fieldClasses} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="telefoon" className="mb-2 block text-sm text-graphite">
              Telefoonnummer
            </label>
            <input id="telefoon" name="telefoon" type="tel" className={fieldClasses} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="onderwerp" className="mb-2 block text-sm text-graphite">
              Onderwerp
            </label>
            <input id="onderwerp" name="onderwerp" type="text" className={fieldClasses} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="bericht" className="mb-2 block text-sm text-graphite">
              Bericht
            </label>
            <textarea
              id="bericht"
              name="bericht"
              required
              rows={5}
              className={`${fieldClasses} resize-none`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-cream transition-all duration-300 ease-soft hover:bg-gold"
        >
          Verstuur bericht
          <Send
            size={15}
            strokeWidth={1.6}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>
    </Reveal>
  );
}
