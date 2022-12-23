/* import Head from "next/head";
import Image from "next/image"; */
import { ChakraProvider } from "@chakra-ui/react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DeleteProduct from "../components/DeleteProduct";
import { Loading } from "../components/loading/Loading";

const Home = () => {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Loading />
        <DeleteProduct />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default Home;
