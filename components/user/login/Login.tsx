import Link from "next/link";
import { useContext } from "react";

import { UserContext } from "../../../store/userContext";
import styled from "./Login.module.css";
import { UserForm } from "../userForm/UserForm";

export const Login = () => {
  const userCtx = useContext(UserContext);

  const formValues = {
    header: "Please enter your username and password",
    btnText: "Login",
  };

  return (
    <>
      <UserForm values={formValues} />
      <div className={styled.linkDiv}>
        <Link href="/user/register" className={styled.link}>
          Not a member? Join here!
        </Link>
      </div>
    </>
  );
};
