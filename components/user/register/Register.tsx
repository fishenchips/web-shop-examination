import { ToastId } from "@chakra-ui/react";

import { UserForm } from "../userForm/UserForm";
import { User } from "../../../types/user";

type Props = {
  onAddUser: (userData: User) => Promise<void | ToastId>;
};

export const Register: React.FC<Props> = ({ onAddUser }) => {
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
