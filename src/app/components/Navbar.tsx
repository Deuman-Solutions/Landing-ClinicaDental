import { Stethoscope, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavbarData } from "@/app/hooks/useNavbarData";

export function Navbar() {
  const { data } = useNavbarData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!data) return null;

  return (
    <nav className="bg-surface/80 backdrop-blur-xl w-full sticky top-0 z-50 border-b border-outline-variant/30">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 md:px-10 py-5">
        <div className="text-headline-md font-headline-md font-extrabold text-primary tracking-tighter flex items-center gap-2">
          <Stethoscope className="text-primary size-7" />
          {data.brand.name}
        </div>

        <div className="hidden md:flex items-center gap-10">
          {data.links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={
                link.active
                  ? "text-primary font-bold border-b-2 border-primary py-1 transition-all duration-300"
                  : "text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button className="hidden sm:inline-flex bg-primary text-on-primary px-8 py-3 h-auto rounded-full font-label-md shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
            {data.cta.label}
          </Button>
          <button
            type="button"
            aria-label="Abrir menú"
            className="md:hidden text-on-surface p-2 rounded-full hover:bg-surface-container transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-6 border-t border-outline-variant/30">
          {data.links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={
                link.active
                  ? "text-primary font-bold pt-4"
                  : "text-on-surface-variant font-medium pt-4"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="sm:hidden mt-2 bg-primary text-on-primary px-8 py-3 h-auto rounded-full font-label-md">
            {data.cta.label}
          </Button>
        </div>
      )}
    </nav>
  );
}
