import { useRouter } from "next/router";

import { Register } from "../../../components/user/register/Register";
import { User } from "../../../types/user";

const RegisterPage = () => {
  const router = useRouter();

  const addUserHandler = async (enteredUserData: User) => {
    /* internal API request, takes api folder and file name, as the POST request is sent to that url */
    try {
      const response = await fetch("/api/new-user", {
        method: "POST",
        body: JSON.stringify(enteredUserData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);

      router.push("/user/login");
    } catch (err) {
      console.error(err);
    }
  };

  return <Register onAddUser={addUserHandler} />;
};

export default RegisterPage;
