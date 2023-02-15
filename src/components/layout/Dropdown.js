import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Dropdown = ({ links, path, onClick }) => {
  return (
    <div
      className={`flex flex-col justify-start align-start space-y-1.5 bg-white h-fit shadow-[0px 0px 30px rgba(101, 113, 124, 0.1)] pl-3.5 pr-6 py-7 rounded-[14px] border-1/2 border-grey-bordercolor absolute animate-slide -left-[10px] -top-[20px] z-[999] `}
    >
      {links?.map(({ name, link, icon }) => (
        <Link
          href={link}
          key={name}
          className={`flex justify-start items-center hover:text-blue text-grey-text bani-base font-medium whitespace-nowrap space-x-2 ${
            path.includes(link) && "text-blue stroke-blue"
          }`}
          onClick={onClick}
        >
          {icon}
          <span className="text-current whitespace-nowrap">{name}</span>
        </Link>
      ))}
    </div>
  );
};

Dropdown.propTypes = {
  links: PropTypes.array,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default Dropdown;