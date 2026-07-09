export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  image: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-whitening",
    badge: "Oferta Especial",
    title: "20% de descuento en Blanqueamiento Dental",
    description:
      "Recupera el brillo natural de tu sonrisa con nuestra tecnología láser de vanguardia. Resultados garantizados en una sola sesión.",
    ctaLabel: "Empieza Hoy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-vLPfaG7XsIunGYK9jryhHiI5avbmGRpywSFo_cVa3qUYxZ1tekl1rUZFXaQNbkhxZSyxG3iHKEJ_z4zRqMywAI_Q2V6qY4YZZMZjsnRKfxb6_tAxanbwRnMw--LRcRCT3H85LxZoSYPkW5XNoDmEYm8TWbRMRuNE-JMOTqP5Obv7jnWtUrV7_5nJ84uYhw92dlxbXI-oVttQjKtnu20Sv82faf8OEmMb6Xw_iGcGmJGH3suDlcEFsg",
    alt: "Primer plano de una sonrisa brillante y saludable",
  },
  {
    id: "slide-first-visit",
    badge: "Nuevo Paciente",
    title: "Primera Consulta Gratuita",
    description:
      "Tu salud dental es nuestra prioridad. Visítanos para un chequeo completo sin costo inicial y conoce a nuestro equipo de expertos.",
    ctaLabel: "Reservar Gratis",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYKw7QhzHPpMuyR9S2vW8oFDOablpXY5oLKdueixLZ_znURsT0PFYv5f_WB6JC70nr5xf9FiXTWFK8vjwlRgVH-ocE1fRlbROV582iPIxrmLUSad7XvkWXd3v5ybqXQ3aviUSFWce2HzUwMxBnhiiiM5ZTeP3t6s8BeIZx3WnZPskqjSZuKl2CKL7yurdDezjBMW02QxWVag0LOpZFze1BSUTIVGPLgw5WrjZkYD8EJKYWuKsKNuyC4w",
    alt: "Sala dental moderna",
  },
];

/**
 * Simula la obtención de los slides del hero desde una API.
 * Se usa como queryFn en useHeroData (TanStack Query).
 */
export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(heroSlides), 150);
  });
}
