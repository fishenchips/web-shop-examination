import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Register } from "../../../components/user/register/Register";
import { User } from "../../../types/user";

const RegisterPage = () => {
  const router = useRouter();
  const toast = useToast();

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
      if (data.message === "Username already taken.") {
        return toast({
          title: "Username already taken",
          description: "Please try another Username",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }

      router.push("/user/login");

      toast({
        title: "Account successfully created.",
        description:
          "You were redirected to login page. Please enter your Username and Password.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Account creation failed.",
        description: "GG no re.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return <Register onAddUser={addUserHandler} />;
};

export default RegisterPage;
