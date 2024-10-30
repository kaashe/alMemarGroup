import React from "react";
import crane from "../../assets/crane.png";
import exuator from "../../assets/exuaPort.png";
const About = () => {
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
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Al Memar Trading and Contracting Co, excels in the realm of excavators and deep excavations, showcasing unparalleled expertise and innovation. Our commitment to precision and safety in deep excavation projects sets us apart, ensuring efficient and reliable results every time. We harness advanced technology and skilled professionals to tackle even the most challenging projects, reflecting our dedication to excellence and client satisfaction. Trust us to deliver outstanding performance and value in every excavation endeavor.
              </p>

              <button data-aos="fade-up" className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
