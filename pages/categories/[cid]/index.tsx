import { useRouter } from "next/router";

import { SingleCategory } from "../../../components/categories/SingleCategory";

const CategoryPage = () => {
  const router = useRouter();

  const cid = router.query.cid;

  return <SingleCategory param={cid} />;
};
export default CategoryPage;
