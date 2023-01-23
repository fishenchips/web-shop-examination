import { useQuery } from "@tanstack/react-query";

import { AdminNavigation } from "../../../components/layout/AdminNavigation";
import { getCategories } from "../../../queries/categories/category-queries";
import { Category } from "../../../types/category";
import Delete from "./delete";

const AdminCategories = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return (
    <>
      <AdminNavigation />
      <div>
        {categories?.map((category: Category) => (
          <div key={category.id}>
            <p>{category.name}</p>
            <img src={category.image} alt={category.name} />
            <Delete id={category.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminCategories;
