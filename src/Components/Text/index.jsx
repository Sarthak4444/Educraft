import React from "react";

const sizes = {
  texts: "text-[16px] font-normal sm:text-[13px]",
};
const Text = ({ children, className = "", as, size = "", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component className={` ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};
export { Text };
