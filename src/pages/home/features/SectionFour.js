import React from "react";

const logoClass =
  "scale-[0.7] w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-center";
const clients = [
  {
    icon: <div className={`${logoClass} bg-ffstores`} />,
  },
  {
    icon: <div className={`${logoClass} bg-mood`} />,
  },
  {
    icon: <div className={`${logoClass} bg-clarks`} />,
  },
  {
    icon: <div className={`${logoClass} bg-swatch`} />,
  },
  {
    icon: <div className={`${logoClass} bg-aldo`} />,
  },
  {
    icon: <div className={`${logoClass} bg-converse`} />,
  },
  {
    icon: <div className={`${logoClass} bg-foodcourt`} />,
  },
  {
    icon: <div className={`${logoClass} bg-levis`} />,
  },
  {
    icon: <div className={`${logoClass} bg-charles `} />,
  },
  {
    icon: <div className={`${logoClass} bg-hinge`} />,
  },
  {
    icon: <div className={`${logoClass} bg-dune`} />,
  },
  {
    icon: <div className={`${logoClass} bg-tommyhf`} />,
  },
];

const SectionFour = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-fit gap-y-10 pt-14 pb-4 md:pt-24 md:pb-1 px-5 md:px-[5%] lg:px-[8%]">
      <p className="text-grey-text basier-medium leading-none bani-base text-center">
        TRUSTED BY THESE AMAZING BUSINESSES AND MORE
      </p>

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 justify-center items-center w-[80%]">
        {clients.map(({ icon }, i) => (
          <span className="w-full h-[70px]" key={i}>
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
