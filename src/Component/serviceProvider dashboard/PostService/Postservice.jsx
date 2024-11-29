import React from 'react';

const PostForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Example Input Fields */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">Property Title</label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">City</label>
            <select className="w-full border-gray-300 rounded-lg p-2">
              <option value="">Select city</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Add more fields as needed */}
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Property Location</h3>
        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          {/* Use a map library like react-leaflet or Google Maps API here */}
          <p className="text-gray-500">Map Placeholder</p>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Upload Files</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500">Drop files here</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500">Drop files here</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500">Drop files here</p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostForm;

