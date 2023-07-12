import { challenge } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TargetSection = () => {
  return (
    <>
      <section className="bg-[#F4F4F4] py-[82px] relative">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="border-r-2 border-yellowMain bg-[#E8E8E8]/50 py-[3px] px-[9px] w-fit text-[#474544] text-sm  ">
              اهداف توسعه فردی
            </span>
            <h5 className="text-[#474544] text-center text-[35px] font-bold ">
              فاصله تو تا پتانسیلت !
            </h5>
          </div>
          <div className="mt-[70px] ">
            <div className="flex flex-wrap justify-center items-center">
              {challenge.map((item) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/2 lg:w-1/3 p-[30px]"
                >
                  <Link href={`/blogs/${item.slug}`} className="flex flex-col justify-center items-center gap-2 ">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      className="w-[35px] h-auto object-contain"
                      width={5000}
                      height={5000}
                    />
                    <span className="text-[#1C1F35] text-[25px]">
                      {item.name}
                    </span>
                    <p className="text-center text-[#666C89] max-w-[200px]">
                      {item.content}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="bg-lightBlue shadow-md shadow-neutral-600/40 text-white absolute text-lg md:text-[26px] py-[15px] px-[30px] md:py-[27px] md:px-[87px] bottom-0 left-[50%] whitespace-nowrap  translate-x-[-50%] translate-y-[50%] ">
          برای مشاوره کلیک کنید
        </button>
      </section>
    </>
  );
};

export default TargetSection;
