import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="w-full h-auto py-[123px] bg-[#273270] ">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
            <Image
              src={"/assets/intro-1.png"}
              alt="intro"
              className="h-auto w-full md:w-1/3 xl:h-[473px] xl:w-auto object-contain mt-8"
              width={1000}
              height={1000}
            />
            <div className="w-full xl:w-1/3 flex flex-col items-end gap-7">
              <span className="border-l-2 border-yellowMain bg-[#041C3780] py-[3px] px-[9px] w-fit text-white text-sm  ">
                چالش
              </span>
              <h1 className="text-white text-end text-[40px] md:text-[60px] font-black max-w-[440px]">
                هر 90 روز آماده ی <br /> یک چالش جدید باش !
              </h1>
              <p className="text-sm text-white max-w-[460px] ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <button className="bg-yellowMain -mt-2 mx-auto md:mx-0 md:-mt-6 text-[#23212A] text-base font-bold w-[194px] h-[60px] outline-none border-none shadow-md">
                بزن بریم
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
