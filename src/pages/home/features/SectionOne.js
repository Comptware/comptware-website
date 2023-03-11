import React, { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import BorderFade from "assets/icons/border-fade.svg";
import ArrowRight from "assets/icons/Arrow/arrow-right-black.svg";
import { PAYMENT_TYPES_STICKY_MODES } from "utils/constants";

const paymentTypesClsx =
  "w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-top transition-all duration-[500ms] ease-in";
const paymentTypes = [
  {
    title: "Virtual accounts",
    body: "Experience greater payment efficiency, control, and flexibility with our virtual accounts.",
    img: <div className={`${paymentTypesClsx} bg-virtual-accounts`} />,
    bgImage: "bg-virtual-accounts",
  },
  {
    title: "Mobile Money",
    body: "Experience payment convenience and accessibility across Africa with our mobile money service.",
    img: <div className={`${paymentTypesClsx} bg-mobile-money`} />,
    bgImage: "bg-mobile-money",
  },
  {
    title: "Crypto Payments",
    body: "Enjoy fast and secure local and cross-border transactions with our crypto payment service.",
    img: <div className={`${paymentTypesClsx} bg-crypto scale-[0.8]`} />,
    bgImage: "bg-crypto scale-[0.8]",
  },
  {
    title: "Ewallets",
    body: "Experience the convenience of managing your money on the go with our e-wallets.",
    img: <div className={`${paymentTypesClsx} bg-e-wallets`} />,
    bgImage: "bg-e-wallets",
  },
];
const { PRE_VIEW, IN_VIEW, POST_VIEW } = PAYMENT_TYPES_STICKY_MODES;
const SectionOne = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [activePaymentType, setActivePaymentType] = useState(paymentTypes[0]);
  const [width, setWidth] = useState(0);
  const [stickyMode, setStickyMode] = useState(PRE_VIEW);

  useEffect(() => {
    setWidth(window?.innerWidth);
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStickyAnimationUpdate = () => {
    const paymentTypesLength = paymentTypes.length;
    const adjustedPaymentTypesLength = paymentTypes.length * 2;
    const sectionRefRect = sectionRef?.current?.getBoundingClientRect();
    const sectionHeight = sectionRefRect?.height;
    const sectionTopPosition = sectionRefRect?.top;
    const topOffsetAllowance = -150;
    const adjustedSectionTopPosition = -(
      sectionTopPosition + topOffsetAllowance
    );
    const adjustedSectionHeight = sectionHeight - topOffsetAllowance;
    const allotedHeightFraction =
      adjustedSectionHeight / adjustedPaymentTypesLength;
    const stickyViewHeight = adjustedSectionHeight / 2;

    for (let index = 0; index < adjustedPaymentTypesLength; index++) {
      let newActivePayment;
      if (allotedHeightFraction * (index + 1) <= adjustedSectionTopPosition) {
        newActivePayment = paymentTypes[index];
        setActivePaymentType(newActivePayment);
      }
    }

    if (
      adjustedSectionTopPosition > 0 &&
      adjustedSectionTopPosition < stickyViewHeight
    ) {
      setStickyMode(IN_VIEW);
    } else if (adjustedSectionTopPosition > stickyViewHeight) {
      setActivePaymentType(paymentTypes[paymentTypesLength - 1]);
      setStickyMode(POST_VIEW);
    } else {
      setActivePaymentType(paymentTypes[0]);

      setStickyMode(PRE_VIEW);
    }
  };

  useEffect(() => {
    handleStickyAnimationUpdate();
    window.addEventListener("scroll", handleStickyAnimationUpdate);
    return () => {
      window.removeEventListener("scroll", handleStickyAnimationUpdate);
    };
  }, []);

  return (
    <div className="flex flex-col justify-start items-center h-fit w-full space-y-7 sticky-boundary sm:mb-[0px] relative">
      <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 sm:mb-[0px]">
        <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 md:pt-16 bg-white z-20 px-5 md:px-[5%] lg:px-[8%]">
          <BorderFade className="scale-x-[0.7]" />
          <p className="text-grey-text text-left leading-[1.9] bani-heading-alt font-normal w-full md:w-[75%] lg:w-[70%] ">
            <span className="text-black-light basier-semibold">
              {" "}
              Merchants{" "}
            </span>
            utilise our{" "}
            <span className="text-black-light basier-semibold">
              unique payment solutions{" "}
            </span>
            to provide customers with{" "}
            <span className="text-black-light basier-semibold">
              smooth and instant payment experiences
            </span>
            . Collecting and reconciling online and in-store payments is much
            more seamless and faster
          </p>
          <BorderFade className="scale-x-[0.7]" />
        </div>
        <div
          ref={sectionRef}
          className="sm:h-[1150px] flex flex-col md:flex-row items-start w-full space-y-2 md:space-x-8 sm:pt-[70px] relative sm:my-[100px]"
        >
          <div
            className={`${
              stickyMode === IN_VIEW
                ? "fixed sm:top-[100px] md:top-[200px] left-0 right-0 px-5"
                : stickyMode === POST_VIEW
                ? "absolute bottom-0"
                : "absolute top-0"
            } px-5 md:px-[5%] lg:px-[8%] h-fit flex flex-col md:flex-row items-start w-full space-y-2 md:space-x-8 transition-all duration-300 ease-in-out max-w-9xl mx-auto`}
          >
            <div className="mt-[1px] hidden md:flex flex-col justify-center items-center md:items-start text-center md:text-left !min-w-[50%] !w-full !max-w-[50%] h-fit space-y-4">
              <p className="text-black-light basier-medium leading-none bani-base pb-4 pt-20">
                COLLECT PAYMENTS ANYWHERE
              </p>
              {paymentTypes.map(({ title, body, img,bgImage }) => (
                <span
                  key={title}
                  className={`${
                    activePaymentType?.title === title
                      ? "text-black-light basier-medium"
                      : "text-black-fade font-normal"
                  } tracking-[0.05em]  leading-normal bani-heading-alt-2 mb-4 cursor-pointer transition-all duration-300 ease-in-out`}
                  onClick={() =>
                    setActivePaymentType({ title, body, img, bgImage })
                  }
                  onMouseEnter={() =>
                    setActivePaymentType({ title, body, img, bgImage })
                  }
                >
                  {title}
                </span>
              ))}
            </div>

            <div className="hidden sm:flex flex-col justify-center items-center md:items-end !min-w-[50%] !w-full !max-w-[50%] min-h-[55vh] md:pt-0">
              <div className="flex flex-col md:hidden justify-center items-center md:items-start text-center md:text-left w-full h-fit space-y-4">
                <p className="text-black-light basier-medium leading-none bani-base pb-2 pt-10">
                  COLLECT PAYMENTS ANYWHERE
                </p>

                <div className="flex w-full justify-center ">
                  {paymentTypes.map(({ title }) =>
                    activePaymentType?.title == title ? (
                      <span
                        key={title}
                        className={`text-black-light basier-medium tracking-[0.05em]  leading-normal bani-heading-alt-2 mb-4 cursor-pointer transition-all duration-300 ease-in-out animate-fadein`}
                      >
                        {activePaymentType?.title}
                      </span>
                    ) : null
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center !min-w-[100%] !w-full !max-w-[100%] min-h-[450px] bg-grey-dull rounded-[40px] pb-8">
                {activePaymentType?.img ? (
                  <div className="h-[350px] !min-w-[100%] !w-full !max-w-[100%]">
                  
                    <div
                      className={`${paymentTypesClsx} ${activePaymentType?.bgImage}`}
                    />
                  </div>
                ) : null}
                <p className="font-light bani-title-2 text-black px-8">
                  {activePaymentType?.body}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:hidden justify-center items-start text-left w-full h-fit gap-8 px-5">
            <p className="text-black-light basier-medium leading-none text-base">
              COLLECT PAYMENTS ANYWHERE
            </p>

            <div className="flex sm:hidden justify-start items-center gap-x-4 w-full ml-[-10px] md:ml-0">
              <button
                onClick={handlePrev}
                className={`scale-[0.75]`}
                style={{ opacity: activeSlideIndex <= 1 ? 0.15 : 1 }}
              >
                <ArrowRight className="rotate-[180deg]" />
              </button>

              <button
                className="works-slide-right scale-[0.75]"
                onClick={handleNext}
              >
                <ArrowRight />
              </button>

              <div className="section-swiper-pagination flex md:hidden justify-end items-center ml-auto pl-3 gap-[1px] " />
            </div>
          </div>
          <div className="flex sm:hidden w-full py-3 works-swiper px-5 md:px-0">
            <Swiper
              ref={sliderRef}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={(e) => setActiveSlideIndex(e.activeIndex)}
              className="!pb-4"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              // speed={4000}
              modules={[Autoplay, Pagination, Navigation]}
              pagination={{ clickable: true, el: ".section-swiper-pagination" }}
            >
              {paymentTypes.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="flex flex-col justify-between items-center w-full min-h-[55vh] bg-grey-dull rounded-[20px] pb-8">
                    <div className="h-[60%]"></div>
                    <p className="font-light bani-title-2 text-black px-8">
                      {item?.body}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
