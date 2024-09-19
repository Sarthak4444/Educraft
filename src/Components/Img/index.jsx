import React from "react";

const Img = ({ className, src = "", alt = "TestImg", ...restProps }) => {
  return (
    <Img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading="lazy"
    />
  );
};

export { Img };
