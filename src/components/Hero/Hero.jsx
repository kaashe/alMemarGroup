import React, { useEffect, useState } from "react";
// import carPng from "../../assets/car.png";
import exuator from "../../assets/exuaPort.png";
import crane from "../../assets/crane.png";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const Hero = ({ theme }) => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? crane : crane}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[400px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-[#EA9F00] text-2xl font-serif">
              {t("hero.effortless")}
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              {t("hero.Powering Industries")}
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-white"
            >
              {t("hero.GetStarted")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
