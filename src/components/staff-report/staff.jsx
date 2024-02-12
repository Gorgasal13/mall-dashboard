import React from "react";
import { dateStaff } from "../../dates/jummy";
const Staff = () => {
  return (
    <div className="w-full bg-white rounded-xl p-6 dark:bg-black dark:text-white">
      <div className=" flex justify-between pb-4 dark:bg-black dark:text-white">
        <div className=" text-zinc-900 text-base font-semibold leading-normal dark:bg-black dark:text-white">
          Staff wise report
        </div>
        <div className=" text-right text-purple-700 text-sm font-semibold leading-tight dark:bg-black dark:text-white">
          View All
        </div>
      </div>
      <div className=" flex-col justify-start items-start inline-flex w-full dark:bg-black dark:text-white">
        {dateStaff.map(({ name, img, color, percent, money }) => {
          return (
            <div className="w-full px-6 py-3 bg-white border-b border-neutral-200 justify-start items-center gap-4 inline-flex dark:bg-black dark:text-white">
              <div className="grow shrink basis-0 h-11 justify-start items-center gap-4 flex dark:bg-black dark:text-white">
                <img src={img} alt="" />
                <div className="text-zinc-900 text-base font-medium leading-normal dark:bg-black dark:text-white">
                  {name}
                </div>
              </div>
              <div className="w-[92px] flex-col justify-start items-start inline-flex dark:bg-black dark:text-white">
                <div className="self-stretch text-right text-zinc-900 text-base font-medium leading-normal dark:bg-black dark:text-white">
                  {money}
                </div>
                <div
                  className={`self-stretch text-right ${color} text-xs font-normal leading-[18px]`}
                >
                  {percent}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;

// shahribek
