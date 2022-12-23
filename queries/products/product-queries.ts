export const getProducts = async () => {
  return fetch("https://api.escuelajs.co/api/v1/products");
};

export const deleteProduct = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products/200", {
    method: "DELETE",
  });

  const data = response.json();

  return data;
};
