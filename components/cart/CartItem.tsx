import styles from "./CartItem.module.css";

type Props = {
  price: number;
  title: string;
  image: string;
  amount: string;
  onAdd: () => void;
  onRemove: () => void;
};

export const CartItem: React.FC<Props> = ({
  price,
  title,
  image,
  amount,
  onAdd,
  onRemove,
}) => {
  const productPrice = `${price} kr`;

  return (
    <li className={styles.cartItem}>
      <div>
        <div>
          <img src={image} alt={title} />
        </div>
        <p>{title}</p>
        <p>{productPrice}</p>
        <div className={styles.buttonDiv}>
          <button onClick={onRemove}>-</button>
          <p>{amount}</p>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};
