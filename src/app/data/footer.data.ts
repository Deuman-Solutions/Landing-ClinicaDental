export interface FooterSocialLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterScheduleItem {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface FooterLegalLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterData {
  brand: {
    name: string;
    description: string;
  };
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    address: string;
  };
  schedule: FooterScheduleItem[];
  social: FooterSocialLink[];
  legal: FooterLegalLink[];
  copyright: string;
}

export const footerData: FooterData = {
  brand: {
    name: "SmileClinic",
    description:
      "Cuidando sonrisas, transformando vidas con excelencia dental y calidez humana en cada tratamiento.",
  },
  contact: {
    phone: "+1 234 567 890",
    phoneHref: "tel:+1234567890",
    email: "care@happydent.com",
    emailHref: "mailto:care@happydent.com",
    address: "123 Medical Plaza, Ciudad",
  },
  schedule: [
    { day: "Lunes - Viernes", hours: "8:00 - 20:00" },
    { day: "Sábado", hours: "9:00 - 14:00" },
    { day: "Domingo", hours: "Cerrado", closed: true },
  ],
  social: [
    { id: "facebook", label: "FB", href: "#" },
    { id: "instagram", label: "IG", href: "#" },
  ],
  
  legal: [
    { id: "privacidad", label: "Privacidad", href: "#" },
    { id: "terminos", label: "Términos", href: "#" },
    { id: "cookies", label: "Cookies", href: "#" },
  ],
  copyright: "© 2026 SmileClinic Clínica Dental. Desarrollado por Deuman Solutions.",
};

/**
 * Simula la obtención de la data del footer desde una API.
 * Se usa como queryFn en useFooterData (TanStack Query).
 */
export async function fetchFooterData(): Promise<FooterData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(footerData), 150);
  });
}
