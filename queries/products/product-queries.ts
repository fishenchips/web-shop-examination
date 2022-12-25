export const getProducts = async (offset: number, limit = 30) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
  );

  const data = await response.json();

  return data;
};

export const deleteProduct = async () => {
  return fetch("https://api.escuelajs.co/api/v1/products/200", {
    method: "DELETE",
  });
};
