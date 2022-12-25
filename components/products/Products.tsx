import React from "react";
import Image from "next/image";
import {
  useGetInfiniteProducts,
  useGetProducts,
} from "../../queries/products/hooks/useGetProducts";
import { PlatziProduct } from "../../types/product";
import styled from "./Products.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

export const Products = () => {
  /*   const { data: products } = useGetProducts();
   */

  const {
    data: products,
    fetchNextPage,
    hasNextPage,
  } = useGetInfiniteProducts();
  console.log({ products });
  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
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
    </InfiniteScroll>
  );
};
