import { Helmet } from "react-helmet";
import ApplyAsInstructure from "./ApplyAsInstructure";
import HeroSection from "./HeroSection";
import HowToApplySection from "./HowToApplySection";
import React from "react";

export default function EducraftJoinAsTeacher() {
  return (
    <>
      <Helmet>
        <title>Become an Instructor st Educraft - Teach and Inspire</title>
        <meta
          name="description"
          content="Join Educraft as a mentor and shape the future of education. Apply now to become an instructor for kindergarten, high school, collage and technology education."
        />
      </Helmet>
      <div className="flex u-full flex-col gap-[100px] bg-[#f7f7f7] md:gap-[75px] sm:gap-[50px]">
        <HeroSection />
        <ApplyAsInstructure />
        <HowToApplySection />
      </div>
    </>
  );
}
