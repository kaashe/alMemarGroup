import React from "react";
// import whiteCar from "../../assets/white-car.png"  ;
import Const1 from "../../assets/const1.jpg";
import Const2 from "../../assets/const2.jpg";
import Const3 from "../../assets/const3.jpg";
const constructionList = [
  {
    name: "Construction Site 1",
    price: 100,
    image: Const1,
    aosDelay: "0",
  },
  {
    name: "Construction Site 2",
    price: 140,
    image: Const3,
    aosDelay: "500",
  },
  {
    name: "Construction Site 3",
    price: 100,
    image: Const2,
    aosDelay: "1000",
  },
];

const ConstrunctionList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Construction
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          our experienced team delivers a full range of construction services, handling projects from site preparation to building completion with unmatched precision and expertise
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {constructionList?.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="border border-gray-300 hover:border-primary p-4 rounded-xl shadow-lg group transition duration-300"
              >
                {/* Image Section */}
                <div className="w-full h-[220px] rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={data.image}
                    alt={data.name || "Machinery Image"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Section */}
                <div className="mt-4 text-center space-y-1">
                  <h1 className="text-primary font-bold text-lg">{data.name || "Unnamed Machinery"}</h1>
                  <div className="mt-2 text-sm font-semibold">
                    {/* ${data.price}/Day */}
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



export default ConstrunctionList
