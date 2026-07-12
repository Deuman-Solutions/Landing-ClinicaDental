import { CheckCircle2, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCalmingBannerData } from "@/app/hooks/useCalmingBannerData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import type { CalmingBannerPoint } from "@/app/data/calming-banner.data";

const ICONS: Record<CalmingBannerPoint["icon"], typeof CheckCircle2> = {
  "check-circle": CheckCircle2,
  smile: Smile,
};

export function CalmingBanner() {
  const { data } = useCalmingBannerData();
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  if (!data) return null;

  return (
    <section
      ref={ref}
      className={cn(
        "py-24 md:py-[100px] bg-white",
        isActive
          ? "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-both"
          : "opacity-0"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-primary/5 rounded-[3.5rem] -rotate-2 -z-10" />
            <div className="absolute -inset-6 bg-secondary-container/20 rounded-[3.5rem] rotate-1 -z-20" />
            <img
              className="w-full h-[400px] md:h-[650px] object-cover rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-8 border-white"
              src={data.image}
              alt={data.imageAlt}
            />
            <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl max-w-[220px] hidden xl:block">
              <p className="text-primary font-bold text-4xl mb-1">{data.stat.value}</p>
              <p className="text-on-surface-variant text-sm font-medium">{data.stat.label}</p>
            </div>
          </div>

          <div className="flex flex-col gap-10 order-1 lg:order-2">
            <div className="space-y-6">
              <span className="text-primary font-bold text-sm tracking-[0.3em] uppercase block">
                {data.eyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-on-surface leading-[1.1]">
                {data.title}
              </h2>
            </div>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              {data.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.points.map((point) => {
                const Icon = ICONS[point.icon];
                return (
                  <div key={point.id} className="flex items-start gap-4">
                    <span className="text-primary bg-primary/10 p-3 rounded-xl shadow-sm shrink-0">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface">{point.title}</h4>
                      <p className="text-sm text-on-surface-variant">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pt-6">
              <Button className="bg-primary text-on-primary px-10 py-5 h-auto rounded-2xl font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                {data.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
