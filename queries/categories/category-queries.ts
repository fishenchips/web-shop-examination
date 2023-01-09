import { Category } from "../../types/category";

export const getCategories = async (): Promise<Array<Category>> => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories/`);

  return response.json();
};

export const getCategoriesById = async (id: number): Promise<Category> => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );

  return response.json();
};
