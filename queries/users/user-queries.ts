import { User } from "../../types/user";

export const getUsers = async (): Promise<Array<User>> => {
  const response = await fetch("/api/get-users");

  return response.json();
};
