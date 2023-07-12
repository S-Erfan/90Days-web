import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ links = [] }) => {
  return (
    <div className="w-full py-[20px] bg-stone-200 shadow-[inset_0_-2px_4px_rgba(0, 0, 0, 0.192),inset_0_2px_4px_rgba(0, 0, 0, 0.192)] ">
      <div className="container">
        <div className="flex justify-start items-center gap-1">
          {links.map((item, index) => (
            <>
              <Link
                href={item.path}
                className={`text-neutral-500 text-2xl ${
                  index + 1 === links.length ? "pointer-events-none" : ""
                } `}
                key={item?.id ?? index * 1.22515151}
              >
                {item.name}
              </Link>
              {index + 1 !== links.length && <ArrowLeft2 /> }
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
