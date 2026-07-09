export interface HighlightItem {
  id: string;
  icon: "sparkles" | "users" | "heart-handshake";
  title: string;
  description: string;
  image: string;
}

export interface HighlightsData {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: HighlightItem[];
}

export const highlightsData: HighlightsData = {
  eyebrow: "En Clínica Dental SmileClinic",
  title: "Hacemos realidad tu sonrisa",
  subtitle:
    "Atención personalizada y de confianza para cuidar tu salud dental",
  items: [
    {
      id: "technology",
      icon: "sparkles",
      title: "Tecnología Avanzada",
      description:
        "Equipos de última generación para diagnósticos precisos y tratamientos mínimamente invasivos.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-P8VSmSmcWP4_uu6ot5VBrK_1RNp5ZHOCpf2BnVYdDqJvtuzqdgIMmRBggjJAJpYFVtEBOenhpEQ_cjWslfZAvDjPBKIktCHo77-1az1Rfu1lPLJr3SZN00TlAlszT71DVB-ANJJKU5KV5svt3nJuQp9J4qJNbRGYWnrHCO32N4BSXM3tfPzHm2MeA-2KMMHhujPO_VT0p_nMlk9cCBs-ybn7mOSwcuk0QH90VlgvhvhzC3o0bgTPVQ",
    },
    {
      id: "professionals",
      icon: "users",
      title: "Profesionales certificados",
      description:
        "Un equipo altamente capacitado con años de experiencia dedicados exclusivamente a tu bienestar.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-P8VSmSmcWP4_uu6ot5VBrK_1RNp5ZHOCpf2BnVYdDqJvtuzqdgIMmRBggjJAJpYFVtEBOenhpEQ_cjWslfZAvDjPBKIktCHo77-1az1Rfu1lPLJr3SZN00TlAlszT71DVB-ANJJKU5KV5svt3nJuQp9J4qJNbRGYWnrHCO32N4BSXM3tfPzHm2MeA-2KMMHhujPO_VT0p_nMlk9cCBs-ybn7mOSwcuk0QH90VlgvhvhzC3o0bgTPVQ",
    },
    {
      id: "personalized",
      icon: "heart-handshake",
      title: "Atención personalizada",
      description:
        "Escuchamos tus necesidades para crear planes de tratamiento adaptados específicamente a ti.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-P8VSmSmcWP4_uu6ot5VBrK_1RNp5ZHOCpf2BnVYdDqJvtuzqdgIMmRBggjJAJpYFVtEBOenhpEQ_cjWslfZAvDjPBKIktCHo77-1az1Rfu1lPLJr3SZN00TlAlszT71DVB-ANJJKU5KV5svt3nJuQp9J4qJNbRGYWnrHCO32N4BSXM3tfPzHm2MeA-2KMMHhujPO_VT0p_nMlk9cCBs-ybn7mOSwcuk0QH90VlgvhvhzC3o0bgTPVQ",
    },
  ],
};

/**
 * Simula la obtención de la data de highlights desde una API.
 * Se usa como queryFn en useHighlightsData (TanStack Query).
 */
export async function fetchHighlightsData(): Promise<HighlightsData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(highlightsData), 150);
  });
}
