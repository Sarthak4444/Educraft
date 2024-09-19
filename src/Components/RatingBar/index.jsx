import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({
  children,
  className,
  starCount = 5,
  color = "grey",
  activeColor = "red",
  isEditable = false,
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        edit={isEditable}
        className={className}
        count={starCount}
        color={color}
        activeColor={activeColor}
        {...restProps}
      />
      {children && children}
    </>
  );
};

export { RatingBar };
