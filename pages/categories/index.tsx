import { useQuery } from "@tanstack/react-query";

import { getCategories } from "../../queries/categories/category-queries";

const CategoriesPage = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  console.log(categories);

  return <p>hejj</p>;
};

export default CategoriesPage;
