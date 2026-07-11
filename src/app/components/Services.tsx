import {
  Sparkles,
  AlignCenter,
  Syringe,
  Baby,
  Sun,
  HeartPulse,
  Microscope,
  Layers,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useServicesData } from "@/app/hooks/useServicesData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import type { ServiceIcon } from "@/app/data/services.data";

const ICONS: Record<ServiceIcon, typeof Sparkles> = {
  sparkles: Sparkles,
  brackets: AlignCenter,
  syringe: Syringe,
  baby: Baby,
  sun: Sun,
  "heart-pulse": HeartPulse,
  microscope: Microscope,
  layers: Layers,
};

export function Services() {
  const { data } = useServicesData();
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  if (!data) {
    return (
      <section className="bg-surface-container-lowest py-24 md:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-72 rounded-3xl bg-surface-container animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="servicios"
      ref={ref}
      className={cn(
        "py-24 md:py-[100px] relative overflow-hidden bg-surface-container-lowest",
        isActive
          ? "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-both"
          : "opacity-0"
      )}
    >
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <img
          className="w-full h-full object-cover"
          src={data.backgroundImage}
          alt="Fondo de equipamiento"
        />
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm tracking-[0.3em] uppercase mb-6 block">
              {data.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-on-surface leading-[1.1]">
              {data.title}
            </h2>
          </div>
          <div className="text-on-surface-variant max-w-sm text-lg border-l-4 border-primary/30 pl-8 py-2">
            {data.description}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <div
                key={service.id}
                className="group glass-panel p-10 rounded-3xl hover:bg-primary transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-colors duration-500 shadow-sm">
                  <Icon className="size-9" strokeWidth={1.75} />
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-3 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h4>
                <p className="text-on-surface-variant mb-8 flex-grow group-hover:text-white/80 transition-colors duration-500">
                  {service.description}
                </p>
                <button
                  type="button"
                  className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest group-hover:text-white"
                >
                  Saber más <ArrowRight className="size-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
