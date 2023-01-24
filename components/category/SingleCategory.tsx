import { useQuery } from "@tanstack/react-query";

import { getCategoryById } from "../../queries/categories/category-queries";
import { CategoryHeader } from "./CategoryHeader";
import { CategoryProducts } from "./CategoryProducts";

interface Props {
  param: string | Array<string>;
}

export const SingleCategory: React.FC<Props> = ({ param }) => {
  /* Get all single category */
  const { data: category } = useQuery({
    queryKey: ["category", param],
    queryFn: () => getCategoryById(param),
  });

  return (
    <>
      <CategoryHeader name={category?.name} image={category?.image} />
      <CategoryProducts param={param} />
    </>
  );
};
