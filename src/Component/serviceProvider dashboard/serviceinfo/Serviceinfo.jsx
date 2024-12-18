import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

const ServiceInfoform = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const handleBreadcrumbClick = () => {
    const currentDashboard = getCurrentDashboard(location.pathname);
    const path = dashboardPaths[currentDashboard];
    navigate(path);
  };

  return (
    <div className="w-[80vw] mx-auto bg-white rounded-lg py-6">
      {/* Breadcrumbs */}
      <div className="mb-4 text-sm">
        <button
          onClick={handleBreadcrumbClick}
          className="text-gray-500 hover:text-gray-700"
        >
          post a service / property
        </button>
        <span className="mx-2 text-gray-400">&gt;</span>
        <span className="text-purple-600 font-medium">service information</span>
      </div>

      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <span role="img" aria-label="service-icon" className="mr-2">
            📄
          </span>{" "}
          Service Information
        </h2>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-3">
          <label className="block w-full text-gray-700 text-sm font-medium mb-1">
            Company Name
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Company Name"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Address Line 1
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Address Line 1"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Address Line 2
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Address Line 2"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Phone
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Phone"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="email"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Contact Person
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Contact Person"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Website
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Website"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Geographical Area Serviced
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Select Area"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Industry
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Industry"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Specialty Services
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Specialty Services"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Services Schedule in Advance
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Services Schedule in Advance"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Services Provided
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Services Provided"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Office Hours
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Office Hours"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Industry
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Industry"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Services Provided
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            placeholder="Services Provided"
          />
        </div>
      </form>

      {/* Image Upload Section */}
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
      <div className="space-x-4 items-end lg:ml-96 lg:pl-96  justify-end ml-32 pl-0">
        <button className="text-purple-500">Cancel</button>
        <button className="text-white bg-purple-600 h-10 px-2 py-2 rounded-lg">
          Upload
        </button>
      </div>

      <div className="">
        <button className="bg-purple-700 w-full mt-5 h-10 rounded-lg text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default ServiceInfoform;
