import React from "react";
import { useTranslation } from "react-i18next";
import Const1 from "../../assets/const1.jpg";
import Const2 from "../../assets/const2.jpg";
import Const3 from "../../assets/const3.jpg";
import constPre from "../../assets/constPre.jpg";

const constructionList = [
  {
    key: 0,
    price: 100,
    image: constPre,
    aosDelay: "1000",
  },
  {
    key: 1,
    price: 100,
    image: Const1,
    aosDelay: "0",
  },
  {
    key: 2,
    price: 140,
    image: Const3,
    aosDelay: "500",
  },
  {
    key: 3,
    price: 100,
    image: Const2,
    aosDelay: "1000",
  },
];

const ConstrunctionList = () => {
  const { t } = useTranslation();

  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          {t("constructionList.heading")}
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          {t("constructionList.description")}
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {constructionList?.map((data) => (
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
                    alt={t(`constructionList.items.${data.key}.name`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Section */}
                <div className="mt-4 text-center space-y-1">
                  <h1 className="text-primary font-bold text-lg">
                    {t(`constructionList.items.${data.key}.name`)}
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

export default ConstrunctionList;
