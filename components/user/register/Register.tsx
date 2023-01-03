import { UserForm } from "../userForm/UserForm";
import { User } from "../../../types/user";

type Props = {
  onAddUser: (userData: User) => Promise<void>;
};

export const Register: React.FC<Props> = ({ onAddUser }) => {
  const formValues = {
    header: "Please select a username and password",
    btnText: "Register",
  };

  return <UserForm values={formValues} onAddUser={onAddUser} />;
};
