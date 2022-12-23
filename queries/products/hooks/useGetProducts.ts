import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../product-queries";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => getProducts(),
  });
