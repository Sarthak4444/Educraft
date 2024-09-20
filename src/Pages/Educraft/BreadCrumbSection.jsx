import { Img, Heading } from "../../Components";
import React from "react";

export default function BreadCrumbSection() {
  return (
    <>
      <div className="flex justify-center pt-10">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full flex-col items-start gap-1 rounded-[20px] bg-[#ffeee9] px-[30px] py-5 sm:px-5">
            <div className="w-full px-8 py-4 flex flex-col md:flex-row items-center justify-between">
              <div>
                <Heading
                  as="h1"
                  className="mt-1 mb-10 text-xl font-medium text-[#000000]"
                >
                  Home | Shop
                </Heading>
                <Heading
                  size="heading3xl"
                  as="h2"
                  className="w-[28%] text-[45px] font-semibold leading-[54px] text-[#0a033c] md:w-full md:text-[41px] sm:text-[35px]"
                >
                  <>
                    Educraft
                    <br />
                    online
                    <br />
                    Book Shop
                  </>
                </Heading>
              </div>
              <div>
                <Img
                  src="Public/Images/Books.png"
                  alt="Brand Logo"
                  className="h-[200px] w-[30%] object-contain rounded-2xl md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
