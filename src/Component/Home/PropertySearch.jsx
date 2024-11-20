import * as React from "react";
import { Input } from "../../shadcn/components/ui/Input";
import propertySeach from "../../assets/home/propertySeach.png";

export function PropertySearch() {
  return (
    <div className="relative mt-10 h-[250px] w-full overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${propertySeach})`,
          filter: "brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-purple-900/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <h2 className="mb-2 text-3xl font-semibold">Property Search</h2>
        <p className="mb-8 text-sm text-gray-200">
          Where would you like to find a place?
        </p>
        <div className="flex w-full max-w-4xl flex-col gap-4 sm:flex-row text-black">
          <div className="flex-1 ">
            <label htmlFor="city" className="mb-1 block text-sm text-white">
              City
            </label>
            <Input
              id="city"
              className="h-10 bg-white/90 text-gray-900 placeholder:text-gray-500 "
              placeholder="Enter city"
            />
          </div>
          <div className="w-full sm:w-24">
            <label htmlFor="number" className="mb-1 block text-sm text-white">
              State
            </label>
            <Input
              id="number"
              className="h-10 bg-white/90 text-gray-900 placeholder:text-gray-500"
              placeholder="2"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="zip" className="mb-1 block text-sm text-white">
              ZIP
            </label>
            <Input
              id="zip"
              className="h-10 bg-white/90 text-gray-900 placeholder:text-gray-500"
              placeholder="Enter ZIP code"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
