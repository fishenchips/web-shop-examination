import { useRouter } from "next/router";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../store/CartContext";
import styled from "./Products.module.css";

interface Props {
  key: number;
  id: number;
  title: string;
  price: number;
  images: Array<string>;
}

export const ProductItem: React.FC<Props> = ({ id, title, price, images }) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  const productPageHandler = () => {
    router.push(`/products/${id}`);
  };

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      title: title,
      amount: 1,
      price: price,
    });
  };

  return (
    <div className={styled.productBox}>
      <div className={styled.productDiv} onClick={productPageHandler}>
        <div className={styled.productImg}>
          <img src={images[0]} alt={title} />
        </div>
        <h5>{title}</h5>
        <p>{price} kr</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faShoppingCart} onClick={addToCartHandler} />
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};
