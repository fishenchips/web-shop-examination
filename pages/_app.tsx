import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import UserContextProvider from "../store/UserContext";
import CartContextProvider from "../store/CartContext";
import { Layout } from "../components/layout/Layout";
import { Loading } from "../components/loading/Loading";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        //create function later
        /* onError: queryErrorHandler, */
        staleTime: 600000,
        cacheTime: 900000,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <CartContextProvider>
            <Layout>
              <Loading />
              <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools />
          </CartContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
