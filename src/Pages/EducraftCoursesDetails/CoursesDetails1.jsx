import { Button, Heading, RatingBar } from "../../Components";
import React from "react";

export default function CourseDetails1() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container-xs flex items-start justify-center gap-10 md:flex-col md:px-5">
          <div className="flex flex-1 flex-col gap-6 self-center md:self-stretch">
            <div className="flex flex-col items-start gap-2">
              <Heading
                size="headingxl"
                as="h2"
                className="text-[30px] font-semibold text-[#0a033c] md:text-[28px] sm:text-[26px]"
              >
                Course Details
              </Heading>
              <Heading
                as="h3"
                className="w-full text-[16px] font-normal leading-[30px] text-[#5d5a6f]"
              >
                <>
                  Loren ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                  <br />
                  Loren ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </>
              </Heading>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Heading
                size="headingxl"
                as="h4"
                className="text-[30px] font-semibold text-[#0a033c] md:text-[28px] sm:text-[26px]"
              >
                Certification
              </Heading>
              <Heading
                as="h5"
                className="w-full text-[16px] font-normal leading-[30px] text-[#5d5a6f]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                msecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </Heading>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Heading
                size="headingxl"
                as="h6"
                className="text -[30px] font-semibold text-[#0a033c] md:text-[28px] sm:text-[26px]"
              >
                Who this course is for
              </Heading>
              <Heading
                as="p"
                className="w-full text-[16px] font-normal leading-[30px] text-[#5d5a6f]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <Heading
                size="headingxl"
                as="h3"
                className="text-[30px] font-semibold text-[#0a033c] md:text-[28px] sm:text-[26px]"
              >
                What you&#39;11 learn in this course:
              </Heading>
              <div className="flex flex-col gap-5 self-stretch">
                <div className="flex items-start gap-2.5 sm:flex-col">
                  <div className="h-[10px] w-[10px] rounded-[5px] bg-[#ff6652]">
                    <Heading
                      as="p"
                      className="self-center text-[16px] font-normal text-[#0a033c]"
                    >
                      Loren ipsum dolor sit amet, consectetur adipiscing elit
                    </Heading>
                  </div>
                  <div className="h-[10px] w-[10px] rounded-[5px] bg-[#ff6652]">
                    <Heading
                      as="p"
                      className="self-center text-[16px] font-normal text-[#0a033c]"
                    >
                      Loren ipsum dolor sit amet, consectetur adipiscing elit
                    </Heading>
                  </div>
                  <div className="h-[10px] w-[10px] rounded-[5px] bg-[#ff6652]">
                    <Heading
                      as="p"
                      className="self-center text-[16px] font-normal text-[#0a033c]"
                    >
                      Loren ipsum dolor sit amet, consectetur adipiscing elit
                    </Heading>
                  </div>
                  <div className="h-[10px] w-[10px] rounded-[5px] bg-[#ff6652]" />
                  <Heading
                    as="p"
                    className="self-center text-[16px] font-normal text-[#0a033c]"
                  >
                    Loren ipsum dolor sit amet, consectetur adipiscing elit
                  </Heading>
                </div>
                <div className="h-[10px] w-[10px] rounded-[5px] bg-[#ff6652]" />
                <Heading
                  as="p"
                  className="self-center text-[16px] font-normal text-[#0a033c]"
                >
                  Loren ipsum dolor sit amet, consectetur adipiscing elit
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex w-[32%] flex-col gap-[22px] md:w-full">
            <div className="flex flex-col gap-[18px] rounded-[10px] bg-[#FFFFFF] px-[18px] py-6 sm:py-5">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <Heading
                  size="headings"
                  as="hs"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Price
                </Heading>
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[25px] font-bold text-[#ff6652] md:text-[23px] sm:text-[21px]"
                >
                  $49.00
                </Heading>
              </div>
              <div className="flex flex-wrap justify-between gap-5">
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Instructor
                </Heading>
                <Heading
                  size="headingxs"
                  as="hs"
                  className="self-end text-[20px] font-semibold text-[#0a033c] underline"
                >
                  Wade Warren
                </Heading>
              </div>
              <div className="flex items-center justify-between gap-5">
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Ratings
                </Heading>
                <RatingBar
                  value={5}
                  isEditable={true}
                  color="#ffc107"
                  activeColor="#ffc107"
                  size={16}
                  className="flex gap-2.5"
                />
              </div>
              <div className="flex flex-wrap justify-between gap-5">
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Durations
                </Heading>
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#0a033c]"
                >
                  16 Days
                </Heading>
              </div>
              <div className="flex flex-wrap justify-between gap-5">
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Lessons
                </Heading>
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#0a033c]"
                >
                  30
                </Heading>
              </div>
              <div className="flex flex-wrap justify-between gap-5">
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Quizzes
                </Heading>
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#0a033c]"
                >
                  5
                </Heading>
              </div>
              <div className="flex flex-wrap justify-between gap-5">
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Certificate
                </Heading>
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#0a033c]"
                >
                  Yes
                </Heading>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5">
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Language
                </Heading>
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#0a033c]"
                >
                  English
                </Heading>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5">
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  Access
                </Heading>
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[20px] font-semibold text-[#0a033c]"
                >
                  Lifetime
                </Heading>
              </div>
            </div>
            <Button
              size="lg"
              shape="round"
              className="self-stretch rounded-[5px] px-[34px] font-medium sm:px-5"
            >
              Purchase Course
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
