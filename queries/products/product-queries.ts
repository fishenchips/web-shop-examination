import { PlatziProduct } from "../../types/product";

export const getProducts = async (
  offset: number,
  limit = 30
): Promise<Array<PlatziProduct>> => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
  );

  return response.json();
};

export const getProductById = async (id: string): Promise<PlatziProduct> => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );

  return response.json();
};

export const deleteProduct = async (id: number) => {
  return fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
  });
};
