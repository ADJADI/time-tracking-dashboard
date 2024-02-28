import React, { useState } from "react";
import Daily from "./Daily";
import Weekly from "./Weekly";
import Monthly from "./Montly";
import profilePic from "../../../images/image-jeremy.png";

export default function ChangingTimeline() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");
  const colorVariants = {
    Work: "bg-LightRed",
    Play: "bg-SoftBlue",
    Study: "bg-LightRedStudy",
    Exercise: "bg-LimeGreen",
    Social: "bg-Violet",
    SelfCare: "bg-SoftOrange",
  };

  return (
    <div className=" text-white pt-10 p-5 flex flex-col gap-5 pb-20 md:flex-row md:justify-center md:items-center md:h-screen">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className=" mt-2 flex flex-col md:w-[210px] md:h-[420px]">
          <div className="bg-Blue flex justify-center items-center gap-4 p-6 rounded-xl z-50 relative md:flex-col md:items-start md:h-full md:px-5  md:gap-8">
            <img
              src={profilePic}
              alt="profile-picture"
              className="h-[65px] bg-white rounded-full p-0.5"
            />
            <div className="">
              <h3 className="text-xs font-extralight text-PaleBlue">
                Report for
              </h3>
              <h4 className="text-2xl font-extralight">Jeremy Robson</h4>
            </div>
          </div>
          <div className="flex justify-between px-10 items-center bg-blue-950 rounded-b-xl p-6 -mt-2  md:flex-col md:items-start md:h-52 md:text-sm md:px-5">
            <button
              className=" text-PaleBlue hover:text-white"
              onClick={() => setSelectedTimeframe("daily")}
            >
              Daily
            </button>
            <button
              className=" text-PaleBlue hover:text-white"
              onClick={() => setSelectedTimeframe("weekly")}
            >
              Weekly
            </button>
            <button
              className=" text-PaleBlue hover:text-white"
              onClick={() => setSelectedTimeframe("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="">
          {selectedTimeframe === "daily" && (
            <Daily colorVariants={colorVariants} />
          )}
          {selectedTimeframe === "monthly" && (
            <Monthly colorVariants={colorVariants} />
          )}
          {selectedTimeframe === "weekly" && (
            <Weekly colorVariants={colorVariants} />
          )}
        </div>
      </div>
    </div>
  );
}
