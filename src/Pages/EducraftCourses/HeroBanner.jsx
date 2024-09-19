import { Img, Heading } from "../../Components";
import TextList from "../../Components/TextList";
import React, { Suspense } from "react";

const courseList = [
  {
    textOne: "+",
    textTwo: "+",
    textThree: "+",
    textFour: "+",
    textFive: "+",
    textSix: "+",
    textSeven: "+",
    textEight: "+",
    textNine: "+",
    textTen: "+",
  },
  {
    textOne: "+",
    textTwo: "+",
    textThree: "+",
    textFour: "+",
    textFive: "+",
    textSix: "+",
    textSeven: "+",
    textEight: "+",
    textNine: "+",
    textTen: "+",
  },
  {
    textOne: "+",
    textTwo: "+",
    textThree: "+",
    textFour: "+",
    textFive: "+",
    textSix: "+",
    textSeven: "+",
    textEight: "+",
    textNine: "+",
    textTen: "+",
  },
  {
    textOne: "+",
    textTwo: "+",
    textThree: "+",
    textFour: "+",
    textFive: "+",
    textSix: "+",
    textSeven: "+",
    textEight: "+",
    textNine: "+",
    textTen: "+",
  },
  {
    textOne: "+",
    textTwo: "+",
    textThree: "+",
    textFour: "+",
    textFive: "+",
    textSix: "+",
    textSeven: "+",
    textEight: "+",
    textNine: "+",
    textTen: "+",
  },
  {
    textOne: "+",
    textTwo: "+",
    textThree: "+",
    textFour: "+",
    textFive: "+",
    textSix: "+",
    textSeven: "+",
    textEight: "+",
    textNine: "+",
    textTen: "+",
  },
  {
    textOne: "+",
    textTwo: "+",
    textThree: "+",
    textFour: "+",
    textFive: "+",
    textSix: "+",
    textSeven: "+",
    textEight: "+",
    textNine: "+",
    textTen: "+",
  },
];

export default function HeroBanner() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full flex-col items-start gap-1 rounded-[20px] bg-[#Fff2ce] px-[30px] py-5 sm:px-5">
            <Heading
              as="h1"
              className="mt-1 text-[16px] font-medium text-[#000000]"
            >
              Home | Courses
            </Heading>
            <div className="flex items-center self-stretch md:flex-col">
              <Heading
                size="heading3xl"
                as="h2"
                ClassName="w-[32%] text-[45px] font-semibold Leading-[54px] text-[#0a033c] md:w-full md:text-[41px] sm:text-[35px]"
              >
                <>
                  Educraft Courses
                  <br />
                  For All Standards
                </>
              </Heading>
              <div className="relative h-[210px] flex-1 md:w-full md:flex-none md:self-stretch">
                <div className="absolute right-[29%] top-0 my-auto ml-[462px] mr-[236px] flex flex-1 flex-col md:relstive md:mx-0">
                  <Suspense fallback={<div> Loading feed...</div>}>
                    {courseList.map((d, index) => (
                      <TextList {...d} key={"coursesList" + index} />
                    ))}
                  </Suspense>
                </div>
                <div className="sbsolute bottom-[1.90px] right-0 m-auto h-[14px] w-[46%] rounded-[194px] bg-[#000000cc] blur-[81.00px] backdrop-opacity-[0.5]">
                  <Img
                    src=""
                    alt="Feature Image"
                    className="absolute bottom-0 right-[3.20px] top-0 my-auto h-[210px] w-[44%] object-contain"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
