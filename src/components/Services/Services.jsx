import React from "react";
import { MdConstruction } from "react-icons/md";
import { FaTruckRampBox } from "react-icons/fa6";
import { GiHumanPyramid } from "react-icons/gi";
import { GiFloorHatch } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";

import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Construction Devision",
    icon: (
      <MdConstruction className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Construction Division specializes in delivering comprehensive construction solutions, from project planning and design to execution and management. With a focus on quality, safety, and efficiency, we ensure each project is built to the highest standards",
    aosDelay: "0",
  },
  {
    name: "Procurement Division",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Procurement Division streamlines the sourcing and acquisition of materials and equipment, ensuring timely and cost-effective support for all construction projects. Our team leverages a strong supplier network to maintain high standards and budget control across each phase of procurement.",
    aosDelay: "500",
  },
  {
    name: " Excavation Work",
    icon: (
      <FaTruckRampBox className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:"Almemar Group provides specialized excavation services, preparing sites with precision for foundations, utilities, and structural work. Our experienced team and advanced machinery ensure safe, efficient, and thorough excavation for all types of projects",
    aosDelay: "1000",
  },
  {
    name: "Man Power supply",
    icon: (
      <GiHumanPyramid className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:"Offers reliable manpower supply services, providing skilled and qualified personnel to meet the labor demands of construction and industrial projects. Our team ensures efficient workforce solutions tailored to project requirements.",
    aosDelay: "1000",
  },
  {
    name: "Floor Coatings Specialist",
    icon: (
      <GiFloorHatch className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:"Provides expert floor coating services, delivering durable and high-quality finishes for industrial, commercial, and residential floors. Our coatings enhance surface protection, durability, and aesthetics to meet project-specific needs.",
    aosDelay: "1000",
  },
  {
    name: "Water Proofing Specialist",
    icon: (
      <FaHandHoldingWater className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:"Offers professional waterproofing services, protecting structures from water damage and ensuring longevity. Our expertise covers a range of solutions for roofs, basements, and other vulnerable areas, tailored to withstand harsh conditions.",
    aosDelay: "1000",
  },
  {
    name: "Interlock Brick Pavers",
    icon: (
      <MdGridOn className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:"Our team of experienced drivers brings skill and precision to every project, ensuring safe and timely delivery of results.",
    aosDelay: "1000",
  },
];
const Services = () => {
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
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData?.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-[#EA9F00] duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
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
