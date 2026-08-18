"use client";

import { Reveal } from "@/components/motion/reveal";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Cara kerja",
    heading: "Empat langkah, bukan proses berbelit",
    items: [
      { title: "Konsultasi", desc: "Diskusi kebutuhan lewat WhatsApp atau kunjungan langsung — gratis, tanpa komitmen." },
      { title: "Desain", desc: "Kami susun rekomendasi teknis & penawaran yang sesuai skala properti/kantor Anda." },
      { title: "Instalasi", desc: "Tim kami kerjakan di lokasi, dari cabling sampai konfigurasi sistem." },
      { title: "Support", desc: "Retainer bulanan atau on-demand — kami tetap jadi kontak Anda setelah proyek selesai." },
    ],
  },
  en: {
    eyebrow: "How it works",
    heading: "Four steps, not a maze",
    items: [
      { title: "Consult", desc: "Discuss your needs over WhatsApp or an on-site visit — free, no commitment." },
      { title: "Design", desc: "We put together technical recommendations & a quote sized to your property or office." },
      { title: "Install", desc: "Our team executes on-site, from cabling to system configuration." },
      { title: "Support", desc: "Monthly retainer or on-demand — we stay your point of contact after the project ships." },
    ],
  },
};

export function ProcessSection() {
  const t = useContent(COPY);

  return (
    <section className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-wider text-accent">
            {t.eyebrow}
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">{t.heading}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="relative border-t-2 border-primary pt-5">
                <span className="font-mono text-sm text-white/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
