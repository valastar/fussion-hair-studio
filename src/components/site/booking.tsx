import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRANCHES, SERVICES, buildWhatsAppLink, type BranchId, type ServiceId } from "@/lib/fussion";
import { cn } from "@/lib/utils";

const chip =
  "inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const chipOff = "border-border text-foreground/80 hover:border-primary/60 hover:text-foreground";
const chipOn = "border-primary bg-primary/10 text-primary";

export function Booking() {
  const [services, setServices] = useState<ServiceId[]>(["corte"]);
  const [branch, setBranch] = useState<BranchId | undefined>();
  const [name, setName] = useState("");

  const toggle = (id: ServiceId) =>
    setServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  const href = buildWhatsAppLink({ services, branch, name });

  return (
    <section id="agenda" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Agenda tu cita</p>
          <h2 className="mt-4 text-5xl font-medium leading-tight md:text-6xl">
            Tres toques <span className="italic text-gold">y listo</span>
          </h2>
          <p className="mt-6 max-w-md font-light leading-relaxed text-muted-foreground">
            Elige lo que necesitas y te abrimos WhatsApp con el mensaje ya escrito. Solo envíalo y te confirmamos
            tu horario.
          </p>
          <p className="mt-8 font-display text-2xl text-foreground/70">
            ¿Prefieres llamar?{" "}
            <a href="tel:+526624290050" className="text-primary underline-offset-4 hover:underline">
              662 429 0050
            </a>
          </p>
        </div>

        <div className="rounded-sm border border-border bg-card p-6 shadow-card md:p-10">
          <fieldset>
            <legend className="eyebrow">1 · Servicio</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const on = services.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(s.id)}
                    className={cn(chip, on ? chipOn : chipOff)}
                  >
                    {on && <Check className="size-4" />}
                    {s.name}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="eyebrow">2 · Sucursal</legend>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {BRANCHES.map((b) => {
                const on = branch === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setBranch(on ? undefined : b.id)}
                    className={cn(chip, "flex-col items-start gap-1 text-left", on ? chipOn : chipOff)}
                  >
                    <span className="font-display text-xl">{b.name}</span>
                    <span className="text-xs font-light text-muted-foreground">{b.address.split(",")[0]}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-8">
            <label htmlFor="booking-name" className="eyebrow">
              3 · Tu nombre <span className="tracking-normal normal-case text-muted-foreground">(opcional)</span>
            </label>
            <input
              id="booking-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="¿Cómo te llamas?"
              maxLength={60}
              className="mt-4 h-12 w-full rounded-sm border border-input bg-background px-4 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <Button asChild variant="whatsapp" size="xl" className="mt-10 w-full text-sm">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="!size-5" /> Enviar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
