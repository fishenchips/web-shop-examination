import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import UserContextProvider from "../store/userContext";
import { Layout } from "../components/layout/Layout";
import { Loading } from "../components/loading/Loading";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Layout>
            <Loading />
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools />
        </UserContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
