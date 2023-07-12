import DetailBlog from "@/components/Blogs/DetailBlog";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { blogInfo } from "@/utils/data";
import Head from "next/head";
import React from "react";

const UniqBlog = () => {
  return (
    <>
      <Head>
        <title>بلاگ های </title>
        <meta name="description" content={"90 روز"} />
        <meta name="author" content="s.Erfan Hoseini github:s-erfan" />
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <Header />
      <main className="">
        <DetailBlog blog={blogInfo} />
      </main>
      <Footer />
    </>
  );
};

export default UniqBlog;
