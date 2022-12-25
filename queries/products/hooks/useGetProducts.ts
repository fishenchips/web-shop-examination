import {
  useQuery,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { PlatziProduct } from "../../../types/product";
import { getProducts } from "../product-queries";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

export const useGetInfiniteProducts = (): UseInfiniteQueryResult<
  Array<PlatziProduct>
> =>
  useInfiniteQuery(
    {
      queryKey: ["products"],
      queryFn: ({ pageParam = 0 }) => getProducts(pageParam, 30),
    },
    { getNextPageParam: (lastPage: number) => lastPage + 30 || undefined }
  );
