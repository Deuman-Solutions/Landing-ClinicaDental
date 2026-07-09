import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCalmingBannerData } from "@/app/hooks/useCalmingBannerData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

export function CalmingBanner() {
  const { data } = useCalmingBannerData();
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  if (!data) return null;

  return (
    <section
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 overflow-hidden bg-surface-container-low",
        isActive
          ? "animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both"
          : "opacity-0"
      )}
    >
      <div className="blob w-[600px] h-[600px] -top-[300px] -left-[200px] opacity-30" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-2" />
              <img
                className="relative w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl border-8 border-white"
                src={data.image}
                alt={data.imageAlt}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8 items-start">
            <h2 className="text-4xl md:text-display font-display text-on-surface mb-4 drop-shadow-sm">
              {data.title}
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-col gap-4">
              {data.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-4 text-primary font-semibold"
                >
                  <span className="bg-white p-2 rounded-full shadow-sm flex items-center justify-center">
                    <CheckCircle2 className="size-5" />
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
