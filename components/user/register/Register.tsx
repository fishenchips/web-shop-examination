import { ToastId } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { UserForm } from "../userForm/UserForm";
import { User } from "../../../types/user";

type Props = {
  onAddUser: (userData: User) => Promise<void | ToastId>;
};

export const Register: React.FC<Props> = ({ onAddUser }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  /* Need to be on client to set localstorage */
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userKey = localStorage.getItem("userId");

      if (userKey) {
        setLoggedIn(true);
      }
    }
  }, []);

  /* Cant register if already logged in */
  if (loggedIn) {
    return (
      <div>
        <p>You are already logged in!</p>
      </div>
    );
  }

  /* Pass register values to user form */
  const formValues = {
    header: "Register User",
    btnText: "Create user",
    type: "Register",
    notEntered: "Please enter a username and password.",
    linkURL: "/user/login",
    linkText: "Already a member? Log in here!",
    addUser: onAddUser,
    loginUser: () => {},
  };

  return <UserForm values={formValues} />;
};
