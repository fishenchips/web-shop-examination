import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../store/CartContext";
import styles from "./HeaderCartButton.module.css";

export const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);

  /* transform array into a single number - takes two args, function and starting value (0) */
  const numberOfCartItems = cartCtx.items.reduce((currentNum, item: any) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className={styles.items}>{numberOfCartItems}</span>
    </div>
  );
};
