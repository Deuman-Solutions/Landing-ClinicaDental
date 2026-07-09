import { useQuery } from "@tanstack/react-query";
import { fetchNavbarData } from "@/app/data/navbar.data";

export function useNavbarData() {
  return useQuery({
    queryKey: ["navbar"],
    queryFn: fetchNavbarData,
    staleTime: Infinity,
  });
}
