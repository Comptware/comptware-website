import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ArrowDownIcon from "assets/icons/Arrow/arrow-down-grey.svg";
import ArrowRight from "assets/icons/Arrow/arrow-right-blue.svg";
import Logo from "assets/logos/faint-black.svg";
import LogoWhite from "assets/logos/logo-white.svg";
import DigitalCreatorsIcon from "assets/icons/header/brush.svg";
import FintechIcon from "assets/icons/header/coin.svg";
import EcommerceIcon from "assets/icons/header/shopping-cart.svg";
import CryptoIcon from "assets/icons/header/crypto.svg";
import RetailIcon from "assets/icons/header/retail.svg";
import VirtualAccountIcon from "assets/icons/header/virtual-account.svg";
import EwalletIcon from "assets/icons/header/ewallet.svg";
import MobileMoneyIcon from "assets/icons/header/mobile-money.svg";
import FastfoodIcon from "assets/icons/header/fastfood.svg";
import TravelIcon from "assets/icons/header/travel.svg";
import Button from "../general/button/Button";
import Dropdown from "./Dropdown";
import Hamburger from "./hamburger";
import Reload from "../../assets/homepage_logos/reload.svg";
import AA from "../../assets/homepage_logos/aA.svg";
import Lock from "../../assets/homepage_logos/Lock.svg";
import ABB from "../../assets/PNG/Comptware-06-06.png";
import ComptwareWhiteLogo from "../../assets/logos/Comptware-06-07-svg.svg";
import Image from "next/image";

