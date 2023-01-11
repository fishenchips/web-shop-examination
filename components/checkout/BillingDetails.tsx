import styles from "./BillingDetails.module.css";
import countryList from "../../data/countries.json";

export const BillingDetails = () => {
  console.log(countryList);
  return (
    <table className={styles.billingForm}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lasttName" />
      </div>
      <div>
        <label htmlFor="street">Street Address</label>
        <input type="text" name="street" />
      </div>
      <div>
        <label htmlFor="zip">ZIP Code</label>
        <input type="number" name="zip" />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" name="city" />
      </div>
      <div>
        <label htmlFor="country"></label>
        <select name="country" id="">
          <option disabled selected>
            Choose country
          </option>
          {countryList.map((country) => (
            <option value={country.code}>{country.name}</option>
          ))}
        </select>
      </div>
    </table>
  );
};
