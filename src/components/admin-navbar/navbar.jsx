"use client";

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/index";
import Geomall from "../../dates/imgs/logo1.png";
import logout from "../../dates/imgs/logout.png";
import logo from "../../dates/imgs/logo1.png";

const Navbar = () => {
  let { state, dispatch } = useContext(Context);
  let [theme, setTheme] = useState("light");

  useEffect(() => {
    const darkMenuElement = document.getElementById("darkmode");

    const updateTheme = () => {
      if (darkMenuElement) {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
          document.body.style.background = "black";
          darkMenuElement.textContent = "White Mode";
        } else {
          document.documentElement.classList.remove("dark");
          document.body.style.background = "white";
          darkMenuElement.textContent = "Dark Mode";
        }
      }
    };

    // Update the theme when the component mounts
    updateTheme();

    // Update the theme whenever 'theme' changes
    // and run this effect after the DOM has fully loaded
    window.addEventListener("DOMContentLoaded", updateTheme);

    return () => {
      // Cleanup event listener to avoid memory leaks
      window.removeEventListener("DOMContentLoaded", updateTheme);
    };
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  let toogle = () => {
    dispatch({ type: "SET_TOGGLE_NAVBAR", payload: !state.toggleNavbar });
  };
  return (
    <div className=" z-50 fixed left-0 top-0 right-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-[20px] inline-flex dark:bg-black dark:text-white transition-all">
      <div className=" flex gap-6 items-center">
        <div className=" border-r pr-6 border-[#e4e4e4]">
          <img src={logo} alt="" />
        </div>
        <div
          className=" text-xl font-semibold leading-8 text-[#19191C] cursor-pointer dark:text-white"
          onClick={toogle}
        >
          Dashboard
        </div>
      </div>
      <div className="justify-start items-start gap-8 flex">
        <div>
          <button
            onClick={handleThemeChange}
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none transition duration-300 ease-in-out hover:bg-gray-700 dark:bg-gray-400 dark:text-white dark:border border-white"
            id="darkmode"
          >
            Dark Mode
          </button>
        </div>
        <div className="hidden rounded-[50px] border border-neutral-200 justify-start items-start md:flex">
          <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-l-full duration-300 justify-start items-center gap-2 flex">
            <div className="w-6 h-6 relative">
              <div className=" h-5 left-[5.62px] top-[2px] absolute">
                <img className=" h-full" src={Geomall} alt="" />
              </div>
            </div>

            <div className="text-zinc-900 text-base font-normal leading-normal dark:text-white">
              GeoMall
            </div>
          </div>
          <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-r-full duration-300 border-l border-neutral-200 justify-start items-center gap-2 flex">
            <div className="w-6 h-6 relative">
              <div className=" h-5 left-[6.58px] top-[2px] absolute">
                <img className=" h-full" src={logout} alt="" />
              </div>
            </div>
            <div className="text-zinc-900 text-base font-normal leading-normal dark:text-white">
              Log Out
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-8 flex">
          <img
            className="w-11 h-11 rounded-full"
            src="https://via.placeholder.com/44x44"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
