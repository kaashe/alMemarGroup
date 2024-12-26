import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "./utils/i18n";
import { I18nextProvider, useTranslation } from "react-i18next";
// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import ConstrunctionList from "./components/CarList/ConstrunctionList";
import MainBodies from "./components/MainBodies/MainBodies";
import JointVenture from "./components/JV/JointVenture";


export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const currentLanguage = i18n.language;
  return (
    <div className="language-switcher mr-5">
      {currentLanguage === "ar" ? (
        <button
          className="btn btn-xs btn-accent text-yellow-500  "
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
      ) : (
        <button
          className="btn btn-xs btn-accent text-yellow-500"
          onClick={() => changeLanguage("ar")}
        >
          {t("عربي")}
        </button>
      )}
    </div>
  );
};

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <I18nextProvider i18n={i18n}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <About />
        <JointVenture />
        <Services />
        <ConstrunctionList />
        <CarList />
        {/* <Testimonial /> */}
        <MainBodies />
        {/* <AppStoreBanner /> */}
        <Contact />
        <Footer />
      </I18nextProvider>
    </div>
  );
};

export default App;
