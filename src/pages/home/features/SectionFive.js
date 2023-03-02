import React from "react";


import Channels from "assets/icons/BaniFeatures/channels.svg";
import Circle from "assets/icons/BaniFeatures/circle.svg";
import Cloud from "assets/icons/BaniFeatures/cloud.svg";
import Shield from "assets/icons/BaniFeatures/shield.svg";

import Card from "components/general/cards";

const baniFeatures = [
  {
    title: "Safe and Fast",
    body: "Bani directly integrates with banks and financial services. This means; we are built on bank-grade security, confirmation of transactions is faster, and settlement happens instantly.",
    icon: <Shield className="stroke-current" />,
  },
  {
    title: "Multiple collection channels",
    body: "Unlock access to more local payment collection channels in Africa. Effortlessly issue virtual accounts or start accepting mobile money and cryptocurrency payments today.",
    icon: <Channels className="stroke-current" />,
  },
  {
    title: "Cloud-based API",
    body: "Bani Our cloud-based services make building customisable experiences for online and in-store payment collections effortless. Build faster systems by reconciling transactions in real time.",
    icon: <Cloud className="stroke-current"/>,
  },
  {
    title: "Lowest Charges",
    body: "With Bani, you'll enjoy the lowest rates for bank transfer payments using our virtual accounts, mobile money payments across Africa, and cryptocurrency payments globally.",
    icon: <Circle className="stroke-current"/>,
  },
];

const SectionFive = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-14 py-14 md:py-24 px-5 md:px-[5%] lg:px-[8%]">
      <div className="flex flex-col justify-start items-center gap-3 w-full">
        <h2 className="bani-heading-alt-2 text-blue basier-semibold text-center">
          Why merchants <br className="sm:hidden"/>love Bani
        </h2>
        <p className="text-grey-text font-light bani-title mb-5 md:mb-6 ">
          Loved by merchants and businesses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 justify-between items-start w-full">
        {baniFeatures.map((item) => (
          <Card details={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SectionFive;
