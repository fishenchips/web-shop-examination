import type { NextApiResponse } from "next";
import { useToast } from "@chakra-ui/react";

import { User } from "../types/user";
import { useUser } from "../queries/users/hooks/useUser";

interface UseAuth {
  signin: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  signout: () => void;
}

type UserResponse = { user: User };
type ErrorResponse = { message: string };
type AuthResponseType = UserResponse | ErrorResponse;

export const useAuth = (): UseAuth => {
  const SERVER_ERROR = "Error connecting to the server";
  const toast = useToast();
  const { updateUser, clearUser } = useUser();

  const authServerCall = async (
    urlEndpoint: string,
    username: string,
    password: string
  ): Promise<void> => {
    try {
      const { data, status }: any = await fetch({
        url: urlEndpoint,
        method: "POST",
        data: { username, password },
      });

      if (status === 400) {
        const title = "message" in data ? data.message : "Unauthorized";
        toast({ title, status: "warning" });
        return;
      }

      if ("user" in data && "token" in data.user) {
        toast({
          title: `Logged in as ${data.user.email}`,
          status: "info",
        });

        // update stored user data
        updateUser(data.user);
      }
    } catch (errorResponse) {
      toast({
        status: "error",
      });
    }
  };

  const signin = async (username: string, password: string): Promise<void> => {
    authServerCall("/signing", username, password);
  };

  const register = async (
    username: string,
    password: string
  ): Promise<void> => {
    authServerCall("/register", username, password);
  };

  const signout = (): void => {
    // clear user from stored user data
    clearUser();
    toast({
      title: "Logged out!",
      status: "info",
    });
  };

  return { signin, register, signout };
};
