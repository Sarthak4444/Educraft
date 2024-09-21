import { Button, Heading } from "../../Components";
import EducraftShopOne from "../../Components/EducraftShopOne";
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
      <Heading
        as="h2"
        className="text-[40px] font-semibold text-[#0a033c] mb-10"
      >
        Premium Courses
      </Heading>
      <div className="flex flex-1 flex-col items-center gap-10 self-center md:self-stretch">
        <div className="flex flex-col gap-[30px] self-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-3.5 md:grid-cols-3 p-8 sm:p-4">
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