const Header = () => {
  const location = useRouter();
  const [activeNav, setActiveNav] = useState("");
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const headerLinks = [
    {
      title: "Service",
      link: "/usecase/retail-stores",
      slug: "usecase",
      notPage: true,
      links: [
        {
          name: "Retail Stores",
          link: "/usecase/retail-stores",
          icon: <RetailIcon className="scale-[0.7]" />,
        },
        {
          name: "E-commerce",
          link: "/usecase/e-commerce",
          icon: <EcommerceIcon className="scale-[0.7]" />,
        },
        {
          name: "Fast Food and Restaurants",
          link: "/usecase/fast-food-and-restaurants",
          icon: <FastfoodIcon className="scale-[0.7]" />,
        },

        {
          name: "Travel Agencies and Airlines",
          link: "/usecase/travel-agencies-and-airlines",
          icon: <TravelIcon className="scale-[0.7]" />,
        },

        {
          name: "Fintechs and Neobanks",
          link: "/usecase/fintechs-and-neobanks",
          icon: <FintechIcon className="scale-[0.7]" />,
        },

        {
          name: "Digital Assets Platforms",
          link: "/usecase/crypto-and-digital-asset-platforms",
          icon: <CryptoIcon className="scale-[0.7]" />,
        },
        {
          name: "Digital Creators",
          link: "/usecase/digital-creators",
          icon: <DigitalCreatorsIcon className="scale-[0.7]" />,
        },
      ],
    },
    {
      title: "Projects",
      link: "/payments/virtual-accounts",
      slug: "payments",
      notPage: true,
      links: [
        {
          name: "Virtual Accounts",
          link: "/payments/virtual-accounts",
          icon: <VirtualAccountIcon className="scale-[0.7]" />,
        },

        {
          name: "E-wallets",
          link: "/payments/ewallets",
          icon: <EwalletIcon className="scale-[0.7]" />,
        },

        {
          name: "Mobile Money",
          link: "/payments/mobile-money",
          icon: <MobileMoneyIcon className="scale-[0.7]" />,
        },
        {
          name: "DLT Payments",
          link: "/payments/crypto",
          icon: <CryptoIcon className="scale-[0.7]" />,
        },
      ],
    },
    {
      title: "About us",
      link: "/developers",
      slug: "developers",
      links: [
        {
          name: "API Documentation",
          href: "https://docs.getbani.com/bani-pop/",
        },
        {
          name: "Woocommerce Plugin",
          href: "https://wordpress.org/plugins/bani-payments-for-woocommerce/",
        },
        {
          name: "Javascript Widget",
          href: "https://docs.getbani.com/bani-pop/",
        },
      ],
    },

    {
      title: "Blog",
      link: "/company",
    },
  ];

  const headerLinks_xs = [
    {
      title: "Home",
      link: "/home",
      slug: "home",
      notPage: true,
    },
    {
      title: "Service",
      link: "/usecase/retail-stores",
      slug: "usecase",
      notPage: true,
      links: [
        {
          name: "Retail Stores",
          link: "/usecase/retail-stores",
          icon: <RetailIcon className="scale-[0.7]" />,
        },
        {
          name: "E-commerce",
          link: "/usecase/e-commerce",
          icon: <EcommerceIcon className="scale-[0.7]" />,
        },
        {
          name: "Fast Food and Restaurants",
          link: "/usecase/fast-food-and-restaurants",
          icon: <FastfoodIcon className="scale-[0.7]" />,
        },

        {
          name: "Travel Agencies and Airlines",
          link: "/usecase/travel-agencies-and-airlines",
          icon: <TravelIcon className="scale-[0.7]" />,
        },

        {
          name: "Fintechs and Neobanks",
          link: "/usecase/fintechs-and-neobanks",
          icon: <FintechIcon className="scale-[0.7]" />,
        },

        {
          name: "Digital Assets Platforms",
          link: "/usecase/crypto-and-digital-asset-platforms",
          icon: <CryptoIcon className="scale-[0.7]" />,
        },
        {
          name: "Digital Creators",
          link: "/usecase/digital-creators",
          icon: <DigitalCreatorsIcon className="scale-[0.7]" />,
        },
      ],
    },
    {
      title: "Projects",
      link: "/payments/virtual-accounts",
      slug: "payments",
      notPage: true,
      links: [
        {
          name: "Virtual Accounts",
          link: "/payments/virtual-accounts",
          icon: <VirtualAccountIcon className="scale-[0.7]" />,
        },

        {
          name: "E-wallets",
          link: "/payments/ewallets",
          icon: <EwalletIcon className="scale-[0.7]" />,
        },

        {
          name: "Mobile Money",
          link: "/payments/mobile-money",
          icon: <MobileMoneyIcon className="scale-[0.7]" />,
        },
        {
          name: "DLT Payments",
          link: "/payments/crypto",
          icon: <CryptoIcon className="scale-[0.7]" />,
        },
      ],
    },
    {
      title: "About us",
      link: "/developers",
      slug: "developers",
      links: [
        {
          name: "API Documentation",
          href: "https://docs.getbani.com/bani-pop/",
        },
        {
          name: "Woocommerce Plugin",
          href: "https://wordpress.org/plugins/bani-payments-for-woocommerce/",
        },
        {
          name: "Javascript Widget",
          href: "https://docs.getbani.com/bani-pop/",
        },
      ],
    },

    {
      title: "Blog",
      link: "/company",
    },
  ];

  const changeNavbarBg = () => {
    if (window.scrollY >= 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    changeNavbarBg();
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  const pathname = location.pathname;
  const pathIsNotBase = pathname !== "/";
  const pathIsUsecase = pathname.includes("/usecase");
  const navbarBgIsWhite =
    navbarBg || pathname.includes("company/all-openings") || sidenavOpen;
  const navbarBgIsBlueGradient = pathIsUsecase && !navbarBg;

  const headerLinksActiveClass = navbarBgIsBlueGradient
    ? "!bg-white text-blue-gradient-container text-grey-gradient-container"
    : "!bg-white text-blue-gradient-container text-grey-gradient-container";

  return (
    <header
      style={{
        backgroundColor: `${"#0000004d"}`,
      }}
      className={` ${
        pathIsUsecase ? "" : ""
      } transition-colors duration-500 ease-in-out flex flex-col justify-center gap-5 website-header w-full h-[130px] sm:h-[94px] px-5 md:px-[5%] lg:px-[4%] z-50 drop-shadow-[0_0_30px_rgba] max-w-9xl mx-auto`}
    >
      <div className="w-full flex sm:hidden">
        <div className="h-[30px] w-full rounded-[10px] bg-[#ffffff2e] px-[10px] flex justify-between items-center">
          <AA />

          <div className="flex items-center gap-[5px] text-[16px] text-white">
            <Lock />
            <p>Comptware.com</p>
          </div>

          <Reload />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        {/* <div className="relative flex justify-between items-center mx-auto w-full"> */}
        <Link
          className={`!my-0 z-[99999] ${sidenavOpen ? "bg-black" : "w-fit"}`}
          href="/"
        >
          <ComptwareWhiteLogo />
        </Link>

        <div className="flex items-center">
          <div className="hidden slg:flex z-[999] flex-row justify-start items-center space-x-2 ">
            <a
              href="https://calendly.com/paul-comptware"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Contact Us"
                isOutline={!navbarBgIsBlueGradient}
                whiteBg={navbarBgIsBlueGradient}
                textClass="text-base"
              />
            </a>
          </div>

          {/* <div className="bg-white w-[77px] h-[35px] rounded-[8px] relative right-3 slg:hidden">
            <Hamburger
              handlecClick={() => {
                setSidenavOpen(!sidenavOpen);
              }}
              className={sidenavOpen ? "ham_crossed" : ""}
              navbarBgIsBlueGradient={navbarBgIsBlueGradient}
            />
          </div> */}

          {/* </div> */}

          {/* <div className="hidden slg:flex">.</div> */}
        </div>

        {/* Mobile side nav */}
        <div
          className={`flex flex-col justify-start items-start slg:hidden bg-[#292E3D] px-5 sm:px-10 py-5 z-[999] fixed m-auto top-0 bottom-14 left-0 right-0 h-[409px] w-[95%] rounded-[16px] transition-all duration-150 ease-in-out overflow-y-scroll ${
            sidenavOpen ? "translate-x-0 flex" : "-translate-x-[150%]"
          }`}
        >
          {headerLinks_xs.map(({ title, link, links, notPage }) => (
            <div
              className={`flex flex-col justify-center border-b-1/2 border-[#353C4F] items-center w-full ${
                links ? "border-b-1/2 border-[#353C4F]" : ""
              }`}
              key={title}
            >
              <div
                className={`flex justify-start items-center hover:text-blue text-white text-base font-light space-x-14 mb-6 ${
                  pathIsNotBase && link.includes(pathname) && "!text-blue"
                }`}
                onClick={() => {
                  setActiveNav(activeNav ? "" : title);
                }}
              >
                <Link href={notPage ? "#" : link}>
                  <span className="text-current whitespace-nowrap text-[#5C6470] font-bold text-[32px]">
                    {title}
                  </span>
                </Link>
              </div>
              {links &&
                activeNav === title &&
                links?.map(({ name, link, icon, href }) =>
                  link ? (
                    <Link
                      href={link}
                      key={name}
                      className={`flex justify-start items-center p-4 hover:text-blue text-white text-base font-light whitespace-nowrap ${
                        pathIsNotBase && link.includes(pathname) && "!text-blue"
                      }`}
                      onClick={() => {
                        setActiveNav("");
                        setSidenavOpen(false);
                      }}
                    >
                      {icon}
                      <span className="text-current whitespace-nowrap pl-5 text-white">
                        {name}
                      </span>
                    </Link>
                  ) : href ? (
                    <a
                      href={href}
                      key={name}
                      className={`flex justify-between items-center p-4 hover:text-blue text-white text-base font-light whitespace-nowrap gap-5`}
                      onClick={() => {
                        setActiveNav("");
                        setSidenavOpen(false);
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-current whitespace-nowrap pl-5">
                        {name}
                      </span>

                      <ArrowRight className="scale-[0.7]" />
                    </a>
                  ) : null
                )}
            </div>
          ))}
        </div>
        {/* Mobile side nav */}
      </div>
    </header>
  );
};

export default Header;
