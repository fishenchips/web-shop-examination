import styles from "./CategoryHeader.module.css";

interface Props {
  name?: string;
  image?: string;
}

export const CategoryHeader: React.FC<Props> = ({ name, image }) => {
  return (
    <div className={styles.categoryImg}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};
