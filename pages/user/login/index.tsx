import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { Login } from "../../../components/user/login/Login";
import { LoginUser } from "../../../types/user";

const LoginPage = () => {
  const toast = useToast();
  const router = useRouter();

  const handleLoginUser = async (enteredLoginData: LoginUser) => {
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
      localStorage.setItem("userId", JSON.stringify(data.DBUser._id));

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

    console.log(data, "data from index login page");
    return data;
  };

  const { data } = useQuery(["user"], () => isUserLoggedIn());

  return <Login onLogin={handleLoginUser} />;
};

export default LoginPage;
