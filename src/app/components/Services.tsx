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
      <section className="bg-surface-container-low py-24 md:py-32">
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
        "bg-surface-container-low py-24 md:py-32 relative overflow-hidden",
        isActive
          ? "animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both"
          : "opacity-0"
      )}
    >
      <div className="blob w-[800px] h-[800px] -bottom-[400px] -right-[400px]" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-extrabold text-label-md tracking-widest uppercase mb-4 block">
              {data.eyebrow}
            </span>
            <h2 className="text-3xl md:text-display font-display text-on-surface mb-8 drop-shadow-sm">
              {data.title}
            </h2>
          </div>
          <div className="text-on-surface-variant max-w-sm text-lg leading-relaxed border-l-4 border-primary/30 pl-6">
            {data.description}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white p-10 rounded-3xl border border-surface-container shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 relative overflow-hidden items-center text-center"
              >
                <div className="w-24 h-24 bg-primary-container/20 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Icon className="size-10" />
                </div>
                <h4 className="text-headline-md font-headline-md text-on-background mb-4">
                  {service.title}
                </h4>
                <p className="text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <button
                  type="button"
                  className="text-primary font-bold text-label-md flex items-center gap-2 group-hover:gap-4 transition-all duration-300 justify-center"
                >
                  Saber más <ArrowRight className="size-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
