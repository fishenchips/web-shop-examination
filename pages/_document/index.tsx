import { Html, Head, Main, NextScript } from "next/document";

/* React Portals for correct html structure */
const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
