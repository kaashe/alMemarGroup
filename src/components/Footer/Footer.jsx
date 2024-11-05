import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Al Memar Group
            </h1>
            <p className="text-sm">
              Al Memar Trading & Contracting Company has been a prominent player in the construction of buildings, homes, and residential projects since its founding in 1975.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+974 77172141 +974 55828609</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaEnvelope />
              <p>support@almemargroup.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Cr No : 1094 | Doha Qatar</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaWhatsapp className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          <div className=" py-8 px-4 ">
            <h5 className="sm:text-xl text-1xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
            CEO & Contractor
            </h5>
            <p className="text-xl">
             Essa Khan
            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+974 5555 7137</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationDot />
              <p>Doha, Qatar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
