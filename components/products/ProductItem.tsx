import { useRouter } from "next/router";

import styled from "./Products.module.css";

interface Props {
  key: number;
  id: number;
  title: string;
  price: number;
  images: Array<string>;
}

export const ProductItem: React.FC<Props> = ({ id, title, price, images }) => {
  const router = useRouter();

  const productPageHandler = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div className={styled.productBox} onClick={productPageHandler}>
      <div className={styled.productImg}>
        <img src={images[0]} alt={title} />
      </div>
      <h5>{title}</h5>
      <p>{price} kr</p>
    </div>
  );
};
