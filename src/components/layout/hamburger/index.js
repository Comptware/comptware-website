import React from "react";
import PropTypes from "prop-types";
const Hamburger = ({ className, handlecClick,navbarBgIsBlueGradient }) => (
  <button
    className={`hamburger_btn z-[99999] flex lg:hidden ${className}`}
    onClick={handlecClick}
  >
    {/* <div className={`hamburger ${(navbarBgIsBlueGradient&&className!=="ham_crossed")?"bg-white":"bg-black"}`} />
    <div className={`hamburger ${(navbarBgIsBlueGradient&&className!=="ham_crossed")?"bg-white":"bg-black"}`} />
    <div className={`hamburger ${(navbarBgIsBlueGradient&&className!=="ham_crossed")?"bg-white":"bg-black"}`} /> */}
    <p className="text-[#3388FF] font-semibold text-[18px] relative top-1 left-3">Menu</p>
  </button>
);
Hamburger.propTypes = {
  handlecClick: PropTypes.func,
  className: PropTypes.string,
  navbarBgIsBlueGradient: PropTypes.bool,
};

export default Hamburger;
