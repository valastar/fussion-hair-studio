export const WHATSAPP_NUMBER = "526624290050";
export const PHONE_DISPLAY = "662 429 0050";
export const INSTAGRAM_URL = "https://www.instagram.com/fussionhombrespeluqueria";
export const FACEBOOK_URL = "https://www.facebook.com/FussionPeluqueriaHmo";

export type ServiceId = "corte" | "afeitado" | "tinte" | "peinado";

export const SERVICES: { id: ServiceId; name: string; description: string }[] = [
  { id: "corte", name: "Corte", description: "Clásico, fade o a tijera. Lo platicamos y lo hacemos a tu estilo." },
  { id: "afeitado", name: "Afeitado y barba", description: "Navaja, toalla caliente y perfilado para una barba impecable." },
  { id: "tinte", name: "Tinte", description: "Color y cobertura de canas con un acabado natural." },
  { id: "peinado", name: "Peinado", description: "Acabado con producto profesional para el día a día o un evento." },
];

export type BranchId = "san-cristobal" | "plaza-dila";

export const BRANCHES: { id: BranchId; name: string; address: string }[] = [
  {
    id: "san-cristobal",
    name: "San Cristóbal",
    address: "Blvd. Antonio Quiroga 87, Real de Quiroga, 83224 Hermosillo, Son.",
  },
  {
    id: "plaza-dila",
    name: "Plaza Dila",
    address: "Blvd. José María Morelos s/n, Local 14, Sacramento, 83140 Hermosillo, Son.",
  },
];

export function mapEmbedUrl(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export function directionsUrl(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

/** Builds the WhatsApp booking link with the client's choices pre-written in the message. */
export function buildWhatsAppLink(opts: {
  services?: ServiceId[] | undefined;
  branch?: BranchId | undefined;
  name?: string | undefined;
} = {}) {
  const lines = ["Hola Fussion, me gustaría agendar una cita."];
  const services = (opts.services ?? [])
    .map((id) => SERVICES.find((s) => s.id === id)?.name)
    .filter(Boolean);
  if (services.length) lines.push(`Servicio: ${services.join(", ")}`);
  const branch = BRANCHES.find((b) => b.id === opts.branch);
  if (branch) lines.push(`Sucursal: ${branch.name}`);
  const name = opts.name?.trim();
  if (name) lines.push(`Nombre: ${name}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
