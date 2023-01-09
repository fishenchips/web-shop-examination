export const getCategories = async () => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories/`);

  return response.json();
};

export const getCategoriesById = async (id: number) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );

  return response.json();
};
