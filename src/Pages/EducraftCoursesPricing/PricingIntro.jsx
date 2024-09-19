import { Heading } from "../../Components";
import CourseDetails from "../../Components/CourseDetails";
import React, { Suspense } from "react";

const coursePackages = [
  {
    basicPackTitle: "Basic Pack",
    hdVideoDescription: "3 HD video lessons & tutorials",
    officialExamDescription: "1 Official exam",
    practiceQuestionsDescription: "100 Practice questions",
    subscriptionDescription: "1 Month subscriptions",
    freeBookDescription: "1 Free book",
    practiceQuizzesImage: "",
    practiceQuizzesDescription: "Practice quizzes & assignments",
    inDepthExplanationsImage: "",
    inDepthExplanationsDescription: "In depth explanations",
    personalInstructorImage: "",
    personalInstructorDescription: "Personal instructor Assistance",
    coursePrice: "$200",
    purchaseButton: "Purchase Course",
  },

  {
    basicPackTitle: "Basic Pack",
    hdVideoDescription: "8 HD video lessons & tutorials",
    officialExamDescription: "2 Official exam",
    practiceQuestionsDescription: "200 Practice questions",
    subscriptionDescription: "1 Month subscriptions",
    freeBookDescription: "3 Free books",
    practiceQuizzesImage: "",
    practiceQuizzesDescription: "Practice quizzes & assignments",
    inDepthExplanationsImage: "",
    inDepthExplanationsDescription: "In depth explanations",
    personalInstructorImage: "",
    personalInstructorDescription: "Personal instructor Assistance",
    coursePrice: "$600",
    purchaseButton: "Purchase Course",
  },

  {
    basicPackTitle: "Basic Pack",
    hdVideoDescription: "15 HD video lessons & tutorials",
    officialExamDescription: "3 Official exam",
    practiceQuestionsDescription: "300 Practice questions",
    subscriptionDescription: "1 Month subscriptions",
    freeBookDescription: "5 Free books",
    practiceQuizzesImage: "",
    practiceQuizzesDescription: "Practice quizzes & assignments",
    inDepthExplanationsImage: "",
    inDepthExplanationsDescription: "In depth explanations",
    personalInstructorImage: "",
    personalInstructorDescription: "Personal instructor Assistance",
    coursePrice: "$1200",
    purchaseButton: "Purchase Course",
  },
];

export default function PricingIntro() {
  return (
    <>
      <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
        <div className="flex justify-center self-stretch">
          <div className="container-xs flex justify-center md:px-5">
            <div className="flex w-full flex-col items-center gap-5">
              <Heading
                size="heading3xl"
                as="h2"
                className="text center font-['Poppins'] text-[45px] font-bold leading-[55px] text-[#0a033c] md:text-[41px] sm:texr-[35px]"
              >
                <>
                  We create a monthly pricing package
                  <br />
                  for all standard students
                </>
              </Heading>

              <Heading
                as="h3"
                className="text-center text-[16px] font-normal leading-[30px] text-[#5d5a6f]"
              >
                <>
                  Basically we create this package for those who are really
                  interested and get benefited from our courses or books. <br />
                  We want to make a low cost package for them. So that they can
                  purchase any courses with the package they buy from us. <br />
                  Also will get free books from every packages.
                </>
              </Heading>
            </div>
          </div>
        </div>

        <div className="contalner-xs md:px-5">
          <div className="flex gap-10 md:flex-col">
            <Suspense fallback={<div> Loading feed...</div>}>
              {coursePackages.map((d, index) => (
                <CourseDetails
                  {...d}
                  key={"pricingList" + index}
                  className="hover:shadow-[0_50px_80px_0_#0000000c]"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
