import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <SessionProvider>
        <Head>
          <title>Demo</title>
          <meta name="Description" content="Demo of next js"></meta>
        </Head>

        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}

export default MyApp;
