import { Call, Clock, Sms } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="w-full bg-darkBlue hidden relative lg:block">
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
      </header>
      <nav className=" w-full bg-[#19245C] sticky top-0 left-0 shadow-[0px_4px_12px_#00000070] z-[20]">
        <div className="container">
          <div className="w-full h-auto flex justify-between items-center text-white">
            <ul className="hidden lg:flex justify-start items-center gap-[30px] ">
              <li className="py-[28px] text-yellowMain border-t-[2px] border-white">
                خانه
              </li>
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

            <button
              className="relative border-none outline-none lg:hidden"
              dir="ltr"
              onClick={() => setMenu(!menu)}
            >
              <div className="w-[35px] h-[20px] flex flex-col justify-between transition-all duration-200 origin-[2%]">
                <div
                  className={`w-full h-[2px] bg-white transition-all duration-200  ${
                    menu ? "translate-y-[9px] rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`"w-full h-[2px] bg-white transition-all duration-200  ${
                    menu ? "translate-x-[100%] opacity-0" : ""
                  } `}
                ></div>
                <div
                  className={`w-full h-[2px] bg-white transition-all duration-200 ${
                    menu ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                ></div>
              </div>
            </button>

            <div className="block lg:hidden py-[18px] w-fit ">
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

            <div className="justify-start items-center gap-1 hidden md:flex ">
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
      <div
        className={`fixed lg:hidden top-[72px] z-[15] transition-all duration-150 ease-out left-0 ${
          menu ? "h-[calc(100vh-72px)]" : "h-0"
        } overflow-hidden w-full bg-darkBlue `}
      >
        <div className="container w-full h-full mt-10 relative">
          <ul className="flex flex-col gap-6">
            <li className="w-full text-xl text-white">خانه</li>
            <li className="w-full text-xl text-white">گروه کتاب</li>
            <li className="w-full text-xl text-white">بلاگ سفر</li>
            <li className="w-full text-xl text-white">گالری هنر</li>
            <li className="w-full text-xl text-white">آکادمی کسب و کار</li>
            <li className="w-full text-xl text-white">همکاری با ما</li>
          </ul>

          <div className=" md:hidden absolute top-[80%] left-0 w-full z-[16]">
            <div className="flex justify-evenly items-center gap-2">
              <button className="bg-white text-black text-base font-bold w-[122px] h-[34px] outline-none border-none shadow-md ">
                ورود
              </button>
              <button className="bg-yellowMain text-[#23212A] text-base font-bold w-[122px] h-[34px] outline-none border-none shadow-md ">
                ثبت نام
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
