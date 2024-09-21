import { Helmet } from "react-helmet";
import { Button, Heading} from "../../Components";
import EducraftShopColumnPopularBooks from "../../Components/EducraftShopColumnPopularBooks";
import EducraftShopOne from "../../Components/EducraftShopOne";
import HeroSection from "../Educraft/HeroSection.jsx";
import React, { Suspense } from "react";
import { TabList, Tab, Tabs, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";

export default function EducraftPage() {
  const [Data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Data.length / 8);
  const indexOfLastItem = currentPage * 8;
  const indexOfFirstItem = indexOfLastItem - 8;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/books")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const BooksList = currentItems.map((d, index) => (
    <EducraftShopOne key={"booksGrid" + index} name={d.title} />
  ));

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
        <HeroSection />
        <div className="flex justify-center">
          <div className="container-xs flex flex-col items-start justify-center gap-10 lg:flex-row md:px-5">
            <div className="flex lg:w-[32%] flex-row lg:flex-col gap-[38px] w-full pl-4">
              <EducraftShopColumnPopularBooks />
              <div className="sm:flex hidden">
                <EducraftShopColumnPopularBooks />
              </div>
            </div>
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
                <div className="grid grid-cols-2 justify-center gap-3.5 md:grid-cols-3">
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
          </div>
        </div>
      </div>
    </>
  );
}
