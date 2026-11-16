import { ArrowDown, MapPin } from "lucide-react";
import hero from "@/assets/hero-barberia.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={hero}
        alt="Interior de la peluquería Fussion con sillas de barbero de piel"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 bg-fade-bottom" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow flex items-center gap-3">
            <span className="barber-pole inline-block h-5 w-1.5 rounded-full animate-pole" aria-hidden />
            Peluquería especializada en caballeros
          </p>
          <h1 className="mt-6 text-6xl font-medium leading-[0.95] text-foreground sm:text-7xl md:text-8xl">
            Corte de cabello <span className="italic text-gold">y barba</span>
          </h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-foreground/80">
            Tu lugar en Hermosillo para verte bien y salir renovado. Agenda en segundos por WhatsApp.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <a href="#agenda">Agenda tu cita</a>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <a href="#sucursales">
                <MapPin /> Ver sucursales
              </a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        aria-label="Ir a servicios"
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-primary md:flex"
      >
        Descubre <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
