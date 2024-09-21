import { Button, Heading, RatingBar } from "../../Components";
import React from "react";

const courseInfo = [
  { label: "Price", value: "$49.00", style: "text-[#ff6652]" },
  { label: "Instructor", value: "Wade Warren", isUnderlined: true },
  {
    label: "Ratings",
    value: <RatingBar value={5} isEditable={true} color="#ffc107" size={16} />,
  },
  { label: "Duration", value: "16 Days" },
  { label: "Lessons", value: "30" },
  { label: "Quizzes", value: "5" },
  { label: "Certificate", value: "Yes" },
  { label: "Language", value: "English" },
  { label: "Access", value: "Lifetime" },
];

const learnings = [
  "Loren ipsum dolor sit amet, consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt ut labore",
  "Risus commodo viverra maecenas accumsan",
];

export default function CourseDetails1() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex items-start justify-center gap-10 md:flex-row flex-col px-5">
        <div className="flex md:w-[68%] w-full flex-col gap-6">
          <Section
            heading="Course Details"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit."
          />
          <Section
            heading="Certification"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit."
          />
          <Section
            heading="Who this course is for"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit."
          />
          <Heading as="h3" className="text-[30px] font-semibold text-[#0a033c]">
            What you&#39;ll learn:
          </Heading>
          <ul className="flex flex-col gap-5">
            {learnings.map((text, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <div className="h-[10px] w-[10px] rounded-full bg-[#ff6652]" />
                <p className="text-[16px] text-[#0a033c]">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:w-[32%] flex-col gap-6 w-full">
          <div className="flex flex-col gap-[18px] rounded-[10px] bg-white p-6">
            {courseInfo.map(({ label, value, style, isUnderlined }, i) => (
              <div key={i} className="flex justify-between">
                <Heading
                  as="h5"
                  className="text-[20px] font-semibold text-[#5d5a6f]"
                >
                  {label}
                </Heading>
                <Heading
                  as="h5"
                  className={`text-[20px] font-semibold ${
                    style || "text-[#0a033c]"
                  } ${isUnderlined && "underline"}`}
                >
                  {value}
                </Heading>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            shape="round"
            className="self-stretch rounded-[5px] px-[34px] font-medium"
          >
            Purchase Course
          </Button>
        </div>
      </div>
    </div>
  );
}

const Section = ({ heading, text }) => (
  <div className="flex flex-col items-start gap-2">
    <Heading
      size="headingxl"
      as="h2"
      className="text-[30px] font-semibold text-[#0a033c]"
    >
      {heading}
    </Heading>
    <p className="text-[16px] font-normal leading-[30px] text-[#5d5a6f]">
      {text}
    </p>
  </div>
);
