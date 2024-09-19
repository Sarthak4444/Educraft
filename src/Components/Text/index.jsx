import React from "react";

const sizes = {
  texts: "text-[16px] font-normal sm:text-[13px]",
};

const Text = ({ children, className = "", as = "p", size = "texts", ...restProps }) => {
  const Component = as;
  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
