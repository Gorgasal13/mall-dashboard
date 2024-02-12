import React, { useContext, useState } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import { Data } from "../../dates/jummy";

const Sidebar = () => {
  let [activeIcon, setActiveIcon] = useState("fa-solid fa-chart-pie");
  let [activeCat, setActiveCat] = useState("Sales");
  let [category, setCategory] = useState(Data[0].inside);
  let { state, dispatch } = useContext(Context);
  let ClickedIcon = (iconName) => {
    if (iconName.icon === activeIcon) {
      dispatch({ type: "SET_TOGGLE", payload: !state.toggle });
    } else {
      dispatch({ type: "SET_TOGGLE", payload: true });
      setActiveIcon(iconName.icon);
    }
    setCategory(iconName.inside);
    setActiveCat(iconName.inside[0].text);
  };
  return (
    <div className={`${state.toggleNavbar ? "block" : "hidden"}`}>
      <div
        onClick={() => {
          dispatch({ type: "SET_TOOGLE_NAVBAR", payload: false });
        }}
        className="fixed md:hidden z-40 left-0 top-0 right-0 bottom-0 bg-slate-700 backdrop-blur-3xl opacity-60 dark:bg-black dark:text-white"
      ></div>
      <div className=" h-full z-50 fixed drop-shadow-2xl md:drop-shadow flex">
        <div className="flex-col overflow-hidden md:overflow-auto justify-start items-start gap-4 flex bg-zinc-300 px-4 py-6 min-h-full dark:bg-black dark:text-white">
          {Data.map((icon, index) => {
            return (
              <div
                key={index}
                onClick={(r) => {
                  ClickedIcon(icon);
                }}
                className={`p-3.5 cursor-pointer ${
                  activeIcon === icon.icon
                    ? " text-white bg-gradient-to-bl from-purple-700 to-pink-300"
                    : "text-neutral-400"
                }  rounded-lg flex-col hover:text-black duration-300 justify-start items-center gap-2 flex`}
              >
                <i className={`${icon.icon} text-xl w-6 h-6 text-center `}></i>
              </div>
            );
          })}
        </div>
        <div
          className={`w-56 ${
            state.toggle ? "block" : "hidden"
          } h-full overflow-hidden md:overflow-auto py-6 bg-white border-r border-neutral-200 flex-col justify-start items-start gap-4 inline-flex dark:bg-black dark:text-white`}
        >
          {category.map(({ text, icon, url }, index) => {
            return (
              <Link
                to={`/admin-dashboard/${url}`}
                onClick={() => {
                  setActiveCat(text);
                }}
                key={index}
                className={`self-stretch duration-300 cursor-pointer px-[18px] dark:bg-black dark:text-white ${
                  activeCat === text
                    ? " bg-purple-50 bg-opacity-80 border-b-2 border-purple-600  dark:bg-black dark:text-white"
                    : "text-zinc-500 hover:bg-neutral-200"
                } py-3.5 justify-start items-center gap-3 inline-flex`}
              >
                <div
                  className={`w-6 relative ${
                    activeCat === text ? "text-purple-600" : "text-zinc-500"
                  } text-xl dark:bg-black dark:text-white`}
                >
                  <i className={`${icon}`}></i>
                </div>
                <div
                  className={`grow shrink basis-0 ${
                    activeCat === text
                      ? "text-purple-600 font-semibold dark:bg-black dark:text-white"
                      : "text-zinc-500  font-normal"
                  } text-sm leading-tight`}
                >
                  {text}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;