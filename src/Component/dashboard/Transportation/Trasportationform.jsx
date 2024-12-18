import React from "react";
import img from "../../../assets/vehicle.png";
import { useNavigate } from "react-router-dom";

const Transport = () => {
  const navigate = useNavigate();

  // breadcrumb
  const handleBreadcrumbClick = () => {
    navigate("/Dashboard/services");
  };

  return (
    <div className="w-4/5 lg:w-full mx-auto bg-white rounded-lg overflow-hidden">
      <div className="flex justify-start items-start flex-col p-4 border-b">
        {/* Breadcrumbs */}
        <div className="mb-4 text-sm px-4">
          <button
            onClick={handleBreadcrumbClick}
            className="text-gray-500 hover:text-gray-700"
          >
            My Services
          </button>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-purple-600 font-medium">Transportation</span>
        </div>
        <h2 className="text-lg font-semibold gap-3 flex items-center">
          <i className="mr-2 text-blue-500"></i>
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99995 24L1.94995 24L1.94995 2L19.95 2L19.95 13"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M6.00342 8L15.9564 8"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M6.00342 13L15.9564 13"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M6 18H10"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M22 19V24H14L14 19L18 16L22 19Z"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M18 22V24"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
          </svg>
          Transportation
        </h2>
      </div>

      <div className="p-6">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Card */}
          <div className="border border-gray-200 rounded-lg p-4">
            {[
              [" Name", "Property Title"],
              ["Address Line 1", "Add Listing ID"],
              ["Address Line 2", "Enter complete address"],
              ["Phone", "Enter price"],
              ["Email", "Flat"],
              ["Contact Person", "Active"],
              ["Office Hours", "3"],
            ].map(([label1, label2], index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b last:border-0 border-gray-100"
              >
                <span>{label1}</span>
                <span>{label2}</span>
              </div>
            ))}
          </div>

          {/* Second Card */}
          <div className="border border-gray-200 rounded-lg p-4">
            {[
              ["Website", "Property Title"],
              ["Geographical Area Serviced", "Add Listing ID"],
              ["Address Line 2", "Enter complete address"],
              ["Industry", "Enter price"],
              ["Services Provided", "Flat"],
              ["Specialty Services", "Active"],
              ["Services Schedule in Advance", "3"],
            ].map(([label1, label2], index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b last:border-0 border-gray-100"
              >
                <span>{label1}</span>
                <span>{label2}</span>
              </div>
            ))}
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            {[
              ["industry", "Property Title"],
              ["Service provided ", "Add Listing ID"],
            ].map(([label1, label2], index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b last:border-0 border-gray-100"
              >
                <span>{label1}</span>
                <span>{label2}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Uploaded Files */}
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Uploaded Files</h3>
          <div className="flex gap-4 justify-between overflow-x-scroll">
            <img
              src={img}
              alt="File 1"
              className="w-full h-60 object-cover rounded-lg border border-gray-200"
            />
            <img
              src={img}
              alt="File 2"
              className="w-full h-60 object-cover rounded-lg border border-gray-200"
            />
            <img
              src={img}
              alt="File 3"
              className="w-full h-60 object-cover rounded-lg border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
