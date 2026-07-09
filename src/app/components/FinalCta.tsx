import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFinalCtaData } from "@/app/hooks/useFinalCtaData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

export function FinalCta() {
  const { data } = useFinalCtaData();
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  if (!data) return null;

  return (
    <section
      ref={ref}
      className={cn(
        "py-24 md:py-32",
        isActive
          ? "animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both"
          : "opacity-0"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="bg-surface-container-low rounded-3xl md:rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center gap-12 shadow-xl border-4 border-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48" />

          <div className="relative z-10 max-w-2xl text-center">
            <h2 className="text-4xl md:text-display font-display text-primary mb-8 drop-shadow-sm">
              {data.title}
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-0">
              {data.description}
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-auto">
            <Button className="w-full lg:w-auto h-auto bg-primary text-on-primary px-16 py-6 rounded-2xl font-headline-md shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 group justify-center">
              <span className="flex items-center justify-center gap-3">
                {data.ctaLabel}
                <Send className="size-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
