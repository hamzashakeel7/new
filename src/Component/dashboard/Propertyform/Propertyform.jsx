import React, { useState } from "react";
import { FaBell, FaComment } from "react-icons/fa";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../shadcn/components/ui/Avatar";
import { Link } from "react-router-dom";

const PropertyForm = () => {
  const [actionMenuOpen, setActionMenuOpen] = useState(false);

  const toggleActionMenu = () => {
    setActionMenuOpen(!actionMenuOpen);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="font-bold  text-gray-800">Post a Service or Property</div>
      <div className="flex items-center justify-end mb-4 space-x-4">
        <FaBell className="text-2xl text-gray-700" />
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="text-xl text-gray-700">&larr;</button>
          <img className="w-6" src="/formlogo.webp" alt="" />
          <h2 className="text-2xl font-bold text-gray-800">
            Post a Service or Property
          </h2>
        </div>
      </header>

      {/* Main Form Section */}
      <section className="space-y-6">
        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div>
            <label className="block text-gray-600 mb-1">Property Title</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Property Title"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Listing ID</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Listing ID"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Complete Address</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Complete Address"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Price</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Price"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Property Type</label>
            <select className="p-2 border border-gray-300 rounded w-full">
              <option>Select Property Type</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Status</label>
            <select className="p-2 border border-gray-300 rounded w-full">
              <option>Rent</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Number of Bedrooms
            </label>
            <select className="p-2 border border-gray-300 rounded w-full">
              <option>Select Number of Bedrooms</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Number of Bathrooms
            </label>
            <select className="p-2 border border-gray-300 rounded w-full">
              <option>Select Number of Bathrooms</option>
            </select>
          </div>
        </div>

        {/* More Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div>
            <label className="block text-gray-600 mb-1">Square Footage</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Square Footage"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Year Built/Remodeled
            </label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Year Built/Remodeled"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Parking</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Parking"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Utilities</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Utilities"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Heating And Cooling Type
            </label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Enter type"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Appliances</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Appliances"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Outdoor Areas</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Outdoor Areas"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Amenities</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Amenities"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Wheel Chair Ramp</label>
            <select className="p-2 border border-gray-300 rounded w-full">
              <option>Select Wheel Chair Ramp</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">
            Extensive Description
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter extensive description"
          ></textarea>
        </div>
      </section>

      {/* Unit Information */}
      <section className="space-y-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div>
            <label className="block text-gray-600 mb-1">Unit Title</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Unit Title"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Address</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Address"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">City</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">State</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="State"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">ZIP</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="ZIP"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Bedrooms</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Bedrooms"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Baths</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Baths"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Managed by</label>
            <input
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Managed By"
            />
          </div>

          <select className="p-2 border border-gray-300 rounded">
            <option>Amenities</option>
          </select>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="mt-8">
        <div className="bg-gray-200 p-4 text-center rounded">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2044169735864!2d-122.41941568469167!3d37.774929779759736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c7da39de7%3A0x82a2bb12c0e16e58!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1622127770400!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Neighborhood Facts */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Managed by */}
        <div>
          <label className="block text-gray-600 mb-1">Managed by</label>
          <input
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Managed by"
          />
        </div>

        {/* Pets Allowed */}
        <div>
          <label className="block text-gray-600 mb-1">Pets Allowed</label>
          <select className="p-2 border border-gray-300 rounded w-full">
            <option>Select Pets Allowed</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Smoking Allowed */}
        <div>
          <label className="block text-gray-600 mb-1">Smoking Allowed</label>
          <select className="p-2 border border-gray-300 rounded w-full">
            <option>Select Smoking Allowed</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </section>

      {/* Property Pictures/Videos */}
      <section className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            className="w-full h-40 object-cover rounded"
            src="image1.jpg"
            alt="Property 1"
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="image2.jpg"
            alt="Property 2"
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="image3.jpg"
            alt="Property 3"
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="image4.jpg"
            alt="Property 4"
          />
        </div>
      </section>

      {/* Footer with Actions */}
      <footer className="mt-8 flex items-center justify-between">
        <button className="px-4 py-2 bg-purple-600 text-white rounded flex items-center">
          <FaComment className="mr-2" /> Chat with Provider
        </button>
        <div className="relative space-x-6 gap-10">
          <button className="px-4 py-2 bg-purple-600  text-white rounded">
            Edit
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded">
            Save
          </button>
          {actionMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded">
              <Link to="/rental">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none whitespace-nowrap">
                  Submit an App Rental
                </button>
              </Link>
              <Link to="/lease">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none whitespace-nowrap">
                  Submit a Lease Form
                </button>
              </Link>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default PropertyForm;
