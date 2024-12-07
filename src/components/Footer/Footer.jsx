import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFax,
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
            <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Al Memar Trading & Cont Co
            </h1>
            <p className="text-sm">
              Founded in 1975, Al Memar Group is a distinguished and trusted name in the construction industry with decades of expertise in building residential villas, commercial buildings, and providing rental equipment solutions. Over the years, the group has built a solid reputation for delivering high-quality construction projects and offering reliable, cost-effective equipment rentals tailored to client needs.
              With a rich history of successful projects and a commitment to excellence, Al Memar Group has earned the trust of clients across various sectors. The company’s comprehensive services include villa and building construction, project management, and the provision of top-tier rental machinery, all backed by a deep understanding of industry standards and innovative construction practices.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaEnvelope />
              <p>support@almemargroup.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Cr No : 1094 | Doha Qatar</p>
            </div>
            <div className="flex items-center gap-3">
              <FaFax />
              <p>PO Box Tel/Fax +974 4442 1891</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot />
              <p>Zone 56, Street 995, Building 207, Office Bu Hamour</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaWhatsapp className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a target="_blank" href="https://www.facebook.com/AlMemarGroup?mibextid=LQQJ4d&rdid=g378GLkgTZ8tt0Dm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15cMxLnCqz%2F%3Fmibextid%3DLQQJ4d">
                <FaFacebook className="text-[#0866FF] text-3xl hover:text-primary duration-300" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/al-memar-trading-and-contracting-co-2a98b3336/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <FaLinkedin className="text-[#0A66C2] text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* <div className=" py-8 px-4 ">
            <h5 className="sm:text-xl text-1xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Sales & Purchasing Manager
            </h5>
            <p className="text-xl">
              Engr. Bashir Rehman
            </p>
            <p className="text-sm">
              Engr. Bashir Rehman is a highly skilled & results-driven Purchasing Manager with extensive experience in procurement and supply chain management. With a sharp focus on cost optimization and operational efficiency, he excels in sourcing high-quality materials, equipment’s , & services while ensuring timely delivery and adherence to budgetary constraints.

            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+974 7717 2141   |  +974 5582 8609</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaWhatsapp className="text-[#128C7E]" />
              <p className="text-[#128C7E]">
                <a href="https://wa.me/97477172141?text=Hi%20Bashir%20Rehman!" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationDot />
              <p>Doha, Qatar</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a target="_blank" href="https://www.facebook.com/Bashir.lala.PSF">
                <FaFacebook className="text-[#0866FF] text-3xl hover:text-primary duration-300" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/prince-bashir/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <FaLinkedin className="text-[#0A66C2] text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div> */}
          <div className=" py-8 px-4 ">
            <h5 className="sm:text-xl text-1xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              CEO & Contractor
            </h5>
            <p className="text-xl">
              Engr. Essa Khan
            </p>
            <p className="text-sm">
              Engr. Essa Khan is a highly skilled and experienced construction engineer and contractor with a distinguished career spanning over 22 years. Since 2002, he has built a reputation for his exceptional technical knowledge, strategic project management, and commitment to delivering high-quality results in the construction industry.

            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+974 5555 7137</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaWhatsapp className="text-[#128C7E]" />
              <p className="text-[#128C7E]">
                <a href="https://wa.me/97455557137?text=Hi%20Essa%20Khan!" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationDot />
              <p>Doha, Qatar</p>
            </div>
          </div>
          <div className=" py-8 px-4 ">
            <h5 className="sm:text-xl text-1xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Sales & Purchase Manager
            </h5>
            <p className="text-xl">
              Engr. Bashir Rehman
            </p>
            <p className="text-sm">
              Engr. Bashir Rehman is a highly skilled & results-driven Purchasing Manager with extensive experience in procurement and supply chain management. With a sharp focus on cost optimization and operational efficiency, he excels in sourcing high-quality materials, equipment’s , & services while ensuring timely delivery and adherence to budgetary constraints.

            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+974 7717 2141   |  +974 5582 8609</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaWhatsapp className="text-[#128C7E]" />
              <p className="text-[#128C7E]">
                <a href="https://wa.me/97477172141?text=Hi%20Bashir%20Rehman!" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationDot />
              <p>Doha, Qatar</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a target="_blank" href="https://www.facebook.com/Bashir.lala.PSF">
                <FaFacebook className="text-[#0866FF] text-3xl hover:text-primary duration-300" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/prince-bashir/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <FaLinkedin className="text-[#0A66C2] text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
