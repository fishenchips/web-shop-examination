import Product from "../../../components/product/Product";
import {
  getProductById,
  getProducts,
} from "../../../queries/products/product-queries";
import { PlatziProduct } from "../../../types/product";

const ProductPage = (props: any) => {
  const product = props.productData;

  return (
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      category={product.category}
      images={product.images}
    />
  );
};

export default ProductPage;

/* change to normal api call so all product pages work! keeping code for now */
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

  return {
    props: {
      productData: {
        id: pid,
        title: selectedProduct.title,
        price: selectedProduct.price,
        description: selectedProduct.description,
        category: {
          id: selectedProduct.category.id,
          name: selectedProduct.category.name,
          image: selectedProduct.category.image,
        },
        images: selectedProduct.images,
      },
      revalidate: 5,
    },
  };
}
