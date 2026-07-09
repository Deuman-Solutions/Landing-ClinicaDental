export interface NavLink {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarData {
  brand: {
    name: string;
    icon: "stethoscope";
  };
  links: NavLink[];
  cta: {
    label: string;
  };
}

export const navbarData: NavbarData = {
  brand: {
    name: "SmileClinic",
    icon: "stethoscope",
  },
  links: [
    { id: "inicio", label: "Inicio", href: "#inicio", active: true },
    { id: "servicios", label: "Servicios", href: "#servicios" },
    { id: "nosotros", label: "Nosotros", href: "#nosotros" },
  ],
  cta: {
    label: "Agendar Cita",
  },
};

/**
 * Simula la obtención de la data del navbar desde una API.
 * Se usa como queryFn en useNavbarData (TanStack Query).
 */
export async function fetchNavbarData(): Promise<NavbarData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(navbarData), 150);
  });
}
