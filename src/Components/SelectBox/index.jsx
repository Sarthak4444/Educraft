import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-[#ffffff] text-[#5d5a6f99]",
  },
};
const sizes = {
  sm: "h-[66px] pl-3.5 pr-[34px] text-[16px]",
  xs: "h-[60px] pl-3.5 pr-[34px] text-[16px]",
};
const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={` ${className} flex ${shape & shapes[shape]} ${
            size & sizes[size]
          } ${variant && variants[variant]?.[color]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator & { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,

              padding: undefined,
              flexShrink: undefined,

              width: "max-content",

              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,

              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",

              boxShadow: "none !important",

              minHeight: "auto",

              width: "100%",

              flexWrap: undefined,

              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided = {
              ...provided,

              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,

              display: "flex",

              minWidth: "max-content",

              width: "100%",

              backgroundColor: state.iSelected ? "#d97356" : "transparent",

              color: state.isSelected ? "#ffffff" : "inherit",

              "&:hover": {
                backgroundColor: "#d97356",
                color: "#ffffff",
              },
            }),
            singleValue: (provided) => ({
              ...provided,

              display: "flex",

              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContalner: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            menu: (base) => ({
              ...base,
              minWidth: "max-content",
              width: "max-content",
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }
);
SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};
export { SelectBox };
