import { useToast } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../../queries/categories/category-queries";

interface Props {
  id: number;
}

const Delete: React.FC<Props> = ({ id }) => {
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

  return <button onClick={handleDeleteCategory}>Delete</button>;
};

export default Delete;
