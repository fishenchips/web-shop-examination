import { useContext, useRef, SyntheticEvent } from "react";

import { CartContext } from "../../store/CartContext";
import { BillingDetails } from "./BillingDetails";
import styles from "./Checkout.module.css";

export const Checkout = () => {
  const cartCtx = useContext(CartContext);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const handleBillingDetails = () => {
    const enteredFirstName = firstNameRef?.current?.value;
    const enteredLastName = lastNameRef?.current?.value;
    const enteredStreet = streetRef?.current?.value;
    const enteredZip = zipRef?.current?.value;
    const enteredCity = cityRef?.current?.value;
    const enteredCountry = countryRef?.current?.value;

    const billingDetails = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      street: enteredStreet,
      zip: enteredZip,
      city: enteredCity,
      country: enteredCountry,
    };

    console.log(billingDetails);
  };

  if (cartCtx.items.length < 1) return <p>No products in your cart</p>;

  return (
    <div className={styles.checkout}>
      <section className={styles.checkoutDetails}>
        <h2>Billing Details</h2>
        <BillingDetails firstName={firstNameRef} lastName={lastNameRef} />
      </section>
      <section className={styles.checkoutProducts}>
        <h2>Order Details</h2>
        <p>hej</p>
      </section>
      <button onClick={handleBillingDetails}>buy</button>
    </div>
  );
};
