import Head from "next/head";

import { Cart } from "../../components/cart/Cart";

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="Platzi's Paradise" content="Cart page" />
      </Head>
      <Cart />
    </>
  );
};

export default CartPage;
