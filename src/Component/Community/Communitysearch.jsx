import React from "react";

const Communitysearch = () => {
  return (
    <div className="min-h-screen  px-4">
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
            placeholder="earch for Supported Topics, Resources and Questions"
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
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1785 11.5125C10.5277 12.1633 9.47233 12.1633 8.8215 11.5125L0.48815 3.17917C-0.162717 2.52829 -0.162717 1.47302 0.48815 0.822134C1.13903 0.171268 2.1943 0.171268 2.84518 0.822134L10 7.97699L17.1548 0.822134C17.8057 0.171268 18.861 0.171268 19.5118 0.822134C20.1627 1.47302 20.1627 2.52829 19.5118 3.17917L11.1785 11.5125Z" fill="#7415E2"/>
</svg>

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
