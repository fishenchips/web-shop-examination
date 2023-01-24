import { useState } from "react";
import Head from "next/head";

import { AdminNavigation } from "../../../components/layout/AdminNavigation";

const AdminProducts = () => {
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
      <Head>
        <title>Admin Products</title>
      </Head>
      <AdminNavigation />
      <p>Admin Products</p>
    </>
  );
};

export default AdminProducts;
