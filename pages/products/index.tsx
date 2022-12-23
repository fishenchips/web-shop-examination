import React from "react";
import { useGetProducts } from "../../queries/products/hooks/useGetProducts";

const Products = () => {
  const { data } = useGetProducts();

  console.log({ data });

  return <div>index</div>;
};

export default Products;
