import React, { useState, useRef, useEffect } from "react";
import prop1 from "../../../assets/prop1.png";
import prop2 from "../../../assets/prop2.png";
import prop3 from "../../../assets/prop3.png";
import prop4 from "../../../assets/prop4.png";
import prop5 from "../../../assets/prop5.png";
import { Link, useNavigate } from "react-router-dom";

const PostPropertyForm = ({ service, onClose }) => {
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Reference to the dropdown menu
  const propertyData = {
    propertyTitle: "Property Title",
    listingId: "Add Listing ID",
    address: "Enter complete address",
    price: "Enter price",
    propertyType: "Flat",
    status: "Active",
    numberOfBedrooms: 3,
    numberOfBathrooms: 2,
    squareFootage: 33,
    yearBuilt: 2024,
    parking: "Yes",
    utilities: "Lorem",
    appliances: "No",
    outdoorAreas: "Yes",
    amenities: "Yes",
    wheelchairRamp: "Yes",
    managedBy: "Owner",
    petsAllowed: "Yes",
    smokingAllowed: "Yes",
    neighborhoodFacts: "No",
    unitTitle: "Unit Title",
    city: "Amsterdam",
    state: "Lorem",
    zip: "82762",
    beds: 3,
    baths: 3,
  };

  const navigate = useNavigate();
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleClose = () => {
    setSelectedInvoice(null); // Reset the selected invoice to null
  };

  // Handle input changes for form fields

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClick = () => {
    // Navigate to the route where LeaseForm is rendered
    navigate("/lease"); // Replace with your actual path
  };
  const rental = () => {
    // Navigate to the route where LeaseForm is rendered
    navigate("/rental"); // Replace with your actual path
  };

  // Close dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  // Add event listener for click outside dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // breadcrumb
  const handleBreadcrumbClick = () => {
    navigate("/Dashboard/services");
  };

  return (
    <div className="flex flex-col p-8 bg-white  rounded-lg w-full max-w-11xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-start items-start flex-col mb-6">
        {/* Breadcrumbs */}
        <div className="mb-4 text-sm">
          <button
            onClick={handleBreadcrumbClick}
            className="text-gray-500 hover:text-gray-700"
          >
            My Services
          </button>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-purple-600 font-medium">
            Post a Service or Property
          </span>
        </div>
        <h2 className="text-2xl font-semibold">Post a Service or Property</h2>
      </div>

      {/* Property Details Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="p-4 border rounded-md space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">
              Property Title
            </h3>
            <p className="text-gray-500">{propertyData.propertyTitle}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Listing ID</h3>
            <p className="text-gray-500">{propertyData.listingId}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Address</h3>
            <p className="text-gray-500">{propertyData.address}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Price</h3>
            <p className="text-gray-500">{propertyData.price}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Property Type</h3>
            <p className="text-gray-500">{propertyData.propertyType}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Status</h3>
            <p className="text-gray-500">{propertyData.status}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">
              Number of Bedrooms
            </h3>
            <p className="text-gray-500">{propertyData.numberOfBedrooms}</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="p-4 border rounded-md space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">
              Number of Bathrooms
            </h3>
            <p className="text-gray-500">{propertyData.numberOfBathrooms}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">
              Square Footage
            </h3>
            <p className="text-gray-500">{propertyData.squareFootage}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Year Built</h3>
            <p className="text-gray-500">{propertyData.yearBuilt}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Parking</h3>
            <p className="text-gray-500">{propertyData.parking}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Utilities</h3>
            <p className="text-gray-500">{propertyData.utilities}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Appliances</h3>
            <p className="text-gray-500">{propertyData.appliances}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-4 border rounded-md space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Outdoor Areas</h3>
            <p className="text-gray-500">{propertyData.outdoorAreas}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Amenities</h3>
            <p className="text-gray-500">{propertyData.amenities}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">
              Wheelchair Ramp
            </h3>
            <p className="text-gray-500">{propertyData.wheelchairRamp}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Managed By</h3>
            <p className="text-gray-500">{propertyData.managedBy}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Pets Allowed</h3>
            <p className="text-gray-500">{propertyData.petsAllowed}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">
              Smoking Allowed
            </h3>
            <p className="text-gray-500">{propertyData.smokingAllowed}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">
              Neighborhood Facts
            </h3>
            <p className="text-gray-500">{propertyData.neighborhoodFacts}</p>
          </div>
        </div>
      </div>

      {/* Bottom Section for Unit Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-md">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Unit Title</h3>
            <p className="text-gray-500">{propertyData.unitTitle}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">City</h3>
            <p className="text-gray-500">{propertyData.city}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">State</h3>
            <p className="text-gray-500">{propertyData.state}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">ZIP Code</h3>
            <p className="text-gray-500">{propertyData.zip}</p>
          </div>
        </div>

        <div className="p-4 border rounded-md">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Bedrooms</h3>
            <p className="text-gray-500">{propertyData.beds}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-medium text-gray-700">Baths</h3>
            <p className="text-gray-500">{propertyData.baths}</p>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor=""
        >
          Property location
        </label>
        <div class="w-full"></div>
      </div>
      {/* Property Pictures/Videos Section */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Pictures/Videos
        </label>
        <div className="flex space-x-4">
          {/* Image 1 */}
          <div className="flex-1 aspect-square">
            <img
              src={prop1}
              alt="Property 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* Image 2 */}
          <div className="flex-1 aspect-square">
            <img
              src={prop2}
              alt="Property 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* Image 3 */}
          <div className="flex-1 aspect-square">
            <img
              src={prop3}
              alt="Property 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* Image 4 */}
          <div className="flex-1 aspect-square">
            <img
              src={prop4}
              alt="Property 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* Image 5 */}
          <div className="flex-1 aspect-square">
            <img
              src={prop5}
              alt="Property 5"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Property Action Dropdown */}
      <div className="relative items-end justify-end flex">
        <button
          onClick={toggleDropdown}
          className=" p-2 mt-2 bg-violet-700 justify-end items-end text-white font-semibold rounded-md"
        >
          Action
        </button>
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute w-full mt-2 bg-white shadow-lg rounded-md z-10"
          >
            <Link to="/dashboard/lease">
              <button
                onClick={handleClick}
                className="w-full p-2 text-left hover:bg-gray-200"
              >
                Lease
              </button>
            </Link>
            <Link to="/dashboard/rental">
              <button
                onClick={handleClick}
                className="w-full p-2 text-left hover:bg-gray-200"
              >
                Rental
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPropertyForm;
