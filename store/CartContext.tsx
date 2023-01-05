import { createContext, ReactNode, useReducer } from "react";
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

/* Initial satte of our cart reducer */
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: any, action: any) => {
  if (action.type === "ADD_ITEM") {
  }

  return defaultCartState;
};

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: PlatziProduct) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id: number) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
