import { RatingBar, Heading, Img } from "./../../Components";
import React from "react";
import { Link } from "react-router-dom";


export default function EducraftShopOne(props) {
  const { ...rest } = props;

  return (
    <Link to="/EducraftCoursesDetails">
    <div
      className={`${props.className} flex flex-col items-center w-full gap-2 cursor-pointer`}
    >
      <div className="self-stretch rounded-[10px] bg-[#ffffff] p-5">
        <Img
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZ4TuOVfJM5-1I4_XX5xXSPrgrvdxK0gOarccnO-xJC3vL6pX-alKuXEKB5Y7DmDTXpZqh8UiR7oMQPfIkuedufHJoPc9h-szcSwLR2k8&usqp=CAE"
          alt="Product Image"
          className="h-[246px] w-full rounded-[10px] object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2 self-stretch">
        <Heading
          size="headingxs"
          as="h6"
          className="text-[18px] font-semibold text-[#0a033c]"
        >
          {props.name}
        </Heading>
        <div className="flex items-center justify-between gap-5 self-stretch">
          <Heading
            size="headingxs"
            as="h6"
            className="text-[10px] font-semibold text-[#d97356]"
          >
            ${Math.floor(Math.random() * (80 - 20 + 1)) + 20}.00
          </Heading>
          <RatingBar
            value={Math.floor(Math.random() * (5 - 2 + 1)) + 2}
            isEditable={true}
            color="#CDC9C2"
            activeColor="#ffc107"
            size={16}
            className="flex gap-2.5"
          />
        </div>
      </div>
    </div>
    </Link>
  );
}
