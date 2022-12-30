import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Link from "next/link";

import { Layout } from "../components/layout/Layout";
import { Loading } from "../components/loading/Loading";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <div>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </div>
          <Loading />
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
