import { useEffect, useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import logo from "@/assets/fussion-logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { buildWhatsAppLink } from "@/lib/fussion";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#agenda", label: "Agenda" },
  { href: "#sucursales", label: "Sucursales" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="Fussion Hombres Peluquería, inicio">
          <img src={logo} alt="Fussion Hombres Peluquería" width={640} height={166} className="h-10 w-auto md:h-11" />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.24em] text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" size="lg" className="hidden rounded-sm text-xs sm:inline-flex">
            <a href="#agenda">Agenda tu cita</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
                <Menu className="!size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] border-border bg-background">
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <nav className="mt-14 flex flex-col gap-1" aria-label="Menú móvil">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 font-display text-3xl text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Button asChild variant="whatsapp" size="xl" className="mt-10 w-full">
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Escríbenos por WhatsApp
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
