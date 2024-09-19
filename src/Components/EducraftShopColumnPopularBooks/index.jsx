import { Heading, Img, RatingBar } from "./../../Components";
import React from "react";
import { Suspense } from "react";

const popularBooksList = [
  { bookImage: "" },
  { bookImage: "" },
  { bookImage: "" },
];

export default function EducraftShopColumnPopularBooks({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start gap-3.5 flex-1`}
    >
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
                src={d.bookImage}
                alt="Book Image"
                className="h-[98px] w-[22%] rounded-[5px] object-contain"
              />
              <div className="flex flex-1 flex-col items-start gap-2.5">
                <RatingBar
                  value={5}
                  isEditable={true}
                  color="#ffc107"
                  activeColor="#ffc167"
                  size={16}
                  className="flex gap-2.5"
                />
                <Heading
                  size="headingxs"
                  as="h6"
                  className="text-[10px] font-semibold leading-[21px] text-[#000000]"
                >
                  The Three Musketeers, by
                  <br />
                  Alexandre Dumas
                </Heading>

                <Heading
                  size="headingxs"
                  as="h6"
                  className="text-[18px] font-semibold text-[#d97356]"
                >
                  $39.00
                </Heading>
              </div>
            </div>
          ))}
        </Suspense>
      </div>

      <a href="#">
        <Heading
          size="textlg"
          as="p"
          className="text-[12px] font-medium text-[#d97356]"
        >
          See More
        </Heading>
      </a>
    </div>
  );
}
