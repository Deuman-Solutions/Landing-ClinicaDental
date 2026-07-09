import { useQuery } from "@tanstack/react-query";
import { fetchCalmingBannerData } from "@/app/data/calming-banner.data";

export function useCalmingBannerData() {
  return useQuery({
    queryKey: ["calming-banner"],
    queryFn: fetchCalmingBannerData,
    staleTime: Infinity,
  });
}
