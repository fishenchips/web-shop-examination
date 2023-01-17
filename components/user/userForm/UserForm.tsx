import { ToastId } from "@chakra-ui/react";
import { useRef, SyntheticEvent } from "react";
import Link from "next/link";

import { User, LoginUser } from "../../../types/user";
import styles from "./UserForm.module.css";

type Props = {
  values: {
    header: string;
    btnText: string;
    type: string;
    notEntered: string;
    linkURL: string;
    linkText: string;
    addUser: ((userData: User) => Promise<void | ToastId>) | (() => void);
    loginUser:
      | ((userData: LoginUser) => Promise<void | ToastId>)
      | (() => void);
  };
};

export const UserForm: React.FC<Props> = ({ values }) => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmitUser = async (e: SyntheticEvent) => {
    e.preventDefault();

    const enteredUserName = userNameRef.current?.value;
    const enteredPassword = passwordRef.current?.value;

    if (enteredUserName?.trim() == "" || enteredPassword?.trim() == "")
      return alert(values.notEntered);

    /* Only want role to be sent back when register */
    if (values.type === "Register") {
      const userData = {
        userName: enteredUserName,
        password: enteredPassword,
        role: "user",
      };

      values.addUser(userData);
    }

    if (values.type === "Login") {
      const loginData = {
        enteredUserName,
        enteredPassword,
      };

      values.loginUser(loginData);

      /*  const credentials: LoginUser = { enteredUserName, enteredPassword };

      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const user = await response.json();

      console.log(user); */
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitUser} className={styles.userForm}>
        <h2>{values.header}</h2>
        <div>
          <label htmlFor="userName">Username</label>
          <input type="text" name="userName" ref={userNameRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordRef} />
        </div>
        <div>
          <button type="submit">{values.btnText}</button>
        </div>
      </form>
      <div className={styles.linkDiv}>
        <Link href={values.linkURL} className={styles.link}>
          {values.linkText}
        </Link>
      </div>
    </>
  );
};
