import { Helmet } from "react-helmet";
import { Button, Img, Heading, SelectBox, Input } from "../../Components";
import EducraftShopColumnPopularBooks from "../../Components/EducraftShopColumnPopularBooks";
import EducraftShopOne from "../../Components/EducraftShopOne";
import BreadCrumbSection from "../Educraft/BreadCrumbSection.jsx";
import React, { Suspense } from "react";

const dropDownoptions = [
  { label: "option1", value: "option1" },
  { label: "option2", value: "option2" },
  { label: "option3", value: "option3" },
];

export default function EducraftPage() {
  const [searchBarvalue5, setSearchBarvalue5] = React.useState("");
  return (
    <>
      <Helmet>
        <title>Educraft Book Shop - Explore Educational Books & Courses</title>
        <meta
          name="description"
          content="Discover popular books and courses for all educational levels at Edcraft Book Shop. From kindergarten to college, find the perfect read and enhance your learning experience."
        />
      </Helmet>
      <div className="flex u-full flex-col gap-[100px] bg-[#f7f7f7] md:gap-[75px] sm:gap-[50px]">
        <BreadCrumbSection />
        <div className="flex justify-center">
          <div className="container-xs flex items-start justify-center gap-10 md:flex-col md:px-5">
            <div className="flex w-[32%] flex-col gap-[38px] md:u-full">
              <EducraftShopColumnPopularBooks />
            </div>
            <div className="flex flex-1 flex-col items-center gap-10 self-center md:self-stretch">
              <div className="flex flex-col gap-[30px] self-stretch">
                <div className="flex justify-center gap-6 md:flex-col">
                  <Button
                    color="orange_200_01"
                    size="md"
                    className="min-u-[130px] rounded-[10px] px-[30px] font-medium sm:px-5"
                  >
                    All Books
                  </Button>
                  <Button
                    color="white_A700"
                    size="md"
                    className="flex-1 rounded-[10px] px-[34px] font-medium md:self-stretch sm:px-5"
                  >
                    Kindergarten
                  </Button>
                  <Button
                    color="white_A700"
                    size="md"
                    className="flex-1 rounded-[10px] px-[34px] font-medium md:self-stretch sm:px-5"
                  >
                    High School
                  </Button>
                  <Button
                    color="white_A700"
                    size="md"
                    className="flex-1 rounded-[10px] px-[34px] font-medium md:self-stretch sm:px-5"
                  >
                    College
                  </Button>
                </div>
                <div className="flex gap-3.5 md:flex-col">
                  <Input
                    color="white_A700"
                    size="md"
                    name="Search Field"
                    placeholder={` Search Class, Course, Book Name`}
                    value={searchBarvalue5}
                    onChange={(e) => setSearchBarvalue5(e.target.value)}
                    suffix={
                      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-lg">
                        {searchBarvalue5?.length > 0 ? (
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
                    className="flex-grow gap-[34px] rounded-[10px] font-medium text-[#5d5a6799]"
                  />
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src=""
                        alt="Arrow Down"
                        className="h-[24px] w-[24px]"
                      />
                    }
                    name="Sort Dropdown"
                    placeholder={` Sort by: Latest`}
                    options={dropDownoptions}
                    className="w-[32%] rounded-[10px] font-medium md:w-full sm:py-5"
                  />
                </div>
                <div className="grid grid-cols-3 justify-center gap-3.5 md:grid-cols-2 sm:grid-cols-1">
                  <Suspense fallback={<div> Loading feed...</div>}>
                    {[...Array(9)].map((d, index) => (
                      <EducraftShopOne key={"booksGrid" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <Button
                  color="white_A700"
                  shape="round"
                  className="w-[42px] rounded-md px-4"
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
                  color="white_A700"
                  size="xs"
                  className="min-w-[42px] rounded-lg px-3.5 font-medium !text-[#5d5a6f]"
                >
                  5
                </Button>
                <Heading
                  as="h3"
                  className="text-[16px] font-medium text-[#0a033c]"
                >
                  of 80
                </Heading>
                <Button shape="round" className="w-[42px] rounded-md px-4">
                  <Img src="" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
