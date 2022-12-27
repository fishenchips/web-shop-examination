import { PlatziProduct } from "../../types/product";
import { useGetProducts } from "../../queries/products/hooks/useGetProducts";
import styled from "./Products.module.css";
import { ProductBox } from "./ProductBox";

export const Products = () => {
  const { data: products } = useGetProducts();

  return (
    <div className={styled.products}>
      {products?.map((product: PlatziProduct) => (
        <ProductBox
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          images={product.images}
        />
      ))}
    </div>
  );
};
