import { useQuery } from "@tanstack/react-query";
import {
  getCategoryById,
  getProductsByCategoryId,
} from "../../queries/categories/category-queries";
import { Category } from "../../types/category";
import { CategoryHeader } from "./CategoryHeader";

interface Props {
  param: string | Array<string>;
}
export const SingleCategory: React.FC<Props> = ({ param }) => {
  const { data: category } = useQuery({
    queryKey: ["category", param],
    queryFn: () => getCategoryById(param),
  });

  const { data: products } = useQuery({
    queryKey: ["products-by-category", param],
    queryFn: () => getProductsByCategoryId(param),
  });

  console.log(products);

  console.log({ category });

  return (
    <>
      <CategoryHeader name={category?.name} image={category?.image} />
      <p>{param}</p>
    </>
  );
};
