import { useQuery } from "@tanstack/react-query";

import { getCategories } from "../../queries/categories/category-queries";
import { Category } from "../../types/category";
import { CategoryItem } from "./CategoryItem";

export const Categories = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  console.log(categories);

  return (
    <div>
      {categories.map((category: Category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          image={category.image}
        />
      ))}
    </div>
  );
};
