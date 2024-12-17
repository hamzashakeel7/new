import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

const Transportform = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBreadcrumbClick = () => {
    const currentDashboard = getCurrentDashboard(location.pathname);
    const path = dashboardPaths[currentDashboard];
    navigate(path);
  };
  return (
    <>
      {/* Modal */}
      <div className=" w-[80vw] lg:w-full mx-auto  rounded-lg p-6">
        <div className=" w-full rounded-lg px-4 overflow-hidden">
          {/* Modal Header */}
          <div className="flex justify-start items-center border-b pb-2 mb-4">
            <div>
              {/* Breadcrumbs */}
              <div className="mb-4 text-sm">
                <button
                  onClick={handleBreadcrumbClick}
                  className="text-gray-500 hover:text-gray-700"
                >
                  post a service / property
                </button>
                <span className="mx-2 text-gray-400">&gt;</span>
                <span className="text-purple-600 font-medium">
                  Transportation
                </span>
              </div>
              <h2 className="text-lg font-semibold">
                <span role="img" aria-label="service-icon" className="mr-2">
                  📄
                </span>
                Transportation
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto overflow-x-hidden">
            <h3 className="text-md font-medium mb-4">Vehicle Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Select Location
                </label>
                <select
                  id="location"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option>Select Location</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="dropoff"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Drop Off Location
                </label>
                <select
                  id="dropoff"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option>Drop Off Location</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="distance"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Distance
                </label>
                <input
                  type="text"
                  id="distance"
                  placeholder="Enter distance"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="companions"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Companions
                </label>
                <select
                  id="companions"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option>Companions</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="waitTime"
                  className="block mb-1 font-normal text-gray-700"
                >
                  Wait Time
                </label>
                <input
                  type="text"
                  id="waitTime"
                  placeholder="Enter wait time"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
            </div>

            {/* File Upload Section */}
            <div className="mb-6 flex  w-full">
              <div className="w-full">
                <h3 className="text-lg font-medium text-gray-800 mb-4 ">
                  Upload Files
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="border-2 border-dashed w-full border-gray-300 rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-4">
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
                          strokeWidth="2.472"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M28.67 51.305L40 39.975L51.33 51.305"
                          stroke="#6F7787"
                          strokeWidth="2.472"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M48.2397 63.6055C61.1895 62.5253 71.092 51.6031 70.9021 38.6098C70.7121 25.6164 60.4946 14.9884 47.5188 14.2871C34.5429 13.5859 23.2395 23.0508 21.6503 35.948C14.2778 36.6796 8.77369 43.0632 9.13497 50.4631C9.49626 57.863 15.596 63.68 23.0047 63.69L31.7597 63.69"
                          stroke="#6F7787"
                          strokeWidth="2.472"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">Drop files here</p>
                    <p className="text-gray-500">Supported files PNG orJPG</p>
                    <span>OR</span>

                    <p className="text-violet-900">Browse Files</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex ml-28 lg:ml-96 lg:pl-96 mb-6 mt-4 space-x-4">
              <button className="text-purple-700 hover:text-purple-900">
                Cancel
              </button>
              <button className="bg-violet-700 px-2 py-2 rounded-lg h-10 text-white">
                Upload
              </button>
            </div>

            <button className="bg-purple-700 h-10 w-full mt-4 mb-12 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportform;
