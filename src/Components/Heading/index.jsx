import React from "react";

const sizes = {
  textxs: "text-[12px] font-medium",
  textmd: "text-[16px] font-medium sm:text-[13px]",
  textlg: "text-[20px] font-medium sm:text-[17px]",
  textxl: "text-[30px] font-medium md:text-[28px] sm:text-[25px]",
  headingxs: "text-[20px] font-semibold sm:text-[17px]",
  headings: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  headingmd: "text-[30px] font-semibold md:text-[28px] sm:text-[25px]",
  headinglg: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  headingxl: "text-[30px] font-semibold md:text-[28px] sm:text-[25px]",
  heading2xl: "text-[48px] font-bold md:text-[38px] sm:text-[34px]",
  heading3xl: "text-[45px] font-bold md:text-[41px] sm:text-[38px]",
  texts: "text-[14px] font-medium not-italic",
};

const Heading = ({
  children,
  className = "",
  size = "texts",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={` text-[#5d5a6f] font-['Poppins'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Heading };
