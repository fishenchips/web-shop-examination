import { PlatziProduct } from "../../types/product";
import { useGetProducts } from "../../queries/products/hooks/useGetProducts";
import styled from "./Products.module.css";
import { ProductItem } from "./ProductItem";

export const Products = () => {
  const { data: products } = useGetProducts();

  console.log(products);

  if (!products) return <p>Error loading products.</p>;
  return (
    <div className={styled.products}>
      {products?.map((product: PlatziProduct) => (
        <ProductItem
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
