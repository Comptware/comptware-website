import React, { useEffect, useRef, useState } from "react";
import Sticky from "react-sticky-el";

import BorderFade from "assets/icons/border-fade.svg";

const paymentTypes = [
  {
    title: "Virtual accounts",
    body: "Experience the convenience of managing your money on-the-go with our mobile money service.",
  },
  {
    title: "Mobile Money",
    body: "Experience the convenience of managing your money on-the-go with our mobile money service. Mobile Money",
  },
  {
    title: "Crypto Payments",
    body: "Experience the convenience of managing your money on-the-go with our mobile money service. Crypto Payments",
  },
  {
    title: "Ewallets",
    body: "Experience the convenience of managing your money on-the-go with our mobile money service. Ewallets",
  },
];
const SectionOne = () => {
  const [activePaymentType, setActivePaymentType] = useState(paymentTypes[0]);

  const sectionRef = useRef(null);

  const changeNavbarBg = () => {
    const paymentTypesLength = paymentTypes.length + 1;
    const sectionRefRect = sectionRef?.current?.getBoundingClientRect();
    const sectionHeight = sectionRefRect?.height;
    const sectionTopPosition = sectionRefRect?.top;
    const topOffsetAllowance = 409;
    const adjustedSectionTopPosition = -(
      sectionTopPosition + topOffsetAllowance
    );
    const adjustedSectionHeight = sectionHeight - topOffsetAllowance;
    const allotedHeightFraction = adjustedSectionHeight / paymentTypesLength;

    for (let index = 0; index < paymentTypesLength; index++) {
      if (allotedHeightFraction * (index + 1) <= adjustedSectionTopPosition) {
        const newActivePayment = paymentTypes[index];
        setActivePaymentType(newActivePayment);
      }
    }
  };

  useEffect(() => {
    changeNavbarBg();
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-start items-center h-fit w-full space-y-7 px-5 md:px-[5%] lg:px-[8%] sticky-boundary mb-[500px] relative"
    >
      <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 mb-[100px]">
        <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 md:pt-16 bg-grey-whitesmoke md:bg-white z-20">
          <BorderFade className="scale-x-[0.7]" />
          <p className="text-grey-text text-left leading-[1.9] bani-heading-alt font-normal ">
            <span className="text-black-light helv-medium"> Merchants </span>
            utilise our{" "}
            <span className="text-black-light helv-medium">
              unique payment solutions{" "}
            </span>
            to provide customers with{" "}
            <span className="text-black-light helv-medium">
              smooth and instant payment experiences
            </span>
            . Collecting and reconciling online and in-store payments is much
            more seamless and faster
          </p>
          <BorderFade className="scale-x-[0.7]" />
        </div>
        <div className=" h-[800px] flex flex-col md:flex-row items-start w-full space-y-2 md:space-x-8 pt-[70px]">
          <Sticky
            className="hidden md:block w-full transition-all duration-[0.5s] ease-in-out"
            bottomOffset={-450}
            stickyClassName="transition-all duration-[0.5s] ease-in-out"
            boundaryElement=".sticky-boundary"
            hideOnBoundaryHit={false}
          >
            <div className="mt-[50px] flex flex-col justify-center items-center md:items-start text-center md:text-left w-full h-fit space-y-4">
              <p className="text-black-light font-semibold leading-none bani-base pb-4 pt-20">
                COLLECT PAYMENTS ANYWHERE
              </p>
              {paymentTypes.map(({ title, body }) => (
                <span
                  key={title}
                  className={`${
                    activePaymentType?.title === title
                      ? "text-black-light helv-medium"
                      : "text-black-fade font-normal"
                  } tracking-[0.05em]  leading-normal bani-heading-alt-2 mb-4 cursor-pointer transition-all duration-300 ease-in-out`}
                  onClick={() => setActivePaymentType({ title, body })}
                  onMouseEnter={() => setActivePaymentType({ title, body })}
                >
                  {title}
                </span>
              ))}
            </div>
          </Sticky>

          <div className="flex flex-col justify-center items-center md:items-end w-full min-h-[55vh] md:pt-0">
            <Sticky
              className="w-full transition-all duration-[0.5s] ease-in-out"
              topOffset={-100}
              bottomOffset={-450}
              stickyClassName="bg-red mt-[150px] md:mt-24 transition-all duration-[0.5s] ease-in-out"
              boundaryElement=".sticky-boundary"
              hideOnBoundaryHit={false}
            >
              <div className="flex flex-col justify-between items-center w-full min-h-[55vh] bg-grey-dull rounded-[40px] pb-8">
                <div className="h-[60%]"></div>
                <p className="font-light bani-title-2 text-black px-8">
                  {activePaymentType?.body}
                </p>
              </div>
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
