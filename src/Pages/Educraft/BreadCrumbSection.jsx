import { Img, Heading } from "../../Components";
import React from "react";

export default function BreadCrumbSection() {
  return (
    <>
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full rounded-[20px] bg-[#ffeee9] px-[30px] py-5 sm:px-5">
          <div className="w-full px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Heading
                as="h1"
                className="mt-1 mb-10 text-xl font-medium text-[#000000]"
              >
                Home 
              </Heading>
              <Heading
                as="h2"
                className="text-[45px] font-semibold leading-[54px] text-[#0a033c] md:w-full"
              >
                <>
                  Educraft 
                  <br />
                  Online
                  <br />
                  Book Shop
                </>
              </Heading>
            </div>
            <div>
              <Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJh9iD97T3fFEjUYq0P4mzd3Hz1I2BQj-unA&s"
                alt="Brand Logo"
                className="h-[200px] object-contain mt-6 sm:mt-0 rounded-2xl md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
