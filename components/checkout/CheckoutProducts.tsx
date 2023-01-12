import styles from "./CheckoutProducts.module.css";

interface Props {
  id?: number;
  title?: string;
  price?: number;
  image?: string;
}

export const CheckoutProducts: React.FC<Props> = ({
  id,
  title,
  price,
  image,
}) => {
  const productPrice = `${price} kr`;

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
      </div>
    </div>
  );
};
