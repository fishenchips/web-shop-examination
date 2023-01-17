import { useRef, SyntheticEvent } from "react";

import { User } from "../../../types/user";
import styled from "./UserForm.module.css";

type Props = {
  values: {
    header: string;
    btnText: string;
    type: string;
    notEntered: string;
    taken?: string;
  };
  onAddUser: (userData: User) => Promise<void>;
};

export const UserForm: React.FC<Props> = ({ values, onAddUser }) => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  console.log(values);

  const handleSubmitUser = (e: SyntheticEvent) => {
    e.preventDefault();

    const enteredUserName = userNameRef?.current?.value;
    const enteredPassword = passwordRef?.current?.value;

    if (enteredUserName?.trim() == "" || enteredPassword?.trim() == "")
      return alert(values.notEntered);

    /* Only want role to be sent back when register */
    if (values.type === "Register") {
      const userData = {
        userName: enteredUserName,
        password: enteredPassword,
        role: "user",
      };

      onAddUser(userData);
    }

    if (values.type === "Login") {
      const userData = {
        userName: enteredUserName,
        password: enteredPassword,
      };
      onAddUser(userData);
    }
  };

  return (
    <form onSubmit={handleSubmitUser} className={styled.userForm}>
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
  );
};
