import { useContext } from "react";

import { CartContext } from "../../store/CartContext";
import { CartProduct } from "../../types/product";
import { CartItem } from "./CartItem";

export const Cart: React.FC = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount} kr`;

  const addToCartHandler = (item: CartProduct) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  if (cartCtx.items.length < 1) {
    return <p>No items added to cart.</p>;
  }

  return (
    <div>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item["id"]}
          title={item["title"]}
          price={item["price"]}
          amount={item["amount"]}
          onAdd={addToCartHandler.bind(null, item)}
        />
      ))}
      <p>Total: {totalAmount}</p>
    </div>
  );
};
