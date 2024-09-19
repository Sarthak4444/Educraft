import { Heading } from "./../../Components";
import React from "react";

export default function TextList({
  textOne = "+",
  textTwo = "+",
  textThree = "+",
  textFour = "+",
  textFive = "+",
  textSix = "+",
  textSeven = "+",
  textEight = "+",
  textNine = "+",
  textTen = "+",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center flex-1 flex-wrap`}
    >
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textOne}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        | {textTwo}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textThree}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textFour}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textFive}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textSix}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textSeven}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textEight}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textNine}
      </Heading>
      <Heading
        size="textxs"
        as="p"
        className="ml-1 font-['Poppins'] text-[12px] font-medium text-[#ff6652]"
      >
        {textTen}
      </Heading>
    </div>
  );
}
