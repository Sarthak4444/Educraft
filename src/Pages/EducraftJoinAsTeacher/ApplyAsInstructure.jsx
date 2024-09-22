import { Button, Heading, Img } from "../../Components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function ApplyAsInstructure() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container-xs flex items-center justify-between md:gap-32 md:flex-row flex-col px-5">
          <Img
            src="https://static.vecteezy.com/system/resources/previews/036/020/315/non_2x/ai-generated-portrait-of-a-three-happy-young-men-showing-thumbs-up-isolated-over-yellow-background-photo.jpg"
            alt="Featured Image"
            className="ml-5 h-[520px] md:w-[40%] object-cover md:ml-0 w-full rounded-full"
          />
          <div className="flex u-[46%] flex-col items-start gap-[30px] md:w-full">
            <div className="flex flex-col items-start justify-center gap-2.5 self-stretch">
              <Heading
                size="headingxl"
                as="h2"
                className="text -[30px] font-semibold text-[#0a033c] md:text-[28px] sm:text-[26px]"
              >
                Apply As An Instructor
              </Heading>
              <Heading
                
                className="w-full text-[16px] font-semibold leading-[30px] text-[#7b7b7b]"
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
                <Tab className="mb-2 text-[16px] font-[600] text-[#5d5a6F]">
                  
                  Instructor Requirements
                </Tab>
                <Tab className="text-[16px] font-[600] text-[#5d5a6f]">
                  
                  Instructor Rules
                </Tab>
              </TabList>
              
                <TabPanel
                  key={`tab-panel1`}
                  className="absolute justify-center self-stretch"
                >
                  <div className="w-full self-stretch">
                    <div className="flex flex-col gap-[18px]">
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="h4"
                          className="self-center text-[16px] font-[550] text-[#0a033c]"
                        >
                          An undergraduate degree
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="h5"
                          className="self-center text-[16px] font-[550] text-[#0a033c]"
                        >
                          Participate in supervised teaching
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="h6"
                          className="self-center text-[16px] font-[550] text-[#0a033c]"
                        >
                          State teaching license
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="p"
                          className="self-center text-[16px] font-[550] text-[#0a033c]"
                        >
                          Post graduate studies
                        </Heading>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel
                  key={`tab-panel2`}
                  className="absolute justify-center self-stretch"
                >
                  <div className="w-full self-stretch">
                    <div className="flex flex-col gap-[18px]">
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="h4"
                          className="self-center text-[16px] font-[550] text-[#0a033c]"
                        >
                          Be respectfull with others
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="h5"
                          className="self-center text-[16px] font-[550] text-[#0a033c]"
                        >
                          Pitch ideas to students
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="h6"
                          className="self-center text-[16px] font-[550] text-[#0a033c]"
                        >
                          Stay on the topic
                        </Heading>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-[#d97356]" />
                        <Heading
                          as="p"
                          className="self-center text-[16px] font-[550] text-[#0a033c]"
                        >
                          Be a part of the community
                        </Heading>
                      </div>
                    </div>
                  </div>
                </TabPanel>
          
            </Tabs>
            <Button

              className="min-w-[140px] rounded-[10px] px-[30px] font-[550]"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
