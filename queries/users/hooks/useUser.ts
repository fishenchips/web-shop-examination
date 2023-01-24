import { useQuery, useQueryClient } from "@tanstack/react-query";

import { User } from "../../../types/user";
import { getUser } from "../user-queries";

interface UseUser {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

export const useUser = (): UseUser => {
  const queryClient = useQueryClient();

  /* call useQuery to update user data from server, but we need to know the user value prior to call below, otherwise it will return null  */
  const { data: user } = useQuery(["user"], () => getUser(user));

  /* called from useAuth hook */
  const updateUser = (newUser: User): void => {
    queryClient.setQueryData(["user"], newUser);
  };

  const clearUser = () => {
    queryClient.setQueryData(["user"], null);
  };

  return { user, updateUser, clearUser };
};
