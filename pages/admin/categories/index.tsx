import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { AdminNavigation } from "../../../components/layout/AdminNavigation";
import { getCategories } from "../../../queries/categories/category-queries";
import { Category } from "../../../types/category";
import Delete from "./delete";

const AdminCategories = () => {
  const [admin, setAdmin] = useState<boolean>(false);

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
