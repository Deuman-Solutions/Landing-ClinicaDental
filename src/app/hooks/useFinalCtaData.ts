import { useQuery } from "@tanstack/react-query";
import { fetchFinalCtaData } from "@/app/data/final-cta.data";

export function useFinalCtaData() {
  return useQuery({
    queryKey: ["final-cta"],
    queryFn: fetchFinalCtaData,
    staleTime: Infinity,
  });
}
