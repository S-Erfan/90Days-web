import BlogsList from "@/components/Blogs/BlogsList";
import Breadcrumbs from "@/components/Blogs/breadcrumbs";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { categories, fakeBlogs } from "@/utils/data";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const BlogSlug = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;
  const findTitle = (sl) => {
    const findIndex = categories.findIndex((cate) => cate.slug === sl);
    return categories[findIndex].name;
  };

  const linksBeard = [
    { id: "dksofkdij32", name: "بلاگ ها", path: "/blogs" },
    { id: "fdopfk03r9o", name: findTitle(slug), path: `/blogs/${slug}` },
  ];

  return (
    <>
      <Head>
        <title>بلاگ های {findTitle(slug)}</title>
        <meta name="description" content={"90 روز"} />
        <meta name="author" content="s.Erfan Hoseini github:s-erfan" />
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <Header />
      <main className="">
        <Breadcrumbs links={linksBeard} />
        <BlogsList blogs={data} />
      </main>
      <Footer />
    </>
  );
};

export default BlogSlug;

export const getStaticPaths = async () => {
  const res = categories.map((item) => item.slug);
  const accPaths = res.map((item) => {
    return {
      params: { slug: item },
    };
  });

  return {
    paths: accPaths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const dataFake = fakeBlogs;
  return {
    props: {
      data: dataFake,
    },
  };
};
