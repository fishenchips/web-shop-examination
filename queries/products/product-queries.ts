export const getProducts = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");

  const data = await response.json();

  return data;
};

export const deleteProduct = async () => {
  return fetch("https://api.escuelajs.co/api/v1/products/200", {
    method: "DELETE",
  });
};
