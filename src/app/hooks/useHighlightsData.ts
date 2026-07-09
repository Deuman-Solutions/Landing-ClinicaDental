import { useQuery } from "@tanstack/react-query";
import { fetchHighlightsData } from "@/app/data/highlights.data";

export function useHighlightsData() {
  return useQuery({
    queryKey: ["highlights"],
    queryFn: fetchHighlightsData,
    staleTime: Infinity,
  });
}
