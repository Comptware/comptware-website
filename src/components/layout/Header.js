import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ArrowDownIcon from "assets/icons/Arrow/arrow-down-grey.svg";
import Logo from "assets/logos/faint-black.svg";
import DigitalCreatorsIcon from "assets/icons/header/brush.svg";
import FintechIcon from "assets/icons/header/coin.svg";
import EcommerceIcon from "assets/icons/header/shopping-cart.svg";

import Button from "../general/button/Button";
import Dropdown from "./Dropdown";
import Hamburger from "./hamburger";

const Header = () => {
  const location = useRouter();
  const [activeNav, setActiveNav] = useState("");
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  console.log("location: ", location);
  const headerLinks = [
    {
      title: "Use case",
      link: "/usecase/fintech",
      links: [
        {
          name: "Fintechs/Neobanks",
          link: "/usecase/fintech",
          icon: <FintechIcon className="scale-[0.7]" />,
        },
        {
          name: "Retail Stores",
          link: "/usecase/e-commerce",
          icon: <EcommerceIcon className="scale-[0.7]" />,
        },
        {
          name: "Crypto and digital asset platforms",
          link: "/usecase/digital-creators",
          icon: <DigitalCreatorsIcon className="scale-[0.7]" />,
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
      links: [
        {
          name: "API Documentation",
          link: "/usecase/fintech",
          icon: <FintechIcon className="scale-[0.7]" />,
        },
        {
          name: "Woocommerce Plugin",
          link: "/usecase/e-commerce",
          icon: <EcommerceIcon className="scale-[0.7]" />,
        },
        {
          name: "Javascript Widget",
          link: "/usecase/digital-creators",
          icon: <DigitalCreatorsIcon className="scale-[0.7]" />,
        },
      ],
    },
    {
      title: "Products",
      link: "/products",
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
  return (
    <header
      style={{ backgroundColor: `${navbarBg ? "white" : "transparent"}` }}
      className={`border-b-[0.5px] border-grey transition-colors duration-500 ease-in-out website-header flex flex-row justify-between items-center w-full h-14 md:h-[94px] px-5 md:px-[5%] lg:px-[8%] z-50 drop-shadow-[0_0_30px_rgba(0,0,0,0.1)]`}
    >
      <div className="relative flex flex-row justify-between items-center mx-auto w-full">
        <Link className="w-fit !my-0 z-[99999]" href="/">
          <Logo className="scale-[0.8]" />
        </Link>

        <div className="hidden md:flex justify-end items-center px-10 pt-[10px] pb-[4px] w-fit space-x-7 transition-all duration-150 ease-in-out bg-grey-greyLight rounded-[87px]">
          {headerLinks.map(({ title, link, links }) => (
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
                className={`flex justify-center items-center hover:text-blue text-grey-text bani-base font-light space-x-1.5 mb-[6px] py-1 px-3 icon-text transition-all duration-300 ease-in-out  ${
                  pathIsNotBase &&
                  link.includes(pathname) &&
                  "!text-blue border-[0.8px] border-blue rounded-full !bg-blue-dull active-nav"
                }`}
              >
                <span className="text-current whitespace-nowrap">{title}</span>
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

        <div className="hidden md:flex flex-row justify-start items-center space-x-2">
          <a href="https://app.getbani.com" target="_blank" rel="noreferrer">
            <Button
              text="Sign in"
              onClick={() => {}}
              isOutline
              textClass="text-sm"
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
              textClass="text-sm"
            />
          </a>
        </div>

        <Hamburger
          click={() => {
            setSidenavOpen(!sidenavOpen);
          }}
          className={sidenavOpen ? "ham_crossed" : ""}
        />

        {/* Mobile side nav */}
        <div
          className={`flex flex-col justify-start items-start md:hidden bg-white py-24 pl-10 pr-20 fixed top-0 right-0 left-0 bottom-0 h-screen w-full transition-all duration-150 ease-in-out ${
            sidenavOpen ? "translate-x-0 flex" : "-translate-x-[150%]"
          }`}
        >
          {headerLinks.map(({ title, link, links }) => (
            <div
              className={`relative w-full mb-6 ${
                links ? "border-b-1/2 border-grey-bordercolor" : ""
              }`}
              key={title}
            >
              <Link
                href={links ? "#" : link}
                className={`flex justify-start items-center hover:text-blue text-grey-text text-base font-light space-x-14 mb-6 ${
                  pathIsNotBase && link.includes(pathname) && "!text-blue"
                }`}
                onClick={() => {
                  setActiveNav(activeNav ? "" : title);
                }}
              >
                <span className="text-current whitespace-nowrap">{title}</span>
                {links && (
                  <ArrowDownIcon className="text-blue h-[14px] w-[14px] stroke-current" />
                )}
              </Link>
              {links &&
                activeNav === title &&
                links?.map(({ name, link, icon }) => (
                  <Link
                    href={link}
                    key={name}
                    className={`flex justify-start items-center p-4 hover:text-blue text-grey-text text-base font-light whitespace-nowrap ${
                      pathIsNotBase &&
                      link.includes(pathname) &&
                      "!text-blue !stroke-blue"
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
                ))}
            </div>
          ))}
        </div>
        {/* Mobile side nav */}
      </div>
    </header>
  );
};

export default Header;
