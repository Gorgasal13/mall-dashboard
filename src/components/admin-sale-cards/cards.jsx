import React from "react";
import { cards } from "../../dates/jummy";

const Cards = () => {
  return (
    <div className=" justify-start w-full items-start flex-wrap xl:flex-nowrap gap-4 inline-flex dark:bg-black dark:text-white">
      {cards.map(
        (
          { text, icon, money, percent, percentColor, trend, iconColor },
          index
        ) => {
          return (
            <div
              key={index}
              className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start gap-4 bg-white flex dark:bg-black dark:text-white"
            >
              <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex dark:bg-black dark:text-white">
                <div className="w-full h-[164px] px-6 pt-6 pb-4 bg-white rounded-xl shadow flex-col justify-start items-start gap-6 flex dark:bg-black dark:text-white">
                  <div className="self-stretch justify-start items-center gap-3 inline-flex dark:bg-black dark:text-white">
                    <div className={`w-6 h-6 relative ${iconColor}`}>
                      <i className={icon}></i>
                    </div>
                    <div className="grow shrink basis-0 text-zinc-900 text-base font-medium leading-normal dark:bg-black dark:text-white">
                      {text}
                    </div>
                  </div>
                  <div className="self-stretch h-[72px] flex-col justify-center items-start gap-1 flex dark:bg-black dark:text-white">
                    <div className="text-zinc-900 text-[40px] font-semibold leading-[48px] dark:bg-black dark:text-white">
                      {money}
                    </div>
                    <div className="h-5 relative flex gap-2 dark:bg-black dark:text-white">
                      <div
                        className={`${percentColor} flex items-center dark:bg-black dark:text-white`}
                      >
                        <div
                          className={` text-sm font-semibold leading-tight dark:bg-black dark:text-white`}
                        >
                          <i className={trend}></i>
                        </div>
                        <div className="">
                          <div className="text-sm font-semibold leading-tight dark:bg-black dark:text-white">
                            {percent}
                          </div>
                        </div>
                      </div>
                      <div className=" text-zinc-500 text-xs font-medium leading-[18px] dark:bg-black dark:text-white">
                        from last month
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full px-6 py-4 justify-between items-center gap-4 inline-flex dark:bg-black dark:text-white">
                  <div className="grow shrink basis-0 text-purple-600 text-sm font-semibold leading-tight dark:bg-black dark:text-white">
                    View detail
                  </div>
                  <i class="fa-solid fa-chevron-right text-purple-600 dark:bg-black dark:text-white"></i>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Cards;
