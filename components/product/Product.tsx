import { PlatziProduct } from "../../types/product";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  images,
}: PlatziProduct) => {
  console.log(id);

  return <p>p page</p>;
};

export default Product;
