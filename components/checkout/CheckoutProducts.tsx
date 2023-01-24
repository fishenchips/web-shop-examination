import Link from "next/link";

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

  const totalPrice = `Total: ${price * amount} kr`;

  return (
    <div className={styles.checkoutProduct}>
      <div className={styles.checkoutImgDiv}>
        <Link href={`/products/${id}`} target="_blank">
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={styles.productInfo}>
        <h5>{title}</h5>
        <p>
          {productPrice} {productAmount}
        </p>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
};
