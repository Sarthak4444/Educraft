import { Img, Heading } from "./../../Components";
import React from "react";

export default function AllMentorsMainCard({ className, profileImage, name = "Kristin Waston", title = "Founder & CEO", arrowIcon, ...props }) {
  return (
    <div {...props} className={`${className} flex flex-col items-center w-full gap-2.5`}>
      <Img
        src={profileImage || "/default-profile.png"}  // Fallback for profile image
        alt="Profile image"
        className="h-[290px] w-full rounded-[10px] object-cover"
      />
      <div className="flex items-start justify-center gap-6 self-stretch">
        <div className="flex flex-1 flex-col items-start gap-3 self-center">
          <Heading as="p" className="text-[16px] font-medium text-[#000000]">
            {name}  {/* Dynamically rendered name */}
          </Heading>
          <Heading size="textxs" as="p" className="text-[14px] font-medium text-[#5d5a6f]">
            {title}  {/* Dynamically rendered title */}
          </Heading>
        </div>
        <Img
          src={arrowIcon || "/default-arrow.png"}  // Fallback for arrow icon
          alt="Arrow Icon"
          className="h-[24px] w-[24px]"
        />
      </div>
    </div>
  );
}
