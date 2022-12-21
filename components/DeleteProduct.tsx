import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteProduct } from "../queries/products/hooks/useDeleteProduct";

function DeleteProduct() {
  const queryClient = useQueryClient();

  const { mutate } = useDeleteProduct({
    onSuccess: () => queryClient.invalidateQueries(["Products"]),
  });

  const handleDeleteProduct = () => {
    mutate();
  };
  return <button onClick={handleDeleteProduct}>DeleteProduct</button>;
}

export default DeleteProduct;
