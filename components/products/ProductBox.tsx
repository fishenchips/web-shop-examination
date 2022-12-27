import Image from "next/image";
import { useRouter } from "next/router";

import styled from "./Products.module.css";

interface Props {
  key: number;
  id: number;
  title: string;
  price: number;
  images: Array<string>;
}

export const ProductBox: React.FC<Props> = ({
  key,
  id,
  title,
  price,
  images,
}) => {
  const router = useRouter();

  const productPageHandler = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div className={styled.productBox} key={key} onClick={productPageHandler}>
      <Image src={images[0]} alt={title} width="200" height="200" />
      <h5>{title}</h5>
      <p>{price} kr</p>
    </div>
  );
};
