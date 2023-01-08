import styles from "./CartItem.module.css";

type Props = {
  price: number;
  title: string;
  amount: string;
  onAdd: () => void;
  onRemove: () => void;
};

export const CartItem: React.FC<Props> = ({
  price,
  title,
  amount,
  onAdd,
  onRemove,
}) => {
  return (
    <li className={styles.cartItem}>
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <div className={styles.buttonDiv}>
          <button onClick={onRemove}>-</button>
          <p>{amount}</p>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};
