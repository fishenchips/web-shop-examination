import styles from "./Payment.module.css";

interface Props {
  total: number;
}

export const Payment: React.FC<Props> = ({ total }) => {
  const totalPrice = `${total} kr`;

  return <p className={styles.checkoutSum}>Total: {totalPrice}</p>;
};
