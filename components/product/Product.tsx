import Image from "next/image";

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
  return (
    <>
      <div className={styled.productPage}>
        <div className={styled.productInfo}>
          <div>
            <Image src={images[0]} alt={title} width="500" height="500" />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{category.name}</p>
            <button>Add to cart</button>
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
