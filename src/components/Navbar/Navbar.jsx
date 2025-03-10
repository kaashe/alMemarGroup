import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo1 from "../../assets/1.png";
import logo2 from "../../assets/2.png";
import lightLogo from "../../assets/craneLogo.png";
import { LanguageSwitcher } from "../../App";
import { useTranslation } from "react-i18next";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const Navlinks = [
    {
      id: 1,
      name: t("navbar.Home"),
      link: "/#",
    },
    {
      id: 3,
      name: t("navbar.About"),
      link: "/#about",
    },
    {
      id: 4,
      name: t("navbar.Bookings"),
      link: "/#booking",
    },
  ];
  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <div>
            <span className="text-2xl font-extrabold font-serif tracking-wide text-[#EA9F00]"
            >
              <img
                src={theme === "dark" ? lightLogo : lightLogo}
                alt=""
                className="sm:scale-125 relative -z-10 max-w-[100px] "
              />
            </span>
          </div>
          {/* Desktop Navbar */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-semibold font-sans hover:text-primary transition duration-300 hover:border-b-2 hover:border-primary tracking-wide"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <LanguageSwitcher />
              {/* Dark Mode Toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark Mode Toggle for Mobile */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            <LanguageSwitcher />
            {/* Mobile Menu Icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
