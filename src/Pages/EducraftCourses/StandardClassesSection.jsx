import { Heading } from "./../../Components";
import EducraftCoursesOne from "../../Components/EducraftCoursesOne";
import React, { Suspense } from "react";
import { TabPanel } from "react-tabs";
export default function StandardClassesSection() {
  return (
    <>
      <div className="flex justify-center self-stretch">
        <div className="container-xs flex justify-center md:px-5">
          <a href="https://youtube.com/" target="_blank">
            <div className="flex w-full flex-col items-start gap-[22px]">
              <Heading
                size="headingxl"
                as="h2"
                className="text-[30px] font-semibold text-[#0a033c] md:text-[28px] sm:text-[26px]"
              >
                Standard Classes
              </Heading>
              {[...Array(8)].map((_, index) => (
                <TabPanel
                  key={` tab-panel${index}`}
                  className="absolute self-stretch"
                >
                  <div className="w-full self-stretch">
                    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1">
                      <Suspense fallback={<div> Loading feed...</div>}>
                        {[...Array(11)].map((d, index) => (
                          <EducraftCoursesOne key={"classesGrid" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
