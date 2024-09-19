import { Heading, Img } from "..";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:px-5">
        <div className="flex w-[14%] flex-col gap-[46px] md:w-full">
          <div className="mr-1.5 flex flex-col gap-[22px] md:mr-0">
            <Img
              src=""
              alt="Logo Image"
              className="h-[30px] object-contain md:w-[172px]"
            />
            <div className="mx-3 flex items-center justify-center gap-3.5 md:mx-0">
              <Img src="" alt="Facebook Icon" className="h-[22px] w-[22px]" />
              <Img src="" alt="User Icon" className="h-[36px] w-[36px]" />
              <Img src="" alt="Twitter Icon" className="h-[16px]" />
              <Img
                src=""
                alt="Linkedin Icon"
                className="h-[18px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3.5">
            <Heading as="p" className="text-[16px] font-normal text-[#5d5a6f]">
              ©2021 Educraft
            </Heading>
            <Heading as="p" className="text-[16px] font-normal text-[#5d5a6f]">
              Educraft is a Registered
            </Heading>
          </div>
        </div>
        <div className="mr-[106px] flex w-[76%] items-center justify-between gap-5 self-center md:mr-0 md:w-full md:flex-col">
          <Heading
            size="headingmd"
            as="h5"
            className="text-[22px] font-semibold text-[#0a033c]"
          >
            Courses
          </Heading>
          <ul className="flex w-[64%] flex-col items-start gap-6 md:w-full">
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Classroom courses
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="u-full leading-[30px]">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Virtual classroom courses
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  E-learning courses
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Video Courses
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Offline Courses
                </Heading>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-[30%] flex-col items-start gap-[22px] md:w-full">
          <Heading
            size="headingmd"
            as="h5"
            className="text-[22px] font-semibold text-[#0a033c]"
          >
            Community
          </Heading>
          <ul className="flex flex-col items-start gap-6">
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Learners
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Partners
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Developers
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Transactions
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Blog
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Teaching Center
                </Heading>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-[30%] flex-col items-start gap-[22px] md:w-full">
          <Heading
            size="headingmd"
            as="h5"
            className="text-[22px] font-semibold text-[#0a033c]"
          >
            Quick links
          </Heading>
          <ul className="flex flex-col items-start gap-6">
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Home
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Professional Education
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Courses
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Admissions
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Testimonials
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Programs
                </Heading>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[22px]">
          <Heading
            size="headingmd"
            as="h5"
            className="text-[22px] font-semibold text-[#02033c]"
          >
            More
          </Heading>
          <ul className="flex flex-col items-start gap-6">
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Press
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Investors
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Terms
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Privacy
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Help
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-[#5d5a6f]"
                >
                  Contact
                </Heading>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
