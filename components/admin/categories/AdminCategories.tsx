import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { DeleteCategory } from "./DeleteCategory";
import { AdminNavigation } from "../../layout/AdminNavigation";
import { getCategories } from "../../../queries/categories/category-queries";
import { Category } from "../../../types/category";
import styles from "./AdminCategories.module.css";

const AdminCategories = () => {
  const [admin, setAdmin] = useState<boolean>(false);

  /* Grant access only if user is logged in and admin */
  const checkAdmin = async () => {
    const response = await fetch("/api/users/get-admin");

    const { message } = await response.json();

    if (message === "Access granted") {
      setAdmin(true);
    }
    if (message === "Unathorized access") {
      setAdmin(false);
    }
  };

  checkAdmin();

  /* Get all categories  */
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  if (!admin) return <p>Access denied.</p>;

  return (
    <>
      <AdminNavigation />
      <div>
        {categories?.map((category: Category) => (
          <div key={category.id} className={styles.category}>
            <p>{category.name}</p>
            <img src={category.image} alt={category.name} />
            <DeleteCategory id={category.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminCategories;
