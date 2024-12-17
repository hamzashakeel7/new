import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const dashboardPaths = {
  superadmin: "/superadmin/properties",
  property: "/propertyownerdashboard/properties",
  nonprofit: "/nonprofit/MyPropertyServices",
  realestate: "/realestatedashboard/properties",
};

const getCurrentDashboard = (pathname) => {
  const dashboard = Object.keys(dashboardPaths).find((key) =>
    pathname.includes(key)
  );
  return dashboard || "superadmin"; // Default to superadmin if no match found
};

const PostForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const handleBreadcrumbClick = () => {
    const currentDashboard = getCurrentDashboard(location.pathname);
    const path = dashboardPaths[currentDashboard];
    navigate(path);
  };
  return (
    <div className="bg-white min-h-screen w-[80vw] p-6">
      {/* Form Section */}
      <div className=" bg-white px-6">
        {/* Breadcrumbs */}
        {/* <div className="mb-4 text-sm">
          <button
            onClick={handleBreadcrumbClick}
            className="text-gray-500 hover:text-gray-700"
          >
            post a service / property
          </button>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-purple-600 font-medium">Property</span>
        </div> */}
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
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
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
              Extra Room /Features
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
            <label className="block text-gray-600 text-sm font-medium mb-2 mt-2">
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
            <select className="w-full md:w-[30vw] border border-gray-300 rounded-lg p-2 focus:border-blue-500">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["floor plans", "pics", "Virtual Tour"].map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
              >
                <div className=" ml-0 lg:ml-14 ">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 63.635L40 39.945V44.065"
                      stroke="#6F7787"
                      stroke-width="2.472"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    />
                    <path
                      d="M28.67 51.305L40 39.975L51.33 51.305"
                      stroke="#6F7787"
                      stroke-width="2.472"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    />
                    <path
                      d="M48.2397 63.6055C61.1895 62.5253 71.092 51.6031 70.9021 38.6098C70.7121 25.6164 60.4946 14.9884 47.5188 14.2871C34.5429 13.5859 23.2395 23.0508 21.6503 35.948C14.2778 36.6796 8.77369 43.0632 9.13497 50.4631C9.49626 57.863 15.596 63.68 23.0047 63.69L31.7597 63.69"
                      stroke="#6F7787"
                      stroke-width="2.472"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-500">Drop files here</p>
                <h4 className="text-slate-500">{item}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-end space-x-4">
          <button className="text-purple-700">Cancel</button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700">
            Upload
          </button>
        </div>
        {/*Submitbuuton*/}
        <button className="bg-purple-600 w-full mt-6 h-8 text-white rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostForm;
