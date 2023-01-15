import Link from "next/link";
import { useRouter } from "next/router";

const CheckoutSuccess = () => {
  const router = useRouter();

  console.log(router);

  const { firstName, lastName, street, zip, city, country } = JSON.parse(
    router.query.billing
  );

  const { sum, items } = JSON.parse(router.query.payment);

  console.log(items);
  return (
    <>
      <h2>Thank you for your order</h2>
      <Link href="/">Continue Shopping</Link>
    </>
  );
};

export default CheckoutSuccess;
