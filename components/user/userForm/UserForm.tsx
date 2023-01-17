import { useToast, ToastId } from "@chakra-ui/react";
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

  const toast = useToast();

  const handleSubmitUser = async (e: SyntheticEvent) => {
    e.preventDefault();

    const enteredUserName = userNameRef.current?.value;
    const enteredPassword = passwordRef.current?.value;

    if (enteredUserName?.trim() == "" || enteredPassword?.trim() == "") {
      return toast({
        title: `${values.notEntered}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }

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
