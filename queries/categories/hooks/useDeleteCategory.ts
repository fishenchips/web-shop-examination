import { useMutation } from "@tanstack/react-query";

import { deleteCategory } from "../category-queries";

export const useDeleteCategory = (id: number, options: any) => {
  useMutation(() => deleteCategory(id), options);
};
