import { useToast, ToastId } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { isUserLoggedIn } from "../../../queries/users/user-queries";
import { LoginUser } from "../../../types/user";
import { UserForm } from "../userForm/UserForm";

interface Props {
  onLogin: (enteredLoginData: LoginUser) => Promise<void | ToastId>;
}

export const Login: React.FC<Props> = ({ onLogin }) => {
  const router = useRouter();
  const toast = useToast();

  const { data } = useQuery(["user"], () => isUserLoggedIn());

  /* User cannot log in again */
  if (data?.message === "Access granted") {
    toast.closeAll();
    toast({
      title: `You are already logged in`,
      description: "Redirected to user page.",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
    router.push("/user");
  }

  const formValues = {
    header: "Login",
    btnText: "Login",
    type: "Login",
    notEntered: "Please enter your credentials",
    linkURL: "/user/register",
    linkText: "Not a member? Join here!",
    loginUser: onLogin,
    addUser: () => {},
  };

  return <UserForm values={formValues} />;
};
