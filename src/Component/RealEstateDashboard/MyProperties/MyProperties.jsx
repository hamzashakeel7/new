import React, { useState } from "react";
import { Link } from "react-router-dom";

import banner from "../../../assets/Serviceasset/sevicebanner.png";
import prop1 from "../../../assets/Serviceasset/sevicebanner.png";

export default function MyPropertiesServices() {
  // State to handle the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Sample properties data
  const properties = [
    {
      id: 1,
      name: "Central House",
      address: "North Carolina",
      price: "$255,000",
      image: prop1,
    },
    {
      id: 2,
      name: "Lakeview Apartment",
      address: "New York",
      price: "$350,000",
      image: prop1,
    },
  ];

  // Filter properties based on the search query
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100">
      {/* Properties Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl flex font-bold mb-4 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M22.9564 22.4348H20.6086V1.5652H21.3912C21.8234 1.5652 22.1738 1.21481 22.1738 0.782578C22.1738 0.350344 21.8234 0 21.3912 0C19.8626 0 3.31816 0 2.60857 0C2.17638 0 1.82595 0.350391 1.82595 0.782625C1.82595 1.21486 2.17634 1.56525 2.60857 1.56525H3.3912V22.4348H1.04337C0.61118 22.4348 0.260742 22.7852 0.260742 23.2174C0.260742 23.6497 0.611133 24 1.04337 24C1.51835 24 20.9871 24 22.9564 24C23.3886 24 23.739 23.6496 23.739 23.2174C23.739 22.7851 23.3886 22.4348 22.9564 22.4348ZM19.0434 22.4348H4.9564V1.5652H19.0434V22.4348Z"
              fill="black"
            />
          </svg>
          My Properties
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <circle cx="2.19095" cy="2.3815" r="2.19095" fill="#949494" />
          </svg>
        </h2>
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <table className="table-auto w-full border-b text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4">Thumbnail Image</th>
              <th className="p-4">Property Name</th>
              <th className="p-4">Address</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProperties.map((property) => (
              <tr key={property.id} className="border-b">
                <td className="p-4">
                  <img
                    src={property.image}
                    alt="Thumbnail"
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="p-4">{property.name}</td>
                <td className="p-4">{property.address}</td>
                <td className="p-4">{property.price}</td>
                <td className="p-4 space-x-4 flex justify-start">
                  <button className="text-blue-600 flex items-center space-x-2 text-sm">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.13388 14.8751L14.1339 4.87509L10.125 0.866211L0.125 10.8663V14.8751H4.13388ZM10.125 2.63398L12.3662 4.87509L10.75 6.49125L8.5089 4.25011L10.125 2.63398ZM7.62498 5.13399L9.86615 7.37509L3.61612 13.6251H1.375V11.384L7.62498 5.13399Z"
                        fill="#171A1F"
                      />
                    </svg>
                    <Link to="/propertyownerdashboard/propertyform">Edit</Link>
                  </button>
                  <button className="text-red-600 flex items-center space-x-2 text-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5599 5.3L11.5599 12.14C11.5599 12.7696 11.0495 13.28 10.4199 13.28L3.57994 13.28C2.95034 13.28 2.43994 12.7696 2.43994 12.14L2.43994 5.3"
                        stroke="#565D6D"
                        strokeWidth="1.368"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0.72998 3L13.27 3"
                        stroke="#565D6D"
                        strokeWidth="1.368"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M4.71997 3L4.71997 0.720001L9.27997 0.720001V3"
                        stroke="#565D6D"
                        strokeWidth="1.368"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M8.71004 7L5.29004 10.42"
                        stroke="#565D6D"
                        strokeWidth="1.368"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M8.71004 10.42L5.29004 7"
                        stroke="#565D6D"
                        strokeWidth="1.368"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredProperties.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No properties match your search.
          </p>
        )}
      </div>
    </div>
  );
}
