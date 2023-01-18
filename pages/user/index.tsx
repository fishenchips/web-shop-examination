import { useRouter } from "next/router";

const UserPage = () => {
  /* Create function where if user in not logged in, redirect to /user/login */
  const router = useRouter();

  /* make sure we are running on the client */
  if (typeof window !== "undefined") {
    const userKey = JSON.parse(localStorage.getItem("userId") as string);

    if (!userKey) {
      router.push("/user/login");
    }

    if (userKey) {
      router.push(`/user/${userKey}`);
    }
  }

  return <></>;
};

export default UserPage;
