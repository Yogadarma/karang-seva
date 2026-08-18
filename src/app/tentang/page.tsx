"use client";

import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { images, unsplashUrl } from "@/lib/stock-images";
import { useContent } from "@/lib/language-context";

const HEADER = {
  id: {
    eyebrow: "Tentang Kami",
    heading: "Karang Seva",
    sub: "IT partner untuk properti dan kantor di Bali.",
  },
  en: {
    eyebrow: "About Us",
    heading: "Karang Seva",
    sub: "The IT partner for properties and offices in Bali.",
  },
};

const STORY = {
  id: {
    heading: "Arti nama kami",
    body: [
      "Karang — karang laut yang melindungi pesisir dari ombak. Simbol ketahanan dan pelindung. Dalam konteks Bali, karang juga berarti tanah atau pekarangan — rumah, home base.",
      "Seva — istilah Sansekerta yang diserap budaya Bali lewat Hindu: pelayanan tulus, pengabdian tanpa ego, bukan sekadar transaksi.",
      "Seperti karang yang melindungi pantai, Karang Seva hadir menjaga properti dan kantor Anda tetap berjalan, kokoh, dan terlindungi — bukan cuma jadi vendor yang datang sekali lalu menghilang.",
    ],
  },
  en: {
    heading: "What our name means",
    body: [
      "Karang — coral reef that shields the coastline from waves. A symbol of resilience and protection. In Balinese, karang also means land or homestead — a home base.",
      "Seva — a Sanskrit term adopted into Balinese Hindu culture: selfless service, devotion without ego, not just a transaction.",
      "Like coral protecting a shoreline, Karang Seva exists to keep your property and office running, sturdy, and protected — not just a vendor that shows up once and disappears.",
    ],
  },
};

const APPROACH = {
  id: {
    heading: "Cara kami bekerja",
    points: [
      {
        title: "Vendor-netral",
        desc: "Rekomendasi kami berdasarkan kebutuhan Anda, bukan komisi dari brand hardware atau software tertentu.",
      },
      {
        title: "Satu titik kontak",
        desc: "Satu nomor WhatsApp untuk konsultasi, jaringan, CCTV, dan software — kami yang urus koordinasi ke vendor lain kalau perlu.",
      },
      {
        title: "Dwibahasa",
        desc: "Komunikasi Indonesia & English, untuk klien lokal maupun pemilik bisnis expat di Bali.",
      },
      {
        title: "Fleksibel, tanpa mengikat",
        desc: "Retainer bulanan bisa disesuaikan naik-turun sesuai kebutuhan — tanpa kontrak jangka panjang yang kaku.",
      },
    ],
  },
  en: {
    heading: "How we work",
    points: [
      {
        title: "Vendor-neutral",
        desc: "Our recommendations are based on your needs, not a commission from a specific hardware or software brand.",
      },
      {
        title: "One point of contact",
        desc: "One WhatsApp number for consulting, networking, CCTV, and software — we coordinate with other vendors when needed.",
      },
      {
        title: "Bilingual",
        desc: "Communication in Indonesian & English, for local clients and expat business owners in Bali alike.",
      },
      {
        title: "Flexible, never locked in",
        desc: "Monthly retainers scale up or down as needed — no rigid long-term contracts.",
      },
    ],
  },
};

export default function TentangPage() {
  const header = useContent(HEADER);
  const story = useContent(STORY);
  const approach = useContent(APPROACH);

  return (
    <>
      <PageHeader eyebrow={header.eyebrow} heading={header.heading} sub={header.sub} />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{story.heading}</h2>
            <div className="mt-5 space-y-4">
              {story.body.map((p) => (
                <p key={p} className="max-w-[58ch] text-muted">{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src={unsplashUrl(images.heroProperty.id, 700)}
              alt={images.heroProperty.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{approach.heading}</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {approach.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-background p-6">
                  <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{point.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
