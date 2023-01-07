import { useContext } from "react";

import { CartContext } from "../../store/CartContext";
import { PlatziProduct } from "../../types/product";
import styled from "./Product.module.css";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  images,
}: PlatziProduct) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      title: title,
      amount: 1,
      price: price,
    });
  };

  return (
    <>
      <div className={styled.productPage}>
        <div className={styled.productInfo}>
          <div className={styled.productPicture}>
            <img src={images[0]} alt={title} width="500" />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{category?.name}</p>
            <button onClick={addToCartHandler}>Add to cart</button>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
