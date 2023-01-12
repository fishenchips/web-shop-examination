import { useContext, useRef } from "react";

import { CartContext } from "../../store/CartContext";
import { BillingDetails } from "./BillingDetails";
import { CheckoutProducts } from "./CheckoutProducts";
import styles from "./Checkout.module.css";
import { CartProduct } from "../../types/product";
import { Payment } from "./Payment";

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
        <BillingDetails
          firstName={firstNameRef}
          lastName={lastNameRef}
          street={streetRef}
          zip={zipRef}
          city={cityRef}
          country={countryRef}
        />
      </section>
      <section className={styles.checkoutSection}>
        <div>
          <h2>Order Details</h2>
          <div className={styles.checkoutProducts}>
            {cartCtx.items?.map((product: CartProduct) => (
              <CheckoutProducts
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
        <div>
          <h2>Payment</h2>
          <Payment total={cartCtx.totalAmount} />
          <button className={styles.checkoutBtn} onClick={handleBillingDetails}>
            Complete Purchase
          </button>
        </div>
      </section>
    </div>
  );
};
