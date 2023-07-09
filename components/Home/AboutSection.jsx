import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="w-full h-auto py-[60px] bg-white ">
        <div className="container">
          <div className="flex justify-between items-center ">
            <div className="w-1/3 flex flex-col items-start gap-7">
              <span className="border-r-2 border-yellowMain bg-[#E8E8E8]/50 py-[3px] px-[9px] w-fit text-[#474544] text-sm  ">
                درباره ما
              </span>
              <h1 className="text-[#474544] text-end text-[35px] font-bold max-w-[440px]">
                آشنایی با بخش های سایت
              </h1>
              <div className="text-[#717171] text-[20px] [&>p]:text-justify ">
                <p>
                  در گروه ۹۰ روز هر ۳ ماه یک چالش جدید رو انجام میدیم. هر کار
                  غیر ممکن و سختی که بنظرتون میاد در برنامه میزاریم و سعی میکنیم
                  بهش برسیم. در پایان ۹۰ روز بنا به تجربه ها- توانایی و بینش
                  جدیدی که پیدا میکنید تبدیل به یک شخص دیگری خواهید شد.
                </p>
                <p>
                  خودم در راه تکمیل ۵ زبان هستم و تا اینجا به ۴ زبان تسلط دارم.
                  (بدون در نظر گرفتن زبان مادری) دستاوردهای تو از چالش ها: تجربه
                  های متنوع و جدید/ حس زندگی/پیدا کردن هدف/تغییر از یکنواختی/
                  بیداری درون/ رشد فردی و نزدیک شدن به پتانسیل واقعیتون خواهد
                  بود.
                </p>
                <p className="relative after:w-[32px] after:h-[3px] after:content-[''] after:inline-block ">
                  در این قسمت ۷بخش توسعه فردی داریم.{" "}
                  {"{به قسمت چالش های من مراجعه کننید}"}علاوه بر این چالش ها
                  گروه ۹۰ روز این امکان رو برای دیگران فراهم کرده تا ...
                  <span className="flex-1 text-lightBlue absolute bottom-0 left-0">
                    ادامه
                  </span>
                </p>
              </div>
              <div className="w-full" >
                <audio controls className="w-full h-[35px]" >
                  <source src="horse.ogg" type="audio/ogg" />
                  <source src="horse.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            <Image
              src={"/assets/about.png"}
              alt="intro"
              className="h-[473px] w-auto object-contain"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
