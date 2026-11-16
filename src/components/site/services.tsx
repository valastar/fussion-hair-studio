import { ArrowUpRight, Brush, Paintbrush, Scissors, SprayCan, type LucideIcon } from "lucide-react";
import { SERVICES, buildWhatsAppLink, type ServiceId } from "@/lib/fussion";

const ICONS: Record<ServiceId, LucideIcon> = {
  corte: Scissors,
  afeitado: Brush,
  tinte: Paintbrush,
  peinado: SprayCan,
};

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Servicios</p>
          <h2 className="mt-4 text-5xl font-medium md:text-6xl">
            Hecho con <span className="italic text-gold">oficio</span>
          </h2>
        </div>
        <p className="max-w-sm font-light text-muted-foreground">
          Elige tu servicio y agenda directo con nosotros. Sin apps, sin vueltas.
        </p>
      </div>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.id];
          return (
            <li key={service.id} className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-card">
              <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              <Icon className="mt-8 size-9 stroke-[1.25] text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
              <h3 className="mt-6 text-3xl font-medium">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href={buildWhatsAppLink({ services: [service.id] })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary"
              >
                Agendar <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
