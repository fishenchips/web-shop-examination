import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CartProduct } from "../types/product";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: CartProduct) => {},
  removeItem: (id: number) => {},
  clearCart: () => {},
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
    /* find product first, only interested in id (dispatchCartAction) */
    const existingCartItemIndex = state.items.findIndex(
      (item: CartProduct) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    /* only remove one */
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(
        (item: CartProduct) => item.id !== action.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      /* Replace with new, updated item */
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      items: [],
      totalAmount: 0,
    };
  }

  /* Fallback */
  return defaultCartState;
};

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  /* using potential local storage to populate cartState.items */
  useEffect(() => {
    const cartItemsData = JSON.parse(
      localStorage.getItem("cartItems") as string
    );

    if (cartItemsData) {
      cartState.items = cartItemsData;
    }
  }, []);

  /* Set items in local storage */
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState.items));
  }, [cartState.items]);

  /* Total amount */
  useEffect(() => {
    const cartTotal = JSON.parse(localStorage.getItem("cartTotal") as string);

    if (cartTotal) {
      cartState.totalAmount = cartTotal;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartTotal", JSON.stringify(cartState.totalAmount));
  }, [cartState.totalAmount]);

  const addItemToCartHandler = (item: CartProduct) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id: number) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const clearItemsFromCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearItemsFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
