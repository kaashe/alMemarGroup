import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
              {t('footer.conpanyBackground')}
            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaEnvelope />
              <p>support@almemargroup.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>{t('footer.crno')}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaFax />
              <p>{t('footer.pobox')}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot />
              <p>{t('footer.zone')}</p>
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
          <div className=" py-8 px-4 ">
            <h5 className="sm:text-xl text-1xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              {t('footer.ceo')}
            </h5>
            <p className="text-xl">
              Engr. Essa Khan
            </p>
            <p className="text-sm">
              {t('footer.ceoIntro')}
            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+974 5555 7137</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaWhatsapp className="text-[#128C7E]" />
              <p className="text-[#128C7E]">
                <a href="https://wa.me/97455557137?text=Hi%20Essa%20Khan!" target="_blank" rel="noopener noreferrer">{t('footer.whatsap')}</a>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationDot />
              <p>Doha, Qatar</p>
            </div>
          </div>
          <div className=" py-8 px-4 ">
            <h5 className="sm:text-xl text-1xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              {t('footer.sales&purch')}
            </h5>
            <p className="text-xl">
              Engr. Bashir Rehman
            </p>
            <p className="text-sm">
              {t('footer.salesIntro')}

            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+974 7717 2141   |  +974 5582 8609</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaWhatsapp className="text-[#128C7E]" />
              <p className="text-[#128C7E]">
                <a href="https://wa.me/97477172141?text=Hi%20Bashir%20Rehman!" target="_blank" rel="noopener noreferrer">{t('footer.whatsap')}</a>
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
