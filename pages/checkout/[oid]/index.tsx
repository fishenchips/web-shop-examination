import Link from "next/link";

import { Order } from "../../../types/order";

const CheckoutSuccess = (props: any) => {
  console.log(props);

  return (
    <>
      <p>Order was placed successfully, hooray!</p>
      <Link href="/">Continue Shopping</Link>
    </>
  );
};

export default CheckoutSuccess;
