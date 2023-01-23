import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getUser } from "../../../queries/users/user-queries";
import { User } from "../../../types/user";
import { UserOrders } from "./UserOrders";

interface Props {
  id: string;
}

export const LoggedInUser: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const toast = useToast();

  const [user, setUser] = useState<User | null>(null);

  if (typeof window !== "undefined") {
    const userKey = JSON.parse(localStorage.getItem("userId") as string);

    useEffect(() => {
      if (!userKey) {
        router.push("/user/login");
        toast({
          title: `You are not logged in!`,
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      }
    }, [userKey]);
  }
  useEffect(() => {
    const getUserData = async () => {
      /* getUser wants a User object */
      const user = {
        id: JSON.parse(localStorage.getItem("userId") as string),
      };
      const data = await getUser(user);
      setUser(data);
    };

    getUserData();
  }, []);

  return (
    <>
      <p>
        Welcome Back <i>{user?.userName}!</i>
      </p>
      <UserOrders id={id} />
    </>
  );
};
