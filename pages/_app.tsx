import type { AppProps } from "next/app";
import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import UserContextProvider from "../store/UserContext";
import CartContextProvider from "../store/CartContext";
import { Layout } from "../components/layout/Layout";
import { Loading } from "../components/loading/Loading";
import { queryClient } from "../queries/queryClient/queryClient";

/* ToastContainer is required to render my standalone toast for errors */
const { ToastContainer } = createStandaloneToast();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <CartContextProvider>
            <Layout>
              <ToastContainer />
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
