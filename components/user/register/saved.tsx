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
