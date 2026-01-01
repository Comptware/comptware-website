import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import ComptwareLogo from "../../assets/logos/Comptware-04-removebg-preview.png";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Success Stories", id: "success-stories" },
  { label: "About Us", id: "about-us" },
];

const Header = () => {
  const location = useRouter();
  const [activeNav, setActiveNav] = useState(null);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Change background after 100px scroll
    if (currentScrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Show/hide header based on scroll direction (only after 100px)
    if (currentScrollY >= 100) {
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    } else {
      setVisible(true);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = location.pathname;

  const updateHash = (id) => {
    if (typeof window === "undefined") return;
    const nextHash = id ? `#${id}` : "";
    const nextUrl = `${window.location.pathname}${nextHash}`;
    window.history.replaceState(null, "", nextUrl);
  };

  const scrollToSection = (id) => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") {
      location.push(`/#${id}`);
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      updateHash(id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full h-[70px] px-5 md:px-[5%] lg:px-[8%] z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-[#0B0C10]" : "bg-transparent"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex flex-row justify-between items-center w-full h-full max-w-9xl mx-auto">
          {/* Logo - Left */}
          <Link className="flex items-center z-[99999]" href="/">
            <Image
              src={ComptwareLogo}
              alt="Comptware"
              width={140}
              height={60}
              className="h-auto w-[120px] md:w-[140px]"
            />
          </Link>

          {/* Navigation - Center */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-2 bg-white/5 backdrop-blur-sm rounded-full px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.label);
                  scrollToSection(item.id);
                }}
                className="relative px-6 py-2 text-white text-sm font-medium transition-colors duration-300 z-10"
              >
                {activeNav === item.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 backdrop-blur-[10px] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Contact Us Button - Right */}
          <div className="hidden slg:flex z-[999]">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-[#3388FF] px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setSidenavOpen((prev) => !prev)}
            className="slg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition-colors z-[999]"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] w-5 bg-white transition-transform duration-300 ${
                  sidenavOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-white transition-opacity duration-300 ${
                  sidenavOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-white transition-transform duration-300 ${
                  sidenavOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidenav */}
      <div
        className={`fixed inset-0 z-[60] ${
          sidenavOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#0B0C10] transition-opacity duration-300 ${
            sidenavOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSidenavOpen(false)}
        />
        <aside
          className={`absolute inset-0 h-full w-full bg-[#0B0C10] shadow-2xl transform transition-transform duration-300 ${
            sidenavOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full px-6 py-6">
            <div className="flex items-center justify-between mb-8">
              <Image
                src={ComptwareLogo}
                alt="Comptware"
                width={120}
                height={50}
                className="h-auto w-[110px]"
              />
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setSidenavOpen(false)}
                className="w-9 h-9 rounded-full border border-white/15 text-white hover:bg-white/10 transition-colors"
              >
                X
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveNav(item.label);
                    setSidenavOpen(false);
                    scrollToSection(item.id);
                  }}
                  className="text-left text-white text-[16px] font-medium px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-10 pt-6">
              <button
                type="button"
                onClick={() => {
                  setSidenavOpen(false);
                  scrollToSection("contact");
                }}
                className="w-full bg-white text-[#3388FF] px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
