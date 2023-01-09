import { useQuery } from "@tanstack/react-query";
import { getProductsByCategoryId } from "../../queries/categories/category-queries";

interface Props {
  param: string | Array<string>;
}
export const SingleCategory: React.FC<Props> = ({ param }) => {
  const { data } = useQuery({
    queryKey: ["category", param],
    queryFn: () => getProductsByCategoryId(param),
  });

  console.log(data);

  return <p>{param}</p>;
};
