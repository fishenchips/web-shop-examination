import styles from "./CategoryItem.module.css";

interface Props {
  key: number;
  name: string;
  image: string;
}

export const CategoryItem: React.FC<Props> = ({ key: id, name, image }) => {
  console.log(id);

  return (
    <div className={styles.categoryBox}>
      <div className={styles.categoryImg}>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
