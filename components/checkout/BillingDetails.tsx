import { RefObject } from "react";

import styles from "./BillingDetails.module.css";
import countryList from "../../data/countries.json";

interface Props {
  firstName: RefObject<HTMLInputElement>;
  lastName: RefObject<HTMLInputElement>;
  street: RefObject<HTMLInputElement>;
  zip: RefObject<HTMLInputElement>;
  city: RefObject<HTMLInputElement>;
  country: RefObject<HTMLSelectElement>;
}

export const BillingDetails: React.FC<Props> = ({
  firstName,
  lastName,
  street,
  zip,
  city,
  country,
}) => {
  return (
    <form className={styles.billingForm}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" ref={firstName} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lasttName" ref={lastName} />
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input type="text" name="street" ref={street} />
      </div>
      <div>
        <label htmlFor="zip">ZIP Code</label>
        <input type="number" name="zip" ref={zip} />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" name="city" ref={city} />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select name="country" id="" defaultValue="default" ref={country}>
          <option value="default" disabled>
            Choose Country
          </option>
          {countryList.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
