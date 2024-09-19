import { Button, Heading, Img } from "../../Components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
          <Img
            src=""
            alt="Featured Image"
            className="ml-5 h-[520px] w-[40%] object-contain md:ml-0 md:w- full"
          />
          <div className="flex u-[46%] flex-col items-start gap-[30px] md:w-full">
            <div className="flex flex-col items-start justify-center gap-2.5 self-stretch">
              <Heading
                size="headingxl"
                as="h2"
                className="text -[30px] font-semibold text-[#0a033c] md:text-[28px] sm:text-[26px]"
              >
                Apply As Instructor
              </Heading>
              <Heading
                as="h3"
                className="w-full text-[16px] font-normal leading-[30px] text-[#5d5a6f]"
              >
                Teaching is a vital and admirable career. As such, it comes with
                quite a bit of responsibility, both i practice and in
                preparation with many skills required to be a teacher. The
                following steps provide a general breakdown of the requirements
                for teachers:
              </Heading>
            </div>
            <Tabs
              className="flex flex-col items-center justify-center gap-[26px] self-stretch"
              selectedTabClassName="text-[#d97356]"
              selectedTabPanelClassName="!relative tab-panel--selected"
            >
              <TabList className="flex flex-wrap items-start gap-9 py-1">
                <Tab className="mb-2 text-[16px] font -medium text-[#5d5a6F]">
                  
                  Instructor Requirements
                </Tab>
                <Tab className="text-[16px] font-medium text-[#5d5a6f]">
                  
                  Instructor Rules
                </Tab>
              </TabList>
              {[...Array(2)].map((_, index) => (
                <TabPanel
                  key={`tab-panel${index} `}
                  className="absolute justify-center self-stretch"
                >
                  <div className="w-full self-stretch">
                    <div className="flex flex-col gap-[18px]">
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="h4"
                          className="self-center text-[16px] font-normal text-[#0a033c]"
                        >
                          An undergraduate degree
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded- [5px] bg-[#d97356]" />
                        <Heading
                          as="h5"
                          className="self-center text-[16px] font-normal text-[#0a033c]"
                        >
                          Participate in supervised teaching
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded- [5px] bg-[#d97356]" />
                        <Heading
                          as="h6"
                          className="self-center text-[16px] font-normal text-[#0a033c]"
                        >
                          State teaching license
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded- [5px] bg-[#d97356]" />
                        <Heading
                          as="p"
                          className="self-center text-[16px] font-normal text-[#0a033c]"
                        >
                          Post graduate studies
                        </Heading>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
            <Button
              size="md"
              className="min-w-[142px] rounded-[10px] px-[30px] font-medium sm:px-5"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
