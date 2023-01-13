import Link from "next/link";

const CheckoutSuccess = () => {
  return (
    <>
      <p>Order was placed successfully, hooray!</p>
      <Link href="/">Continue Shopping</Link>
    </>
  );
};

export default CheckoutSuccess;
