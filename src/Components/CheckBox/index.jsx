import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "",
};
const sizes = {
  xs: "h-[24px] w-[24px]",
};
const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e = {
      if(onChange) {
        onChange(e?.target?.checked);
      },
    });
    return (
      <>
        <div
          className={className + " flex items-center gap-[Spx] cursor-pointer"}
        >
          <input
            className={` ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            } `}
            ref={ref}
            type="checkbox"
            name={name}
            id={id}
            onChange={handleChange}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
      </>
    );
  }
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["xs"]),
};
export { CheckBox };
