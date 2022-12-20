/* import Head from "next/head";
import Image from "next/image"; */
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Home = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <p>allo</p>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default Home;
