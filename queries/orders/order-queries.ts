export const getOrdersByUserId = async (userId: string) => {
  const response = await fetch(`/api/orders/${userId}`);

  return response.json();
};
