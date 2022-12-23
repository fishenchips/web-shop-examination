import React from "react";
import Image from "next/image";
import { useGetProducts } from "../../queries/products/hooks/useGetProducts";
import { PlatziProduct } from "../../types/product";

export function Products() {
  const { data: products } = useGetProducts();

  console.log({ products });
  return (
    <>
      <div>Products:</div>
      {products?.map((product: PlatziProduct) => (
        <div key={product.id}>
          <h5>{product.title}</h5>
          {/* change to Image  */}
          <img
            src={product.images[0]}
            alt={product.title}
            width="50"
            height="50"
          />
          <p>{product.price}kr</p>
        </div>
      ))}
    </>
  );
}
