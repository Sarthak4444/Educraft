import { Heading, Img } from "..";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-center bg-[#F5F5F5] py-8 mx-auto">
      <div className="container flex flex-grow justify-between gap-5 px-5 md:flex-row flex-col">
        <div className="flex w-1/4 flex-col gap-6 md:w-full md:items-center">
          <Img
            src="Public/Logo/Name And Logo.png"
            alt="Logo Image"
            className="w-[100px] object-contain md:w-[200px]"
          />
          <div className="flex justify-center gap-3.5">
          <i className="fa-brands fa-facebook-f text-[#1F2937] text-3xl"></i>
          <i className="fa-brands fa-instagram text-[#1F2937] text-3xl"></i>
          <i className="fa-brands fa-twitter text-[#1F2937] text-3xl"></i>
          <i className="fa-brands fa-linkedin text-[#1F2937] text-3xl"></i>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-gray-600">©2021 Educraft</p>
            <p className="text-sm text-gray-600">Educraft is a Registered</p>
          </div>
        </div>


        <div className="w-1/4 md:w-full">
          <Heading size="headingmd" as="h5" className="text-lg font-semibold text-gray-800">
            Courses
          </Heading>
          <ul className="mt-4 space-y-2">
            {["Classroom courses", "Virtual classroom courses", "E-learning courses", "Video Courses", "Offline Courses"].map((course, index) => (
              <li key={index}>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
                  {course}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/4 md:w-full">
          <Heading size="headingmd" as="h5" className="text-lg font-semibold text-gray-800">
            Community
          </Heading>
          <ul className="mt-4 space-y-2">
            {["Learners", "Partners", "Developers", "Transactions", "Blog", "Teaching Center"].map((item, index) => (
              <li key={index}>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/4 md:w-full">
          <Heading size="headingmd" as="h5" className="text-lg font-semibold text-gray-800">
            Quick Links
          </Heading>
          <ul className="mt-4 space-y-2">
            {["Home", "Professional Education", "Courses", "Admissions", "Testimonials", "Programs"].map((link, index) => (
              <li key={index}>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/4 md:w-full">
          <Heading size="headingmd" as="h5" className="text-lg font-semibold text-gray-800">
            More
          </Heading>
          <ul className="mt-4 space-y-2">
            {["Press", "Investors", "Terms", "Privacy", "Help", "Contact"].map((item, index) => (
              <li key={index}>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    
  );
}
