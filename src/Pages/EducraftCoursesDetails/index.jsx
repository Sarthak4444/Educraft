import { Helmet } from "react-helmet";
import CoursesDetails1 from "./CoursesDetails1";
import EducraftCoursesDetailsRowTwo from "./EducraftCoursesDetailsRowTwo";
import SimilarCourses from "./SimilarCourses";
import React from "react";
export default function EducraftCoursesDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Maths for Standard 3 - Course Details | Educraft Courses</title>
        <meta
          name="description"
          content="Explore the Maths for Standard 3 course on Educraft. Engage with course playlists, detailed lessons, and expert mentorship."
        />
      </Helmet>
      <div className="flex u-full flex-col gap-[100px] bg-[#f7f7f7] md:gap-[75px] sm:gap-[50px]">
        <EducraftCoursesDetailsRowTwo />
        <CoursesDetails1 />
        <SimilarCourses />
      </div>
    </>
  );
}
