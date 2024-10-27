import React from "react";
// import whiteCar from "../../assets/white-car.png"  ;
import Zee1 from "../../assets/zee1.jpg";
import Jcb from "../../assets/jcb.png";
import crane from "../../assets/crane.png";
import excuator from "../../assets/excuator.jpg";
import clipart from "../../assets/belduz.png";
const carList = [
  {
    name: "JCB & Telehandler",
    price: 100,
    image: Jcb,
    aosDelay: "0",
  },
  {
    name: "Crane",
    price: 140,
    image: crane,
    aosDelay: "500",
  },
  {
    name: "Dumper Truck",
    price: 100,
    image: Zee1,
    aosDelay: "1000",
  },
  {
    name: "Excuator",
    price: 100,
    image: excuator,
    aosDelay: "1000",
  },
  {
    name: "Clipart",
    price: 100,
    image: clipart,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          What we offer
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Our comprehensive range of heavy machinery and skilled operators is tailored to meet the demands of any construction project, from earthmoving to demolition. We prioritize reliability, safety, and efficiency to ensure your project runs smoothly from start to finish.
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {carList.map((data, index) => (
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
                    ${data.price}/Day
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
