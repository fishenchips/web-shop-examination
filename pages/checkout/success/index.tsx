import Link from "next/link";

import { useContext } from "react";
import { CartContext } from "../../../store/CartContext";

const CheckoutSuccess = () => {
  const cartCtx = useContext(CartContext);

  cartCtx.clearCart();

  return (
    <>
      <p>Order was placed successfully, hooray!</p>
      <Link href="/">Continue Shopping</Link>
    </>
  );
};

export default CheckoutSuccess;
