import React from "react";

const Transportationform = () => {
  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div
          className="bg-white w-full max-w-3xl rounded-lg p-6 shadow-lg overflow-hidden"
          style={{ maxHeight: "90vh" }} // Limit the modal's height
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-lg font-semibold">
              <span role="img" aria-label="service-icon" className="mr-2">
                📄
              </span>
              Transportation
            </h2>
            <button className="text-gray-500 hover:text-gray-700">&times;</button>
          </div>

          {/* Modal Body */}
          <div
            className="overflow-y-auto overflow-x-hidden"
            style={{ maxHeight: "80vh" }}
          >
            <h3 className="text-md font-medium mb-4">Vehicle Information</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
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

            <div className="grid grid-cols-2 gap-4 mb-4">
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

            {/* Uploaded Files */}
            <h3 className="text-md font-medium mb-4">Uploaded Files</h3>
            <div className="grid grid-cols-3 gap-4 mb-28">
              <div className="h-44 bg-gray-200 rounded flex justify-center items-center">
                <span>File 1</span>
              </div>
              <div className="h-44 bg-gray-200 rounded flex justify-center items-center">
                <span>File 2</span>
              </div>
              <div className="h-44 bg-gray-200 rounded flex justify-center items-center">
                <span>File 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportationform;
