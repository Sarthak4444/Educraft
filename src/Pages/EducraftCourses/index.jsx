import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner";
import HighSchoolCoursesSection from "./HighSchoolCoursesSection";
import StandardClassesSection from "./StandardClassesSection";
import React from "react";
import { TabList, Tab, Tabs } from "react-tabs";

export default function EducraftCoursesPage() {
  return (
    <>
      <Helmet>
        <title>
          Educraft Courses - Comprehensive Learning for ALL Standards
        </title>
        <meta
          name="description"
          content="Educraft offers a wide range of courses tailored for every standard. From computer science to engineering, find the right class to boost your knowledge and skills."
        />
      </Helmet>
      <div className="flex u-full flex-col gap-[188px] bg-[#f7f7f7] md:gap-[75px] sm:gap-[50px]">
        <HeroBanner />
        <Tabs
          className="flex flex-col items-center gap-[46px]"
          selectedTabClassName="!text-[#FffFFF] bg-[#eebc74] rounded-[10px]"
          selectedTabPanelClassName="tab-panel--selected"
        >
          <div className="container-xs flex flex-col items-center md:px-5">
            <TabList className="flex flex-wrap gap-11">
              <Tab className="p-4 text- [16px] font-medium text-[#0a033c]">
                ALL Courses
              </Tab>

              <Tab className="p-4 text- [16px] font-medium text-[#0a033c]">
                Kindergarten
              </Tab>

              <Tab className="p-4 text- [16px] font-medium text-[#0a033c]">
                High School
              </Tab>

              <Tab className="p-4 text- [16px] font-medium text-[#0a033c]">
                College
              </Tab>

              <Tab className="p-4 text- [16px] font-medium text-[#0a033c]">
                Computer
              </Tab>

              <Tab className="p-4 text- [16px] font-medium text-[#0a033c]">
                Science
              </Tab>

              <Tab className="p-4 text- [16px] font-medium text-[#0a033c]">
                Engineering
              </Tab>

              <Tab className="p-4 text-[16px] font-medium text-[#ff6652]">
                More Courses
              </Tab>
            </TabList>
          </div>
          <StandardClassesSection />
        </Tabs>
        <HighSchoolCoursesSection />
      </div>
    </>
  );
}
