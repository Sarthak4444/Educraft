import { Heading, Img } from "..";
import React from "react";

export default function UserProfile({
  userSubject = "Maths - Introduction",
  userTime = "1:57",
  ...props
}) {
  return (
    <div
      {...props}
      className={` ${props.className} flex items-center gap-2.5 p-2.5 flex-1 cursor-pointer rounded-[10px] hover:shadow-[0_50px_50px_0_#00000019]`}
    >
      <Img
        src=""
        alt="Maths Image"
        className="h-[50px] w-[22%] rounded-[5px] object-contain"
      />
      <div className="flex flex-1 flex-col items-start justify-center gap-0.5">
        <Heading
          size="headingxs"
          as="h6"
          className="text-[18px] font-semibold text-[#000000]"
        >
          {userSubject}
        </Heading>
        <Heading
          size="textxs"
          as="p"
          className="text-[14px] font-medium text-[#ff6652]"
        >
          {userTime}
        </Heading>
      </div>
    </div>
  );
}
