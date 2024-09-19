import { Helmet } from "react-helmet";
import EducraftCoursesPricingRowOne from "./EducraftCoursesPricingRowOne";
import HeroSection from "./HeroSection";
import PricingIntro from "./PricingIntro";
import React from "react";
export default function EducraftCoursesPricingPage() {
  return (
    <>
      <Helmet>
        <title>
          Course Pricing Packages - Affordable Education Plans at Educraft
        </title>
        <meta
          name="description"
          content="Choose the best education plan for your needs with Educraft's pricing packages. Get access to HD video lessons, offline exams, and personalized support."
        />
      </Helmet>
      <div className="flex u-full flex-col gap-[100px] bg-[#f7f7f7] md:gap-[75px] sm:gap-[50px]">
        <HeroSection />
        <PricingIntro />
        <EducraftCoursesPricingRowOne />
      </div>
    </>
  );
}
