import { useQuery } from "@tanstack/react-query";

import { getCategories } from "../../queries/categories/category-queries";
import { Category } from "../../types/category";
import { CategoryItem } from "./CategoryItem";
import styles from "./Categories.module.css";

export const Categories = () => {
  /* Get all categories */
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return (
    <div className={styles.categories}>
      {categories?.map((category: Category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          name={category.name}
          image={category.image}
        />
      ))}
    </div>
  );
};
