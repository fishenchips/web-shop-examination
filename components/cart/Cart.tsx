import { useContext } from "react";

import { CartContext } from "../../store/CartContext";

export const Cart: React.FC = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount} kr`;

  if (cartCtx.items.length < 1) {
    return <p>No items added to cart.</p>;
  }

  return (
    <div>
      {cartCtx.items.map((item) => (
        <div key={item["id"]}>
          <p>{item["title"]}</p>
          <p>{item["price"]}</p>
          <p>quantity: {item["amount"]}</p>
        </div>
      ))}
    </div>
  );
};
