import { Avatar } from "@radix-ui/react-avatar";
import React from "react";
import { AvatarImage } from "../../../shadcn/components/ui/Avatar";
import { useState } from "react";
import img from "../../../assets/prop2.png";

const PostFormedit = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const closeForm = () => {
    setIsFormVisible(false); // Set form visibility to false when close button is clicked
  };

  if (!isFormVisible) {
    return null; // Return null to not render the form if it is closed
  }

  return (
    <div className=" flex items-center justify-center">
      {/* Form Section */}
      <div className="rounded-lg p-8 bg-white w-[65vw] md:w-[90vw] lg:w-[75vw] max-h-[90vh] overflow-y-auto relative6">
        <div>
         
          <h1 onClick={closeForm}>
            {" "}
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.6875 12.1875H21.9375C22.153 12.1875 22.3597 12.2731 22.512 12.4255C22.6644 12.5778 22.75 12.7845 22.75 13C22.75 13.2155 22.6644 13.4222 22.512 13.5745C22.3597 13.7269 22.153 13.8125 21.9375 13.8125H5.6875C5.47201 13.8125 5.26535 13.7269 5.11298 13.5745C4.9606 13.4222 4.875 13.2155 4.875 13C4.875 12.7845 4.9606 12.5778 5.11298 12.4255C5.26535 12.2731 5.47201 12.1875 5.6875 12.1875Z"
                fill="black"
              />
              <path
                d="M6.02386 13L12.7627 19.7373C12.9153 19.8899 13.001 20.0968 13.001 20.3125C13.001 20.5283 12.9153 20.7352 12.7627 20.8878C12.6102 21.0404 12.4032 21.1261 12.1875 21.1261C11.9717 21.1261 11.7648 21.0404 11.6122 20.8878L4.29974 13.5753C4.22407 13.4998 4.16404 13.4102 4.12308 13.3115C4.08212 13.2127 4.06104 13.1069 4.06104 13C4.06104 12.8932 4.08212 12.7874 4.12308 12.6886C4.16404 12.5899 4.22407 12.5003 4.29974 12.4248L11.6122 5.1123C11.7648 4.95973 11.9717 4.87402 12.1875 4.87402C12.4032 4.87402 12.6102 4.95973 12.7627 5.1123C12.9153 5.26487 13.001 5.47179 13.001 5.68755C13.001 5.90331 12.9153 6.11023 12.7627 6.2628L6.02386 13Z"
                fill="black"
              />
            </svg>
          </h1>
        </div>
        <h2 className="text-2xl flex items-center font-bold mb-4 text-gray-800">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M13 25L4.95001 25L4.95001 3L22.95 3L22.95 14"
              stroke="#004A61"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path
              d="M9.00354 9L18.9565 9"
              stroke="#004A61"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path
              d="M9.00354 14L18.9565 14"
              stroke="#004A61"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path
              d="M9 19H13"
              stroke="#004A61"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path
              d="M25 20V25H17L17 20L21 17L25 20Z"
              stroke="#004A61"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path
              d="M21 23V25"
              stroke="#004A61"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
          </svg>
          Post a Service or Property
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Property Form Fields */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Property Title
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Listing Id
            </label>
            <input
              type="text"
              placeholder="Add ListingId"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Company Address
            </label>
            <input
              type="text"
              placeholder="Enter Company Address"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter Price"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Property Type
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select Type</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Status
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select status</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Number of Bedrooms
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select Number</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Number of Bathrooms
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select Number</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Square Footage
            </label>
            <input
              type="text"
              placeholder="Enter Square Footage"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Year built/remodeled
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Parking
            </label>
            <input
              type="text"
              placeholder="Enter Parking"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Utilities
            </label>
            <input
              type="text"
              placeholder="Enter Utilities"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Heating and Cooling Type
            </label>
            <input
              type="text"
              placeholder="Enter Heating and Cooling Type"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Extra Room / Features
            </label>
            <input
              type="text"
              placeholder="Enter Extra Features"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Appliances
            </label>
            <input
              type="text"
              placeholder="Enter Appliances"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Outdoor Areas
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Amenities
            </label>
            <input
              type="text"
              placeholder="Enter Amenities"
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Wheelchair/Ramp
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select</option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Extensive Description
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-[60vw] border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Map Section */}
        <div className="p-8 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Property Location
          </h3>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder</p>
          </div>
        </div>

        {/* Neighbor Fact, Pet Allowed, and Bath Fields */}
        <div className="grid grid-cols-1 md:flex flex-row space-x-6">
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Neighbor Fact
            </label>
            <input
              type="text"
              placeholder="Enter Fact"
              className="w-full md:w-[15vw] border border-gray-300 rounded-lg p-2 focus:border-blue-500"
            />
          </div>
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Pet Allowed
            </label>
            <select className="w-full md:w-[25vw] border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Bath
            </label>
            <select className="w-full md:w-[25vw] border border-gray-300 rounded-lg p-2 focus:border-blue-500">
              <option value="">Select</option>
            </select>
          </div>
        </div>

        {/* File Upload Section */}
        <div className=" p-8 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Upload Files
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <img src={img} alt="" />

            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
        </div>

        {/*Submitbuuton*/}
        <button className="bg-purple-600 w-full mt-6 h-8 text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default PostFormedit;
