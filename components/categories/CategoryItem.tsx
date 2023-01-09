interface Props {
  key: number;
  name: string;
  image: string;
}

export const CategoryItem: React.FC<Props> = ({ key: id, name, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
