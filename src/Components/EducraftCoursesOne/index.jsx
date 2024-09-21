import { Button, Heading, Img } from "./../../Components";
import React from "react";
import { Link } from "react-router-dom";

export default function EducraftCoursesOne() {
  
  const courseNames = [
    "Algebra",
    "Physics",
    "History",
    "English",
    "Biology",
    "Geography",
    "Literature",
    "Geometry",
    "Computer",
    "Art"
  ];

  function getRandomCourseName() {
    const randomIndex = Math.floor(Math.random() * courseNames.length);
    return courseNames[randomIndex];
  }

  return (
    <div className={`flex flex-col items-center w-full`}>
      <div className="flex flex-col gap-6 self-stretch rounded-[14px] bg-[#ffffff] px-3.5 py-[30px] sm:py-5">
        <div className="flex flex-col items-center gap-[18px]">
          <Img
            src="data:image/png;base64,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"
            alt="User Image"
            className="h-[70px] w-[70px] rounded-full"
          />
          <div className="flex flex-col items-center gap-2 self-stretch">
            <Heading
              size="headinglg"
              as="h4"
              className="text-[25px] font-semibold text-[#02033c]"
            >
              {getRandomCourseName()}
            </Heading>
            <Heading
              as="p"
              className="self-stretch text-center text-[16px] font-medium leading-[30px] text-[#4d4a5a]"
            >
              This is a foundation Standard that reflects 7 important concepts..
            </Heading>
          </div>
        </div>
        <Link to="/EducraftCoursesDetails">
        <Button
          size="xs"
          variant="outline"
          shape="round"
          className="mx-auto self-stretch rounded-[5px] border px-[20px] font-medium hover:bg-[#D07356] hover:text-white"
        >
          Class Details
        </Button>
        </Link>
      </div>
    </div>
  );
}
