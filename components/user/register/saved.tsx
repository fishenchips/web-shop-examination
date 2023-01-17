import { useRef, SyntheticEvent } from "react";

import { User } from "../../../types/user";
import styles from "./UserForm.module.css";

type Props = {
  onAddUser: (userData: User) => Promise<void>;
};

export const Register: React.FC<Props> = ({ onAddUser }) => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmitUser = (e: SyntheticEvent) => {
    e.preventDefault();

    const enteredUserName = userNameRef?.current?.value;
    const enteredPassword = passwordRef?.current?.value;

    const userData = {
      userName: enteredUserName,
      password: enteredPassword,
      role: "user",
    };

    onAddUser(userData);
  };
  return (
    <form onSubmit={handleSubmitUser} className={styles.userForm}>
      <h2>Register</h2>
      <div>
        <label htmlFor="userName">Username</label>
        <input type="text" name="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordRef} />
      </div>
      <div>
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

import Link from "next/link";
import { useRef, SyntheticEvent } from "react";

import styled from "../userForm/UserForm.module.css";
import { User } from "../../../types/user";

type Login = {
  enteredUserName?: string;
  enteredPassword?: string;
};

export const Login = () => {
  const formValues = {
    header: "Login",
    btnText: "Login",
    type: "Login",
    notEntered: "Please enter your credentials",
    linkURL: "/user/register",
    linkText: "Not a member? Join here!",
  };

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLoginUser = async (e: SyntheticEvent) => {
    e.preventDefault();

    const enteredUserName = userNameRef.current?.value;
    const enteredPassword = passwordRef.current?.value;

    if (enteredUserName?.trim() == "" || enteredPassword?.trim() == "")
      return alert("Please enter your credentials");

    const credentials: Login = { enteredUserName, enteredPassword };

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const user = await response.json();

    console.log(user);
  };

  const handleLogOut = async () => {
    const response = await fetch("/api/auth/logout");

    console.log(response);
  };

  return (
    <>
      <form onSubmit={handleLoginUser} className={styled.userForm}>
        <h2>Login</h2>
        <div>
          <label htmlFor="userName">Username</label>
          <input type="text" name="userName" ref={userNameRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordRef} />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      <button onClick={handleLogOut}>log out</button>
      <div className={styled.linkDiv}>
        <Link href="/user/register" className={styled.link}>
          Not a member? Join here!
        </Link>
      </div>
    </>
  );
};
