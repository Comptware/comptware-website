import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Comptware | Software Solutions for Modern Businesses</title>
        <meta
          name="description"
          content="Innovative software development solutions spanning mobile, web, and cloud technologies. Transform your digital vision into reality."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Comptware | Cutting-Edge Software Development"
        />
        <meta
          property="og:description"
          content="Innovative software development solutions spanning mobile, web, and cloud technologies. Transform your digital vision into reality."
        />
        {/* Uncomment and replace with your actual meta image when available */}
        {/* <meta
          property="og:image"
          content="https://comptware.com/meta-image.jpg"
        /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comptware" />
        <meta name="twitter:creator" content="@comptware" />
        <meta
          name="twitter:title"
          content="Comptware | Cutting-Edge Software Development"
        />
        <meta
          name="twitter:description"
          content="Innovative software development solutions spanning mobile, web, and cloud technologies. Transform your digital vision into reality."
        />
        {/* Uncomment and replace with your actual meta image when available */}
        {/* <meta
          name="twitter:image"
          content="https://comptware.com/meta-image.jpg"
        /> */}
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="Comptware: Innovative software development solutions for modern businesses"
        />

        <meta name="twitter" content="summary_large_image" />
        <meta
          name="google-site-verification"
          content="your-google-site-verification-code-here"
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
