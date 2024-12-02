import React from "react";
import purpleSection1 from "../../assets/home/purpleSection/purpleSection1.webp";
import purpleSection2 from "../../assets/home/purpleSection/purpleSection2.webp";
import purpleSection3 from "../../assets/home/purpleSection/purpleSection3.webp";
import purpleSection4 from "../../assets/home/purpleSection/purpleSection4.webp";
import purpleSection5 from "../../assets/home/purpleSection/purpleSection5.webp";
import purpleSection6 from "../../assets/home/purpleSection/purpleSection6.webp";
import { Link } from "react-router-dom";

export const PurpleSection = () => {
  return (
    <div className="bg-purple-700 w-full">
      <div className="px-10 py-20 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center">
          <h2 className="text-white text-2xl font-semibold w-full text-center">
            SilverTLC.com offers access to numerous services and appointment
            setting for each through one dashboard:
          </h2>
        </div>
        <div>
          {/* boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center justify-center mt-10 gap-5">
            {/* single box */}
            <div className="flex items-center justify-center flex-col">
              <div className=" h-[231px]">
                <img
                  src={purpleSection1}
                  alt="housing"
                  className="h-[281px] w-[307px]"
                />
              </div>
              <div className="p-4 bg-purple-700">
                <p className="text-white font-bold">Affordable Housing</p>
              </div>
            </div>
            {/* single box */}
            <div className="flex items-center justify-center flex-col">
              <div className=" h-[231px]">
                <img
                  src={purpleSection2}
                  alt="transportation"
                  className="h-[281px] w-[307px] object-cover"
                />
              </div>
              <div className="p-4 bg-purple-700">
                <p className="text-white font-bold">Transportation</p>
              </div>
            </div>
            {/* single box */}
            <div className="flex items-center justify-center flex-col">
              <div className=" h-[231px]">
                <img
                  src={purpleSection3}
                  alt="Adult-day"
                  className="h-[281px] w-[307px] object-cover"
                />
              </div>
              <div className="p-4 bg-purple-700">
                <p className="text-white font-bold">
                  Adult Day Care and Fitness Centers
                </p>
              </div>
            </div>
            {/* single box */}
            <div className="flex items-center justify-center flex-col">
              <div className=" h-[231px]">
                <img
                  src={purpleSection4}
                  alt="Skilled-Nursing"
                  className="h-[281px] w-[307px] object-cover"
                />
              </div>
              <div className="p-4 bg-purple-700">
                <p className="text-white font-bold">
                  Skilled Nursing and Home Health Care
                </p>
              </div>
            </div>
            {/* single box */}
            <div className="flex items-center justify-center flex-col">
              <div className=" h-[231px]">
                <img
                  src={purpleSection5}
                  alt="Grocery"
                  className="h-[281px] w-[307px] object-cover"
                />
              </div>
              <div className="p-4 bg-purple-700">
                <p className="text-white font-bold">
                  Grocery and medicine delivery
                </p>
              </div>
            </div>
            {/* single box */}
            <div className="flex items-center justify-center flex-col">
              <div className=" h-[231px]">
                <img
                  src={purpleSection6}
                  alt="moving"
                  className="h-[281px] w-[307px] object-cover"
                />
              </div>
              <div className="p-4 bg-purple-700">
                <p className="text-white font-bold">Moving</p>
              </div>
            </div>
          </div>

          {/* below links */}
          <div className="flex items-center justify-center mt-4">
            <p className="capitalize text-white font-bold text-xl w-full lg:w-1/2 text-center">
              To get access to these services, please{" "}
              <Link to="/register" className="underline">
                register
              </Link>{" "}
              or{" "}
              <Link to="/login" className="underline">
                Log-In here
              </Link>{" "}
              or in the above menu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
