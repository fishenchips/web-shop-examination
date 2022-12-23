import Image from "next/image";
import { useGetProducts } from "../../queries/products/hooks/useGetProducts";
import { PlatziProduct } from "../../types/product";

const Products = () => {
  const { data: products } = useGetProducts();

  console.log({ products });

  return (
    <>
      <div>Products:</div>
      {products?.map((product: PlatziProduct) => (
        <div key={product.id}>
          <span>{product.title}</span>
          <img
            src={product.images[0]}
            alt={product.title}
            width="20"
            height="50"
          />
        </div>
      ))}
    </>
  );
};

export default Products;
