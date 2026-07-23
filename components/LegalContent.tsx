import { ReactNode } from "react";
import { Download } from "lucide-react";

export function LegalDownloadLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      download
      className="group mb-10 inline-flex items-center gap-2.5 rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-all duration-300 ease-soft hover:border-gold hover:text-gold"
    >
      <Download size={15} strokeWidth={1.6} />
      Download als PDF
    </a>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-line pb-10 pt-10 first:pt-0">
      <h2 className="font-display text-xl text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-graphite">
        {children}
      </div>
    </div>
  );
}

export function LegalOL({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal space-y-3 pl-5 marker:text-graphite/50">{children}</ol>
  );
}

export function LegalSubOL({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-2 list-[lower-alpha] space-y-1.5 pl-5 marker:text-graphite/50">
      {children}
    </ol>
  );
}

export function LegalUL({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2 list-disc pl-5 marker:text-gold">{children}</ul>
  );
}

export function LegalMeta({ lines }: { lines: string[] }) {
  return (
    <div className="mb-14 flex flex-wrap gap-x-8 gap-y-2 text-sm text-graphite/70">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}

export function LegalInfoCard({
  label,
  rows,
}: {
  label: string;
  rows: { key: string; value: string }[];
}) {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-beige/30 p-6">
      <p className="mb-3 text-sm font-medium text-ink">{label}</p>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-2 text-[0.92rem] sm:grid-cols-2">
        {rows.map((row) => (
          <div className="flex gap-2" key={row.key}>
            <dt className="text-graphite/60">{row.key}:</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
