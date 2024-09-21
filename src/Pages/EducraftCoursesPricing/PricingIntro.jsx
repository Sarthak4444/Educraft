import { Heading } from "../../Components";
import CourseDetails from "../../Components/CourseDetails";
import React, { Suspense } from "react";

const coursePackages = {
  A: {
    basicPackTitle: "Basic Pack",
    hdVideoDescription: "3 HD video lessons & tutorials",
    officialExamDescription: "1 Official exam",
    practiceQuestionsDescription: "100 Practice questions",
    subscriptionDescription: "1 Month subscriptions",
    freeBookDescription: "1 Free book",
    practiceQuizzesDescription: false,
    inDepthExplanationsDescription: false,
    personalInstructorDescription: false,
    coursePrice: "$200",
  },
  B: {
    basicPackTitle: "Premium Pack",
    hdVideoDescription: "8 HD video lessons & tutorials",
    officialExamDescription: "2 Official exam",
    practiceQuestionsDescription: "200 Practice questions",
    subscriptionDescription: "2 Month subscriptions",
    freeBookDescription: "3 Free books",
    practiceQuizzesDescription: true,
    inDepthExplanationsDescription: false,
    personalInstructorDescription: false,
    coursePrice: "$600",
  },
  C: {
    basicPackTitle: "Ultimate Pack",
    hdVideoDescription: "15 HD video lessons & tutorials",
    officialExamDescription: "3 Official exam",
    practiceQuestionsDescription: "300 Practice questions",
    subscriptionDescription: "3 Month subscriptions",
    freeBookDescription: "5 Free books",
    practiceQuizzesDescription: true,
    inDepthExplanationsDescription: true,
    personalInstructorDescription: true,
    coursePrice: "$1200",
  },
};

export default function PricingIntro() {
  return (
    <>
      <div className="flex flex-col items-center gap-[75px]">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full flex-col items-center gap-5 px-5 md:px-0">
            <Heading
              size="heading3xl"
              as="h2"
              className="text-center font-['Poppins'] text-[45px] font-bold leading-[55px] text-[#0a033c] md:text-[41px] sm:texr-[35px]"
            >
              <>
                We create a monthly pricing package
                <br />
                for all standard students
              </>
            </Heading>

            <Heading
              as="h3"
              className="text-center text-[16px] font-medium leading-[30px] text-[#5d5a6f]"
            >
              Basically we create this package for those who are really
              interested and get benefited from our courses or books. <br />
              We want to make a low-cost package for them so that they can
              purchase any courses with the package they buy from us. <br />
              Also will get free books from every package.
            </Heading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Suspense fallback={<div>Loading feed...</div>}>
            {Object.values(coursePackages).map((d, index) => (
              <CourseDetails
                {...d}
                key={`pricingList${index}`}
                className="hover:shadow-[0_50px_80px_0_#0000000c]"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
