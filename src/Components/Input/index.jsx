import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-t1-[10px] rounded-bl-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-[#ffffff] text-[#5d5a6f]",
    white_A700_33: "bg-[#ffffff33] text-[#ffffff]",
  },
};
const sizes = {
  md: "h-[66px] pl-5 pr-1.5 text-[16px]",
  xs: "h-[50px] pl-[10px] pr-[34px] text-[16px]",
  sm: "h-[58px] pl-5 pr-[34px] text-[16px]",
};
const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700_33",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        ClassName={` ${className} flex items-center justify-center cursor-text rounded-tl-[10px] rounded-bl-[10px] text-[16px] ${
          shape && shapes[shape]
        } ${variant && (variants[variant]?.[color] || variants[variant])} ${
          size && sizes[size]
        } `}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "white_A700_33"]),
};

export { Input };
