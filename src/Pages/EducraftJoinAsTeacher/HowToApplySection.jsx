import { Img, Heading } from "../../Components";
import React from "react";

export default function HowToApplySection() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-16 px-14 md:px-5 sm:gap-8">
          <Heading
            size="heading3xl"
            as="h2"
            className="font-['Poppins'] text-[45px] font-bold text-[#0a033c] md:text-[41px] sm:text-[35px]"
          >
            How to apply to join as instructor
          </Heading>
          <div className="flex w-[80%] justify-center rounded-[20px] bg-[#fFffff] p-2 shadow-[0_50px_170px_0_#0000000C] md:w-full">
            <div className="mt-1.5 w-full bg-[#FFFFFf]">
              <Img
                src="https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148910729.jpg?t=st=1726937549~exp=1726941149~hmac=34799cfbf7a0dde47fca4b4e30e868f108bf8d603139871c016dba5793fb7976&w=826"
                alt="Background Image"
                className="md:h-[500px] w-full rounded-[20px] object-cover h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
