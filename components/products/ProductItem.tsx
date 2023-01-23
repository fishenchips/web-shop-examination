import { useRouter } from "next/router";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../store/CartContext";
import styles from "./Products.module.css";
import { useToast } from "@chakra-ui/react";

interface Props {
  key?: number;
  id?: number;
  title?: string;
  price?: number;
  images?: Array<string>;
}

export const ProductItem: React.FC<Props> = ({ id, title, price, images }) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const toast = useToast();

  const productPageHandler = () => {
    router.push(`/products/${id}`);
  };

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      title: title,
      amount: 1,
      price: price,
      image: images![0],
    });
    toast({
      title: `${title} added to cart.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div className={styles.productBox}>
      <div className={styles.productDiv} onClick={productPageHandler}>
        <div className={styles.productImg}>
          <img src={images![0]} alt={title} />
        </div>
        <h5>{title}</h5>
        <p>{price} kr</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className={styles.icon}
          onClick={addToCartHandler}
        />
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};
