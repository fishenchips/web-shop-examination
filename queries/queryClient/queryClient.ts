import { createStandaloneToast } from "@chakra-ui/react";
import { QueryClient } from "@tanstack/react-query";

const { toast } = createStandaloneToast();

const queryErrorHandler = (error: unknown): void => {
  const id = "react-query-error";
  const title =
    error instanceof Error ? error.message : "Error connecting to server";

  //Prevent duplicates
  toast.closeAll();
  toast({ id, title, status: "error", isClosable: true });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});
