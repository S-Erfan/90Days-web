import { Clock, Eye, Heart } from "iconsax-react";
import Image from "next/image";
import React from "react";

const DetailBlog = ({ blog }) => {
  return (
    <>
      <section className="">
        <div className="w-full lg:container lg:mt-5  h-[250px] md:h-[390px] lg:h-[800px]">
          <Image
            src={blog?.img}
            alt={blog?.title}
            className="w-full h-full object-cover lg:rounded-xl"
            width={2000}
            height={2000}
          />
        </div>
        <div className="container my-8 text-neutral-700">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
            <h1 className="text-xl font-semibold lg:text-3xl " >{blog?.title}</h1>
            <div className="flex justify-between items-center gap-7 ">
              <div className="flex justify-start items-center gap-1">
                <Clock />
                <span>{blog?.date}</span>
              </div>
              <div className="flex justify-start items-center gap-1">
                <Eye />
                <span>{blog?.view}</span>
              </div>
              <div className="flex justify-start items-center gap-1">
                <Heart />
                <span>{blog?.like}</span>
              </div>
            </div>
          </div>

          <p className="text-neutral-600 mt-5 lg:text-xl text-justify" >{blog?.description}</p>
        </div>
      </section>
    </>
  );
};

export default DetailBlog;
