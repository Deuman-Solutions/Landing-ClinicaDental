export interface FinalCtaData {
  title: string;
  description: string;
  ctaLabel: string;
  backgroundImage: string;
}

export const finalCtaData: FinalCtaData = {
  title: "Hacemos realidad tu sonrisa",
  description:
    "Reserva hoy mismo y descubre por qué cientos de pacientes confían en nosotros para cuidar su salud bucal y transformar su vida.",
  ctaLabel: "Contactar Ahora",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYttjd2wMEWVev6fec4A3SF8JB4pNxfKyJqoDesoA2Q1DJLe1oRyQT-WqtAJfx5IAZg3aQUsHUq3FiHm-gpxgUrNteX0wr3GmlKSTn957h1B17u7D3VY7VX37nhO0AEFEUFg3-_0pQb0ua-Xp9kFzCgBWA5v4Pj-nfm--nXgwUIxONzK0Gx82Bw2wWLoIx6qTs5-2SrNo2HqxiQz_TtODwIQFs62CH5SgDghDf2YD1P8NS2LvEvKOCmA",
};

/**
 * Simula la obtención de la data del CTA final desde una API.
 * Se usa como queryFn en useFinalCtaData (TanStack Query).
 */
export async function fetchFinalCtaData(): Promise<FinalCtaData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(finalCtaData), 150);
  });
}
