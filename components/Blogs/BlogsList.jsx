import { Clock, Heart, Like } from "iconsax-react";
import Image from "next/image";
import React from "react";
import CardBlog from "./CardBlog";
import { useRouter } from "next/router";

const BlogsList = ({ blogs }) => {
  const router = useRouter();

  return (
    <section className="container my-8">
      <div className="">
        <div className="w-full -m-2 flex flex-wrap justify-start items-center">
          {blogs?.map((blog) => (
            <div className="w-full lg:w-1/2 xl:w-1/3 p-2" key={blog?.id}>
              <CardBlog
                date={blog?.date}
                img={blog?.img}
                like={blog?.like}
                title={blog?.title}
                description={blog?.description}
                id={`${router.asPath}/${blog?.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
