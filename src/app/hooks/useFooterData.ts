import { useQuery } from "@tanstack/react-query";
import { fetchFooterData } from "@/app/data/footer.data";

export function useFooterData() {
  return useQuery({
    queryKey: ["footer"],
    queryFn: fetchFooterData,
    staleTime: Infinity,
  });
}
