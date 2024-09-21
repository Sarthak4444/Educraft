import { Button, Heading, Img } from "./../../Components";
import React from "react";

export default function CourseDetails(props) {
  const {
    basicPackTitle = "Basic Pack",
    hdVideoDescription = "3 HD video lessons & tutorials",
    officialExamDescription = "1 Official exam",
    practiceQuestionsDescription = "100 Practice questions",
    subscriptionDescription = "1 Month subscriptions",
    freeBookDescription = "1 Free book",
    practiceQuizzesDescription = false,
    inDepthExplanationsDescription = false,
    personalInstructorDescription = false,
    coursePrice = "$200",
  } = props;
  return (
    <div className="flex flex-col items-start w-full gap-6 sm:p-[38px] p-5 bg-[#ffffff] cursor-pointer">
      <div className="flex flex-col gap-3 self-stretch">
        <div className="flex flex-col items-start gap-3.5">
          <Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3El7K1r8iEO69d7Tq5CegPd8uIc111qEGdg&s"
            alt="Sort Image"
            className="h-[58px] w-[58px]"
          />
          <Heading
            size="headingmd"
            as="h3"
            className="text-[30px] font-semibold text-[#0a033c]"
          >
            {basicPackTitle}
          </Heading>
        </div>
        <div className="h-px bg-[#39382826]" />
      </div>
      <div className="flex flex-col gap-5 self-stretch">
        <div className="flex items-center gap-2.5">
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
            alt="Approve Icon"
            className="h-[24px] w-[24px]"
          />
          <Heading
            size="textmd"
            as="p"
            className="text-[16px] font-medium text-[#5d5a6f]"
          >
            {hdVideoDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
            alt="Exam Icon"
            className="h-[24px] w-[24px]"
          />
          <Heading
            size="textmd"
            as="p"
            className="text-[16px] font-medium text-[#5d5a6f]"
          >
            {officialExamDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
            alt="Questions Icon"
            className="h-[24px] w-[24px]"
          />
          <Heading
            size="textmd"
            as="p"
            className="text-[16px] font-medium text-[#5d5a6f]"
          >
            {practiceQuestionsDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
            alt="Subscription Icon"
            className="h-[24px] w-[24px]"
          />
          <Heading
            size="textmd"
            as="p"
            className="text-[16px] font-medium text-[#5d5a6f]"
          >
            {subscriptionDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
            alt="Book Icon"
            className="h-[24px] w-[24px]"
          />
          <Heading
            size="textmd"
            as="p"
            className="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
          >
            {freeBookDescription}
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img
            src={
              practiceQuizzesDescription
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
                : "data:image/png;base64,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"
            }
            alt="Quizzes Icon"
            className="h-[24px] w-[24px]"
          />
          <Heading
            size="textmd"
            as="p"
            className="text-[16px] font-medium text-[#5d5a6f]"
          >
            Practice quizzes & assignments
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img
            src={
              inDepthExplanationsDescription
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
                : "data:image/png;base64,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"
            }
            alt="Explanations Icon"
            className="h-[24px] w-[24px]"
          />
          <Heading
            size="textmd"
            as="p"
            className="text-[16px] font-medium text-[#5d5a6f]"
          >
            In depth explanations
          </Heading>
        </div>
        <div className="flex items-center gap-2.5">
          <Img
            src={
              personalInstructorDescription
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
                : "data:image/png;base64,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"
            }
            alt="Instructor Icon"
            className="h-[24px] w-[24px]"
          />
          <Heading
            size="textmd"
            as="p"
            className="text-[16px] font-medium text-[#5d5a6f]"
          >
            Personal instructor Assistance
          </Heading>
        </div>
      </div>
      <Heading className="text-[25px] font-semibold text-[#0a033c]">
        {coursePrice}
      </Heading>
      <Button
        size="lg"
        variant="outline"
        shape="round"
        className="self-stretch rounded-[5px] border-[#D07356] tracking-wider text-xl hover:bg-[#D07356] hover:text-[#FFFFFF] sm:px-[33px] font-semibold px-5"
      >
        Enroll Now
      </Button>
    </div>
  );
}
