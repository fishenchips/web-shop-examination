import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

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

  return <SingleCategory param={cid as string} />;
};
export default CategoryPage;
