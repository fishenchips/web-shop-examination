import { useState } from "react";

import { AdminNavigation } from "../../../components/layout/AdminNavigation";

const AdminUsers = () => {
  const [admin, setAdmin] = useState<boolean>(false);

  const checkAdmin = async () => {
    const response = await fetch("/api/users/get-admin");

    const { message } = await response.json();

    if (message === "Access granted") {
      setAdmin(true);
    }
    if (message === "Unathorized access") {
      setAdmin(false);
    }
  };

  checkAdmin();

  if (!admin) return <p>Access denied.</p>;
  return (
    <>
      <AdminNavigation /> <p>Admin Users</p>
    </>
  );
};

export default AdminUsers;
