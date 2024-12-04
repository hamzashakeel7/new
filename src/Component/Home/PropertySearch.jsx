import * as React from "react";
import { Input } from "../../shadcn/components/ui/Input";
import propertySeach from "../../assets/home/propertySeach.webp";

export function PropertySearch() {
  return (
    <div className="relative mt-10 h-full lg:h-[250px] w-full overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${propertySeach})`,
          filter: "brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-purple-900/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <h2 className="lg:mb-2 mt-5 text-2xl lg:text-3xl font-bold">
          Property Search
        </h2>
        <p className="mb-4 lg:mb-8 text-lg text-gray-200">
          Where would you like to find a place?
        </p>
        <div className="flex w-full lg:max-w-4xl h-full flex-col gap-4 sm:flex-row text-black">
          <div className="flex-1 ">
            <label
              htmlFor="city"
              className="mb-1 block text-sm text-white font-semibold"
            >
              City
            </label>
            <Input
              id="city"
              className="h-10 bg-white/90 text-gray-900 placeholder:text-gray-500 "
              placeholder="Add Company Name"
            />
          </div>
          <div className="w-full sm:w-[20rem]">
            <label
              htmlFor="number"
              className="mb-1 block text-sm text-white font-semibold"
            >
              State
            </label>
            <Input
              id="number"
              className="h-10 bg-white/90 text-gray-900 placeholder:text-gray-500"
              placeholder="Add address"
            />
          </div>
          <div className="flex-1 mb-6 lg:mb-0">
            <label
              htmlFor="zip"
              className="mb-1 block text-sm text-white font-semibold"
            >
              ZIP
            </label>
            <Input
              id="zip"
              className="h-10 bg-white/90 text-gray-900 placeholder:text-gray-500"
              placeholder="Select city"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
