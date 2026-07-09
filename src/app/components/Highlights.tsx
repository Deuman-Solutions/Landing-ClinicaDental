import { Sparkles, Users, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHighlightsData } from "@/app/hooks/useHighlightsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import type { HighlightItem } from "@/app/data/highlights.data";

const ICONS: Record<HighlightItem["icon"], typeof Sparkles> = {
  sparkles: Sparkles,
  users: Users,
  "heart-handshake": HeartHandshake,
};

export function Highlights() {
  const { data } = useHighlightsData();
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  if (!data) return null;

  return (
    <section
      ref={ref}
      className={cn(
        "py-24 md:py-32 bg-gradient-to-b from-surface to-secondary-container/30",
           "animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 text-center relative">
        <div className="blob w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <span className="text-primary font-extrabold text-label-md tracking-widest uppercase mb-4 block">
          {data.eyebrow}
        </span>
        <h2 className="text-4xl md:text-display font-display text-on-surface mb-8 drop-shadow-sm">
          {data.title}
        </h2>
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-display font-display text-on-surface mb-8 drop-shadow-sm pt-5">
            {data.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.id}
                className="group bg-white p-12 rounded-3xl text-center flex flex-col items-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-outline-variant/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150" />
                <div className="w-full h-48 mb-8 overflow-hidden relative z-10 rounded-2xl flex items-center justify-center bg-primary-container/10">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="px-8 pb-4 flex flex-col items-center relative z-10">
                  <Icon className="text-primary size-8 mb-4" />
                  <h3 className="text-headline-md font-headline-md text-primary mb-6">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
