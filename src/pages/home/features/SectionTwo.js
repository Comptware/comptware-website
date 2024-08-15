import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// import Retail from "assets/icons/Works/retail.svg";
// import Airline from "assets/icons/Works/airline.svg";
// import Crypto from "assets/icons/Works/crypto.svg";
// import DigitalCreators from "assets/icons/Works/digital-creators.svg";
// import Ecommerce from "assets/icons/Works/ecommerce.svg";
// import FastFood from "assets/icons/Works/fast-food.svg";
// import Fintech from "assets/icons/Works/fintech.svg";

import Slide_pic from '../../../assets/homepage_logos/Slide_pic.svg'

import ArrowRight from "assets/icons/Arrow/arrow-right-black.svg";
import Card from "components/general/cards";
import SliderPagination from "components/general/siderPagination";
import Hypin from '../../../assets/homepage_logos/hypin.svg'

const businessTypes = [
  {
    body: "Tortor donec turpis nulla non. Feugiat lobortis ac amet risus porttitor. Ultrices enim mauris a mattis. Odio condimentum at aliquet odio quisque ut purus. Arcu pulvinar dignissim ultrices non elementum nulla consectetur ac risus. Est lorem tincidunt f ",
    icon: <Hypin />,
    images: <Slide_pic />,
    name: 'Dele Mike Aliko',
    post: 'CEO Labintha Africa'
  },
  {
    body: "Tortor donec turpis nulla non. Feugiat lobortis ac amet risus porttitor. Ultrices enim mauris a mattis. Odio condimentum at aliquet odio quisque ut purus. Arcu pulvinar dignissim ultrices non elementum nulla consectetur ac risus. Est lorem tincidunt f ",
    icon: <Hypin />,
    images: <Slide_pic />,
    name: 'Dele Mike Aliko',
    post: 'CEO Labintha Africa'
  },
  {
    body: "Tortor donec turpis nulla non. Feugiat lobortis ac amet risus porttitor. Ultrices enim mauris a mattis. Odio condimentum at aliquet odio quisque ut purus. Arcu pulvinar dignissim ultrices non elementum nulla consectetur ac risus. Est lorem tincidunt f ",
    icon: <Hypin />,
    images: <Slide_pic />,
    name: 'Dele Mike Aliko',
    post: 'CEO Labintha Africa'
  },

  {
    body: "Tortor donec turpis nulla non. Feugiat lobortis ac amet risus porttitor. Ultrices enim mauris a mattis. Odio condimentum at aliquet odio quisque ut purus. Arcu pulvinar dignissim ultrices non elementum nulla consectetur ac risus. Est lorem tincidunt f ",
    icon: <Hypin />,
    images: <Slide_pic />,
    name: 'Dele Mike Aliko',
    post: 'CEO Labintha Africa'
  },
  {
    body: "Tortor donec turpis nulla non. Feugiat lobortis ac amet risus porttitor. Ultrices enim mauris a mattis. Odio condimentum at aliquet odio quisque ut purus. Arcu pulvinar dignissim ultrices non elementum nulla consectetur ac risus. Est lorem tincidunt f ",
    icon: <Hypin />,
    images: <Slide_pic />,
    name: 'Dele Mike Aliko',
    post: 'CEO Labintha Africa'
  },
  {
    body: "Collect instant local customer payments and improve the checkout experience.",
    icon: <Hypin />,
    images: <Slide_pic />,
    name: 'Dele Mike Aliko',
    post: 'CEO Labintha Africa'
  },
  {
    body: "Tortor donec turpis nulla non. Feugiat lobortis ac amet risus porttitor. Ultrices enim mauris a mattis. Odio condimentum at aliquet odio quisque ut purus. Arcu pulvinar dignissim ultrices non elementum nulla consectetur ac risus. Est lorem tincidunt f ",
    icon: <Hypin />,
    images: <Slide_pic />,
    name: 'Dele Mike Aliko',
    post: 'CEO Labintha Africa'
  },
];
const delay = 3500;
const SectionTwo = () => {
  const sliderRef = useRef(null);
  const scrollXContainerRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const timeoutRef = useRef(null);
  const cardsRef = useRef([]);
  const isMobile = useMemo(() => width < 640, [width]);

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

  const handleCustomScroll = (i) => {
    scrollXContainerRef.current.scrollLeft = width * i;
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        handleCustomScroll(
          activeSlideIndex === businessTypes.length - 1
            ? 0
            : activeSlideIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [cardsRef?.current[0]?.getBoundingClientRect()?.x]);

  useEffect(() => {
    setWidth(window?.innerWidth);
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActiveSlideUpdate = () => {
    for (let i = 0; i < cardsRef?.current?.length; i++) {
      const x = cardsRef?.current[i]?.getBoundingClientRect()?.x;
      if (x >= 0 && x < 30) {
        setActiveSlideIndex(i);
      }
    }
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-10 md:gap-y-14 py-14 md:py-24 bg-[#EBF3FF]">
      <div className="flex flex-col justify-start items-start gap-8 md:gap-10 md:items-center w-full px-5 md:px-[5%] lg:px-[8%]">

        <p className='text-[12px] text-[#3388FF]'>WHY US?</p>

        <p className="text-base sm:text-xl md:text-[36px] lg:text-[40px] text-black-light basier-semibold md:pl-10 uppercase md:normal-case whitespace-nowrap ">
          Here’s what our clients have to say
        </p>

        {/* <div className="flex justify-start items-center gap-x-4 w-full ml-[-10px] md:ml-0">
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
            setActivePage={(i) => {
              setActiveSlideIndex(i);
              handleCustomScroll(i);
            }}
            pages={businessTypes}
            className="ml-auto sm:hidden"
          />
        </div> */}
      </div>

      <div
          className="flex sm:hidden w-full gap-3 py-3 px-3 md:px-0 no-scrollbar overflow-x-auto scroll-smooth snap-mandatory snap-x"
          ref={scrollXContainerRef}
          onScroll={(e) => handleActiveSlideUpdate()}
        >
          {businessTypes.map((item, i) => (
            <div key={i} ref={(el) => (cardsRef.current[i] = el)}>
              <Card details={item} type="works" />
            </div>
          ))}
        </div>
  
        <div className="hidden sm:flex w-full gap py-3 works-swiper px-0">
          <Swiper
            ref={sliderRef}
  
            slidesPerView={2}
            breakpoints={{
              // when window width is <= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1.4,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1.5,
              },
  
              // when window width is >= 840px
              840: {
                slidesPerView: 1.8,
              },
  
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2.1,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 2.5,
              },
            }}
            className="!pb-4"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={4000}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true, el: ".clients-swiper-pagination" }}
            onSlideChange={(e) => !isMobile && setActiveSlideIndex(e.activeIndex)}
          >
            {businessTypes.map((item, index) => (
              <SwiperSlide key={index}>
                <Card details={item} type="works" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
  
    </div>
  );
};

export default SectionTwo;
