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
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  CEO & Contractor
                </h1>
                <p className="text-lg">
                  Essa Khan
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+974 5555 7137</p>
                </div>
              </div>
            </div>
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                    <span>&#11162;</span>
                    <span>{"Doha, Qatar"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
