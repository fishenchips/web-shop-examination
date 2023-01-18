import { useRouter } from "next/router";

import { OrderConfirmation } from "../../../components/checkout/OrderConfirmation";

const CheckoutSuccess = () => {
  const router = useRouter();

  const billing = JSON.parse(router.query.billing as string);

  const payment = JSON.parse(router.query.payment as string);

  return (
    <OrderConfirmation
      id={router.query.oid}
      billing={billing}
      payment={payment}
    />
  );
};

export default CheckoutSuccess;
