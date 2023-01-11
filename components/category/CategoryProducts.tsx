import { useQuery } from "@tanstack/react-query";

import { PlatziProduct } from "../../types/product";
import { getProductsByCategoryId } from "../../queries/categories/category-queries";
import { ProductItem } from "../products/ProductItem";
import styles from "./CategoryProducts.module.css";

interface Props {
  param: string | Array<string>;
}

export const CategoryProducts: React.FC<Props> = ({ param }) => {
  const { data: products } = useQuery({
    queryKey: ["products-by-category", param],
    queryFn: () => getProductsByCategoryId(param),
  });

  return (
    <div className={styles.categoryProducts}>
      {products?.map((product: PlatziProduct) => (
        <ProductItem
          key={product["id"]}
          id={product["id"]}
          title={product["title"]}
          price={product["price"]}
          images={product["images"]}
        />
      ))}
    </div>
  );
};
