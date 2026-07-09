import { useQuery } from "@tanstack/react-query";
import { fetchServicesData } from "@/app/data/services.data";

export function useServicesData() {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServicesData,
    staleTime: Infinity,
  });
}
