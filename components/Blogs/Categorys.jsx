import { challenge } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <>
      <section className="container  pt-8 ">
        <h1 className="text-2xl md:text-[50px] text-neutral-700 text-center font-medium">
          دسته بندی بلاگ ها
        </h1>
        <div className="my-4 md:my-[70px] ">
          <div className="flex flex-wrap justify-center items-center">
            {challenge.map((item) => (
              <div key={item.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[30px]">
                <Link href={`/blogs/${item.slug}`} className="flex flex-col justify-center items-center gap-2 ">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    className="w-[35px] h-auto object-contain"
                    width={5000}
                    height={5000}
                  />
                  <span className="text-[#1C1F35] text-lg md:text-[25px] text-center ">
                    {item.name}
                  </span>
                  {/* <p className="text-center text-[#666C89] max-w-[200px]">
                    {item.content}
                  </p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
