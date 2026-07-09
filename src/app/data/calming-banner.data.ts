export interface CalmingBannerData {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  points: string[];
}

export const calmingBannerData: CalmingBannerData = {
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCYKw7QhzHPpMuyR9S2vW8oFDOablpXY5oLKdueixLZ_znURsT0PFYv5f_WB6JC70nr5xf9FiXTWFK8vjwlRgVH-ocE1fRlbROV582iPIxrmLUSad7XvkWXd3v5ybqXQ3aviUSFWce2HzUwMxBnhiiiM5ZTeP3t6s8BeIZx3WnZPskqjSZuKl2CKL7yurdDezjBMW02QxWVag0LOpZFze1BSUTIVGPLgw5WrjZkYD8EJKYWuKsKNuyC4w",
  imageAlt: "Clínica dental moderna y relajante",
  title: "Tu Tranquilidad es Nuestra Prioridad.",
  description:
    "Diseñamos cada espacio y cada procedimiento para que tu visita sea una experiencia relajante y libre de estrés. Bienvenido a la odontología del futuro.",
  points: [
    "Ambiente clínico esterilizado y acogedor",
    "Atención sin dolor garantizada",
  ],
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
