import Head from "next/head";

import { HomePage } from "../components/layout/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Platzi's Paradise" content="Platzi's Paradise home page" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
