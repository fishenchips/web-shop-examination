import Head from "next/head";

import { Products } from "../../components/products/Products";

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="Platzi's Paradise" content="Products page" />
      </Head>
      <Products />
    </>
  );
};

export default ProductsPage;
