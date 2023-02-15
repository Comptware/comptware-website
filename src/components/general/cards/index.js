import React from "react";
import PropTypes from "prop-types";
import ArrowRight from "assets/icons/Arrow/arrow-circle-right-blue.svg";
import Link from "next/link";

const Card = ({ details, type }) => {
  const { icon, title, body, href } = details;

  const containerClass =
    type === "works"
      ? "min-w-[220px] max-w-[320px] h-[200px] md:h-[338px] ml-5 pl-4 pr-6 pt-2 pb-7 shadow-card"
      : "pl-7 pr-9 pt-8 pb-12 shadow-card-2";

  const titleClass =
    type === "works"
      ? "text-black bani-lg font-semibold"
      : "text-black bani-title";

  const bodyClass = type === "works" ? "bani-base" : "bani-title-alt";
  return (
    <div
      className={`${containerClass} flex flex-col justify-between items-start text-left w-full space-y-4 rounded-[30px] bg-white relative overflow-hidden `}
    >
      {type === "works" && (
        <div className="blue-fade-gradient absolute top-[-100px] right-[-100px] min-h-[200px] min-w-[200px] rounded-full" />
      )}
      <div className="scale-[0.8]">{icon}</div>

      <h2 className={`${titleClass}`}>{title}</h2>
      <p className={`text-grey-text font-light leading-loose ${bodyClass}`}>{body}</p>

      {href && (
        <Link href={href} className="flex justify-start items-center space-x-2">
          <span className="font-medium bani-base-alt text-black-light">
            Learn More
          </span>
          <ArrowRight />
        </Link>
      )}
    </div>
  );
};
Card.propTypes = {
  details: PropTypes.object,
  type: PropTypes.string,
};

export default Card;
