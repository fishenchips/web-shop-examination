import { createContext, ReactNode, useState } from "react";
import { User } from "../types/user";

/* global state object */
export const UserContext = createContext<User>({
  id: "",
  userName: "",
  password: "",
  role: "",
});

type Props = ReactNode;

/* Provider to wrap components in _app.tsx */
const UserContextProvider: React.FC<Props> = (children) => {
  const [user, setUser] = useState<User>({});

  const contextValue: User = user;

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
