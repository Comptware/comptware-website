import React from "react";

import Card from "components/general/cards";

const cardItems = [
  {
    title: "Multiple Bank Options",
    body: "Your customers can choose any preferred bank for transfers. This will increase the successful transaction rate, leading to a better customer experience and satisfaction.", 
  },
  {
    title: "Instant notification and settlement",
    body: "You'll enjoy instant notification channels that will make you confirm payments instantly so you won't delay your customers. Your money is settled immediately, not the next day.",
  },
  {
    title: "Low Cost",
    body: "You can manage your business accounts at a low cost. You will spend less using them for your payment collection needs and optimise profits.", 
  },
  {
    title: "Branch Setup",
    body: "Set up branches for your various business outlets in a single dashboard and give your staff control over payments and inventory. You can also track and reconcile payments across all branch locations wherever and whenever.",
  },
];

const SectionOne = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 mt-10 mb-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full">
        {cardItems.map((item) => (
          <Card details={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
