import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import Product from "../../../components/product/Product";
import { getProductById } from "../../../queries/products/product-queries";

const ProductPage = () => {
  const router = useRouter();

  const productId = router.query.pid;

  const { data: product } = useQuery(["product", productId], () =>
    getProductById(productId as string)
  );

  return (
    <Product
      id={product?.id}
      title={product?.title}
      price={product?.price}
      description={product?.description}
      category={product?.category}
      images={product?.images}
    />
  );
};

export default ProductPage;
