import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bani</title>
        <meta
          name="description"
          content="Receive, confirm, and track all online and in-store payments easily and instantly."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bani | Collect and reconcile payments easily"
        />
        <meta
          property="og:description"
          content="Receive, confirm, and track all online and in-store payments easily and instantly."
        />
        <meta
          property="og:image"
          content="https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bani" />
        <meta name="twitter:creator" content="@bani" />
        <meta
          name="twitter:title"
          content="Bani | Collect and reconcile payments easily"
        />
        <meta
          name="twitter:description"
          content="Receive, confirm, and track all online and in-store payments easily and instantly."
        />
        <meta
          name="twitter:image"
          content="https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.jpg"
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of Bani logo, Collect and reconcile payments easily and a Bani payment banner all against a white background."
        />

        <meta name="twitter" content="summary_large_image" />
        <meta
          name="“google-site-verification”"
          content="“QY1LVF8oeP3LDr28S-i2_BFQq1kYB0Dr6d6URTLQFtQ”"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <HomePage />
      </main>
    </>
  );
}
