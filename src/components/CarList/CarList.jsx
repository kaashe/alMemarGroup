import React from "react";
import { useTranslation } from "react-i18next";
import Zee1 from "../../assets/zee1.jpg";
import Jcb from "../../assets/jcb.png";
import crane from "../../assets/crane.png";
import excuator from "../../assets/excuator.jpg";
import clipart from "../../assets/belduz.png";
import forkfilt from "../../assets/forkfilt.png";

const carList = [
  { key: 0, price: 100, image: Jcb, aosDelay: "0" },
  { key: 1, price: 140, image: crane, aosDelay: "500" },
  { key: 2, price: 100, image: Zee1, aosDelay: "1000" },
  { key: 3, price: 100, image: excuator, aosDelay: "1000" },
  { key: 4, price: 100, image: clipart, aosDelay: "1000" },
  { key: 5, price: 100, image: forkfilt, aosDelay: "1000" }
];

const CarList = () => {
  const { t } = useTranslation();

  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          {t("carList.heading")}
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          {t("carList.description")}
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {carList?.map((data) => (
              <div
                key={data.key}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="border border-gray-300 hover:border-primary p-4 rounded-xl shadow-lg group transition duration-300"
              >
                {/* Image Section */}
                <div className="w-full h-[220px] rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={data.image}
                    alt={t(`carList.items.${data.key}.name`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Section */}
                <div className="mt-4 text-center space-y-1">
                  <h1 className="text-primary font-bold text-lg">
                    {t(`carList.items.${data.key}.name`)}
                  </h1>
                  <div className="mt-2 text-sm font-semibold">
                    {/* {`${data.price}/Day`} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
