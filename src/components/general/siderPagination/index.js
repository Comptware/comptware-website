import React from "react";
import PropTypes from "prop-types";
const SliderPagination = ({ pages, className, activePage, setActivePage }) => (
  <div
    className={`flex justify-start items-center gap-2 transition-all duration-[1s] ease-in-out ${className}`}
  >
    {pages?.map((item, i) => (
      <div
        key={i}
        onClick={() => setActivePage(i)}
        className={`w-[10px] h-[10px] rounded-full cursor-pointer ${
          i === activePage ? "bg-blue" : "bg-grey-144 opacity-20"
        }`}
      />
    ))}
  </div>
);
SliderPagination.propTypes = {
  setActivePage: PropTypes.func,
  activePage: PropTypes.number,
  className: PropTypes.string,
  pages: PropTypes.array,
};

export default SliderPagination;
