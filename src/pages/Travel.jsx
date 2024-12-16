import { CheckCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { useState } from "react";
import hero2 from "../assets/cardiac&travel/hero2.webp";
import ambulance from "../assets/cardiac&travel/ambulance.png";
import slider4 from "../assets/cardiac&travel/slider4.png";
import slider5 from "../assets/cardiac&travel/slider5.png";
import slider6 from "../assets/cardiac&travel/slider6.png";
import bgImg from "../assets/cardiac&travel/bg-img.png";
import Newsletter from "../Component/Home/Newsletter";
import { Footer } from "../Component/Footer";
import {Company,CompanyAddress,Email ,Phone ,Contact,Officeh,Website,Geography,Industry,Serviceh,Specialitys,Servicea } from "../assets/svg"

const serviceSlides = [
  {
    image: slider4,
    companyName: "SilverTLC",
    companyAddress: "Lorem ipsum dolor sit",
    companyEmail: "Lorem ipsum dolor sit",
    companyPhone: "Lorem ipsum dolor sit",
    contactPerson: "SilverTLC",
    officeHours: "Lorem ipsum dolor sit",
    website: "Lorem ipsum dolor sit",
    geographicalArea: "Lorem ipsum dolor sit",
    industry: "SilverTLC",
    serviceProvided: "Lorem ipsum dolor sit",
    specialtyService: "Lorem ipsum dolor sit",
    scheduleInAdvance: "Lorem ipsum dolor sit",
  },
  {
    image: slider5,
    companyName: "SilverTLC",
    companyAddress: "Lorem ipsum dolor sit",
    companyEmail: "Lorem ipsum dolor sit",
    companyPhone: "Lorem ipsum dolor sit",
    contactPerson: "SilverTLC",
    officeHours: "Lorem ipsum dolor sit",
    website: "Lorem ipsum dolor sit",
    geographicalArea: "Lorem ipsum dolor sit",
    industry: "SilverTLC",
    serviceProvided: "Lorem ipsum dolor sit",
    specialtyService: "Lorem ipsum dolor sit",
    scheduleInAdvance: "Lorem ipsum dolor sit",
  },
  {
    image: slider6,
    companyName: "SilverTLC",
    companyAddress: "Lorem ipsum dolor sit",
    companyEmail: "Lorem ipsum dolor sit",
    companyPhone: "Lorem ipsum dolor sit",
    contactPerson: "SilverTLC",
    officeHours: "Lorem ipsum dolor sit",
    website: "Lorem ipsum dolor sit",
    geographicalArea: "Lorem ipsum dolor sit",
    industry: "SilverTLC",
    serviceProvided: "Lorem ipsum dolor sit",
    specialtyService: "Lorem ipsum dolor sit",
    scheduleInAdvance: "Lorem ipsum dolor sit",
  },
  {
    image: slider5,
    companyName: "SilverTLC",
    companyAddress: "Lorem ipsum dolor sit",
    companyEmail: "Lorem ipsum dolor sit",
    companyPhone: "Lorem ipsum dolor sit",
    contactPerson: "SilverTLC",
    officeHours: "Lorem ipsum dolor sit",
    website: "Lorem ipsum dolor sit",
    geographicalArea: "Lorem ipsum dolor sit",
    industry: "SilverTLC",
    serviceProvided: "Lorem ipsum dolor sit",
    specialtyService: "Lorem ipsum dolor sit",
    scheduleInAdvance: "Lorem ipsum dolor sit",
  },
];
const serviceData = [
  { icon: <Company/>, label: "Company Name", value: "SilverTLC" },
  { icon: <CompanyAddress/>, label: "Company Address", value: "Lorem Ipsum dolor sit" },
  { icon: <Email/>, label: "Company Email", value: "Lorem Ipsum dolor sit" },
  { icon: <Phone/>, label: "Company Phone", value: "Lorem Ipsum dolor sit" },
  { icon: <Contact/>, label: "Contact Person", value: "SilverTLC" },
  { icon: <Officeh/>, label: "Office Hours", value: "Lorem Ipsum dolor sit" },
  { icon: <Website/>, label: "Website", value: "Lorem Ipsum dolor sit" },
  { icon: <Geography/>, label: "Geographical Area Serviced", value: "Lorem Ipsum dolor sit" },
  { icon: <Industry/>, label: "Industry", value: "Silvertlc" },
  { icon: <Serviceh/>, label: "Service Provided", value: "Lorem Ipsum dolor sit" },
  { icon: <Specialitys/>, label: "Specialty Service", value: "Lorem Ipsum dolor sit" },
  { icon: <Servicea/>, label: "Service Schedule in Advance", value: "Lorem Ipsum dolor sit" },
];
const groupedData = [
  serviceData.slice(0, 4), // First table group
  serviceData.slice(4, 8), // Second table group
  serviceData.slice(8),    // Third table group
];

export default function TravelService() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === serviceSlides.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? serviceSlides.length - 3 : prev - 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-purple-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link
              href="/query-services"
              className="text-gray-600 hover:text-purple-600"
            >
              Query Services
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-purple-600">Travel Services</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-[90vw] lg:w-[90vw] mx-auto h-[300px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage: `url(${hero2})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-purple-500/40" />
          </div>
          <div className="relative flex h-full items-center justify-center">
            <h1 className="text-3xl lg:text-6xl font-bold text-white tracking-widest">
              Travel Service
            </h1>
          </div>
        </div>

        {/* whole content  */}
        <div className="lg:px-28 px-8">
          <div className="relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Content */}
            <div className="relative py-12">
              <div className="space-y-8">
                {/* Service Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Travel Service</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore Lorem
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea
                  </p>
                </div>

                {/* Service Provider */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Service Provider</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>

                {/* Price */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Price</h2>
                  <p className="text-3xl font-bold text-green-600">584$</p>
                </div>
              </div>
            </div>
          </div>

          {/* slider with items */}
          <div className="relative bg-white rounded-lg p-6 shadow-sm border w-full">
  <div className="flex items-center gap-2 mb-6">
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h2 className="text-lg font-semibold">Service Information</h2>
  </div>

  {/* Carousel Section */}
  <div className="relative overflow-hidden">
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {serviceSlides.map((slide, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/3 px-2"
        >
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src={slide.image}
              alt={`Service ${index + 1}`}
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons (outside the slides) */}
    <div className="absolute inset-y-0 flex justify-between items-center w-full px-4">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className=" rounded-full p-3 shadow-lg hover:bg-white transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      {/* Right Button */}
      <button
        onClick={nextSlide}
        className=" rounded-full p-3 shadow-lg hover:bg-white transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  </div>

  {/* Grouped Data Section */}
  <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg shadow-md">
    {groupedData.map((group, index) => (
      <div
        key={index}
        className="w-full md:w-1/3 bg-white rounded-lg shadow border overflow-hidden"
      >
        <table className="w-full table-auto text-sm">
          <tbody>
            {group.map((item, idx) => (
              <tr key={idx} className="border-b last:border-none">
                <td className="flex items-center gap-2 p-3 font-medium text-gray-700">
                  {item.icon}
                  {item.label}
                </td>
                <td className="p-3 text-gray-600">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
</div>


          {/* Service Type and Availability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Service Type
              </h3>
              <div className="flex justify-center">
                <img src={ambulance} alt="Healthcare" className="w-[130px]" />
              </div>
              <p className="text-center text-2xl text-gray-400 tracking-[0.5em] mt-4">
                TRANSPORTATION
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border flex justify-start gap-10 flex-col">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Availability
              </h3>
              <div className="flex items-center justify-center gap-2 text-4xl">
                <CheckCheck className="w-8 h-8" />
                <span>Available</span>
              </div>
            </div>
          </div>
        

        {/* newsletter & footer */}
       
      </div>
      <Newsletter />
      <Footer />
      </div>
      
    </>
  );
}
