import { User } from "../../types/user";

export const getUsers = async (): Promise<Array<User>> => {
  const response = await fetch("/api/get-users");

  return response.json();
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);

  return response.json();
};
