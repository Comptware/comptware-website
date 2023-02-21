import React from "react";
import PropTypes from "prop-types";
import ArrowRight from "assets/icons/Arrow/arrow-right-blue.svg";
import BorderFade from "assets/icons/border-fade.svg";

const Opening = ({ details, showBorder }) => {
  const { location, title, body, href, type } = details;

  return (
    <div className="w-full flex flex-col gap-12 lg:gap-14 items-center justify-center ">
      <div className="flex flex-col slg:flex-row justify-between items-start text-left w-full gap-8 md:gap-4 overflow-hidden md:w-[90%] lg:w-[80%]">
        <div className="flex flex-col justify-center items-start text-left w-full h-full space-y-4">
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center text-left gap-4">
            <h2 className="text-blue text-xl md:text-[23px]">{title}</h2>

            <p className="text-black basier-medium bani-title-alt">
              {location}
            </p>
          </div>
          <p className="text-grey-text font-light leading-loose text-base md:text-[24px] w-[75%] pb-3 md:pb-5">
            {body}
          </p>

          <div className="bg-blue-dull flex justify-center items-center  bani-title-alt rounded-[80px] h-[40px] md:h-[50px] px-6 text-center w-fit text-blue">
            {type}
          </div>
        </div>

        <a
          href={href}
          className="flex justify-start items-center space-x-2 underline text-blue"
          target="_blank"
          rel="noreferrer"
        >
          <span className="basier-medium text-xl md:text-[22px] whitespace-nowrap ">Apply Now</span>
          <ArrowRight />
        </a>
      </div>

      {showBorder && <BorderFade className="scale-x-[0.25] sm:scale-x-[0.40] md:scale-x-[0.50] lg:scale-x-[0.75]" />}
    </div>
  );
};
Opening.propTypes = {
  details: PropTypes.object,
  showBorder: PropTypes.bool,
};

export default Opening;
