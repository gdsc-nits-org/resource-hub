import Head from "next/head";
import { Poppins } from "next/font/google";
import { Hero } from "@/components/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { Domains } from "@/components/Domains/Domains";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Resource Hub</title>
        <meta
          name="description"
          content="The one stop hub for all your needs!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className}`}>
        <Hero />
        <Domains />
        <Footer />
      </main>
    </>
  );
}
