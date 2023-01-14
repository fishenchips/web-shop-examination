import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { PlatziProduct } from "../../types/product";
import styles from "./Products.module.css";
import { ProductItem } from "./ProductItem";
import { getProducts } from "../../queries/products/product-queries";

const maxProduct = 200;

export const Products = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageNumber = currentPage === 0 ? 1 : currentPage / 30 + 1;

  const queryClient = useQueryClient();

  const { data: products } = useQuery(
    ["products", currentPage],
    () => getProducts(currentPage),
    {
      keepPreviousData: true,
    }
  );

  /* Prefetch next page whenever current page changes */
  useEffect(() => {
    if (currentPage < maxProduct) {
      const nextPage = currentPage + 30;

      queryClient.prefetchQuery(["products", nextPage], () =>
        getProducts(nextPage)
      );
    }
  }, [currentPage, queryClient]);

  const handlePreviousPage = () => {
    setCurrentPage((currentPage) => currentPage - 30);
  };

  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 30);
  };

  return (
    <>
      <div className={styles.products}>
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
      <div>
        <button
          className={styles.loadMore}
          disabled={currentPage <= 0}
          onClick={handlePreviousPage}
        >
          Previous Page
        </button>
        <p>Page: {pageNumber}</p>
        <button
          className={styles.loadMore}
          disabled={currentPage >= 180}
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </>
  );
};
