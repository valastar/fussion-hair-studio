import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/fussion-logo.png";
import { Button } from "@/components/ui/button";
import { BRANCHES, FACEBOOK_URL, INSTAGRAM_URL, PHONE_DISPLAY, buildWhatsAppLink } from "@/lib/fussion";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="barber-pole absolute inset-y-0 left-0 w-1.5 opacity-80" aria-hidden />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
        <h2 className="text-5xl font-medium leading-tight md:text-6xl">
          Tu próximo corte <span className="italic text-gold">te espera</span>
        </h2>
        <Button asChild variant="gold" size="xl">
          <a href="#agenda">Agenda tu cita</a>
        </Button>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <img src={logo} alt="Fussion Hombres Peluquería" width={640} height={166} loading="lazy" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-sm font-light text-muted-foreground">
            Peluquería especializada en caballeros en Hermosillo, Sonora.
          </p>
        </div>
        <div>
          <p className="eyebrow">Sucursales</p>
          <ul className="mt-4 space-y-4 text-sm font-light text-foreground/80">
            {BRANCHES.map((b) => (
              <li key={b.id}>
                <span className="font-display text-lg text-foreground">{b.name}</span>
                <br />
                {b.address}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contacto</p>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-display text-2xl text-foreground hover:text-primary"
          >
            <MessageCircle className="size-5 text-whatsapp" /> {PHONE_DISPLAY}
          </a>
          <div className="mt-6 flex gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Fussion"
              className="grid size-11 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary">
              <Instagram className="size-5" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Fussion"
              className="grid size-11 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary">
              <Facebook className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} Fussion Hombres Peluquería. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
