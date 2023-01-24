import { useRouter } from "next/router";
import Head from "next/head";

import { OrderConfirmation } from "../../../components/checkout/OrderConfirmation";

const CheckoutSuccess = () => {
  const router = useRouter();

  /* Passed down from checkout redirect  */

  const billing = JSON.parse(router.query.billing as string);

  const payment = JSON.parse(router.query.payment as string);

  /* Pass null if there isnt a user */
  const userId = router.query.userId
    ? JSON.parse(router.query.userId as string)
    : null;

  return (
    <>
      <Head>
        <title>Order Summary</title>
        <meta name="Platzi's Paradise" content="Order summary page" />
      </Head>
      <OrderConfirmation
        id={router.query.oid}
        billing={billing}
        payment={payment}
        userId={userId}
      />
    </>
  );
};

export default CheckoutSuccess;
