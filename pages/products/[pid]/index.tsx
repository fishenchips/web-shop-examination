import { useEffect, useState } from "react";

import {
  getProductById,
  getProducts,
} from "../../../queries/products/product-queries";
import { PlatziProduct } from "../../../types/product";

const ProductPage = (props: any) => {
  const product = props.productData;

  console.log({ product });

  return (
    <>
      <p>{product.title}</p>
    </>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
  const products = await getProducts(0, 30);

  return {
    fallback: false,
    /* paths needs to be an array */
    paths: products.map((product: PlatziProduct) => ({
      params: {
        pid: product.id.toString(),
      },
    })),
  };
};

/* need id for useRouter hook but cant use it it getStaticProps so we use context object to reach id from url */
export async function getStaticProps(context: any) {
  /* needs to be the same as [folderName]   */
  const pid = context.params.pid;

  const selectedProduct = await getProductById(pid);

  console.log({ selectedProduct });

  return {
    props: {
      productData: {
        id: pid,
        title: selectedProduct.title,
      },
      revalidate: 5,
    },
  };
}
