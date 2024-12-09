import React from "react";
import { MdConstruction, MdGridOn } from "react-icons/md";
import { FaTruckRampBox } from "react-icons/fa6";
import { GiHumanPyramid, GiFloorHatch, GiNotebook } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const icons = [
    <MdConstruction className="text-5xl text-primary group-hover:text-black duration-300" />,
    <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
    <FaTruckRampBox className="text-5xl text-primary group-hover:text-black duration-300" />,
    <GiHumanPyramid className="text-5xl text-primary group-hover:text-black duration-300" />,
    <GiFloorHatch className="text-5xl text-primary group-hover:text-black duration-300" />,
    <FaHandHoldingWater className="text-5xl text-primary group-hover:text-black duration-300" />,
    <MdGridOn className="text-5xl text-primary group-hover:text-black duration-300" />
  ];

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              {t("services.title")}
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {t("services.items", { returnObjects: true })?.map((service, index) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={index * 500}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-[#EA9F00] duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{icons[index]}</div>
                <h1 className="text-2xl font-bold">{service.name}</h1>
                <p>{service.description}</p>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  {service.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
