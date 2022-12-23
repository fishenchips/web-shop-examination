import { useGetProducts } from "../../queries/products/hooks/useGetProducts";
import { PlatziProduct } from "../../types/product";

const Products = () => {
  const { data: products } = useGetProducts();

  console.log({ products });

  return (
    <>
      <div>Products:</div>
      {products?.map((product: PlatziProduct) => (
        <span key={product.id}>{product.title} </span>
      ))}
    </>
  );
};

export default Products;
