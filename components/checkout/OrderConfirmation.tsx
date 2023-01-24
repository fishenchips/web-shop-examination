import Link from "next/link";
import { useState, useEffect } from "react";

import { BillingDetails, PaymentDetails } from "../../types/order";
import { User } from "../../types/user";
import styles from "./OrderConfirmation.module.css";
import { getUser } from "../../queries/users/user-queries";

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
  const [user, setUser] = useState<User | null>(null);

  const orderTotal = `${sum} kr`;

  useEffect(() => {
    const getUserData = async () => {
      /* getUser wants a User object */
      if (!userId) return;

      const user = {
        id: userId,
      };
      const data = await getUser(user);
      setUser(data);
    };

    getUserData();
  }, []);

  return (
    <>
      <h2 className={styles.header}>Thank you for your order.</h2>
      <div className={styles.details}>
        <p className={styles.orderId}>Order Details - {id}</p>
        <div className={styles.orderTotal}>
          <p className={styles.totalHeader}>Order Total</p>
          <p className={styles.totalSum}>{orderTotal}</p>
        </div>

        <div>
          <p className={styles.userHeader}>User Details</p>
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
        <p>User: {user ? user.userName : "Not logged in"}</p>
      </div>
      <div className={styles.frontPage}>
        <Link href="/">Continue Shopping</Link>
      </div>
    </>
  );
};
