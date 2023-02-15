import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import GradientFooter from "./PatternCard";

const Layout = ({ children }) => {
  const page = {
    description: "description",

    title: "title",
    thumbnail: "thumbnail",
  };
  return (
    <div className="w-screen min-h-screen flex flex-grow flex-col">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="description" content={page.description} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:image" content={page.thumbnail} />

        <title>{page.title}</title>
      </Head>

      <Header />
      <section className="w-full flex flex-row flex-grow max-w-9xl mx-auto ">
        <main
          className={`website-content w-full pt-[100px] md:pt-[14px] md:mt-[80px] flex flex-col flex-grow bg-grey-whitesmoke md:bg-white`}
        >
          {children}
        </main>
      </section>
      {/* Footer start */}
      <GradientFooter/>
      <Footer />
      {/* Footer end */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
