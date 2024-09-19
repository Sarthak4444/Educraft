import { Button, Img, Heading } from "../../Components";
import AllMentorsMaincard from "../../Components/AllMentorsMainCard";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
export default function MentorTabs() {
  return (
    <>
      <div>
        <Tabs
          className="flex flex-col items-center"
          selectedTabClassName="!text-[#FffFFF] bg-[#eebc74] rounded-[10px]"
          selectedTabPanelClassName=" relative tab-panel--selected"
        >
          <div className="container-xs flex flex-col items-center gap-[50px] md:px-5">
            <TabList className="mx-[180px] flex flex-wrap gap-5 md:mx-g">
              <Tab className="px-[30px] py-3.5 text-[16px] font-medium text-[#0a033c] sm:px-5">
                ALL Mentors
              </Tab>

              <Tab className="px-[3px] py-3.5 text-[16px] font-medium text-[#0a033c] sm:px-5">
                For Kindergarten
              </Tab>

              <Tab className="px-[3px] py-3.5 text-[16px] font-medium text-[#0a033c] sm:px-5">
                For high school
              </Tab>

              <Tab className="px-[3px] py-3.5 text-[16px] font-medium text-[#0a033c] sm:px-5">
                For college
              </Tab>

              <Tab className="px-[3px] py-3.5 text-[16px] font-medium text-[#0a033c] sm:px-5">
                For Technology
              </Tab>
            </TabList>
            {[...Array(5)].map((_, index) => (
              <TabPanel
                key={`tab-panel${index} `}
                className="absolute justify-center self-stretch"
              >
                <div className="w-full self-stretch">
                  <div className="grid grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div> Loading feed...</div>}>
                      {[...Array(12)].map((d, index) => (
                        <AllMentorsMaincard key={"teamGrid" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </TabPanel>
            ))}
            <div className="flex items-center gap-[18px]">
              <Button
                color="white_A700"
                shape="round"
                className="w-[44px] rounded-md px-4"
              >
                <Img src="" />
              </Button>
              <Heading
                as="h2"
                className="mb-2.5 self-end text-[16px] font-medium text-[#0a033c]"
              >
                Page
              </Heading>
              <Button
                color="uhite_A700"
                size="xs"
                cLassName="min-w-[38px] rounded-lg px-3.5 font-medium |text-[#5d5a6f]"
              >
                1
              </Button>
              <Heading
                as="h3"
                className="text-[16px] font-medium text-[#0a033c]"
              >
                of 03
              </Heading>
              <Button shape="round" className="u-[44px] rounded-md px-4">
                <Img src="" />
              </Button>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}
