import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner";
import MentorTabs from "./MentorTabs";
import React from "react";

export default function AllMentorsPage() {
  return (
    <>
      <Helmet>
        <title>Meet Our Qualified fentors st Educraft</title>
        <meta
          name="description"
          content="Discover the team of qualified mentors at Educraft. Explore mentor profiles for kindergarten, high school, collage and technology education."
        />
      </Helmet>

      <div className="flex w-full flex-col gap-[100px] bg-[#f7f7f7] md:gap-[75px] sm:gap-[50px]">
        <HeroBanner />
        <MentorTabs />
      </div>
    </>
  );
}
