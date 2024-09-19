import { Img, Heading } from "./../../Components";
import React from "react";

export default function AllMentorsMainCard({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-2.5`}
    >
      <Img
        src=""
        alt="Profile image"
        className="h-[290px] w-full rounded-[10px] object-cover"
      />
      <div className="flex items-start justify-center gap-6 self-stretch">
        <div className="flex flex-1 flex-col items-start gap-3 self-center">
          <Heading
            as="p"
            className="mt-t text-[16px] font-medium text-[#000000]"
          >
            Kristin Waston
          </Heading>

          <Heading
            size="textxs"
            as="p"
            className="text-[14px] font-medium text-[#5d5a6f]"
          >
            Founder & CEO
          </Heading>
        </div>
        <Img src="" alt="arrow Icon" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
