import { UserForm } from "../userForm/UserForm";
import { User } from "../../../types/user";

type Props = {
  onAddUser: (userData: User) => Promise<void>;
};

export const Register: React.FC<Props> = ({ onAddUser }) => {
  const formValues = {
    header: "Please select a username and password",
    btnText: "Register",
    type: "Register",
    notEntered: "Please enter a username and password.",
    taken: "Username already taken, please enter a new one.",
  };

  return <UserForm values={formValues} onAddUser={onAddUser} />;
};
