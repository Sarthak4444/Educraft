import { Helmet } from "react-helmet";
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
      <div className="flex w-full flex-col gap-[70px] bg-[#f7f7f7]">
        <HeroSection />
        <PricingIntro />
      </div>
    </>
  );
}
