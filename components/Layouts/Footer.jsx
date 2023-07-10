import { Call, Location, Sms } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-darkBlue relative">
        <div className="w-full h-[80px] md:h-[93px] bg-white bg-opacity-[8%] absolute top-0 left-0 z-[1] ">
          <div className="w-full h-full flex lg:hidden justify-end items-center text-white ">
            <span className="flex justify-start items-center gap-2 bg-darkBlue h-full py-[24px] px-4 relative z-[2]">
              <span className="text-[30px] font-bold">90 ROUZ</span>
              <Image
                src={"/logo.png"}
                alt=""
                width={1000}
                height={1000}
                className="w-[35px] mb-1 h-auto object-contain"
              />
            </span>
          </div>
        </div>

        <section className="pb-[86px] border-b border-white/20 ">
          <div className="container">
            <div className="flex justify-between flex-col flex-wrap md:flex-row items-start lg:items-center gap-7 lg:gap-4">
              <div className="w-full md:w-5/6 lg:w-4/6 xl:w-fit flex flex-col gap-5 justify-start items-start">
                <span className="py-[24px] text-white  lg:mb-7 text-[25px] font-bold">
                  خبرنامه
                </span>
                <p className="text-base text-white ">
                  برای با خبر شدن از آخرین پروژه ها و اخبار، لطفا ایمیل خود را
                  برای ما ارسال کنید.
                </p>
                <div className="flex justify-start items-stretch w-full">
                  <button className="px-3 py-3 bg-yellowMain text-[#23212A] text-base">
                    ارسال
                  </button>
                  <input
                    type="email"
                    className="flex-1 lg:min-w-[300px] w-full bg-transparent border border-[#4E5683] outline-none border-r-0 text-white px-3 py-2 "
                    placeholder="ایمیل خود را وارد نمایید"
                  />
                </div>
                <div className="flex justify-start items-center gap-7 mt-3">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Linkdin">
                      <path
                        id="Vector"
                        d="M31.2948 0.0805664H3.06727C1.52487 0.0805664 0.177246 1.19037 0.177246 2.71466V31.0049C0.177246 32.5375 1.52487 33.9032 3.06727 33.9032H31.2865C32.8373 33.9032 33.9999 32.5284 33.9999 31.0049V2.71466C34.009 1.19037 32.8373 0.0805664 31.2948 0.0805664ZM10.6615 28.2734H5.81612V13.208H10.6615V28.2734ZM8.40642 10.9174H8.37169C6.82098 10.9174 5.81687 9.76306 5.81687 8.31805C5.81687 6.84661 6.84741 5.71944 8.43284 5.71944C10.0183 5.71944 10.9884 6.8383 11.0231 8.31805C11.0224 9.76306 10.0183 10.9174 8.40642 10.9174ZM28.3701 28.2734H23.5247V20.0359C23.5247 18.0624 22.8196 16.7141 21.0665 16.7141C19.7272 16.7141 18.9345 17.62 18.5819 18.5026C18.4498 18.8197 18.4143 19.2515 18.4143 19.6924V28.2734H13.5689V13.208H18.4143V15.3045C19.1194 14.3004 20.2209 12.8554 22.7841 12.8554C25.9648 12.8554 28.3708 14.952 28.3708 19.472L28.3701 28.2734Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  <svg
                    width="35"
                    height="28"
                    viewBox="0 0 35 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.3743 3.80874C33.1219 4.35256 31.7967 4.71084 30.4407 4.87226C31.8658 4.03839 32.9375 2.71365 33.4548 1.14648C32.1074 1.93376 30.6359 2.48614 29.1031 2.77999C28.4576 2.10402 27.6813 1.56626 26.8214 1.19941C25.9615 0.832564 25.036 0.644281 24.101 0.646008C20.3155 0.646008 17.2521 3.66277 17.2521 7.38159C17.2494 7.89887 17.3087 8.4146 17.4287 8.91778C14.7143 8.79062 12.0563 8.09866 9.62474 6.88616C7.19323 5.67367 5.04176 3.96734 3.30797 1.87635C2.69972 2.90102 2.37804 4.07013 2.37656 5.26152C2.37656 7.59708 3.59595 9.66155 5.43722 10.871C4.34632 10.8452 3.27778 10.5566 2.3223 10.03V10.1134C2.3223 13.3804 4.68736 16.0982 7.81757 16.7169C7.22894 16.8737 6.62237 16.9531 6.01318 16.9532C5.58091 16.954 5.14963 16.9121 4.72561 16.8281C5.59582 19.5043 8.12851 21.4506 11.1287 21.5062C8.69082 23.3836 5.6978 24.3983 2.62002 24.3909C2.07371 24.3901 1.5279 24.3576 0.985352 24.2935C4.11639 26.2914 7.75598 27.3482 11.4709 27.3381C24.0864 27.3381 30.9784 17.0714 30.9784 8.16707C30.9784 7.87512 30.9708 7.58318 30.9568 7.29818C32.2946 6.34732 33.4518 5.16567 34.3743 3.80874V3.80874Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="37"
                    height="34"
                    viewBox="0 0 37 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.1826 17.0928C36.1826 7.84264 28.1751 0.342285 18.2993 0.342285C8.42358 0.342285 0.416016 7.84264 0.416016 17.0928C0.416016 25.4532 6.9546 32.3829 15.5051 33.6407V21.9363H10.9632V17.0928H15.5051V13.4025C15.5051 9.20512 18.1756 6.88472 22.26 6.88472C24.2168 6.88472 26.2638 7.21225 26.2638 7.21225V11.3348H24.0076C21.7874 11.3348 21.0928 12.6255 21.0928 13.9521V17.0928H26.0522L25.2602 21.9363H21.0936V33.6422C29.644 32.3852 36.1826 25.4554 36.1826 17.0928V17.0928Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5173 3.11373C26.4281 3.11922 28.2591 3.85211 29.6103 5.15233C30.9615 6.45255 31.7231 8.21445 31.7288 10.0532V23.9307C31.7231 25.7695 30.9615 27.5314 29.6103 28.8316C28.2591 30.1319 26.4281 30.8648 24.5173 30.8702H10.0957C8.18485 30.8648 6.35387 30.1319 5.00268 28.8316C3.65148 27.5314 2.88987 25.7695 2.88416 23.9307V10.0532C2.88987 8.21445 3.65148 6.45255 5.00268 5.15233C6.35387 3.85211 8.18485 3.11922 10.0957 3.11373H24.5173V3.11373ZM24.5173 0.338379H10.0957C4.54296 0.338379 0 4.70995 0 10.0532V23.9307C0 29.274 4.54296 33.6456 10.0957 33.6456H24.5173C30.07 33.6456 34.613 29.274 34.613 23.9307V10.0532C34.613 4.70995 30.07 0.338379 24.5173 0.338379V0.338379Z"
                      fill="white"
                    />
                    <path
                      d="M26.6807 10.0533C26.2528 10.0533 25.8345 9.93121 25.4788 9.70247C25.123 9.47373 24.8458 9.14861 24.682 8.76823C24.5183 8.38785 24.4754 7.96929 24.5589 7.56548C24.6424 7.16166 24.8484 6.79074 25.151 6.49961C25.4535 6.20848 25.839 6.01022 26.2586 5.92989C26.6783 5.84957 27.1132 5.89079 27.5085 6.04835C27.9038 6.20591 28.2417 6.47273 28.4794 6.81506C28.7171 7.1574 28.844 7.55987 28.844 7.97159C28.8446 8.24513 28.789 8.51609 28.6805 8.76892C28.572 9.02175 28.4127 9.25147 28.2117 9.44489C28.0107 9.63831 27.772 9.79163 27.5092 9.89603C27.2465 10.0004 26.9649 10.0539 26.6807 10.0533V10.0533ZM17.3066 11.4406C18.4476 11.4406 19.563 11.7662 20.5117 12.3762C21.4604 12.9862 22.1999 13.8532 22.6365 14.8676C23.0732 15.882 23.1874 16.9982 22.9648 18.0751C22.7422 19.152 22.1928 20.1411 21.3859 20.9175C20.5791 21.6939 19.5512 22.2226 18.4321 22.4368C17.313 22.651 16.153 22.5411 15.0988 22.1209C14.0447 21.7008 13.1437 20.9892 12.5097 20.0763C11.8758 19.1633 11.5375 18.09 11.5375 16.9921C11.5391 15.5202 12.1475 14.1091 13.229 13.0683C14.3106 12.0276 15.777 11.4422 17.3066 11.4406V11.4406ZM17.3066 8.66525C15.5951 8.66525 13.9221 9.15361 12.4991 10.0686C11.0761 10.9835 9.96696 12.284 9.31201 13.8055C8.65707 15.327 8.48571 17.0013 8.81959 18.6165C9.15348 20.2318 9.97762 21.7155 11.1878 22.88C12.398 24.0445 13.9398 24.8376 15.6184 25.1589C17.297 25.4802 19.0369 25.3153 20.618 24.685C22.1992 24.0548 23.5507 22.9875 24.5015 21.6182C25.4523 20.2488 25.9598 18.6389 25.9598 16.9921C25.9598 14.7836 25.0481 12.6657 23.4253 11.1041C21.8025 9.54253 19.6016 8.66525 17.3066 8.66525V8.66525Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-5 justify-start items-start text-[18px]">
                <span className="lg:py-[24px] text-white lg:mb-7 text-[25px] font-bold">
                  ارتباط با ما
                </span>
                <div className="flex justify-start items-start gap-1 text-white">
                  <Location size={26} />
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">آدرس:</span>
                    <p>تهران، جردن، خیابان بنیسی، پلاک 31</p>
                  </div>
                </div>

                <div className="flex justify-start items-start gap-1 text-white">
                  <Call size={26} />
                  <div className="flex flex-col gap-2 w-full">
                    <span className="font-bold">شماره تماس ها: </span>
                    <div className="flex justify-between items-center w-full min-w-[180px]">
                      <span>0912-899-7217</span>
                      <span>021-12345</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-[18px] text-white ">
                <span className="lg:py-[24px] text-white lg:mb-7 text-[25px] font-bold">
                  لینک ها
                </span>
                <Link href={"/"}>درباره ما</Link>
                <Link href={"/"}>تیم 90 روز</Link>
                <Link href={"/"}>پروژه ها</Link>
                <Link href={"/"}>مشاوره</Link>
                <Link href={"/"}>فرم تماس</Link>
              </div>

              <div className="flex flex-row mt-4 lg:mt-0 md:flex-col gap-5 text-white">
                <span className="hidden lg:flex justify-start items-center gap-2 mb-7 bg-darkBlue h-full py-[24px] px-4 relative z-[2]">
                  <span className="text-[30px] font-bold">90 ROUZ</span>
                  <Image
                    src={"/logo.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-[35px] mb-1 h-auto object-contain"
                  />
                </span>
                <div className="flex justify-start items-center gap-[14px] ">
                  <div className="text-start" dir="ltr">
                    <span className="">Email</span>
                    <span className="block">Admin@90rouz.ir</span>
                  </div>
                  <div className="w-[45px] h-[45px] md:w-[63px] md:h-[63px] shadow-md bg-[#111C55] border border-[#273270] rounded-full grid place-items-center">
                    <Sms size={18} className="text-yellowMain " />
                  </div>
                </div>

                <div className="flex justify-start items-center gap-[14px]">
                  <div className="text-start" dir="ltr">
                    <span className="">Call Us </span>
                    <span className="block">+98 210000000</span>
                  </div>
                  <div className="w-[45px] h-[45px] md:w-[63px] md:h-[63px] shadow-md bg-[#111C55] border border-[#273270] rounded-full grid place-items-center">
                    <Call size={18} className="text-yellowMain " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-4">
          <div className="container">
            <div className="flex justify-between items-center">
              <Link href={"/"} className="text-[#8388a7] text-base ">
                کانال تلگرام ما
              </Link>
              <span className="text-white text-base " dir="ltr">
                Copyright © - Powered by 90Rouz.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
