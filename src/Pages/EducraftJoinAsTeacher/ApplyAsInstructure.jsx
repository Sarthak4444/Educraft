import { Button, Heading, Img } from "../../Components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function ApplyAsInstructure() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container-xs flex items-center justify-between md:gap-32 md:flex-row flex-col px-5">
          <Img
            src="https://dhws-production.s3.ap-south-1.amazonaws.com/66e9325c132e0c00237c680a/66e932f647ed1f001be8a9f9/66e932f647ed1f001be8aa02/appSource/images/img_image_520x510.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240921%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240921T155633Z&X-Amz-Expires=25200&X-Amz-Signature=f1862445402fec51f417eb547e2ee41ce0d0a043cc5de54078be0c7e353be8a6&X-Amz-SignedHeaders=host"
            alt="Featured Image"
            className="ml-5 h-[520px] md:w-[40%] object-contain md:ml-0 w-full"
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
