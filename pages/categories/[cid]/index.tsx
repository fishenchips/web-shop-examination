import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { SingleCategory } from "../../../components/categories/SingleCategory";
import { getCategoryById } from "../../../queries/categories/category-queries";

const CategoryPage = () => {
  const router = useRouter();

  const cid = router.query.cid;

  const usePrefetchCategoryById = async () => {
    const queryClient = useQueryClient();

    await queryClient.prefetchQuery({
      queryKey: ["category", cid],
      queryFn: () => getCategoryById(cid),
    });
  };

  usePrefetchCategoryById();

  return <SingleCategory param={cid} />;
};
export default CategoryPage;
