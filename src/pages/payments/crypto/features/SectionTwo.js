import React from "react";

import Card from "components/general/cards";

const cardItems = [
  {
    title: "Security",
    body: "Enjoy access to secure stable and non-stable coin transactions that protect you from fraud.", 
  },
  {
    title: "Speed",
    body: "Enjoy real time stable and non-stable coin payment and instant settlement that saves you time.",
  },
  {
    title: "Low Cost",
    body: "You’ll enjoy transactions at the lowest rates.", 
  },
  {
    title: "Availability",
    body: "Enjoy crypto transactions anyday, anytime, and anywhere.",
  },
];

const SectionTwo = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 mb-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full">
        {cardItems.map((item) => (
          <Card details={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
