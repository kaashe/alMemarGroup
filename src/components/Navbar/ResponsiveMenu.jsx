import React from "react";
import { useTranslation } from "react-i18next";

const ResponsiveMenu = ({ showMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {[
              { id: 1, name: t("navbar.Home"), link: "/#" },
              { id: 3, name: t("navbar.About"), link: "/#about" },
              { id: 4, name: t("navbar.Bookings"), link: "/#booking" },
            ].map((data) => (
              <li key={data.id}>
                <a href={data.link} className="mb-5 inline-block font-sans">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by{" "}
          <a href="https://wolves-pack-4yv8.vercel.app/">WolvesPack</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
