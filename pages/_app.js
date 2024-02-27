<<<<<<< HEAD
import "@/styles/globals.scss";
=======
import { Fragment } from "react";
import Head from "next/head";
import "./global.css";

>>>>>>> Incoming

<<<<<<< HEAD
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
=======
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>ResourceHub</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );

>>>>>>> Incoming
}
<<<<<<< HEAD
=======

export default MyApp;

>>>>>>> Incoming
