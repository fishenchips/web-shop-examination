import Head from "next/head";

import { Categories } from "../../components/categories/Categories";

const CategoriesPage = () => {
  return (
    <>
      <Head>
        <title>Categories</title>
        <meta name="Platzi's Paradise" content="Categories page" />
      </Head>
      <Categories />
    </>
  );
};

export default CategoriesPage;
