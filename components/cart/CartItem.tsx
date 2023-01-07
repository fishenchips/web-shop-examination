type Props = {
  key: number;
  price: number;
  title: string;
  amount: string;
  onAdd: () => void;
  onRemove: () => void;
};

export const CartItem: React.FC<Props> = ({
  key,
  price,
  title,
  amount,
  onAdd,
  onRemove,
}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <div>
        <button onClick={onRemove}>-</button>
        <p>quantity: {amount}</p>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
};
