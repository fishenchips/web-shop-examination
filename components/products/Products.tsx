import React from "react";
import Image from "next/image";

import { PlatziProduct } from "../../types/product";
import { useGetProducts } from "../../queries/products/hooks/useGetProducts";
import styled from "./Products.module.css";

export const Products = () => {
  const { data: products } = useGetProducts();

  return (
    <div className={styled.products}>
      {products?.map((product: PlatziProduct) => (
        <div className={styled.productBox} key={product.id}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width="200"
            height="200"
          />
          <h5>{product.title}</h5>
          <p>{product.price} kr</p>
        </div>
      ))}
    </div>
  );
};
