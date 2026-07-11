import { useCallback, useEffect, useState } from "react";

/**
 * Reemplaza el listener de scroll manual del HTML original por un
 * IntersectionObserver: marca isActive=true cuando el elemento entra en el
 * viewport, para condicionar las clases de animación de tw-animate-css
 * (ver Highlights, Services, CalmingBanner y FinalCta).
 *
 * Usa un callback ref (en vez de useRef) a propósito: estos componentes
 * dependen de datos que llegan vía TanStack Query, así que la sección real
 * puede montarse recién en un segundo render (después de un skeleton o un
 * "return null" inicial). Un useRef normal + useEffect con deps [] no se
 * entera de ese montaje tardío. El callback ref sí, porque dispara un
 * cambio de estado ("node") cada vez que React monta o desmonta el
 * elemento, y el useEffect de abajo depende de ese estado.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const [node, setNode] = useState<T | null>(null);
  const [isActive, setIsActive] = useState(false);

  const ref = useCallback((element: T | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
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
  }, [node]);

  return { ref, isActive };
}
