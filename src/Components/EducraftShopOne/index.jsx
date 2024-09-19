import { RatingBar, Heading, Img } from "./../../Components";
import React from "react";

export default function EducraftShopOne({ ...props }) {
  return (
    <div
      {...props}
      className={` ${props.className} flex flex-col items-center w-full gap-2`}
    >
      <div className="self-stretch rounded-[10px] bg-[#FFFFff] p-5">
        <Img
          src=""
          alt="Product Image"
          className="h-[246px] w-full rounded-[10px] object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2 self-stretch">
        <Heading
          size="headingxs"
          as="h6"
          className="text-[18px] font-semibold text-[#0a033c]"
        >
          The Three Musketeers
        </Heading>
        <div className="flex items-center Jjustify-between gap-5 self-stretch">
          <Heading
            size="headingxs"
            as="h6"
            className="text-[10px] font-semibold text-[#d97356]"
          >
            $48.88
          </Heading>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activecolor="#ffc107"
            size={16}
            className="flex gap-2.5"
          />
        </div>
      </div>
    </div>
  );
}
