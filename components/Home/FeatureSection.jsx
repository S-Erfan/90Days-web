import Image from "next/image";
import React from "react";

const itemsFeature = [
  {
    id: "lpdkogofd230",
    title: "توسعه فردی",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    icon: "/assets/vectors/f_1.png",
  },
  {
    id: "34rfdfc",
    title: "تعریف پروژه",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    icon: "/assets/vectors/f_2.png",
  },
  {
    id: "dsf44t5rfdf",
    title: "آکادمی کسب و کار",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    icon: "/assets/vectors/f_3.png",
  },
];

const FeatureSection = () => {
  return (
    <>
      <section className="bg-white w-full pt-[190px] pb-[150px] ">
        <div className="container">
          <span className="border-r-2 border-yellowMain bg-[#E8E8E8]/50 py-[3px] px-[9px] w-fit text-[#474544] text-sm  ">
            در آینده
          </span>
          <h4 className="text-[#474544] text-start text-[35px] font-bold mt-2">
            بخش هایی که در آینده به ۹۰ روز اضافه میشوند
          </h4>
          <div className="flex justify-between items-center gap-[170px] mt-4 ">
            <div className="w-full flex flex-col items-start gap-10">
              {itemsFeature.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-start items-start gap-5"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-[50px] h-auto object-contain"
                    width={1000}
                    height={1000}
                  />
                  <div className="flex flex-col gap-1">
                    <h6 className="text-[25px] text-[#1c1f35]">{item.title}</h6>
                    <p className="text-base text-[#666C89]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Image
              src={"/assets/feather.png"}
              alt="intro"
              className="h-[423px] w-auto object-contain"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
