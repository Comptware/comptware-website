import React, { useEffect, useRef, useState, useCallback } from "react";
import Sticky from "react-sticky-el";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import BorderFade from "assets/icons/border-fade.svg";
import ArrowRight from "assets/icons/Arrow/arrow-right-black.svg";

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

  useEffect(() => {
    setWidth(window?.innerWidth);
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStickyAnimationUpdate = () => {
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
    handleStickyAnimationUpdate();
    window.addEventListener("scroll", handleStickyAnimationUpdate);
    return () => {
      window.removeEventListener("scroll", handleStickyAnimationUpdate);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-start items-center h-fit w-full space-y-7 px-5 md:px-[5%] lg:px-[8%] sticky-boundary sm:mb-[500px] relative"
    >
      <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 sm:mb-[100px]">
        <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 md:pt-16 bg-white z-20">
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
        <div className="sm:h-[800px] flex flex-col md:flex-row items-start w-full space-y-2 md:space-x-8 pt-[70px]">
          <Sticky
            className="hidden md:block w-full transition-all duration-[0.5s] ease-in-out"
            bottomOffset={-450}
            stickyClassName="hidden md:block transition-all duration-[0.5s] ease-in-out"
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

          <div className="hidden sm:flex flex-col justify-center items-center md:items-end w-full min-h-[55vh] md:pt-0">
            <Sticky
              className="w-full transition-all md:duration-[0.5s] ease-in-out"
              topOffset={width > 767 ? -100 : 0}
              bottomOffset={-450}
              stickyClassName="md:mt-24 transition-all duration-[0.5s] ease-in-out"
              boundaryElement=".sticky-boundary"
              hideOnBoundaryHit={false}
            >
              <div className="flex flex-col md:hidden justify-center items-center md:items-start text-center md:text-left w-full h-fit space-y-4">
                <p className="text-black-light font-semibold leading-none bani-base pb-2 pt-10">
                  COLLECT PAYMENTS ANYWHERE
                </p>

                <div className="flex w-full justify-center ">
                  {paymentTypes.map(({ title }) =>
                    activePaymentType?.title == title ? (
                      <span
                        key={title}
                        className={`text-black-light helv-medium tracking-[0.05em]  leading-normal bani-heading-alt-2 mb-4 cursor-pointer transition-all duration-300 ease-in-out animate-fadein`}
                      >
                        {activePaymentType?.title}
                      </span>
                    ) : null
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-full min-h-[55vh] bg-grey-dull rounded-[40px] pb-8">
                <div className="h-[60%]"></div>
                <p className="font-light bani-title-2 text-black px-8">
                  {activePaymentType?.body}
                </p>
              </div>
            </Sticky>
          </div>

          <div className="flex flex-col sm:hidden justify-center items-start text-left w-full h-fit gap-8">
            <p className="text-black-light font-semibold leading-none text-base">
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
