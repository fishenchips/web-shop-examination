/* import Head from "next/head";
import Image from "next/image"; */
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const productUrl = "https://api.escuelajs.co/api/v1/products";

const Home = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <p>allo</p>
      <Products />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

const Products = () => {
  const { data } = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const response = await fetch(productUrl);
      const data = await response.json();

      return data;
    },
  });

  console.log({ data });

  return <div>hej</div>;
};

export default Home;
