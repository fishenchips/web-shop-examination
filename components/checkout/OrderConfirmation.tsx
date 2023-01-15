import Link from "next/link";

import { BillingDetails, PaymentDetails } from "../../types/order";
import styles from "./OrderConfirmation.module.css";

interface Props {
  id?: string | Array<string>;
  billing: BillingDetails;
  payment: PaymentDetails;
}

export const OrderConfirmation: React.FC<Props> = ({
  id,
  billing: { firstName, lastName, street, zip, city, country },
  payment: { sum, items },
}) => {
  const orderTotal = `${sum} kr`;

  return (
    <>
      <h2 className={styles.header}>Thank you for your order.</h2>

      <p>Order details - {id}</p>
      <div>
        <p>Order Total</p>
        <p>{orderTotal}</p>
      </div>
      <address>
        {firstName} {lastName}
        <br />
        {street}
        <br />
        {zip} {city}
        <br />
        {country}
      </address>
      <Link href="/">Continue Shopping</Link>
    </>
  );
};
