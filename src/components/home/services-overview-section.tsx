"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { images, imageSrc } from "@/lib/stock-images";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Layanan",
    heading: "Satu partner untuk kebutuhan IT properti Anda.",
    sub: "Dari perencanaan sampai implementasi dan support, kami membantu membangun sistem yang sesuai kebutuhan operasional — bukan sekadar memasang perangkat.",
    items: [
      {
        slug: "konsultasi",
        title: "Konsultasi & IT Planning",
        desc: "Audit kondisi IT Anda dan dapatkan rekomendasi yang jelas sebelum membeli perangkat, melakukan renovasi, atau membangun sistem baru.",
        image: images.consulting,
      },
      {
        slug: "software",
        title: "Software Custom",
        desc: "Bangun sistem yang mengikuti workflow bisnis Anda — mulai dari dashboard internal, integrasi, automation, hingga aplikasi khusus.",
        image: images.customSoftware,
      },
      {
        slug: "jaringan",
        title: "Jaringan & Internet",
        desc: "Wi-Fi dan jaringan yang stabil, terencana, dan siap digunakan oleh tim, tenant, maupun tamu.",
        image: images.network,
      },
      {
        slug: "cctv",
        title: "CCTV & Keamanan",
        desc: "Sistem CCTV yang mudah dipantau, memiliki recording yang jelas, dan dirancang berdasarkan kebutuhan area serta operasional.",
        image: images.cctv,
      },
    ],
    cta: "Pelajari Layanan",
  },
  en: {
    eyebrow: "Services",
    heading: "One partner for your property's IT needs.",
    sub: "From planning to implementation and support, we help build systems that fit your operations — not just install equipment.",
    items: [
      {
        slug: "konsultasi",
        title: "Consulting & IT Planning",
        desc: "Audit your current IT setup and get clear recommendations before buying equipment, renovating, or building a new system.",
        image: images.consulting,
      },
      {
        slug: "software",
        title: "Custom Software",
        desc: "Build systems that follow your business workflow — from internal dashboards and integrations to automation and dedicated apps.",
        image: images.customSoftware,
      },
      {
        slug: "jaringan",
        title: "Network & Internet",
        desc: "Stable, well-planned Wi-Fi and networking ready for your team, tenants, and guests alike.",
        image: images.network,
      },
      {
        slug: "cctv",
        title: "CCTV & Security",
        desc: "CCTV systems that are easy to monitor, with clear recording, designed around your area and operational needs.",
        image: images.cctv,
      },
    ],
    cta: "Learn More",
  },
};

export function ServicesOverviewSection() {
  const t = useContent(COPY);

  return (
    <section id="layanan" className="scroll-mt-28 bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-muted">{t.sub}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <Link
                href={`/layanan#${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-md shadow-black/5 transition-shadow hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={imageSrc(item.image, 700)}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-dark">
                    {t.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
