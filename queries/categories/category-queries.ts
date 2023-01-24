import { Category } from "../../types/category";
import { PlatziProduct } from "../../types/product";

export const getCategories = async (): Promise<Array<Category>> => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories/`);

  return response.json();
};

export const getCategoryById = async (
  id: string | Array<string>
): Promise<Category> => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );

  return response.json();
};

export const getProductsByCategoryId = async (
  id: string | Array<string>
): Promise<Array<PlatziProduct>> => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );

  return response.json();
};

export const deleteCategory = async (id: number) => {
  return fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
    method: "DELETE",
  });
};
