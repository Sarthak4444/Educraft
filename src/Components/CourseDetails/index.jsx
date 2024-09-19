import { Button, Heading, Img } from "./../../Components";
import React from "react";

export default function CourseDetails({
  basicPackTitle = "Basic Pack",
  hdvideoDescription = "3 HD video lessons & tutorials",
  officialExamDescription = "1 Official exam",
  practiceQuestionsDescription = "100 Practice questions",
  subscriptionDescription = "1-month subscription",
  freeBookDescription = "1 Free book",
  practiceQuizzesDescription = "Practice quizzes & assignments",
  inDepthExplanationsDescription = "In-depth explanations",
  personalInstructorDescription = "Personal instructor assistance",
  coursePrice = "$200",
  purchaseButton = "Purchase Course",
  ...props
}) {
  return (
    <div
      {...props}
      className={` ${props.className} flex flex-col items-start w-[30%] md:w-full gap-6 p-[38px] sm:p-5 bg-[#ffffff] cursor-pointer`}
    >
      <div className="flex flex-col gap-3 self-stretch">
        <div className="flex flex-col items-start gap-3.5">
          <Img src="/path/to/sort-image.png" alt="Sort Image" className="h-[58px] w-[58px]" />
          <Heading size="headingmd" as="h3" className="text-[30px] font-semibold text-[#0a833c]">
            {basicPackTitle}
          </Heading>
        </div>
        <div className="h-px bg-[#8a833c26]" />
      </div>
      <div className="flex flex-col gap-5 self-stretch">
        <div className="flex items-center gap-2.5">
          <Img src="/path/to/approve-icon.png" alt="Approve Icon" className="h-[24px] w-[24px]" />
          <Heading size="textmd" as="p" className="text-[16px] font-medium text-[#5d5a6f]">
            {hdvideoDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img src="/path/to/exam-icon.png" alt="Exam Icon" className="h-[24px] w-[24px]" />
          <Heading size="textmd" as="p" className="text-[16px] font-medium text-[#5d5a6f]">
            {officialExamDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img src="/path/to/questions-icon.png" alt="Questions Icon" className="h-[24px] w-[24px]" />
          <Heading size="textmd" as="p" className="text-[16px] font-medium text-[#5d5a6f]">
            {practiceQuestionsDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img src="/path/to/subscription-icon.png" alt="Subscription Icon" className="h-[24px] w-[24px]" />
          <Heading size="textmd" as="p" className="text-[16px] font-medium text-[#5d5a6f]">
            {subscriptionDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img src="/path/to/book-icon.png" alt="Book Icon" className="h-[24px] w-[24px]" />
          <Heading size="textmd" as="p" className="text-[16px] font-medium text-[#5d5a6f]">
            {freeBookDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img src="/path/to/quizzes-icon.png" alt="Quizzes Icon" className="h-[24px] w-[24px]" />
          <Heading size="textmd" as="p" className="text-[16px] font-medium text-[#5d5a6f]">
            {practiceQuizzesDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img src="/path/to/explanations-icon.png" alt="Explanations Icon" className="h-[24px] w-[24px]" />
          <Heading size="textmd" as="p" className="text-[16px] font-medium text-[#5d5a6f]">
            {inDepthExplanationsDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img src="/path/to/instructor-icon.png" alt="Instructor Icon" className="h-[24px] w-[24px]" />
          <Heading size="textmd" as="p" className="text-[16px] font-medium text-[#5d5a6f]">
            {personalInstructorDescription}
          </Heading>
        </div>
      </div>
      <Heading size="headingxs" as="h5" className="text-[28px] font-semibold text-[#0a833c]">
        {coursePrice}
      </Heading>
      <Button
        size="lg"
        variant="outline"
        shape="round"
        className="self-stretch rounded-[5px] border px-[33px] font-medium sm:px-5"
      >
        {purchaseButton}
      </Button>
    </div>
  );
}
