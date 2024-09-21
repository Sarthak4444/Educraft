import { Img, Heading } from "../../Components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full rounded-[20px] bg-[#e2effd] px-[30px] py-5 sm:px-5">
          <div className="w-full px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Heading
                as="h1"
                className="mt-1 mb-10 text-xl font-medium text-[#000000]"
              >
                Home | Our Mentors
              </Heading>
              <Heading
                as="h2"
                className="text-[45px] font-semibold leading-[54px] text-[#0a033c] md:w-full"
              >
                <>
                  Educraft has
                  <br />
                  Hundreds of
                  <br />
                  Qualified Mentors
                </>
              </Heading>
            </div>
            <div>
              <Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw2hVBAi9GnP59qzpxrvOCE2ELDHtOJfWRg&s"
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
