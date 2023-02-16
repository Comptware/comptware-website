import React, { useEffect, useState } from "react";
import Link from "next/link";

import LogoWhite from "assets/logos/logo-white.svg";
import TwitterIcon from "assets/icons/Socials/twitter.svg";
import LinkedinIcon from "assets/icons/Socials/linkedin.svg";
import InstagramIcon from "assets/icons/Socials/instagram.svg";
import FacebookIcon from "assets/icons/Socials/facebook.svg";

const Footer = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window?.innerWidth);
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerLinks = [
    {
      title: "Company",
      links: [
        { title: "What drives us", link: "/company/what-drives-us" },
        { title: "Work with us", link: "/company/Work-with-us" },
        { title: "FAQ", link: "/company/faq" },
        width < 640 && { title: "Newsroom", link: "/what-is-latest" },
        width < 640 && { title: "Say hello", link: "/hey-there" },
      ],
    },

    {
      title: ".",
      links: [
        { title: "Newsroom", link: "/what-is-latest" },
        { title: "Say hello", link: "/hey-there" },
      ],
    },

    {
      title: "Legal",
      links: [
        { title: "AML", link: "/legal/aml-policy" },
        { title: "Privacy Policy", link: "/legal/privacy-policy" },
        { title: "Terms & Conditions", link: "/legal/terms" },
      ],
    },
    {
      title: "Follow us",
      socials: [
        {
          icon: <FacebookIcon className="scale-[0.9]" />,
          url: "https://facebook.com/baniafrica",
        },
        {
          icon: <InstagramIcon className="scale-[0.9]" />,
          url: "https://instagram.com/baniafrica",
        },
        {
          icon: <TwitterIcon className="scale-[0.9]" />,
          url: "https://twitter.com/baniafrica",
        },
        {
          icon: <LinkedinIcon className="scale-[0.9]" />,
          url: "https://www.linkedin.com/company/baniafrica",
        },
      ],
    },
  ];
  return (
    <footer className="website-footer flex flex-col justify-center items-center w-full py-10 md:py-16 px-5 md:px-[5%] lg:px-[8%] bg-black space-y-8 md:space-y-12 relative overflow-y-hidden ">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="relative flex flex-col md:flex-row justify-start items-start mx-auto w-full space-y-10 md:space-y-0">
          <div className="w-[50%] h-full">
            <Link className="!my-0" href="/">
              <LogoWhite className="scale-[0.95]" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-between items-start w-full transition-all duration-150 ease-in-out text-white bani-base">
            {footerLinks.map(({ title, links, socials }, i) => (
              <div
                className={`justify-start flex-grow items-start gap-y-12 ${ title === "." ? "hidden sm:flex flex-col" : "flex flex-col"}`}
                key={title + i}
              >
                <p
                  className={`font-semibold bani-title-alt ${
                    title === "." ? "text-transparent" : "text-white"
                  }`}
                >
                  {title}
                </p>
                {links && (
                  <ul className=" flex flex-col justify-start items-start gap-y-5 text-grey-white bani-base-alt font-light">
                    {links.map((lnk, i) => (
                      <li className="whitespace-nowrap" key={lnk.title + i}>
                        {lnk.url ? (
                          <a
                            href={lnk.url}
                            className="w-full"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {lnk.title}
                          </a>
                        ) : lnk.link ? (
                          <Link href={lnk.link} className="w-full">
                            {lnk.title}
                          </Link>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}

                {socials && (
                  <div className=" flex justify-end items-center w-fit space-x-3 transition-all duration-150 ease-in-out text-white">
                    {socials.map(({ url, icon }, i) => (
                      <a
                        key={url + i}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-full border-t-1/2 border-grey-fade py-4 md:pt-10 pb-14">
        <p className="w-full h-full text-center text-grey-white font-light bani-base-alt px-6 opacity-[0.9] leading-loose ">
          Copyright &copy; 2023 Bani Payments. All rights reserved. <br />
          The content and information on this website is protected by copyright
          laws. No part of this website may be reproduced, distributed, or
          transmitted in any form or by any means, including photocopying,
          recording, or other electronic or mechanical methods, without the
          prior written permission of Bani.
        </p>
      </div>
      <div className="blue-black-fade-gradient absolute bottom-[-50px] right-[-50px] min-h-[450px] min-w-[300px] rounded-full" />
    </footer>
  );
};

export default Footer;
