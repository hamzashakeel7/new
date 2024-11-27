import React from "react";

const Communitysearch = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4">
      {/* Header Section */}
      <div
        className="relative w-full max-w-5xl mx-auto mt-8 h-80 shadow-lg rounded-xl bg-cover bg-center"
        style={{ backgroundImage: "url('/communitypng.png')" }}
      >
        <div className="absolute inset-0 shadow-lg bg-purple-600 bg-opacity-50 flex items-center justify-center rounded-xl">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center">
            Community Resource
          </h1>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-3xl mx-auto my-8">
        <div className="flex flex-col sm:flex-row items-center border border-gray-300 rounded-md bg-white overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search for Supported Topics, Resources and Questions"
            className="flex-1 px-4 py-2 outline-none w-full"
          />
          <button className="bg-purple-500 text-white px-6 py-2 sm:rounded-l-none rounded-md sm:rounded-r-md hover:bg-purple-600 w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>

      {/* Dropdown Sections */}
      <div className="max-w-3xl mx-auto space-y-4">
        {[
          "Support Groups",
          "Local Assistance Centers",
          "Health and Wellness Resources",
        ].map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-full shadow-md bg-white"
          >
            <button className="w-full text-left px-4 py-3 font-medium flex justify-between items-center">
              {item}
              <span className="text-purple-500">▼</span>
            </button>
            {/* Dropdown content */}
            <div className="hidden px-4 py-2 text-gray-600">
              <p>Content for {item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communitysearch;
