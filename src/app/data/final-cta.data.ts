export interface FinalCtaData {
  title: string;
  description: string;
  ctaLabel: string;
}

export const finalCtaData: FinalCtaData = {
  title: "Hacemos realidad tu sonrisa",
  description:
    "Reserva hoy mismo y descubre por qué cientos de pacientes confían en nosotros para cuidar su salud bucal.",
  ctaLabel: "Contactar Ahora",
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
