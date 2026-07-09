export type ServiceIcon =
  | "sparkles"
  | "brackets"
  | "syringe"
  | "baby"
  | "sun"
  | "heart-pulse"
  | "microscope"
  | "layers";

export interface ServiceItem {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
}

export interface ServicesData {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export const servicesData: ServicesData = {
  eyebrow: "Nuestros Servicios",
  title: "Soluciones Integrales para tu Sonrisa",
  description:
    "Ofrecemos una amplia gama de tratamientos dentales especializados con los más altos estándares de calidad y cuidado.",
  items: [
    {
      id: "limpieza-dental",
      icon: "sparkles",
      title: "Limpieza Dental",
      description:
        "Limpieza profunda para prevenir caries y enfermedades periodontales.",
    },
    {
      id: "ortodoncia",
      icon: "brackets",
      title: "Ortodoncia",
      description:
        "Alineación perfecta con brackets o sistemas invisibles de vanguardia.",
    },
    {
      id: "implantes",
      icon: "syringe",
      title: "Implantes",
      description:
        "Restauración permanente con materiales biocompatibles y resultados naturales.",
    },
    {
      id: "odontopediatria",
      icon: "baby",
      title: "Odontopediatría",
      description:
        "Cuidado dental especializado para niños en un ambiente divertido.",
    },
    {
      id: "blanqueamiento",
      icon: "sun",
      title: "Blanqueamiento",
      description:
        "Aclara tu sonrisa varios tonos con tecnología de luz fría y láser.",
    },
    {
      id: "periodoncia",
      icon: "heart-pulse",
      title: "Periodoncia",
      description:
        "Tratamiento de encías para mantener la base de tus dientes saludable.",
    },
    {
      id: "endodoncia",
      icon: "microscope",
      title: "Endodoncia",
      description:
        "Tratamientos de conducto indoloros para salvar tus piezas dentales.",
    },
    {
      id: "protesis-dentales",
      icon: "layers",
      title: "Prótesis Dentales",
      description:
        "Soluciones fijas o removibles para recuperar la funcionalidad estética.",
    },
  ],
};

/**
 * Simula la obtención de la data de servicios desde una API.
 * Se usa como queryFn en useServicesData (TanStack Query).
 */
export async function fetchServicesData(): Promise<ServicesData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(servicesData), 150);
  });
}
