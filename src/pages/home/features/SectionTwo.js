import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Retail from "assets/icons/Works/retail.svg";
import Airline from "assets/icons/Works/airline.svg";
import Crypto from "assets/icons/Works/crypto.svg";
import DigitalCreators from "assets/icons/Works/digital-creators.svg";
import Ecommerce from "assets/icons/Works/ecommerce.svg";
import FastFood from "assets/icons/Works/fast-food.svg";
import Fintech from "assets/icons/Works/fintech.svg";

import ArrowRight from "assets/icons/Arrow/arrow-right-black.svg";
import Card from "components/general/cards";

const businessTypes = [
  {
    title: "Retail Stores",
    body: "Leverage Bani's customisable payment tools to build the next generation of fintech products.",
    icon: <Retail />,
    href: "/",
  },
  {
    title: "Fintechs / Neobanks",
    body: "Leverage Bani's customisable payment tools to build the next generation of fintech products.",
    icon: <Fintech />,
    href: "/",
  },
  {
    title: "Fast Food and Restaurants",
    body: "Leverage Bani's customisable payment tools to build the next generation of fintech products.",
    icon: <FastFood />,
    href: "/",
  },
  {
    title: "Travel agencies and airlines",
    body: "Leverage Bani's customisable payment tools to build the next generation of fintech products.",
    icon: <Airline />,
    href: "/",
  },
  {
    title: "Crypto and digital asset platforms",
    body: "Leverage Bani's customisable payment tools to build the next generation of fintech products.",
    icon: <Crypto />,
    href: "/",
  },
  {
    title: "E-Commerce",
    body: "Leverage Bani's customisable payment tools to build the next generation of fintech products.",
    icon: <Ecommerce />,
    href: "/",
  },
  {
    title: "Digital Creators",
    body: "Leverage Bani's customisable payment tools to build the next generation of fintech products.",
    icon: <DigitalCreators />,
    href: "/",
  },
];

const SectionTwo = () => {
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

  return (
    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-14 md:py-24 bg-grey-dull mt-8">
      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 md:items-center w-full px-5 md:px-[5%] lg:px-[8%]">
        <p className="bani-heading text-black-light helv-medium pl-10">
          Who we work with
        </p>

        <div className="flex justify-start items-center gap-x-4 scale-[0.75]">
          <button
            onClick={handlePrev}
            className={``}
            style={{ opacity: activeSlideIndex <= 1 ? 0.15 : 1 }}
          >
            <ArrowRight className="rotate-[180deg]" />
          </button>

          <button className="works-slide-right" onClick={handleNext}>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="flex w-full py-3 works-swiper px-5 md:px-0">
        <Swiper
          ref={sliderRef}
          spaceBetween={20}
          slidesPerView={3.7}
          onSlideChange={(e) => setActiveSlideIndex(e.activeIndex)}
          className="!pb-4"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={4000}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {businessTypes.map((item) => (
            <SwiperSlide key={item.title}>
              <Card details={item} type="works" />
            </SwiperSlide>
          ))}
          {businessTypes.map((item) => (
            <SwiperSlide key={item.title}>
              <Card details={item} type="works" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionTwo;
