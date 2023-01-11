import { useQuery } from "@tanstack/react-query";
import {
  getCategoryById,
  getProductsByCategoryId,
} from "../../queries/categories/category-queries";
import { CategoryHeader } from "./CategoryHeader";
import { CategoryProducts } from "./CategoryProducts";

interface Props {
  param: string | Array<string>;
}

export const SingleCategory: React.FC<Props> = ({ param }) => {
  const { data: category } = useQuery({
    queryKey: ["category", param],
    queryFn: () => getCategoryById(param),
  });

  console.log({ category });

  return (
    <>
      <CategoryHeader name={category?.name} image={category?.image} />
      <CategoryProducts param={param} />
    </>
  );
};
