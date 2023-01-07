import { createContext, ReactNode, useReducer } from "react";
import { CartProduct } from "../types/product";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: CartProduct) => {},
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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    /* check for existing items in cart when new action item is added  */
    const existingCartItemIndex = state.items.findIndex(
      (item: CartProduct) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    /* if it already exists, increase amount by one and updated the existing aray by replacing the updated existing item */
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  /* Needs separate return statement */
  if (action.type === "REMOVE_ITEM") {
    /* find product first */
    const existingCartItemIndex = state.items.findIndex(
      (item: CartProduct) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    /* only remove one */
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
  }

  /* Fallback */
  return defaultCartState;
};

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartProduct) => {
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
