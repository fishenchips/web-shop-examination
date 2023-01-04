import { useRef, SyntheticEvent } from "react";
import { useToast } from "@chakra-ui/react";

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
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const toast = useToast();

  const handleSubmitUser = (e: SyntheticEvent) => {
    e.preventDefault();

    const enteredUserName = userNameRef?.current?.value;
    const enteredPassword = passwordRef?.current?.value;

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
        <input type="text" name="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordRef} />
      </div>
      <div>
        <button
          type="submit"
          onClick={() =>
            toast({
              title: "Account successfully created.",
              description:
                "You were redirected to login page. Please enter your username and password.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }
        >
          {values.btnText}
        </button>
      </div>
    </form>
  );
};
