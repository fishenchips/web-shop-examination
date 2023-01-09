import { useContext } from "react";

import { CartContext } from "../../store/CartContext";
import { CartProduct } from "../../types/product";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css";

export const Cart: React.FC = () => {
  const cartCtx = useContext(CartContext);

  let totalAmount = `${cartCtx.totalAmount} kr`;

  const addToCartHandler = (item: CartProduct) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeFromCartHandler = (id: number) => {
    cartCtx.removeItem(id);
  };

  if (cartCtx.items.length < 1) {
    return <p>No items added to cart.</p>;
  }

  console.log(cartCtx.items);

  return (
    <div>
      <h2 className={styles.cartHeader}>Cart</h2>
      <hr className={styles.lineBreak} />
      <ul className={styles.cartItems}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item["id"]}
            title={item["title"]}
            price={item["price"]}
            image={item["image"]}
            amount={item["amount"]}
            onAdd={() => addToCartHandler(item)}
            onRemove={() => removeFromCartHandler(item["id"])}
          />
        ))}
      </ul>
      <p className={styles.sum}>Total: {totalAmount}</p>
    </div>
  );
};
