import { Heading } from "../../Components";
import EducraftCoursesDetailsMainCard from "../../Components/EducraftCoursesDetailsMainCard";
import React, { Suspense } from "react";

export default function SimilarCourses() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-12 md:px-5">
          <Heading
            size="heading3xl"
            as="h2"
            className="font-['Roboto'] text-[45px] font-bold text-[#0a033c] md:text-[41px] sm:text-[35px]"
          >
            Similar Courses
          </Heading>
          <div className="grid grid-cols-2 gap-10 self-stretch md:grid-cols-1">
            <Suspense fallback={<div> Loading feed...</div>}>
              {[...Array(4)].map((d, index) => (
                <EducraftCoursesDetailsMainCard
                  key={"coursesGrid" + index}
                  className="shadow-[0_2px_10px_0_#0000001e] hover:shadow-[0_2px_10px_6_#0000001e]"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
