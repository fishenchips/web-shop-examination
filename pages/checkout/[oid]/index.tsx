import { useRouter } from "next/router";

import { OrderConfirmation } from "../../../components/checkout/OrderConfirmation";

const CheckoutSuccess = () => {
  const router = useRouter();

  const billing = JSON.parse(router.query.billing as string);

  const payment = JSON.parse(router.query.payment as string);

  /* Pass null if there isnt a user */
  const userId = router.query.userId
    ? JSON.parse(router.query.userId as string)
    : null;

  return (
    <OrderConfirmation
      id={router.query.oid}
      billing={billing}
      payment={payment}
      userId={userId}
    />
  );
};

export default CheckoutSuccess;
