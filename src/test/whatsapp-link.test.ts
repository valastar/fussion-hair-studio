import { describe, expect, it } from "vitest";
import { buildWhatsAppLink } from "@/lib/fussion";

const message = (url: string) => decodeURIComponent(new URL(url).searchParams.get("text") ?? "");

describe("WhatsApp booking link", () => {
  it("goes to the Fussion WhatsApp number", () => {
    expect(buildWhatsAppLink().startsWith("https://wa.me/526624290050?")).toBe(true);
  });

  it("includes the chosen services, branch and name", () => {
    const text = message(
      buildWhatsAppLink({ services: ["corte", "afeitado"], branch: "plaza-dila", name: " Juan " }),
    );
    expect(text).toBe(
      "Hola Fussion, me gustaría agendar una cita.\nServicio: Corte, Afeitado y barba\nSucursal: Plaza Dila\nNombre: Juan",
    );
  });

  it("omits lines the client left empty", () => {
    expect(message(buildWhatsAppLink({ name: "  " }))).toBe(
      "Hola Fussion, me gustaría agendar una cita.",
    );
  });
});
