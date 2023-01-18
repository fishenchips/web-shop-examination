import Link from "next/link";

import { BillingDetails, PaymentDetails } from "../../types/order";
import styles from "./OrderConfirmation.module.css";

interface Props {
  id?: string | Array<string>;
  billing: BillingDetails;
  payment: PaymentDetails;
  userId: string;
}

export const OrderConfirmation: React.FC<Props> = ({
  id,
  billing: { firstName, lastName, street, zip, city, country },
  payment: { sum, items },
  userId,
}) => {
  const orderTotal = `${sum} kr`;

  return (
    <>
      <h2 className={styles.header}>Thank you for your order.</h2>
      <div className={styles.details}>
        <p className={styles.orderId}>Order details - {id}</p>
        <div className={styles.orderTotal}>
          <p className={styles.totalHeader}>Order total</p>
          <p className={styles.totalSum}>{orderTotal}</p>
        </div>

        <div>
          <p className={styles.userHeader}>User details</p>
          <address>
            {firstName} {lastName}
            <br />
            {street}
            <br />
            {zip} {city}
            <br />
            {country}
          </address>
        </div>
        <p>USERID: {userId}</p>
      </div>
      <div className={styles.frontPage}>
        <Link href="/">Continue Shopping</Link>
      </div>
    </>
  );
};
