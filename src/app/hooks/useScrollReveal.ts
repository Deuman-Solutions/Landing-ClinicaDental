import { useEffect, useRef, useState } from "react";

/**
 * Reemplaza el listener de scroll manual del HTML original por un
 * IntersectionObserver: agrega la clase "active" cuando el elemento
 * entra en el viewport, disparando la transición definida en index.css
 * (.reveal / .reveal.active).
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => setIsActive(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(node);

    // Salvaguarda: si el elemento nunca "intersecta" (por ejemplo, en
    // capturas de página completa o herramientas que no disparan scroll
    // real), el contenido se revela igualmente pasado un breve instante
    // para que nunca quede invisible de forma permanente.
    const fallbackTimer = setTimeout(reveal, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return { ref, isActive };
}
