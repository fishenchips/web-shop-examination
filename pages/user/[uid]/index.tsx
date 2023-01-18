import { useRouter } from "next/router";

import { LoggedInUser } from "../../../components/user/loggedInUser/LoggedInUser";

const LoggedInUserPage = () => {
  const router = useRouter();

  return <LoggedInUser id={router.query.uid as string} />;
};

export default LoggedInUserPage;
