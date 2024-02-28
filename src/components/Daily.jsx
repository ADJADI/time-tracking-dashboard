import React from "react";
import data from "../../../data.json";
import IconArray from "./IconArray";
import PropTypes from "prop-types";

export default function Daily({ colorVariants }) {
  const elementsPerRow = 3;

  return (
    <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:h-full md:-mt-2.5 md:gap-5">
      {data.slice(0, elementsPerRow * elementsPerRow).map((data, index) => (
        <div key={data.title} className="">
          <div className="flex flex-col">
            <span className=" h-4 bg-VeryDarkBlue z-50 relative"></span>
            <div
              className={`h-14 rounded-t-xl flex justify-end items-center ${
                colorVariants[data.title]
              }`}
            >
              <span className="pr-4">{IconArray[index].icon}</span>
            </div>
          </div>

          <div className="flex flex-col p-5 justify-center h-28 bg-DarkBlue rounded-xl -mt-5 z-50 relative md:justify-between hover:brightness-125  md:h-[80%] md:w-[150px] xl:w-[200px]">
            <div className="flex justify-between items-center md:items-baseline">
              <h2 className="text-xl md:text-sm">{data.title}</h2>
              <button className="text-PaleBlue text-3xl -mt-4">...</button>
            </div>
            <div className="flex items-center justify-between md:flex-col md:justify-left md:items-baseline md:gap-4">
              <h2 className="text-2xl font-extralight md:text-4xl ">
                {data.timeframes.daily.current}hrs
              </h2>
              <p className="text-xs text-PaleBlue md:pb-1">
                Last Month -{data.timeframes.daily.previous}hrs
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Daily.propTypes = {
  colorVariants: PropTypes.object.isRequired,
};
