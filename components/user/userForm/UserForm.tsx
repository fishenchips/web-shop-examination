import { useRef, SyntheticEvent } from "react";

import { User } from "../../../types/user";
import styled from "./UserForm.module.css";

type Props = {
  values: {
    header: string;
    btnText: string;
  };
  onAddUser: (userData: User) => Promise<void>;
};

export const UserForm: React.FC<Props> = ({ values, onAddUser }) => {
  const userNameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const enteredUserName = userNameRef?.current?.value;
  const enteredPassword = passwordRef?.current?.value;

  const handleSubmitUser = (e: SyntheticEvent) => {
    e.preventDefault();

    const userData = {
      userName: enteredUserName,
      password: enteredPassword,
      role: "admin",
    };

    onAddUser(userData);
  };

  return (
    <form onSubmit={handleSubmitUser} className={styled.userForm}>
      <h2>{values.header}</h2>
      <div>
        <label htmlFor="userName">Username</label>
        <input type="text" name="userName" ref={enteredUserName} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={enteredPassword} />
      </div>
      <div>
        <button type="submit">{values.btnText}</button>
      </div>
    </form>
  );
};
