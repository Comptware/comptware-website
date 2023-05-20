import React from "react";
import PropTypes from "prop-types";
import ArrowRight from "assets/icons/Arrow/arrow-circle-right-blue.svg";
import Link from "next/link";

const Card = ({ details, type }) => {
  const { icon, title, body, name, images, post } = details;

  const containerClass =
    type === "works"
      ? "justify-start min-w-[calc(100vw-30px)] max-w-[calc(100vw-30px)] sm:min-w-[500px]  sm:max-w-[360px] w-full h-[320px] sm:ml-3 md:ml-4 lg:ml-5 pl-5 sm:pl-4 pt-6 pb-[24px] sm:pr-3 sm:pr-6 sm:pt-2 sm:pb-7 shadow-card snap-center gap-[10px] justify-center"
      : "justify-start pl-7 pr-9 pt-8 pb-12 shadow-card-2 h-full";

  const titleClass =
    type === "works" ? "text-current bani-lg" : "text-current bani-title";

  const bodyClass =
    type === "works"
      ? "bani-base w-[95%] md:w-full pb-4 sm:pb-0"
      : "bani-title-alt md:w-[95%]";
  return (
    <div
      className={`${containerClass} hover:text-blue text-black transition-all duration-[500ms] ease-in-out  flex flex-col items-start text-left w-full rounded-[30px] bg-white relative overflow-hidden `}
    >
      {type === "works" && (
        // <div className="blue-fade-gradient absolute top-[-100px] right-[-100px] min-h-[200px] min-w-[200px] rounded-full" />
        <div/>
      )}
      <div className="flex flex-col justify-start items-start gap-6 sm:gap-5 mb-4 sm:mb-3">
        <div className="scale-[0.9] sm:scale-[0.8]">{icon}</div>

        <h2 className={`basier-medium ${titleClass}`}>{title}</h2>
      </div>

      <p className={`!text-grey-text font-light leading-loose ${bodyClass}`}>
        {body}
      </p>

      <div className='flex gap-[12px]'>
        <div className="scale-[0.9] sm:scale-[0.8]">{images}</div>

        <div className='flex flex-col'>
          <p className='font-bold'>{name}</p>

          <p className='text-[#818A98]'>{post}</p>
        </div>
      </div>

    </div>
  );
};
Card.propTypes = {
  details: PropTypes.object,
  type: PropTypes.string,
};

export default Card;
