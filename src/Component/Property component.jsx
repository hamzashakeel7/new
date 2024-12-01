import React from 'react';
import banner from "../../src/assets/home/prperty/banner.png";
import detail1 from "../../src/assets/home/prperty/asset1.png";
import detail2 from "../../src/assets/home/prperty/asset 2.png";
import detail3 from "../../src/assets/home/prperty/asset3.png";
import bg from "../../src/assets/home/prperty/bg3.png"; // Background image for "How It Works"

const Propertycomponent = () => {
  const properties = [
    {
      id: 1,
      name: "Modern Villa",
      location: "Los Angeles, CA",
      price: "$2,500,000",
      image: detail1,
    },
    {
      id: 2,
      name: "Cozy Apartment",
      location: "New York, NY",
      price: "$850,000",
      image: detail2,
    },
    {
      id: 3,
      name: "Luxury Penthouse",
      location: "Miami, FL",
      price: "$5,000,000",
      image: detail3,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
        {/* Glass container */}
     
          {/* Three sections */}
         {/* Search Bar Section */}
<div className="absolute inset-x-0 bottom-[-50px] mx-auto bg-black opacity-75 backdrop-blur-lg shadow-lg rounded-lg w-[90%] p-6  flex-wrap items-center justify-between gap-4">
  {/* Location Input */}
  <div className='text-white items-start FONT-BOLD'>WHAT DO YOU NEED?</div>
  <div className=' flex flex-cols space-x-6'>
  <div className="  items-start w-1/3 md:w-1/3">
    <label className="text-black font-semibold mb-1">Location</label>
    <input
      type="text"
      placeholder="Enter location"
      className="px-4 py-2 rounded-lg border border-gray-300 w-full"
    />
  </div>
  {/* Property Type Dropdown */}
  <div className="flex flex-col items-start w-1/3 md:w-1/3">
    <label className="text-black font-semibold mb-1">Type</label>
    <select className="px-4 py-2 rounded-lg border border-gray-300 w-full">
      <option value="villa">Villa</option>
      <option value="apartment">Apartment</option>
      <option value="penthouse">Penthouse</option>
    </select>
  </div>
  {/* Price Range Input */}
  <div className="flex flex-col items-start w-1/3 md:w-1/3">
    <label className=" font-semibold mb-1">Price Range</label>
    <input
      type="text"
      placeholder="Min - Max"
      className="px-4 py-2 rounded-lg border border-gray-300 w-full"
    />
  </div>
  </div>
  {/* Search Button */}
  <div className="flex justify-center mt-4 md:mt-0 w-full">
    <button className="bg-purple-500 text-white rounded-full px-8 py-2 text-lg shadow hover:bg-purple-600 transition">
      Search →
    </button>
  </div>


          
          {/* White ball with avatar */}
          <div className="absolute top-[-40px] right-[10px] w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="purple"
              viewBox="0 0 24 24"
              stroke="purple"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </div>
        </div>

        {/* Banner Content */}
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
  <div className="space-y-6 text-center">
    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
      Modern Infrastructure
    </h1>
    {/* Paragraph */}
    <p className="text-sm sm:text-base mr-14 lg:text-lg text-gray-700 max-w-xl mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing emoem efnoenf mfo
    </p>
    {/* Button */}
    <button
      className=" text-purple-700 px-6 py-3 sm:mr-96 pr-20 rounded-lg text-lg sm:text-xl    transition-all"
      style={{ fontSize: "24px" }}
    >
      Explore Now →
    </button>
  </div>
</div>

      </div>

      {/* How It Works Section */}
      <div
  className="bg-cover bg-center bg-no-repeat items-start"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="bg-orange-100 w-full bg-opacity-50 py-12">
    <h2 className="text-center text-2xl font-bold text-black mb-6">
      How It Works
    </h2>
    <div className="flex justify-around">
      <div className="text-center flex flex-col items-center">
        <img src={detail1} alt="Step 1" className="w-16 h-16 mx-auto" />
        <p className="mt-4">Search for properties</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <img src={detail2} alt="Step 2" className="w-16 h-16 mx-auto" />
        <p className="mt-4">Contact the agents</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <img src={detail3} alt="Step 3" className="w-16 h-16 mx-auto" />
        <p className="mt-4">Close the deal</p>
      </div>
    </div>
  </div>

  {/* Property Cards */}
  <div className="px-6 mb-9 mt-14" >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{property.name}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-purple-600 font-bold">{property.price}</p>
            <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg">
              View Details →
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default Propertycomponent;
   