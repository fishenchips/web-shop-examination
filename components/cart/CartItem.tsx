import { CartProduct } from "../../types/product";

type Props = {
  key: number;
  price: number;
  title: string;
  amount: string;
  onAdd: (item: CartProduct) => void;
};

export const CartItem: React.FC<Props> = ({ price, title, amount, onAdd }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <div>
        <button>-</button>
        <p>quantity: {amount}</p>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
};
