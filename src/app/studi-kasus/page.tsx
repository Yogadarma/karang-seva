"use client";

import { FolderClock, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

const HEADER = {
  id: {
    eyebrow: "Studi Kasus",
    heading: "Proyek pertama kami sedang berjalan",
    sub: "Karang Seva baru mulai — studi kasus lengkap akan tampil di sini begitu proyek pertama selesai.",
  },
  en: {
    eyebrow: "Case Studies",
    heading: "Our first projects are underway",
    sub: "Karang Seva is just getting started — full case studies will appear here once the first projects wrap up.",
  },
};

const COPY = {
  id: {
    heading: "Jadi salah satu klien pertama kami",
    body: "Klien yang bergabung di fase awal biasanya dapat perhatian paling detail — kami masih membangun portofolio, jadi setiap proyek dikerjakan dengan effort ekstra. Kalau properti atau kantor Anda butuh IT partner sekarang, jangan tunggu studi kasusnya ada dulu.",
    cta: "Diskusikan Proyek Anda",
    waMessage: "Halo Karang Seva, saya tertarik jadi salah satu klien awal.",
  },
  en: {
    heading: "Become one of our first clients",
    body: "Clients who join in this early phase usually get the most hands-on attention — we're still building our portfolio, so every project gets extra care. If your property or office needs an IT partner now, don't wait for the case studies to show up first.",
    cta: "Discuss Your Project",
    waMessage: "Hi Karang Seva, I'm interested in being one of your early clients.",
  },
};

export default function StudiKasusPage() {
  const header = useContent(HEADER);
  const t = useContent(COPY);

  return (
    <>
      <PageHeader eyebrow={header.eyebrow} heading={header.heading} sub={header.sub} />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
              <FolderClock className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground md:text-3xl">{t.heading}</h2>
            <p className="mt-4 text-muted">{t.body}</p>
            <div className="mt-8 flex justify-center">
              <Button href={buildWhatsAppLink(t.waMessage)} external size="lg">
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
