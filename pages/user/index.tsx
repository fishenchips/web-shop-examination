import { Login } from "../../components/user/login/Login";

const UserPage = () => {
  /* Create function where if user in not logged in, redirect to /user/login */

  return (
    <>
      <p>Create redirect to user/login</p>
      <Login />
    </>
  );
};

export default UserPage;
