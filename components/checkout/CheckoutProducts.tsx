import styles from "./CheckoutProducts.module.css";

interface Props {
  id?: number;
  title?: string;
  price?: number;
  image?: string;
  amount?: number;
}

export const CheckoutProducts: React.FC<Props> = ({
  id,
  title,
  price,
  image,
  amount,
}) => {
  if (typeof price !== "number" || typeof amount !== "number") return null;

  const productPrice = `${price} kr`;

  const productAmount = `x ${amount}`;

  const totalPrice = `total: ${price * amount} kr`;

  return (
    <div className={styles.checkoutProduct}>
      <div className={styles.checkoutImgDiv}>
        <a href={`/products/${id}`} target="_blank">
          <img src={image} alt={title} />
        </a>
      </div>
      <div>
        <p>{title}</p>
        <p>{productPrice}</p>
        <p>{productAmount}</p>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
};
