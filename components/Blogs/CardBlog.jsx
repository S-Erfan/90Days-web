import { Clock, Heart } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardBlog = ({ img, title, date, like, description, id }) => {
  return (
    <>
      <div className="w-full h-auto bg-[#f1f1f1] rounded-xl shadow-lg">
        <Link href={id} className="w-full flex justify-start items-stretch gap-2 overflow-hidden ">
          <Image
            src={img}
            alt={title}
            className="w-1/3 rounded-lg  object-cover "
            width={2000}
            height={2000}
          />
          <div className="p-3 flex flex-col gap-2 text-neutral-700">
            <h1 className="line-clamp-1 text-lg font-semibold">{title}</h1>
            <div className="w-full flex justify-between items-center ">
              <div className="flex justify-start items-center gap-1">
                <Clock variant="TwoTone" />
                <span>{date}</span>
              </div>
              <div className="flex justify-start items-center gap-1">
                <Heart variant="TwoTone" />
                <span>{like}</span>
              </div>
            </div>
            <p className="line-clamp-3 max-w-[497.3px] h-[72px]">
              {description}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardBlog;
