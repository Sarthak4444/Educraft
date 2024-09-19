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
      className={` ${props.className} flex items-center gap-3 p-2.5 flex-1 cursor-pointer rounded-lg hover:shadow-lg`}
    >
      <Img
        src=""
        alt="Profile Image"
        className="h-[50px] w-[50px] rounded-md object-cover"
      />
      <div className="flex flex-1 flex-col items-start justify-center gap-1">
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
