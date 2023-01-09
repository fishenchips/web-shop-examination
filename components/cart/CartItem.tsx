import styles from "./CartItem.module.css";

type Props = {
  price: number;
  title: string;
  image: string;
  amount: number;
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

  const productSum = `${price * amount} kr`;

  return (
    <>
      <li className={styles.cartItem}>
        <div>
          <div>
            <img src={image} alt={title} />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>Price: {productPrice}</p>
          </div>
          <div className={styles.buttonDiv}>
            <div>
              <button onClick={onRemove}>-</button>
              <p>{amount}</p>
              <button onClick={onAdd}>+</button>
            </div>
            <div>
              <p>{productSum}</p>
            </div>
          </div>
        </div>
      </li>
      <hr className={styles.lineBreak} />
    </>
  );
};
