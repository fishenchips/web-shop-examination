import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Login } from "../../../components/user/login/Login";
import { LoginUser, User } from "../../../types/user";

const LoginPage = () => {
  const toast = useToast();
  const router = useRouter();

  const handleLoginUser = async (enteredLoginData: LoginUser) => {
    /*     const credentials: LoginUser = enteredLoginData; */

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(enteredLoginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.message === "Success") {
      toast({
        title: `Welcome ${enteredLoginData.enteredUserName}`,
        description: "Login successful",
        status: "info",
        duration: 9000,
        isClosable: true,
      });

      router.push("/user");
    }

    if (data.message === "Invalid credentials.") {
      return toast({
        title: `Wrong Username or Password`,
        description: "Please try again.",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }

    console.log(data);
  };

  const handleLogOut = async () => {
    const response = await fetch("/api/auth/logout");

    console.log(response);
  };

  return <Login onLogin={handleLoginUser} />;
};

export default LoginPage;
