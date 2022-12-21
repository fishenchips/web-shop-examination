export const deleteProduct = async () => {
  return fetch("https://api.escuelajs.co/api/v1/products/200", {
    method: "DELETE",
  });
};
