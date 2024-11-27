import React from "react";

// Importing images
import MainProperty from "../../assets/home/prperty/asset1.png";
import Property1 from "../../assets/home/prperty/asset 2.png";
import Property2 from "../../assets/home/prperty/asset3.png";

import BedroomImage from "../../assets/../assets/home/prperty/prop1.png";
import BathroomImage from "../../assets/../assets/home/prperty/prop2.png";
import SqftImage from "../../assets/../assets/home/prperty/prop3.png";
import YearImage from "../../assets/../assets/home/prperty/prop4.png";
import ParkingImage from "../../assets/../assets/home/prperty/prop5.png";
import UtilitiesImage from "../../assets/../assets/home/prperty/prop6.png";
import HvacImage from "../../assets/../assets/home/prperty/prop7.png";
import WheelchairImage from "../../assets/../assets/home/prperty/prop8.png";
import location from "../../assets/../assets/home/prperty/location.png";
import map from "../../assets/../assets/home/prperty/map.png";
import { Avatar } from "@mui/material";
import {Footer} from "../../Component/Footer"
import {Navbar} from "../../Component/Navbar"
const PropertyDetail = () => {
  return (
    <div>
      <Navbar/>
    <div className="container mx-auto p-6 font-sans">

      {/* Overview Section */}
      <section className="mb-10">
        <div className=" flex-wrap items-center ml-36 flex  md:grid-cols-2 gap-6">
          {/* Images Section */}
          <div className="space-x-6 flex ">
            <img
              src={MainProperty}
              alt="Main Property"
              className="w-[90vh] h-[46vh] object-cover rounded-lg"
            />
            <div className="flex flex-wrap gap-4">
              <img
                src={Property1}
                alt="Property 1"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src={Property2}
                alt="Property 2"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
          </div>

          {/* Overview Text and Map */}
          <div className="space-y-6 space-x-3">
            Overview
            <h2 className="text-3xl font-bold text-gray-800">Property Information</h2>
            <p className="flex flex-wrap" style={{fontSize:"16px"}}><img className="w-3 h-5" src={location} alt="" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quam alias, velit er.</p>
          
          <div className="flex flex-row space-x-4">

            <p className="text-gray-600 bg-white shadow rounded-sm text-lg">
             <h1 className="font-bold mb-6">Over View</h1>
             <p className="mb-6">
              Featuring the latest throughout the property, this luxurious house offers
              spacious rooms, modern amenities, and close proximity to major parks and
              facilities. Explore a comfortable living experience designed for families
              and professionals alike.
              </p>
              <ul className="text-gray-700 space-y-2">
                <h1 className="font-bold">More Information</h1>
              <li>📍 123 Main Street, City, State</li>
              <li>💰 $1,500/month</li>
              <li>🗓️ Available for Rent</li>
              <li>📞 Contact: (555) 123-4567</li>
            </ul>
            </p>
            
            {/* Map Image */}
           
            <div className="container mx-auto p-6 font-sans">
      {/* Map Section with Text Below */}
      <div className="flex flex-col items-center mb-10">
        {/* Map Image */}
        <img
          src={map}
          alt="Property Map"
          className="w-full h-48 object-cover rounded-lg"
        />
        {/* Explore the Area Text */}
        <h2 className="text-2xl font-bold text-gray-800 mt-6">Explore the Area</h2>
        
        {/* Paragraphs - Flex Container */}
        <div className="flex flex-wrap gap-4 mt-4">
          {/* Flex Items - Each Paragraph Pair */}
          <div className="flex space-x-4 w-full">
            <p className="text-gray-600">📍 Hotel Pentivalia</p>
            <p className="text-gray-600">2 min drive</p>
          </div>
          <div className="flex space-x-4 w-full">
            <p className="text-gray-600">📍 Travis Bakery House</p>
            <p className="text-gray-600">4 min drive</p>
          </div>
          <div className="flex space-x-4 w-full">
            <p className="text-gray-600">📍 Johnson Garden Opal</p>
            <p className="text-gray-600">6 min drive</p>
          </div>
          <div className="flex space-x-4 w-full">
            <p className="text-gray-600">📍 Norman Opera Circus</p>
            <p className="text-gray-600">8 min drive</p>
          </div>
          <div className="flex space-x-4 w-full">
            <p className="text-gray-600">📍 Rock Desert Hotel</p>
            <p className="text-gray-600">10 min drive</p>
          </div>
        </div>
      </div>
    </div>

            
           
            
          </div>
          
          </div>
      
      </section>

      {/* Key Property Information */}
      <h3 className="text-2xl font-semibold mb-6 text-center">Key Property Information</h3>
<section className="mb-10 bg-white rounded-lg shadow p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Number of Bedrooms */}
    <div className="rounded-lg p-4 flex items-center text-center flex-col sm:flex-row">
      <img
        src={BedroomImage}
        alt="Number of Bedrooms"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-medium text-gray-700 text-base sm:text-lg">Number of Bedrooms</h4>
        <p className="text-gray-600 text-sm sm:text-base mt-1">3 Bedrooms</p>
      </div>
    </div>
    {/* Number of Bathrooms */}
    <div className="rounded-lg p-4 flex items-center text-center flex-col sm:flex-row">
      <img
        src={BathroomImage}
        alt="Number of Bathrooms"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-medium text-gray-700 text-base sm:text-lg">Number of Bathrooms</h4>
        <p className="text-gray-600 text-sm sm:text-base mt-1">2 Bathrooms</p>
      </div>
    </div>
    {/* Square Footage */}
    <div className="rounded-lg p-4 flex items-center text-center flex-col sm:flex-row">
      <img
        src={SqftImage}
        alt="Square Footage"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-medium text-gray-700 text-base sm:text-lg">Square Footage</h4>
        <p className="text-gray-600 text-sm sm:text-base mt-1">1600 sq ft</p>
      </div>
    </div>
    {/* Year Built/Renovated */}
    <div className="rounded-lg p-4 flex items-center text-center flex-col sm:flex-row">
      <img
        src={YearImage}
        alt="Year Built/Renovated"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-medium text-gray-700 text-base sm:text-lg">Year Built/Renovated</h4>
        <p className="text-gray-600 text-sm sm:text-base mt-1">2005</p>
      </div>
    </div>
    {/* Parking */}
    <div className="rounded-lg p-4 flex items-center text-center flex-col sm:flex-row">
      <img
        src={ParkingImage}
        alt="Parking"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-medium text-gray-700 text-base sm:text-lg">Parking</h4>
        <p className="text-gray-600 text-sm sm:text-base mt-1">2-car garage</p>
      </div>
    </div>
    {/* Utilities */}
    <div className="rounded-lg p-4 flex items-center text-center flex-col sm:flex-row">
      <img
        src={UtilitiesImage}
        alt="Utilities"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-medium text-gray-700 text-base sm:text-lg">Utilities</h4>
        <p className="text-gray-600 text-sm sm:text-base mt-1">Water, Gas, Electricity</p>
      </div>
    </div>
    {/* Heating and Cooling */}
    <div className="rounded-lg p-4 flex items-center text-center flex-col sm:flex-row">
      <img
        src={HvacImage}
        alt="Heating and Cooling"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-medium text-gray-700 text-base sm:text-lg">Heating and Cooling</h4>
        <p className="text-gray-600 text-sm sm:text-base mt-1">Central HVAC</p>
      </div>
    </div>
    {/* Wheelchair Ramp */}
    <div className="rounded-lg p-4 flex items-center text-center flex-col sm:flex-row">
      <img
        src={WheelchairImage}
        alt="Wheelchair Ramp"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-medium text-gray-700 text-base sm:text-lg">Wheelchair Ramp</h4>
        <p className="text-gray-600 text-sm sm:text-base mt-1">Available</p>
      </div>
    </div>
  </div>
</section>


      {/* Additional Features */}
      <h3 className="text-2xl font-semibold mb-6 text-center">Additional Features</h3>
<section>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white shadow-lg rounded-lg p-6">
    {/* Office, Game Room */}
    <div className="flex flex-col items-center text-center mx-auto">
      <div className="bg-slate-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-2xl">🛋️</span>
      </div>
      <h4 className="font-medium text-gray-700">Office, Game Room</h4>
    </div>
    {/* Refrigerator, Washer/Dryer */}
    <div className="flex flex-col items-center text-center mx-auto">
      <div className="bg-slate-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-2xl">🔌</span>
      </div>
      <h4 className="font-medium text-gray-700">Refrigerator, Washer/Dryer</h4>
    </div>
    {/* Balcony, Backyard */}
    <div className="flex flex-col items-center text-center mx-auto">
      <div className="bg-slate-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-2xl">🌳</span>
      </div>
      <h4 className="font-medium text-gray-700">Balcony, Backyard</h4>
    </div>
    {/* Pool, Gym */}
    <div className="flex flex-col items-center text-center mx-auto">
      <div className="bg-slate-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-2xl">⛲</span>
      </div>
      <h4 className="font-medium text-gray-700">Pool, Gym</h4>
    </div>
    {/* Pets Allowed */}
    <div className="flex flex-col items-center text-center mx-auto">
      <div className="bg-slate-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-2xl">🐕</span>
      </div>
      <h4 className="font-medium text-gray-700">Pets Allowed</h4>
      <p className="text-gray-600">Yes</p>
    </div>
    {/* Smoking Allowed */}
    <div className="flex flex-col items-center text-center mx-auto">
      <div className="bg-slate-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-2xl">🚭</span>
      </div>
      <h4 className="font-medium text-gray-700">Smoking Allowed</h4>
      <p className="text-gray-600">No</p>
    </div>
  </div>
</section>

<section className="bg-gray-50 py-10">
  {/* Similar Properties Heading */}
  <div className="container mx-auto text-center mb-8">
    <h2 className="text-2xl font-bold text-gray-800">Similar Properties</h2>
  </div>

  {/* Property Cards */}
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={MainProperty}
      alt="Ikeja, Lagos"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Ikeja, Lagos</h3>
        <span className="bg-gray-200 text-gray-700 text-lg rounded-full w-8 h-8 flex items-center justify-center">⛲</span>
        <span className="bg-gray-200 text-black-700 text-lg rounded-full w-8 h-8 flex items-center justify-center"> <Avatar/>
        </span>
        <span className="bg-gray-200 text-gray-700 text-lg rounded-full w-8 h-8 flex items-center justify-center">🌳</span>
      </div>
      <p className="text-purple-600 text-lg font-bold">$200,000</p>
      
      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
        View More
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={Property1}
      alt="Jabi, Abuja"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Jabi, Abuja</h3>
       
        <span className="bg-gray-200 text-gray-700 text-lg rounded-full w-8 h-8 flex items-center justify-center">⛲</span>
        <span className="bg-gray-200 text-black-700 text-lg rounded-full w-8 h-8 flex items-center justify-center"> <Avatar/>
        </span>
        <span className="bg-gray-200 text-gray-700 text-lg rounded-full w-8 h-8 flex items-center justify-center">🌳</span>
      </div>
      <p className="text-purple-600 text-lg font-bold">$900,000</p>
  
      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
        View More
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={Property2}
      alt="Apapa, Lagos"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Apapa, Lagos</h3>
      
        <span className="bg-gray-200 text-gray-700 text-lg rounded-full w-8 h-8 flex items-center justify-center">⛲</span>
        <span className="bg-gray-200 text-black-700 text-lg rounded-full w-8 h-8 flex items-center justify-center"> <Avatar/>
        </span>
        <span className="bg-gray-200 text-gray-700 text-lg rounded-full w-8 h-8 flex items-center justify-center">🌳</span>
      </div>
      <p className="text-purple-600 text-lg font-bold">$500,000</p>
      
      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
        View More
      </button>
    </div>
  </div>
</div>


  {/* Neighborhood Section */}
  <div className="mt-10 bg-gray-100 py-10">
    <div className="container mx-auto text-center">
      <p className="text-lg text-gray-700 font-medium mb-2">
        Explore the neighborhood of this property
      </p>
      <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
        <p className="text-gray-500 italic">Map section here</p>
      </div>
    </div>
  </div>
</section>



    </div>
    <Footer/>
    </div>
  );
};

export default PropertyDetail;
