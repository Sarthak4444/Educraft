import { Button, Img, Heading, SelectBox, Input } from "../../Components";
import EducraftCoursesDetailsMaincard from "../../Components/EducraftCoursesDetailsMainCard";
import React, { Suspense } from "react";

const dropDownOptions = [
  { label: "option1", value: "option1" },
  { label: "option2", value: "option2" },
  { label: "option3", value: "option3" },
];
export default function HighSchoolCoursesSection() {
  const [searchBarValue8, setSearchBarValue8] = React.useState("");
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[58px] md:px-5">
          <div className="flex flex-col gap-10 self-stretch">
            <div className="flex flex-col items-start justify-center gap-2.5">
              <Heading
                size="headingxl"
                as="h2"
                className="text -[30px] font-semibold text-[#0a033c] md:text-[28px] sm:text-[26px]"
              >
                Other Courses For High School
              </Heading>
              <div className="flex gap-[42px] self-stretch md:flex-col">
                <Input
                  color="white_A700"
                  name="5earch Field"
                  placeholder={` Search Class, Course, Book Name`}
                  value={searchBarValue8}
                  onChange={(e) => setSearchBarValue8(e.target.value)}
                  suffix={
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-lg">
                      {searchBarValue8?.length > 0 ? (
                        <Img
                        src=""
                        alt="Button"
                        className="h-[46px] w-[46px] rounded-1g"
                      />
                      ) : (
                        <Img
                          src=""
                          alt="Button"
                          className="h-[46px] w-[46px] rounded-1g"
                        />
                      )}
                    </div>
                  }
                  className="flex-grow gap-[34px] rounded-[10px] font-medium text-[#5d5a6f99]"
                />
                <SelectBox
                  size="xs"
                  shape="round"
                  indicator={
                    <Img
                      src=""
                      alt="Arrow Down"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  name="Sort Dropdown"
                  placeholder={`Sort by: Latest`}
                  options={dropDownOptions}
                  className="w-[32%] rounded-[10px] font-medium md:w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 justify-center gap-18 md:grid-cols-1">
              <Suspense fallback={<div> Loading feed...</div>}>
                {[...Array(18)].map((d, index) => (
                  <EducraftCoursesDetailsMaincard
                    key={"cardsarid" + index}
                    className="hover:shadow-[0_2px_10px_0_#0000001e]"
                  />
                ))}
              </Suspense>
            </div>
          </div>
          <div className="flex items-center gap-[18px]">
            <Button
              color="white_A700"
              shape="round"
              className="w-[44px] rounded-md px-4"
            >
              <Img src="" />
            </Button>
            <Heading
              size="textmd"
              as="h3"
              className="mb-2.5 self-end text-[16px] font-medium text-[#0a033c]"
            >
              Page
            </Heading>
            <Button
              color="white_A700"
              size="xs"
              className="min-w-[42px] rounded-lg px-3.5 font-medium text-[#5d5a6f]"
            >
              5
            </Button>
            <Heading
              size="textmd"
              as="ha"
              className="text-[16px] font-medium text-[#@a833c]"
            >
              of 80
            </Heading>
            <Button shape="round" className="w-[44px] rounded-md px-4">
              <Img src="" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
