import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Experience } from "@/components/site/experience";
import { Booking } from "@/components/site/booking";
import { Branches } from "@/components/site/branches";
import { FinalCta, FloatingWhatsApp, SiteFooter } from "@/components/site/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fussion Peluquería · Corte de cabello y barba en Hermosillo" },
      {
        name: "description",
        content:
          "Peluquería especializada en caballeros en Hermosillo: corte, afeitado, tinte y peinado. Agenda tu cita por WhatsApp en San Cristóbal o Plaza Dila.",
      },
      { property: "og:title", content: "Fussion Peluquería · Corte de cabello y barba" },
      {
        property: "og:description",
        content: "Peluquería para caballeros en Hermosillo. Agenda tu cita por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Booking />
        <Branches />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
