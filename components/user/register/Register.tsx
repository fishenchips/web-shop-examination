import { UserForm } from "../userForm/UserForm";

export const Register = () => {
  const formValues = {
    header: "Please select a username and password",
    btnText: "Register",
  };

  return <UserForm values={formValues} />;
};
