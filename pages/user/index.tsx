import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { isUserLoggedIn } from "../../queries/users/user-queries";

const UserPage = () => {
  /* Create function where if user in not logged in, redirect to /user/login */
  const router = useRouter();

  const { data } = useQuery(["user"], () => isUserLoggedIn());

  /* Redirect to login page if user not logged in */

  console.log(data, "data from /user");

  useEffect(() => {
    if (!data) {
      router.push("/user/login");
    }
  }, [data]);

  return (
    <>
      <p>Create redirect to user/login</p>
    </>
  );
};

export default UserPage;
