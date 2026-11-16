import corte from "@/assets/corte.jpg";
import afeitado from "@/assets/afeitado.jpg";

const POINTS = [
  { title: "Solo caballeros", text: "Nos especializamos en cortes, barba y cuidado para hombre." },
  { title: "Dos sucursales", text: "San Cristóbal y Plaza Dila, en Hermosillo." },
  { title: "Cita por WhatsApp", text: "Escríbenos, elige tu hora y llega directo a tu silla." },
];

export function Experience() {
  return (
    <section id="experiencia" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2">
        <div className="relative grid grid-cols-5 gap-4">
          <img
            src={corte}
            alt="Barbero realizando un corte fade a tijera"
            width={1024}
            height={1280}
            loading="lazy"
            className="col-span-3 aspect-[4/5] w-full rounded-sm object-cover shadow-card"
          />
          <img
            src={afeitado}
            alt="Afeitado de barba con navaja y toalla caliente"
            width={1024}
            height={1280}
            loading="lazy"
            className="col-span-2 mt-20 aspect-[4/5] w-full rounded-sm object-cover shadow-card"
          />
        </div>

        <div>
          <p className="eyebrow">La experiencia Fussion</p>
          <h2 className="mt-4 text-5xl font-medium leading-tight md:text-6xl">
            Ven y <span className="italic text-gold">consiéntete</span>
          </h2>
          <p className="mt-6 max-w-lg font-light leading-relaxed text-muted-foreground">
            Un espacio pensado para ti: buen ambiente, atención sin prisa y el detalle que hace la diferencia en
            cada corte.
          </p>
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {POINTS.map((p) => (
              <div key={p.title} className="grid gap-2 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                <dt className="font-display text-2xl text-primary">{p.title}</dt>
                <dd className="font-light text-foreground/80">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
