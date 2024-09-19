import { Button, Img, Heading, RatingBar } from "./../../Components";
import React from "react";

export default function EducraftCoursesDetailstMainCard({ ...props }) {
  return (
    <div
      {...props}
      cLassName={` ${props.className} flex sm:flex-col justify-center items-center w-full gap-6 p-3.5 bg-[#FFFFff] cursor-pointer rounded-2xl sm:gap-3`}
    >
      <div className="flex flex-1 items-center gap-3.5">
        <Img
          src=""
          alt="Product Image"
          className="h- [182px] u-[32%] rounded-[18px] object-contain"
        />
        <div className="flex flex-1 flex-col items-start justify-center gap-3 sm:gap-3">
          <Heading
            size="headingmd"
            as="h5"
            className="text-[22px] font-semibold text-[#0a033c] sm:text-[18px]"
          >
            The Three Musketeers
          </Heading>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activecolor="#ffc167"
            size={20}
            className="flex gap-2.5"
          />
          <Heading
            size="headingmd"
            as="hs"
            className="text-[22px] font-semibold text-[#ff6652] sm:text-[18px]"
          >
            $40.00
          </Heading>
        </div>
      </div>
      <Button
        shape="round"
        cLassName="w-[44px] self-end rounded-md px-2.5 sm:self-auto"
      >
        <Img src="" />
      </Button>
    </div>
  );
}
