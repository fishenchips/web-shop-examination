import { useRouter } from "next/router";

import styles from "./CategoryItem.module.css";

interface Props {
  id: number;
  name: string;
  image: string;
}

export const CategoryItem: React.FC<Props> = ({ id, name, image }) => {
  const router = useRouter();

  const categoryPageHandler = () => {
    router.push(`/categories/${id}`);
  };
  return (
    <div className={styles.categoryBox} onClick={categoryPageHandler}>
      <div className={styles.categoryImg}>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
