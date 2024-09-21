import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner";
import HighSchoolCoursesSection from "./HighSchoolCoursesSection";
import React from "react";
import { Heading } from "../../Components";
import EducraftCoursesOne from "../../Components/EducraftCoursesOne";
import { TabList, Tab, Tabs, TabPanel } from "react-tabs";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EducraftCoursesPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all-courses");

  const tabNames = [
    "all-courses",
    "kindergarten",
    "high-school",
    "college",
    "computer",
    "science",
    "engineering",
    "more-courses",
  ];

  useEffect(() => {
    const currentTab = new URLSearchParams(location.search).get("tab");
    const tabIndex = tabNames.indexOf(currentTab);
    if (tabIndex !== -1) {
      setActiveTab(tabIndex);
    }
  }, [location.search]);

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
      <div className="flex u-full flex-col gap-[70px] bg-[#f7f7f7] ">
        <HeroBanner />
        <Tabs
          selectedIndex={activeTab}
          onSelect={(index) => setActiveTab(index)}
          className="flex flex-col justify-center items-center gap-[46px]"
          selectedTabClassName="!text-[#FffFFF] !bg-[#eebc74] rounded-[10px]"
          selectedTabPanelClassName="tab-panel--selected"
        >
          <div className="container-xs flex flex-col items-center md:px-5">
            <TabList className="flex flex-wrap gap-4 px-5 m-auto">
              <Tab className="p-4 text-[16px] tracking-normal md:tracking-wide px-4 md:px-7 font-semibold text-[#0a033c] bg-white">
                All Courses
              </Tab>

              <Tab className="p-4 text-[16px] tracking-normal md:tracking-wide px-4 md:px-7 font-semibold text-[#0a033c] bg-white">
                Kindergarten
              </Tab>

              <Tab className="p-4 text-[16px] tracking-normal md:tracking-wide px-4 md:px-7 font-semibold text-[#0a033c] bg-white">
                High School
              </Tab>

              <Tab className="p-4 text-[16px] tracking-normal md:tracking-wide px-4 md:px-7 font-semibold text-[#0a033c] bg-white">
                College
              </Tab>

              <Tab className="p-4 text-[16px] tracking-normal md:tracking-wide px-4 md:px-7 font-semibold text-[#0a033c] bg-white">
                Computer
              </Tab>

              <Tab className="p-4 text-[16px] tracking-normal md:tracking-wide px-4 md:px-7 font-semibold text-[#0a033c] bg-white">
                Science
              </Tab>

              <Tab className="p-4 text-[16px] tracking-normal md:tracking-wide px-4 md:px-7 font-semibold text-[#0a033c] bg-white">
                Engineering
              </Tab>
            </TabList>
          </div>
          <div className="container-xs flex justify-center md:px-5">
            <div className="flex w-full flex-col items-center justify-center gap-[22px]">
              <Heading
                as="h2"
                className="text-[40px] font-semibold text-[#0a033c] mb-4"
              >
                Standard Classes
              </Heading>

              {Array.from({ length: 7 }).map((_, tabIndex) => (
                <TabPanel key={`tab-${tabIndex}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
                    {Array.from({ length: 8 }).map((_, courseIndex) => (
                      <EducraftCoursesOne
                        key={`course-${tabIndex}-${courseIndex}`}
                      />
                    ))}
                  </div>
                </TabPanel>
              ))}
            </div>
          </div>
        </Tabs>
        <div className="container-xs text-center"> <HighSchoolCoursesSection /></div>
       
      </div>
    </>
  );
}
