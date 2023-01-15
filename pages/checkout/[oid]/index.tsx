import { useRouter } from "next/router";

import { OrderConfirmation } from "../../../components/checkout/OrderConfirmation";

const CheckoutSuccess = () => {
  const router = useRouter();

  console.log(router);

  const billing = JSON.parse(router.query.billing);

  const payment = JSON.parse(router.query.payment);

  return (
    <OrderConfirmation
      id={router.query.oid}
      billing={billing}
      payment={payment}
    />
  );
};

export default CheckoutSuccess;
