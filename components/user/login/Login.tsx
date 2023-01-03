import Link from "next/link";
import { UserForm } from "../userForm/UserForm";

export const Login = () => {
  const formValues = {
    header: "Please enter your username and password",
    btnText: "Login",
  };

  return (
    <>
      <UserForm values={formValues} />
      <Link href="/user/register">Not a member? Join here!</Link>
    </>
  );
};
