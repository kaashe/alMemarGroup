import React from "react";
import crane from "../../assets/crane.png";
import exuator from "../../assets/exuaPort.png";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={exuator}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[450px] "
            />
          </div>
          <div>
            <div className="space-y-3 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                {t("about.title")}
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                {t("about.description")}
              </p>

              <button data-aos="fade-up" className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-white">
                {t("about.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
