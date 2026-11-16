import { MapPin, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRANCHES, buildWhatsAppLink, directionsUrl, mapEmbedUrl } from "@/lib/fussion";

export function Branches() {
  return (
    <section id="sucursales" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <p className="eyebrow">Visítanos</p>
        <h2 className="mt-4 text-5xl font-medium md:text-6xl">
          Dos sucursales en <span className="italic text-gold">Hermosillo</span>
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {BRANCHES.map((b) => (
            <article key={b.id} className="overflow-hidden rounded-sm border border-border bg-background shadow-card">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-border">
                <iframe
                  title={`Mapa de la sucursal ${b.name}`}
                  src={mapEmbedUrl(b.address)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale-[0.6] invert-[0.9] hue-rotate-180 contrast-[0.9]"
                />
              </div>
              <div className="p-7 md:p-9">
                <h3 className="text-4xl font-medium">{b.name}</h3>
                <p className="mt-3 flex items-start gap-3 font-light text-muted-foreground">
                  <MapPin className="mt-1 size-4 shrink-0 text-primary" /> {b.address}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="gold" size="lg" className="rounded-sm text-xs">
                    <a href={buildWhatsAppLink({ branch: b.id })} target="_blank" rel="noopener noreferrer">
                      <MessageCircle /> Agendar aquí
                    </a>
                  </Button>
                  <Button asChild variant="goldOutline" size="lg" className="rounded-sm text-xs">
                    <a href={directionsUrl(b.address)} target="_blank" rel="noopener noreferrer">
                      <Navigation /> Cómo llegar
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
