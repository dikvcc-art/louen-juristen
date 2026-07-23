"use client";

import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { workSteps } from "@/lib/content";

export default function Timeline() {
  return (
    <section id="werkwijze" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionTitle eyebrow="Werkwijze" title="Zo werken wij" align="center" />

        <div className="relative mt-20">
          {/* verbindingslijn */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-line md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {workSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="relative md:grid md:grid-cols-2 md:gap-10 md:py-8"
                >
                  <div
                    className={`hidden md:block ${
                      isLeft ? "col-start-1 text-right pr-10" : "col-start-2 pl-10"
                    }`}
                  >
                    {isLeft && <StepCard step={step} align="right" />}
                    {!isLeft && <StepCard step={step} align="left" />}
                  </div>

                  {/* dot */}
                  <div className="absolute left-6 top-1 -translate-x-1/2 md:left-1/2">
                    <Reveal delay={i * 0.06} y={0}>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cream ring-1 ring-gold">
                        <div className="h-2 w-2 rounded-full bg-gold" />
                      </div>
                    </Reveal>
                  </div>

                  {/* mobile */}
                  <div className="pl-14 md:hidden">
                    <StepCard step={step} align="left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  align,
}: {
  step: (typeof workSteps)[number];
  align: "left" | "right";
}) {
  return (
    <Reveal delay={0.1}>
      <div className={align === "right" ? "flex flex-col items-end" : ""}>
        <span className="eyebrow text-gold">Stap {step.number}</span>
        <h3 className="mt-2 font-display text-xl text-ink">{step.title}</h3>
        <p className="mt-2 max-w-sm text-[0.92rem] leading-relaxed text-graphite">
          {step.description}
        </p>
      </div>
    </Reveal>
  );
}
