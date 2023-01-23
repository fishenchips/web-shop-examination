import { useToast } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";

import { deleteCategory } from "../../../queries/categories/category-queries";
import styles from "./DeleteCategory.module.css";

interface Props {
  id: number;
}

export const DeleteCategory: React.FC<Props> = ({ id }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const handleDeleteCategory = async () => {
    await deleteCategory(id);
    queryClient.invalidateQueries(["categories"]);

    toast({
      title: `Category deleted.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <button className={styles.button} onClick={handleDeleteCategory}>
      Delete Category
    </button>
  );
};
