import { useContext } from "react";
import { useRouter } from "next/router";

import { CartContext } from "../../store/CartContext";
import { CartProduct } from "../../types/product";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css";

export const Cart: React.FC = () => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  let totalAmount = `${cartCtx.totalAmount} kr`;

  /* Add an item to cart, with a new property of amount */
  const addToCartHandler = (item: CartProduct) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  /* Remove product with specific Id */
  const removeFromCartHandler = (id: number) => {
    cartCtx.removeItem(id);
  };

  if (cartCtx.items.length < 1) {
    return <p>No items added to cart.</p>;
  }

  const handleCheckoutBtn = () => {
    router.push("/checkout");
  };

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
      <div className={styles.checkoutFooter}>
        <p className={styles.sum}>Total: {totalAmount}</p>
        <button className={styles.checkoutBtn} onClick={handleCheckoutBtn}>
          Checkout
        </button>
      </div>
    </div>
  );
};
