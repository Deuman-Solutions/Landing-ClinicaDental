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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isActive };
}
