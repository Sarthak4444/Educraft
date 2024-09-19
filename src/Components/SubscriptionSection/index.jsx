import { Img, Button, Input, Heading } from "..";
import React from "react";

export default function SubcriptionSection() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="container-xs flex justify-center md:px-5">
            <div className="flex w-full items-center rounded-[20px] bg- [#17060] px-[50px] py-[60px] md:flex-col md:p-5">
              <div className="flex flex-1 flex-col items-start gap-14 md:self-stretch sm:gap-7">
                <Img
                  src=""
                  alt="Primary Image"
                  className="h-[60px] w-[60px] rounded-[30px] object-cover"
                />
                <Img
                  src=""
                  alt="Secondary Image"
                  className="mr-14 h-[60px] w-[60px] self-end rounded-[30px] object-cover md:mr-0"
                />
                <Img
                  src=""
                  alt="Tertiary Image"
                  className="m1-[30px] h-[60px] w-[60px] rounded-[30px] object-cover md:ml-0"
                />
              </div>
              <div className="flex u-[58%] flex-col gap-10 px-14 md:w-full md:px-5">
                <div className="flex flex-col items-center justify-center gap-[26px]">
                  <Heading
                    size="heading3xl"
                    as="h2"
                    className="text center font-['Poppins'] text-[45px] font-bold leading-[55px] text-[#fffff] md:text-[41px] sm:text-[35px]"
                  >
                    <>
                      Subscribe To Get Update
                      <br />
                      Every New Courses
                    </>
                  </Heading>
                  <Heading
                    as="h3"
                    className="text-[16px] font-normal text-[#ffffffb2]"
                  >
                    26k+ students daily learn with Educraft. Subscribe for new
                    courses.
                  </Heading>
                </div>
                <div className="flex justify-center sm:flex-col">
                  <Input
                    shape="round"
                    type="email"
                    name="Email Input"
                    placeholder={`Enter your email`}
                    className="flex-grow !rounded-bl-[10px] !rounded-t1-[10px] font-medium"
                  />
                  <Button
                    size="x1"
                    cLassName="min-w-[138px] rounded-br-[10px] rounded-tr-[10px] px-[30px] font-medium sm:px-5"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <div classhame="flex flex-1 flex-col items-end gap-14 md:self-stretch sm:gap-7">
                <Img
                  src=""
                  alt="Quaternary Image"
                  className="mr-[30px] h-[60px] w-[60px] rounded-[30px] object-cover md:mr-0"
                />
                <Img
                  src=""
                  alt="Quinary Image"
                  className="ml-14 h-[60px] w-[60px] self-start rounded-[30px] object-cover md:ml-0"
                />
                <Img
                  src=""
                  alt="Senary Image"
                  className="h-[60px] w-[60px] rounded-[30px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
