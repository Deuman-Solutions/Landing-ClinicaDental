export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface HighlightsData {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
  trustBackgroundImage: string;
  items: HighlightItem[];
}

export const highlightsData: HighlightsData = {
  eyebrow: "En Clínica Dental SmileClinic",
  title: "Hacemos realidad tu sonrisa",
  description:
    "Combinamos excelencia clínica con un trato humano excepcional para brindarte la mejor experiencia dental de tu vida.",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBn84J0ktUbp8yei7N7gMEkfOTSj9Mq8RYte8qZa5pFHXi5tV8u2C26utIyNOZdO6WZ6R1fzWBlg33ZsOs4D_oKxWAJvCaY0pj1RyIlrkXFwJAI7xg7mg6r1v0yWLmhhlsb7qCGLxgMLd88bMamnGsXUmEKr-uCdgHdoLWyG-6PyothK9DoIlQsxK6oM91lPK4jDj187ZUXyCQb1gqTFsrZV-T2lnPTMLXG3glhEBgaxaUcFcVJ7qAvnA",
  trustBackgroundImage:
    "/trust-background.jpg",
  items: [
    {
      id: "technology",
      title: "Tecnología Avanzada",
      description:
        "Equipos de última generación para diagnósticos precisos y tratamientos mínimamente invasivos.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-P8VSmSmcWP4_uu6ot5VBrK_1RNp5ZHOCpf2BnVYdDqJvtuzqdgIMmRBggjJAJpYFVtEBOenhpEQ_cjWslfZAvDjPBKIktCHo77-1az1Rfu1lPLJr3SZN00TlAlszT71DVB-ANJJKU5KV5svt3nJuQp9J4qJNbRGYWnrHCO32N4BSXM3tfPzHm2MeA-2KMMHhujPO_VT0p_nMlk9cCBs-ybn7mOSwcuk0QH90VlgvhvhzC3o0bgTPVQ",
    },
    {
      id: "professionals",
      title: "Profesionales Certificados",
      description:
        "Un equipo altamente capacitado con años de experiencia dedicados exclusivamente a tu bienestar.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-P8VSmSmcWP4_uu6ot5VBrK_1RNp5ZHOCpf2BnVYdDqJvtuzqdgIMmRBggjJAJpYFVtEBOenhpEQ_cjWslfZAvDjPBKIktCHo77-1az1Rfu1lPLJr3SZN00TlAlszT71DVB-ANJJKU5KV5svt3nJuQp9J4qJNbRGYWnrHCO32N4BSXM3tfPzHm2MeA-2KMMHhujPO_VT0p_nMlk9cCBs-ybn7mOSwcuk0QH90VlgvhvhzC3o0bgTPVQ",
    },
    {
      id: "personalized",
      title: "Atención Personalizada",
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
