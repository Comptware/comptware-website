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
  import Hypin from '../../../assets/homepage_logos/Hypin.svg'
  
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

  
  const SectionThree = () => {
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
   
  
      </div>
    );
  };
  
  export default SectionThree;
  