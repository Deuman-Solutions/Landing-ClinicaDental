import { cn } from "@/lib/utils";
import { useHighlightsData } from "@/app/hooks/useHighlightsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

export function Highlights() {
  const { data } = useHighlightsData();
  const { ref: introRef, isActive: introActive } = useScrollReveal<HTMLElement>();
  const { ref: trustRef, isActive: trustActive } = useScrollReveal<HTMLElement>();

  if (!data) return null;

  return (
    <>
      {/* Intro con fondo clínico */}
      <section
        ref={introRef}
        className={cn(
          "relative isolate py-24 md:py-[100px] overflow-hidden",
          introActive
            ? "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-both"
            : "opacity-0"
        )}
      >
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover opacity-90"
            src={data.backgroundImage}
            alt="Fondo clínico abstracto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 text-center relative z-10">
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            {data.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-on-surface mb-8">
            {data.title}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full shadow-sm" />
          <p className="mt-12 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Valores de confianza, con imagen de fondo tenue */}
      <section
        ref={trustRef}
        className={cn(
          "py-24 md:py-[100px] relative isolate overflow-hidden bg-white",
          trustActive
            ? "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-both"
            : "opacity-0"
        )}
      >
        <div className="absolute inset-0 w-full h-full opacity-70 pointer-events-none -z-10">
          <img
            className="w-full h-full object-cover"
            src={data.trustBackgroundImage}
            alt="Tecnología dental"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 opacity-90">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.items.map((item) => (
              <div
                key={item.id}
                className="group bg-surface-container-low p-10 rounded-3xl border border-outline-variant/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                <div className="w-full h-56 mb-8 overflow-hidden rounded-2xl shadow-inner">
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
