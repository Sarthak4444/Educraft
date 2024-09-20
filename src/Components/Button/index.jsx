import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[58%]",
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    orange_200_01: "bg-[#eebc74] text [#FFFFFF]",
    white_A700: "bg-[#FFFFff] text-[#0a033c]",
    red_50: "bg-[#ffeeed]",
    red_300_01: "bg-[#d07356] text-[#FFFFFF]",
  },
  outline: {
    red_300_01: "border [#d97356] border border-solid text-[#d97356]",
  },
};
const sizes = {
  "2xl": "h-[60px] px-[22px]",
  lg: "h-[54px] px-[34px] text-[18px]",
  xl: "h-[58px] px-[38px] text-[16px]",
  md: "h-[58px] px-[34px] text-[16px]",
  xs: "h-[42px] px-3.5 text-[16px]",
  sm: "h-[44px] px-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "red_300_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant][color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  size: PropTypes.oneOf(["2xl", "lg", "xl", "md", "xs", "sm"]),
  color: PropTypes.oneOf([
    "orange_200_01",
    "white_A700",
    "red_50",
    "red_300_01",
  ]),
};

export { Button };
