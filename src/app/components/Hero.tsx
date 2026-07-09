import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useHeroData } from "@/app/hooks/useHeroData";

const AUTO_SCROLL_MS = 4000;

export function Hero() {
  const { data: slides } = useHeroData();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const node = carouselRef.current;
    if (!node) return;
    const slideWidth = node.clientWidth;
    node.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  // Auto-scroll cada 4 segundos
  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % slides.length;
        scrollToSlide(next);
        return next;
      });
    }, AUTO_SCROLL_MS);
    return () => clearInterval(interval);
  }, [slides, scrollToSlide]);

  // Sincroniza el índice activo cuando el usuario hace scroll manual (swipe)
  const handleScroll = useCallback(() => {
    const node = carouselRef.current;
    if (!node) return;
    const index = Math.round(node.scrollLeft / node.clientWidth);
    setActiveIndex(index);
  }, []);

  if (!slides || slides.length === 0) {
    return <section className="relative h-[600px] bg-surface-container-low animate-pulse" />;
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex snap-carousel overflow-x-auto snap-mandatory h-full transition-all duration-700"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full snap-center relative flex items-center"
          >
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={slide.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-10 w-full">
              <div className="max-w-xl">
                <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm mb-4">
                  {slide.badge}
                </span>
                <h1 className="text-4xl md:text-display font-display text-on-background mb-6">
                  {slide.title}
                </h1>
                <p className="text-body-lg text-on-surface-variant mb-8">
                  {slide.description}
                </p>
                <Button className="bg-primary text-on-primary px-8 py-4 h-auto rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all">
                  {slide.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Ir al slide ${index + 1}`}
            onClick={() => scrollToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-primary w-12" : "bg-outline-variant w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
