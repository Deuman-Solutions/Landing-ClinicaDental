import { useQuery } from "@tanstack/react-query";
import { fetchHeroSlides } from "@/app/data/hero.data";

export function useHeroData() {
  return useQuery({
    queryKey: ["hero-slides"],
    queryFn: fetchHeroSlides,
    staleTime: Infinity,
  });
}
