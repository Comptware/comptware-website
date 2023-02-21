import React from "react";
import PropTypes from "prop-types";
import ArrowRight from "assets/icons/Arrow/arrow-right-blue.svg";

const RowCard = ({ details }) => {
  const { icon, title, body, href, type } = details;

  return (
    <div
      className={`flex flex-col-reverse slg:flex-row justify-between items-start text-left w-full slg:h-[300px] gap-4 rounded-[30px] bg-white relative overflow-hidden px-8 slg:pl-0 slg:pr-4 lg:px-9 pt-8 slg:pb-12 shadow-card-3 `}
    >
      <div className="scale-[0.85]">{icon}</div>
      <div
        className={`flex flex-col justify-center items-start text-left w-full h-full space-y-4`}
      >
        <h2 className={`text-black text-xl md:text-[22px]`}>{title}</h2>
        <p
          className={`text-grey-text font-light leading-loose text-sm md:text-lg w-[75%]`}
        >
          {body}
        </p>

        {href && (
          <a
            href={href}
            className="flex justify-start items-center space-x-2 underline text-blue"
            target="_blank"
            rel="noreferrer"
          >
            <span className="basier-medium text-xl md:text-[22px]">{type}</span>
            <ArrowRight />
          </a>
        )}
      </div>
    </div>
  );
};
RowCard.propTypes = {
  details: PropTypes.object,
};

export default RowCard;
