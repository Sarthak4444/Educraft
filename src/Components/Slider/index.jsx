import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import PropTypes from "prop-types";

const Slider = React.forwardRef(
  (
    {
      items = [],
      activeIndex = 0,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref
  ) => {
    const isSmall = (index) => {
      if (activeIndex + magnifiedIndex >= items?.length) {
        return index !== activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== activeIndex + magnifiedIndex;
      }
    };

    const slideItems = React.useMemo(() => {
      return centerMode
        ? items?.map((child, index) => {
            if (isSmall(index)) {
              return React.cloneElement(child, {
                ...child.props,
                className: [child.props?.className, activeSlideCSS]
                  .filter(Boolean)
                  .join(" "),
                key: index,
              });
            }
            return React.cloneElement(child, { key: index });
          })
        : items;
    }, [items, activeIndex, magnifiedIndex, activeSlideCSS, centerMode]);

    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        touchTracking
        mouseTracking
        disableButtonsControls
      />
    );
  }
);

Slider.defaultProps = {
  items: [],
  activeIndex: 0,
  centerMode: false,
  magnifiedIndex: 0,
  activeSlideCSS: "scale-75",
};

Slider.propTypes = {
  items: PropTypes.array,
  activeIndex: PropTypes.number,
  centerMode: PropTypes.bool,
  magnifiedIndex: PropTypes.number,
  activeSlideCSS: PropTypes.string,
};

export { Slider };
