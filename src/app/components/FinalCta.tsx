import { Send } from "lucide-react";
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
        "relative h-[600px] flex items-center overflow-hidden",
        isActive
          ? "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-both"
          : "opacity-0"
      )}
    >
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src={data.backgroundImage}
          alt="Paciente feliz"
        />
        <div className="absolute inset-0 bg-on-background/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-[1200px] mx-auto  px-4 md:px-10 w-full relative z-10">
        <div className="bg-gradient-to-br from-primary via-primary-container to-primary-container opacity-85 rounded-[2.5rem] p-12 max-[400px]:px-7 md:p-20 text-center shadow-2xl max-w-4xl mx-auto relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-2xl" />

          <h2 className="text-4xl max-[400px]:text-3xl md:text-5xl font-display font-extrabold text-white mb-8 tracking-tight relative z-10">
            {data.title}
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
            {data.description}
          </p>
          <button
            type="button"
            className="relative z-10 bg-white text-primary px-12 max-[400px]:px-7 py-5 rounded-2xl font-extrabold text-xl shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-4 mx-auto"
          >
            {data.ctaLabel} <Send className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
