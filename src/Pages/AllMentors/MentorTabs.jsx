import { Button, Heading } from "../../Components";
import AllMentorsMaincard from "../../Components/AllMentorsMainCard";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { useState } from "react";
export default function MentorTabs() {
  const Data = [
    { name: "Alice Johnson", designation: "Software Engineer" },
    { name: "Bob Smith", designation: "Product Manager" },
    { name: "Catherine Lee", designation: "Data Scientist" },
    { name: "David Brown", designation: "Marketing Specialist" },
    { name: "Emma Davis", designation: "UX/UI Designer" },
    { name: "Frank Miller", designation: "DevOps Engineer" },
    { name: "Grace Wilson", designation: "HR Manager" },
    { name: "Henry Clark", designation: "Business Analyst" },
    { name: "Irene Thompson", designation: "Sales Executive" },
    { name: "Jack Evans", designation: "Graphic Designer" },
    { name: "Karen Lewis", designation: "Finance Manager" },
    { name: "Luke Anderson", designation: "Front-End Developer" },
    { name: "Megan Adams", designation: "Operations Manager" },
    { name: "Nathan Scott", designation: "Cybersecurity Analyst" },
    { name: "Olivia Walker", designation: "Technical Writer" },
    { name: "Paul Harris", designation: "Project Coordinator" },
    { name: "Quincy Rogers", designation: "Cloud Architect" },
    { name: "Rebecca Perez", designation: "Legal Advisor" },
    { name: "Samuel Morgan", designation: "AI Researcher" },
    { name: "Tina Carter", designation: "Content Strategist" },
    { name: "Alice Johnson", designation: "Software Engineer" },
    { name: "Bob Smith", designation: "Product Manager" },
    { name: "Catherine Lee", designation: "Data Scientist" },
    { name: "David Brown", designation: "Marketing Specialist" },
    { name: "Emma Davis", designation: "UX/UI Designer" },
    { name: "Frank Miller", designation: "DevOps Engineer" },
    { name: "Jack Evans", designation: "Graphic Designer" },
    { name: "Karen Lewis", designation: "Finance Manager" },
    { name: "Luke Anderson", designation: "Front-End Developer" },
    { name: "Megan Adams", designation: "Operations Manager" },
    { name: "Nathan Scott", designation: "Cybersecurity Analyst" },
    { name: "Olivia Walker", designation: "Technical Writer" },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Data.length / 6);
  const indexOfLastItem = currentPage * 6;
  const indexOfFirstItem = indexOfLastItem - 6;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const BooksList = currentItems.map((d, index) => (
    <AllMentorsMaincard
      key={"booksGrid" + index}
      name={d.name}
      post={d.designation}
    />
  ));
  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-10 self-center md:self-stretch">
        <div className="flex flex-col gap-[30px] self-stretch">
          <Tabs
            className="flex flex-col items-center gap-[46px]"
            selectedTabClassName="!text-[#FffFFF] !bg-[#eebc74] rounded-[10px]"
            selectedTabPanelClassName="tab-panel--selected"
          >
            <div className="container-xs flex-col md:flex hidden items-center md:px-5">
              <TabList className="flex flex-grow md:flex-row flex-col gap-4">
                <Tab className="p-4 text-[16px] tracking-wide px-7 font-semibold text-[#0a033c] bg-white">
                  All Books
                </Tab>

                <Tab className="p-4 text-[16px] tracking-wide px-7 font-semibold text-[#0a033c] bg-white">
                  Kindergarten
                </Tab>

                <Tab className="p-4 text-[16px] tracking-wide px-7 font-semibold text-[#0a033c] bg-white">
                  High School
                </Tab>

                <Tab className="p-4 text-[16px] tracking-wide px-7 font-semibold text-[#0a033c] bg-white">
                  College
                </Tab>

                <Tab className="p-4 text-[16px] tracking-wide px-7 font-semibold text-[#0a033c] bg-white">
                  More
                </Tab>
              </TabList>

              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </div>
          </Tabs>
          <div className="grid grid-cols-2 justify-center gap-4 md:gap-10 md:grid-cols-3 mx-auto ">
            <Suspense fallback={<div> Loading feed...</div>}>
              {BooksList}
            </Suspense>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            color="white_A700"
            shape="round"
            className={`${
              currentPage === 1 ? "!cursor-not-allowed" : ""
            } w-[42px] rounded-md px-4`}
          >
            <i className="fa-solid fa-angle-left text-[#D97356]"></i>
          </Button>
          <Heading as="h2" className="text-lg font-medium text-[#0a033c]">
            Page
          </Heading>
          <Button
            color="white_A700"
            size="xs"
            className="min-w-[42px] rounded-lg px-3.5 font-semibold !text-[#D97356]"
          >
            {currentPage}
          </Button>
          <Heading as="h2" className="text-lg font-medium text-[#0a033c]">
            of {totalPages}
          </Heading>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            shape="round"
            className={`${
              currentPage === totalPages ? "!cursor-not-allowed" : ""
            } w-[42px] rounded-md px-4`}
          >
            <i className="fa-solid fa-angle-right text-white"></i>
          </Button>
        </div>
      </div>
    </>
  );
}
