import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import Head from "next/head";

import { SingleCategory } from "../../../components/category/SingleCategory";
import { getCategoryById } from "../../../queries/categories/category-queries";

const CategoryPage = () => {
  const router = useRouter();

  const cid = router.query.cid;

  /* Prefetching single category on categories page */
  const usePrefetchCategoryById = async () => {
    const queryClient = useQueryClient();

    await queryClient.prefetchQuery({
      queryKey: ["category", cid],
      queryFn: () => getCategoryById(cid as string),
    });
  };

  usePrefetchCategoryById();

  return (
    <>
      <Head>
        <title>Category Page</title>
        <meta name="Platzi's Paradise" content="Single category page" />
      </Head>
      <SingleCategory param={cid as string} />
    </>
  );
};
export default CategoryPage;
