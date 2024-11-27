import { CheckCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { useState } from "react";
import hero from "../assets/cardiac&travel/hero.png";
import health from "../assets/cardiac&travel/health.png";
import slider1 from "../assets/cardiac&travel/slider1.png";
import slider2 from "../assets/cardiac&travel/slider2.png";
import slider3 from "../assets/cardiac&travel/slider3.png";
import bgImg from "../assets/cardiac&travel/bg-img.png";
import Newsletter from "../Component/Home/Newsletter";
import { Footer } from "../Component/Footer";

const serviceSlides = [
  {
    image: slider1,
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
    image: slider2,
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
    image: slider3,
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
    image: slider1,
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

export default function CardiacCareService() {
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
            <span className="text-purple-600">Cardiac Care Service</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-[90vw] lg:w-[90vw] mx-auto h-[300px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage: `url(${hero})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-purple-500/40" />
          </div>
          <div className="relative flex h-full items-center justify-center">
            <h1 className="text-3xl lg:text-6xl font-bold text-white tracking-widest">
              Cardiac Care Service
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
                  <h2 className="text-2xl font-bold mb-4">
                    Cardiac Care Service
                  </h2>
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

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {serviceSlides.map((slide, index) => (
                  <div
                    key={index}
                    className="lg:min-w-[33.333%] min-w-[53.333%] px-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden">
                      <img
                        src={slide.image}
                        alt={`Service ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 space-y-4">
                        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium">
                                Company Name
                              </span>
                              <span className="text-sm text-gray-600">
                                {slide.companyName}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium">
                                Company Address
                              </span>
                              <span className="text-sm text-gray-600">
                                {slide.companyAddress}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium">
                                Company Email
                              </span>
                              <span className="text-sm text-gray-600">
                                {slide.companyEmail}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">
                                Company Phone
                              </span>
                              <span className="text-sm text-gray-600">
                                {slide.companyPhone}
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium">
                                Contact Person
                              </span>
                              <span className="text-sm text-gray-600">
                                {slide.contactPerson}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium">
                                Office Hours
                              </span>
                              <span className="text-sm text-gray-600">
                                {slide.officeHours}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium">
                                Website
                              </span>
                              <span className="text-sm text-gray-600">
                                {slide.website}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">
                                Area Serviced
                              </span>
                              <span className="text-sm text-gray-600">
                                {slide.geographicalArea}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
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
                <img src={health} alt="Healthcare" className="w-[130px]" />
              </div>
              <p className="text-center text-2xl text-gray-400 tracking-[0.5em] mt-4">
                HEALTHCARE
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
        </div>

        {/* newsletter & footer */}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
