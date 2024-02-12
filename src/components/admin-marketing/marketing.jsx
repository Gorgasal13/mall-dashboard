import React from "react";
import Options from "../../components/options/options";
import Column from "../../components/charts/marketing-bar/column";
import Pie from "../../components/charts/marketing-pie/pie";
import Items from "../../components/admin-items/items";
import Staff from "../../components/staff-report/staff";
import { topSellingAndGrossingItems } from "../../dates/jummy";
const Marketing = () => {
  return (
    <div className="p-6 min-h-screen dark:bg-black dark:text-white">
      <div className="dark:bg-black dark:text-white">
        <Options />
      </div>
      <div className="flex mb-6 gap-6 flex-wrap lg:flex-nowrap justify-between dark:bg-black dark:text-white">
        <div className="w-full dark:bg-black text-white">
          <Column />
        </div>
        <div className="w-full dark:bg-black dark:text-white">
          <Pie />
        </div>
      </div>
      <div className="w-full gap-6 lg:flex-nowrap flex-wrap flex justify-between dark:bg-black dark:text-white">
        {topSellingAndGrossingItems.map((date) => {
          return <Items array={date} />;
        })}
      </div>
      <div className="w-full my-6 dark:bg-black dark:text-white">
        <Staff />
      </div>
    </div>
  );
};

export default Marketing;
