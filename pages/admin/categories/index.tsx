import Head from "next/head";

import AdminCategories from "../../../components/admin/categories/AdminCategories";

const AdminCategoriesPage = () => {
  return (
    <>
      <Head>
        <title>Admin Categories</title>
      </Head>
      <AdminCategories />
    </>
  );
};

export default AdminCategoriesPage;
