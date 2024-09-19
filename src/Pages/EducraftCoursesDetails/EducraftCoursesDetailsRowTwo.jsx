import { Heading, Button, Img } from "../../Components";
import UserProfile from "../../Components/UserProfile";
import React, { Suspense } from "react";

const mathsLessonsList = [
  { userSubject: "Maths - Introduction", userTime: "1:57" },

  { userSubject: "Maths - for Standard 3 St..", userTime: "5:43" },

  { userSubject: "Maths - for Standard 3 St..", userTime: "8:11" },

  { userSubject: "Maths - for Standard 3 St..", userTime: "6:18" },

  { userSubject: "Maths - for Standard 3 St..", userTime: "19:88" },

  { userSubject: "Maths - for Standard 3 St..", userTime: "7:53" },
];

export default function EducraftCoursesDetailsRowTwo() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex justify-center md:px-5">
        <div className="w-full rounded- [20px] bg-[#ececec] p-6 sm:p-5">
          <div className="flex items-center md:flex-col">
            <div className="flex flex-1 flex-col items-start gap-7 md:self-stretch">
              <Heading
                size="textmd"
                as="h1"
                className="text-[16px] font-medium tracking-[0.48px] text-[#000000]"
              >
                Home | Courses | Course Details
              </Heading>

              <div className="flex flex-col items-start gap-7 self-stretch">
                <div className="flex h-[454px] w-[92%] items-center justify-center rounded-[20px] bg-[#af2f2f] bg-cover bg-no px-14 py-[196px] md:h-auto md:w-full md:p-5">
                  <Button
                    size="2x1"
                    shape="circle"
                    className="w-[60px] rounded-[30px] px-[22px] sm:px-5"
                  >
                    <Img sre="" />
                  </Button>
                </div>

                <Heading
                  size="headings"
                  as="h2"
                  className="text-[25px] font-semibold text-[#868888] md:text-[23px] smitext-[21px]"
                >
                  Maths - for Standard 3 Students | Episode 2
                </Heading>
              </div>
            </div>
            <div className="flex w-[30%] flex-col items-start justify-center gap-3 md:w-full">
              <Heading
                size="headings"
                as="h3"
                className="text-[25px] font-semibold text-[#88008a] md:text-[23px] sm:text-[21px]"
              >
                course Playlists
              </Heading>
              <div className="flex flex-col gap-4 self-stretch">
                <Suspense fallback={<div> Loading feed...</div>}>
                  {mathsLessonsList.map((d, index) => (
                    <UserProfile
                      {...d}
                      key={"courselist" + index}
                      cLassName="bg- [#FfffFf] hover:shadow-[0_50px_50px_0_#00000019]"
                    />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
