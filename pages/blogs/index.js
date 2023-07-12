import Categories from "@/components/Blogs/Categorys";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import Head from "next/head";
import React from "react";

const BlogsCategory = () => {
  return (
    <>
      <Head>
        <title>انتخاب دسته بندی</title>
        <meta name="description" content={"90 روز"} />
        <meta name="author" content="s.Erfan Hoseini github:s-erfan" />
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <Header />
      <main className="">
        <Categories />
      </main>
      <Footer />
    </>
  );
};

export default BlogsCategory;
