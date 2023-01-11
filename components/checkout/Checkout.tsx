import { useContext } from "react";

import { CartContext } from "../../store/CartContext";
import { BillingDetails } from "./BillingDetails";
import styles from "./Checkout.module.css";

export const Checkout = () => {
  const cartCtx = useContext(CartContext);

  if (cartCtx.items.length < 1) return <p>No products in your cart</p>;

  return (
    <div className={styles.checkout}>
      <section className={styles.checkoutDetails}>
        <h2>Billing Details</h2>
        <BillingDetails />
      </section>
      <section className={styles.checkoutProducts}>
        <h2>Order Details</h2>
        <p>hej</p>
      </section>
    </div>
  );
};
