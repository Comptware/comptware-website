import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import SliderPagination from "components/general/siderPagination";

const businessTypes = [
  {
    title: "Retail Stores",
    body: "Provide fast and reliable payment processes for customer satisfaction and effectively manage business finances.",
    icon: <Retail />,
    href: "/usecase/retail-stores",
  },
  {
    title: "Fast Food and Restaurants",
    body: "Offer seamless and instant payment options to increase customer satisfaction and repeat business.",
    icon: <FastFood />,
    href: "/usecase/fast-food-and-restaurants",
  },
  {
    title: "Fintechs / Neobanks",
    body: "Offer customers streamlined and secure collections and payout services across Africa.",
    icon: <Fintech />,
    href: "/usecase/fintechs-and-neobanks",
  },

  {
    title: "Travel agencies and airlines",
    body: "Provide real-time payment updates and offer loyalty programs to create memorable customer experiences.",
    icon: <Airline />,
    href: "/usecase/travel-agencies-and-airlines",
  },
  {
    title: "Crypto and Digital Assets platforms",
    body: "Provide faster transactions with globally accessible and decentralised systems.",
    icon: <Crypto />,
    href: "/usecase/crypto-and-digital-asset-platforms",
  },
  {
    title: "E-Commerce",
    body: "Collect instant local customer payments and improve the checkout experience.",
    icon: <Ecommerce />,
    href: "/usecase/e-commerce",
  },
  {
    title: "Digital Creators",
    body: "Offer various payment options, set clear payment terms, and ensure secure and reliable payment processing.",
    icon: <DigitalCreators />,
    href: "/usecase/digital-creators",
  },
];
const delay = 2500;
const SectionTwo = () => {
  const sliderRef = useRef(null);
  const scrollXContainerRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [width, setWidth] = useState(0);

  const timeoutRef = useRef(null);
  const cardsRef = useRef([]);
  const isMobile = useMemo(() => width < 640, [width]);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveSlideIndex((prevIndex) =>
          prevIndex === businessTypes.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [activeSlideIndex]);

  useEffect(() => {
    setWidth(window?.innerWidth);
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleScroll = (direction) => {
    if (direction === "left") {
      isMobile
        ? (scrollXContainerRef.current.scrollLeft -= width)
        : handlePrev();
    } else {
      isMobile
        ? (scrollXContainerRef.current.scrollLeft += width)
        : handleNext();
    }
  };

  useEffect(() => {
    handleActiveSlideUpdate();
  }, [scrollXContainerRef?.current?.scrollLeft]);

  useEffect(() => {
    scrollXContainerRef.current.scrollLeft = width * activeSlideIndex;
  }, [activeSlideIndex]);

  const handleActiveSlideUpdate = () => {
    for (let i = 0; i < cardsRef?.current?.length; i++) {
      const x = cardsRef?.current[i]?.getBoundingClientRect()?.x;
      if (x >= 0 && x < 30) {
        setActiveSlideIndex(i);
      }
    }
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-10 md:gap-y-14 py-14 md:py-24 bg-grey-dull mt-8">
      <div className="flex flex-col md:flex-row justify-start items-start gap-8 md:gap-10 md:items-center w-full px-5 md:px-[5%] lg:px-[8%]">
        <p className="text-base sm:text-xl md:text-[36px] lg:text-[40px] text-black-light basier-semibold md:pl-10 uppercase md:normal-case whitespace-nowrap ">
          Who we work with
        </p>

        <div className="flex justify-start items-center gap-x-4 w-full ml-[-10px] md:ml-0">
          <button
            onClick={() => handleScroll("left")}
            className={`scale-[0.75]`}
            style={{
              opacity: activeSlideIndex <= 0 ? 0.15 : 1,
            }}
          >
            <ArrowRight className="rotate-[180deg]" />
          </button>

          <button
            className="works-slide-right scale-[0.75]"
            onClick={() => handleScroll("right")}
          >
            <ArrowRight />
          </button>
          <SliderPagination
            activePage={activeSlideIndex}
            setActivePage={(i) => setActiveSlideIndex(i)}
            pages={businessTypes}
            className="ml-auto sm:hidden"
          />
        </div>
      </div>

      <div
        className="flex sm:hidden w-full gap-3 py-3 px-3 md:px-0 no-scrollbar overflow-x-auto scroll-smooth snap-mandatory snap-x"
        ref={scrollXContainerRef}
      >
        {businessTypes.map((item, i) => (
          <div key={item.title} ref={(el) => (cardsRef.current[i] = el)}>
            <Card details={item} type="works" />
          </div>
        ))}
      </div>

      <div className="hidden sm:flex w-full py-3 works-swiper px-5 md:px-0">
        <Swiper
          ref={sliderRef}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.7,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.7,
            },

            // when window width is >= 768px
            1024: {
              slidesPerView: 3.7,
            },
          }}
          onSlideChange={(e) => setActiveSlideIndex(e.activeIndex)}
          className="!pb-4"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={4000}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true, el: ".clients-swiper-pagination" }}
        >
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
