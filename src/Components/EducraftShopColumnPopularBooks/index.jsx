import { Heading, Img, RatingBar } from "./../../Components";
import React from "react";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";

const popularBooksList = [
  { Image: "Public/Images/Rework_book.png",
    Name : "Rework",
    Author : "Jason Fried",
    Rating : 4,
    Price : 35
   },
  { Image: "Public/Images/Dopamin-Detox_book.png",
    Name : "Dopamin Detox",
    Author : "Thibaut Mearisse",
    Rating : 3,
    Price : 28
   },
  { Image: "Public/Images/Atomic-Habits_book.png",
    Name : "Atomic Habits",
    Author : "James Clear",
    Rating : 5,
    Price : 42
   },
];

export default function EducraftShopColumnPopularBooks() {
  return (
    <div className="flex flex-col items-start gap-3.5 flex-1">
      <Heading
        size="headingxl"
        as="h3"
        className="text-[38px] font-semibold text-[#000000]"
      >
        Popular Books
      </Heading>
      <div className="flex flex-col gap-3.5 self-stretch">
        <Suspense fallback={<div>Loading feed...</div>}>
          {popularBooksList.map((d, index) => (
            <div
              key={"bookList" + index}
              className="flex flex-1 items-center gap-3.5 rounded-[10px] bg-[#ffffff] p-5"
            >
              <Img
                src={d.Image}
                alt="Book Image"
                className="h-[98px] w-[22%] rounded-[5px] object-contain"
              />
              <div className="flex flex-1 flex-col items-start gap-2.5">
                <RatingBar
                  value={d.Rating}
                  isEditable={true}
                  color="#CDC9C2"
                  activeColor="#ffc167"
                  size={16}
                  className="flex gap-2.5"
                />
                <Heading
                  size="headingxs"
                  as="h6"
                  className="text-[10px] font-semibold leading-[21px] text-[#000000]"
                >
                  {d.Name}, by
                  <br />
                  {d.Author}
                </Heading>

                <Heading
                  size="headingxs"
                  as="h6"
                  className="text-[18px] font-semibold text-[#d97356]"
                >
                  ${d.Price}.00
                </Heading>
              </div>
            </div>
          ))}
        </Suspense>
      </div>

      <NavLink to="/EducraftCourses?tab=all-courses">
        <Heading
          size="textlg"
          as="p"
          className="text-[16px] font-semibold text-[#d97356]"
        >
          See More
        </Heading>
     </NavLink>
    </div>
  );
}
