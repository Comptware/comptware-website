import React, { useState } from "react";

import ApiVector from "assets/icons/Developers/api-vector.svg";
import WoocommerceVector from "assets/icons/Developers/woocommerce-vector.svg";
import RowCard from "components/general/cards/RowCard";

const devItems = [
  {
    title: "Plugins & Integrations",
    body: "Get started, install our free plugins on your platform",
    icon: <WoocommerceVector />,
    type: "WooCommerce",
    href: "/",
  },
  {
    title: "API Documentation",
    body: "Start building custom solutions with our collections and payout infrastructure.",
    icon: <ApiVector />,
    type: "Start Coding",
    href: "/",
  },
];
const SectionOne = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 mb-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full">
        {devItems.map((item) => (
          <RowCard details={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
