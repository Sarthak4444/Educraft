import { Img, Heading } from "../../Components";
import React from "react";

export default function HeroBanner() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full flex-col items-start gap-1 rounded-[20px] bg-[#ffeee9] px-[30px] py-5 sm:px-5">
            <Heading
              as="h1"
              className="mt-1 text-[16px] font-medium text-[#000000]"
            >
              Home | Our Mentors
            </Heading>
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
              <Heading
                size="heading3xl"
                as="h2"
                className="w-[30%] text-[45px] font-semibold leading-[54px] text-[#02033c] md:w-full md:text-[41px] sm:text-[35px]"
              >
                <>
                  Educatsy has the
                  <br />
                  qualified mentor
                </>
              </Heading>
              <Img
                src=""
                alt="Hero Image"
                className="h-[210px] w-[34%] object-contain md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
