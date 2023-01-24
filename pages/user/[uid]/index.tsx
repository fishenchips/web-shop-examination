import { useRouter } from "next/router";
import Head from "next/head";

import { LoggedInUser } from "../../../components/user/loggedInUser/LoggedInUser";

const LoggedInUserPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>User Hub</title>
        <meta name="Platzi's Paradise" content="User page" />
      </Head>
      <LoggedInUser id={router.query.uid as string} />
    </>
  );
};

export default LoggedInUserPage;
