import { ToastId } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { LoginUser } from "../../../types/user";
import { UserForm } from "../userForm/UserForm";

interface Props {
  onLogin: (enteredLoginData: LoginUser) => Promise<void | ToastId>;
}

export const Login: React.FC<Props> = ({ onLogin }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userKey = localStorage.getItem("userId");

      if (userKey) {
        setLoggedIn(true);
      }
    }
  }, []);

  if (loggedIn) {
    return (
      <div>
        <p>You are already logged in!</p>
      </div>
    );
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
