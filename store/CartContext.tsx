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
    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: ,
        removeItem: ,
    }

    
  return <CartContext.Provider value={}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
