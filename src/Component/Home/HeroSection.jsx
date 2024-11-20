import React from "react";
import hero from "../../assets/home/hero/hero.png";
import herohand from "../../assets/home/hero/herohand.png";
import heart from "../../assets/home/hero/heart.png";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="h-[760px] object-cover flex items-center justify-center">
        <img
          src={hero}
          alt="heroimage"
          className="w-[1100px] h-[760px] object-cover object-top"
        />
      </div>
      <div className="w-1/2 bg-gradient-to-t from-purple-800 to-purple-700 flex items-end justify-end flex-col h-[760px] ">
        <div className="flex items-end justify-end flex-col gap-5 relative top-[20rem] p-10 w-[55rem]">
          <h3 className="text-white text-2xl ">Hello</h3>
          <h1 className="text-white text-6xl font-bold text-right w-full mb-5">
            Welcome To The TLC Company, LLC
          </h1>
          <div className="absolute opacity-30">
            <img src={heart} alt="heart" className=" w-[20rem]" />
          </div>
          <p className="text-gray-100 text-xl text-center">
            The moral test of government is how that government treats those who
            are in the dawn of life, the children; those who are in the twilight
            of life, the elderly; and those who are in the shadows of life, the
            sick, the needy and the handicapped.
          </p>
          <p className="text-white font-bold shadow-lg">Hubert Humphreys</p>
        </div>
        <div className="relative">
          <img src={herohand} alt="hands" className="w-[45rem]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
