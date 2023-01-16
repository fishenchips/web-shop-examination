import { User } from "../../types/user";

export const getUsers = async (): Promise<Array<User>> => {
  const response = await fetch("/api/get-users");

  return response.json();
};

/* Log in function, fill data with user that is logged in */
export const getUser = async (user: User | null): Promise<User | null> => {
  if (!user) return null;
  const response = await fetch(`/api/users/${user.id}`);

  return response.json();
};
