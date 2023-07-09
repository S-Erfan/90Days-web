import { Call, Clock, Sms } from "iconsax-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full bg-darkBlue">
        <nav className="container h-[160px] grid place-items-center ">
          <div className="w-full flex justify-between items-center text-white">
            <ul className="flex justify-start items-center gap-10 text-sm">
              <li className="flex justify-start items-center gap-[14px]">
                <div className="text-start" dir="ltr">
                  <span className="">Call Us </span>
                  <span className="block">+98 210000000</span>
                </div>
                <div className="w-[63px] h-[63px] shadow-md bg-[#111C55] border border-[#273270] rounded-full grid place-items-center">
                  <Call size={18} className="text-yellowMain " />
                </div>
              </li>
              <li className="flex justify-start items-center gap-[14px] ">
                <div className="text-start" dir="ltr">
                  <span className="">Email</span>
                  <span className="block">Admin@90rouz.ir</span>
                </div>
                <div className="w-[63px] h-[63px] shadow-md bg-[#111C55] border border-[#273270] rounded-full grid place-items-center">
                  <Sms size={18} className="text-yellowMain " />
                </div>
              </li>
              <li className="flex justify-start items-center gap-[14px] ">
                <div className="" dir="ltr">
                  <span className="">شنبه - 9.00 - 18.00</span>
                  <span className="block">پنجشنبه و جمعه تعطیل</span>
                </div>
                <div className="w-[63px] h-[63px] bg-[#111C55] shadow-md border border-[#273270] rounded-full grid place-items-center">
                  <Clock size={18} className="text-yellowMain " />
                </div>
              </li>
            </ul>

            <div className="flex flex-row justify-start items-center gap-1 text-white ">
              <strong className="text-3xl " dir="ltr">
                90 ROUZ
              </strong>
              <Image
                src={"/logo.png"}
                alt="logo 90 rouz"
                className="w-[25px] object-contain mb-1"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </nav>
        <nav className=" w-full bg-[#19245C]">
          <div className="container">
            <div className="w-full h-auto flex justify-between items-center text-white">
              <ul className="flex justify-start items-center gap-[30px] ">
                <li className="py-[28px] text-yellowMain border-t-[2px] border-white">خانه</li>
                <li className="w-[1px] h-[25px] bg-white/20"></li>
                <li className="py-[28px] ">گروه کتاب</li>
                <li className="w-[1px] h-[25px] bg-white/20"></li>
                <li className="py-[28px] ">بلاگ سفر</li>
                <li className="w-[1px] h-[25px] bg-white/20"></li>
                <li className="py-[28px] ">گالری هنر</li>
                <li className="w-[1px] h-[25px] bg-white/20"></li>
                <li className="py-[28px] ">آکادمی کسب و کار</li>
                <li className="w-[1px] h-[25px] bg-white/20"></li>
                <li className="py-[28px] ">همکاری با ما</li>
              </ul>
              <div className="flex justify-start items-center gap-1">
                <button className="bg-white text-black text-base font-bold w-[122px] h-[34px] outline-none border-none shadow-md ">
                  ورود
                </button>
                <button className="bg-yellowMain text-[#23212A] text-base font-bold w-[122px] h-[34px] outline-none border-none shadow-md ">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
