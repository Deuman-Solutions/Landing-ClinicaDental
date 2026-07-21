export interface CalmingBannerPoint {
  id: string;
  icon: "check-circle" | "smile";
  title: string;
  description: string;
}

export interface CalmingBannerData {
  eyebrow: string;
  image: string;
  imageAlt: string;
  stat: {
    value: string;
    label: string;
  };
  title: string;
  description: string;
  points: CalmingBannerPoint[];
  ctaLabel: string;
}

export const calmingBannerData: CalmingBannerData = {
  eyebrow: "Bienestar Superior",
  image:
    "/Clínica_dental_moderna.jpg",
  imageAlt: "Clínica dental moderna",
  stat: {
    value: "15+",
    label: "Años de excelencia transformando sonrisas",
  },
  title: "Tu Tranquilidad es Nuestra Prioridad.",
  description:
    "Diseñamos cada espacio y cada procedimiento para que tu visita sea una experiencia relajante y libre de estrés. Bienvenido a la odontología del futuro, donde la comodidad es tan importante como el tratamiento.",
  points: [
    {
      id: "ambiente-clinico",
      icon: "check-circle",
      title: "Ambiente Clínico",
      description: "Esterilizado y acogedor para tu paz mental.",
    },
    {
      id: "sin-dolor",
      icon: "smile",
      title: "Sin Dolor",
      description: "Protocolos avanzados para tu máxima comodidad.",
    },
  ],
  ctaLabel: "Conoce la Clínica",
};

/**
 * Simula la obtención de la data del banner calmante desde una API.
 * Se usa como queryFn en useCalmingBannerData (TanStack Query).
 */
export async function fetchCalmingBannerData(): Promise<CalmingBannerData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(calmingBannerData), 150);
  });
}
