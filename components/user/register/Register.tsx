import Link from "next/link";
import { ToastId } from "@chakra-ui/react";

import { UserForm } from "../userForm/UserForm";
import { User } from "../../../types/user";
import styles from "./Register.module.css";

type Props = {
  onAddUser: (userData: User) => Promise<void | ToastId>;
};

export const Register: React.FC<Props> = ({ onAddUser }) => {
  const formValues = {
    header: "Please select a username and password",
    btnText: "Register",
    type: "Register",
    notEntered: "Please enter a username and password.",
    taken: "Username already taken, please enter a new one.",
    linkURL: "/user/login",
    linkText: "Already a member? Log in here!",
  };

  return <UserForm values={formValues} onAddUser={onAddUser} />;
};
