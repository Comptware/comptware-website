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

const Header = () => {
  const location = useRouter();
  const [activeNav, setActiveNav] = useState("");
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const headerLinks = [
    {
      title: "Payments",
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
          name: "Ewallets",
          link: "/payments/ewallets",
          icon: <EwalletIcon className="scale-[0.7]" />,
        },

        {
          name: "Mobile Money",
          link: "/payments/mobile-money",
          icon: <MobileMoneyIcon className="scale-[0.7]" />,
        },
        {
          name: "Crypto Payments",
          link: "/payments/crypto",
          icon: <CryptoIcon className="scale-[0.7]" />,
        },
      ],
    },
    {
      title: "Use case",
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
          name: "Crypto and Digital Assets Platforms",
          link: "/usecase/crypto-and-digital-asset-platforms",
          icon: <CryptoIcon className="scale-[0.7]" />,
        },

        {
          name: "E-commerce",
          link: "/usecase/e-commerce",
          icon: <EcommerceIcon className="scale-[0.7]" />,
        },
        {
          name: "Digital Creators",
          link: "/usecase/digital-creators",
          icon: <DigitalCreatorsIcon className="scale-[0.7]" />,
        },
      ],
    },
    {
      title: "Developers",
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
      title: "Company",
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
  const navbarBgIsWhite = navbarBg || pathname.includes("company/all-openings");
  const navbarBgIsBlueGradient = pathIsUsecase && !navbarBg;

  const headerLinksActiveClass = navbarBgIsBlueGradient
    ? "!bg-white text-blue-gradient-container text-grey-gradient-container"
    : "!text-blue !bg-blue-dull border-blue";

  return (
    <header
      style={{
        background: `${navbarBgIsWhite ? "white" : "transparent"}`,
      }}
      className={` ${
        pathIsUsecase ? "" : "border-b-[0.5px] border-grey"
      } transition-colors duration-500 ease-in-out website-header flex flex-row justify-between items-center w-full h-14 md:h-[94px] px-5 md:px-[5%] lg:px-[8%] z-50 drop-shadow-[0_0_30px_rgba(0,0,0,0.1)] max-w-9xl mx-auto`}
    >
      <div className="relative flex flex-row justify-between items-center mx-auto w-full">
        <Link className="w-fit !my-0 z-[99999]" href="/">
          {(navbarBgIsBlueGradient&&!sidenavOpen) ? (
            <LogoWhite className="scale-[0.8]" />
          ) : (
            <Logo className="scale-[0.8]" />
          )}
        </Link>

        <div
          className={`hidden lg:flex justify-end items-center px-10 pt-[9px] pb-[3px] w-fit space-x-5 transition-all duration-150 ease-in-out  rounded-[87px] ${
            navbarBgIsBlueGradient ? "header-nav-section" : "bg-grey-greyLight"
          }`}
        >
          {headerLinks.map(({ title, link, links, slug }) => (
            <div
              className="relative w-full h-full"
              key={title}
              onMouseEnter={() => {
                setActiveNav(title);
              }}
              onMouseLeave={() => setActiveNav("")}
            >
              <Link
                href={link}
                className={`flex justify-center items-center ${
                  navbarBgIsBlueGradient
                    ? "hover:text-grey-light text-white stroke-grey"
                    : "hover:text-blue text-grey-text"
                } bani-base font-light space-x-1.5 mb-[6px] py-1  px-2.5 icon-text transition-all duration-300 ease-in-out
                 
                 ${
                   pathIsNotBase &&
                   (link.includes(pathname) || pathname.includes(slug)) &&
                   `border-[0.8px] rounded-full active-nav ${headerLinksActiveClass} ${
                     links ? "pl-4" : "pl-2.5"
                   }  `
                 }`}
              >
                <span className={`text-current whitespace-nowrap`}>
                  {title}
                </span>
                {links && (
                  <ArrowDownIcon className="scale-[0.85] transition-all duration-300 ease-in-out" />
                )}
              </Link>
              {links && activeNav === title && (
                <Dropdown
                  links={links}
                  path={pathname}
                  onClick={() => setActiveNav("")}
                />
              )}
            </div>
          ))}
        </div>

       
          <div className="hidden lg:flex flex-row justify-start items-center space-x-2 pl-2">
            <a href="https://app.getbani.com" target="_blank" rel="noreferrer">
              <Button
                text="Sign in"
                onClick={() => {}}
                isOutline={!navbarBgIsBlueGradient}
                whiteBg={navbarBgIsBlueGradient}
                textColor={navbarBgIsBlueGradient&&"black"}
                textClass="text-base"
              />
            </a>
            <a
              href="https://app.getbani.com/signup"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                blackBg
                text="Contact Sales"
                onClick={() => {}}
                textClass="text-base"
              />
            </a>
          </div>
       

        <Hamburger
          handlecClick={() => {
            setSidenavOpen(!sidenavOpen);
          }}
          className={sidenavOpen ? "ham_crossed" : ""}
          navbarBgIsBlueGradient={navbarBgIsBlueGradient}
        />

        {/* Mobile side nav */}
        <div
          className={`flex flex-col justify-start items-start lg:hidden bg-white py-24 px-10 fixed top-0 right-0 left-0 bottom-0 h-screen w-full transition-all duration-150 ease-in-out ${
            sidenavOpen ? "translate-x-0 flex" : "-translate-x-[150%]"
          }`}
        >
          {headerLinks.map(({ title, link, links, notPage }) => (
            <div
              className={`relative w-full mb-6 ${
                links ? "border-b-1/2 border-grey-bordercolor" : ""
              }`}
              key={title}
            >
              <div
                className={`flex justify-start items-center hover:text-blue text-grey-text text-base font-light space-x-14 mb-6 ${
                  pathIsNotBase && link.includes(pathname) && "!text-blue"
                }`}
                onClick={() => {
                  setActiveNav(activeNav ? "" : title);
                }}
              >
                <Link href={notPage ? "#" : link}>
                  <span className="text-current whitespace-nowrap">
                    {title}
                  </span>
                </Link>

                {links && (
                  <div>
                    <ArrowDownIcon className="text-blue stroke-current" />
                  </div>
                )}
              </div>
              {links &&
                activeNav === title &&
                links?.map(({ name, link, icon, href }) =>
                  link ? (
                    <Link
                      href={link}
                      key={name}
                      className={`flex justify-start items-center p-4 hover:text-blue text-grey-text text-base font-light whitespace-nowrap ${
                        pathIsNotBase &&
                        link.includes(pathname) &&
                        "!text-blue"
                      }`}
                      onClick={() => {
                        setActiveNav("");
                        setSidenavOpen(false);
                      }}
                    >
                      {icon}
                      <span className="text-current whitespace-nowrap pl-5">
                        {name}
                      </span>
                    </Link>
                  ) : href ? (
                    <a
                      href={href}
                      key={name}
                      className={`flex justify-between items-center p-4 hover:text-blue text-grey-text text-base font-light whitespace-nowrap gap-5`}
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
