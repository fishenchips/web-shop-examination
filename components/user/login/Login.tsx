import Link from "next/link";

import styled from "./Login.module.css";
import { UserForm } from "../userForm/UserForm";

export const Login = () => {
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
