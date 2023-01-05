import { createContext, ReactNode } from "react";
import { PlatziProduct } from "../types/product";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: PlatziProduct) => {},
  removeItem: (id: number) => {},
});

interface Props {
  children?: ReactNode;
}

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const addItemToCartHandler = (item: PlatziProduct) => {};

  const removeItemFromCartHandler = (id: number) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
