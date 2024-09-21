import { Heading, Button, Img } from "../../Components";
import UserProfile from "../../Components/UserProfile";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const mathsLessonsList = [
  { userSubject: "Maths - Introduction", userTime: "1:57" },
  { userSubject: "Maths - for Standard 3 St..", userTime: "5:43" },
  { userSubject: "Maths - for Standard 3 St..", userTime: "8:11" },
  { userSubject: "Maths - for Standard 3 St..", userTime: "10:53" },
  { userSubject: "Maths - for Standard 3 St..", userTime: "16:18" },
  { userSubject: "Maths - for Standard 3 St..", userTime: "23:08" },
];

export default function EducraftCoursesDetailsRowTwo() {
  return (
    <div className="container-xs flex justify-center md:px-5">
      <div className="flex flex-col md:flex-row w-full rounded-[20px] bg-[#ececec] p-6">
        <div className="flex w-full md:w-[70%] flex-col items-start gap-7 pr-20">
          <Heading as="h1" className=" text-xl font-medium text-[#000000]">
            Home | Courses | Course Details
          </Heading>

          <div className="flex w-full h-[200px] md:h-[450px] items-center justify-center rounded-[30px] bg-center bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/011/277/869/large_2x/female-school-teacher-in-classroom-smiling-young-woman-standing-beside-blackboard-teaching-lesson-education-knowledge-concept-school-banner-cartoon-illustration-vector.jpg)]">
            <Link to="https://www.youtube.com/" target="_blank">
              <Button
                shape="circle"
                className="w-[60px] h-[60px] rounded-[30px] px-[22px]"
              >
                <i className="fa-solid fa-play text-white text-2xl text-center"></i>
              </Button>
            </Link>
          </div>

          <Heading as="h2" className="text-[25px] font-medium text-black">
            Maths - for Standard 3 Students | Episode 2
          </Heading>
        </div>

        <div className="flex flex-col w-full md:w-[30%] items-start justify-center gap-3">
          <Heading
            as="h3"
            className="text-[30px] font-semibold text-[#000000] mt-12 md:mt-5"
          >
            Course Playlists
          </Heading>
          <div className="flex flex-col gap-4 self-stretch">
            <Suspense fallback={<div> Loading feed...</div>}>
              {mathsLessonsList.map((d, index) => (
                <UserProfile
                  {...d}
                  key={"courselist" + index}
                  cLassName="bg-[#FfffFf] hover:shadow-[0_50px_50px_0_#00000019]"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
