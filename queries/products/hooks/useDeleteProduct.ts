import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../product-queries";

export const useDeleteProduct = (options: any) =>
  useMutation(() => deleteProduct(), options);
