import { Button, Heading, Img } from "./../../Components";
import React from "react";

export default function EducraftCoursesOne({ ...props }) {
  return (
    <div
      {...props}
      className={` ${props.className} flex flex-col items-center w-full`}
    >
      <div className="flex flex-col gap-6 self-stretch rounded-[14px] bg-[#ffffff] px-3.5 py-[30px] sm:py-5">
        <div className="flex flex-col items-center gap-[18px]">
          <Img src="" alt="User Image" className="h-[50px] w-[50px]" />
          <div className="flex flex-col items-center gap-2 self-stretch">
            <Heading
              size="headinglg"
              as="h4"
              className="text-[25px] font-semibold text-[#02033c]"
            >
              Standard One
            </Heading>
            <Heading
              as="p"
              className="self-stretch text-center text-[16px] font-normal leading-[30px] text-[#5d5a6f]"
            >
              Standard 1 is a foundation Standard that reflects 7 important
              concepts..
            </Heading>
          </div>
        </div>
        <Button
          size="xs"
          variant="outline"
          shape="round"
          className="mx-auto self-stretch rounded-[5px] border px-[20px] font-medium sm:px-5"
        >
          Class Details
        </Button>
      </div>
    </div>
  );
}
