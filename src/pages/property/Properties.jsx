import { useState } from "react";
import banner1 from "../../assets/home/prperty/zpage.png";
import detail from "../../assets/home/prperty/details1.png";
import detail1 from "../../assets/home/prperty/details2.png";
import amb from "../../assets/home/prperty/details2.png";
import amb1 from "../../assets/home/prperty//amb2.png";
import banner2 from "../../assets/home/prperty/detailbg.png";
import { Navbar } from "../../Component/Navbar";
import { Footer } from "../../Component/Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Properties() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Cardiac Service",
      price: "$99.99",
      location: "Australia",
      avaibility: "Availaible",
      rating: "★ ★ ★ ★ ★",
      image: detail,
    },

    {
      id: 2,
      title: "Health care",
      price: "$99.99",
      location: "USA",
      avaibility: "Availaible",

      rating: "★ ★ ★ ★ ★",
      image: detail1,
    },
    {
      id: 1,
      title: "Cardiac Service",
      price: "$99.99",
      location: "Australia",
      avaibility: "Availaible",
      rating: "★ ★ ★ ★ ★",
      image: detail,
    },

    {
      id: 2,
      title: "Health care",
      price: "$99.99",
      location: "USA",
      avaibility: "Availaible",

      rating: "★ ★ ★ ★ ★",
      image: detail1,
    },
    {
      id: 1,
      title: "Cardiac Service",
      price: "$99.99",
      location: "Australia",
      avaibility: "Availaible",
      rating: "★ ★ ★ ★ ★",
      image: detail,
    },

    {
      id: 2,
      title: "Health care",
      price: "$99.99",
      location: "USA",
      avaibility: "Availaible",

      rating: "★ ★ ★ ★ ★",
      image: detail1,
    },
    //addd more service items here...

    // Add more service items here...
  ]);
  const [services1, setServices1] = useState([
    {
      id: 1,
      title: "Ambulance Service",
      price: "$99.99",
      location: "Australia",
      avaibility: "Availaible",
      rating: "★ ★ ★ ★ ★",
      image: amb,
    },

    {
      id: 2,
      title: "Ambulance Service",
      price: "$99.99",
      location: "USA",
      avaibility: "Availaible",

      rating: "★ ★ ★ ★ ★",
      image: amb1,
    },
    //addd more service items here...
    {
      id: 1,
      title: "Ambulance Service",
      price: "$99.99",
      location: "Australia",
      avaibility: "Availaible",
      rating: "★ ★ ★ ★ ★",
      image: amb,
    },

    {
      id: 2,
      title: "Ambulance Service",
      price: "$99.99",
      location: "USA",
      avaibility: "Availaible",

      rating: "★ ★ ★ ★ ★",
      image: amb1,
    },
    //addd more service items here...
    {
      id: 1,
      title: "Ambulance Service",
      price: "$99.99",
      location: "Australia",
      avaibility: "Availaible",
      rating: "★ ★ ★ ★ ★",
      image: amb,
    },

    {
      id: 2,
      title: "Ambulance Service",
      price: "$99.99",
      location: "USA",
      avaibility: "Availaible",

      rating: "★ ★ ★ ★ ★",
      image: amb1,
    },
    //addd more service items here...

    // Add more service items here...
  ]);

  const navigate = useNavigate();

  const handleRedirect = (title) => {
    if (title === "Cardiac Service") {
      navigate("/cardiac");
    } else if (title === "Health care") {
      navigate("/Cardaic");
    } 
     else if (title ==="Ambulance Service") {
      navigate("/travel");
    } else {
      navigate("/"); // Default fallback route
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Navbar />
      <div
        className="relative flex items-center justify-center bg-cover   bg-center bg-purple-600 opacity-90 w-[91vw] h-96 rounded-lg px-8 mx-auto"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="absolute rounded-lg inset-0 bg-gradient-to-r from-purple-600 to-transparent opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-bold">General Services</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search for Services"
              className="px-6 py-3 rounded-full text-black w-[50vw] shadow-lg focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap p-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4 p-4">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Filter by Category</label>
              <select className="w-full p-2 border rounded">
                <option>Choose</option>
                <option>Health Care</option>
                <option>Candidate Service</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Filter by Location</label>
              <select className="w-full p-2 border rounded">
                <option>Choose</option>
                <option>Australia</option>
                <option>USA</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Filter by Price</label>
              <select className="w-full p-2 border rounded">
                <option>Choose</option>
                <option>1000-2000</option>
                <option>2000-3000</option>
              </select>
            </div>

            <div className="flex  space-x-2">
              <button className="w-full p-3 text-violet-700 border-2 border-purple-800 rounded-lg">
                Reset
              </button>
              <button className="w-full p-3 bg-purple-600 text-white rounded-lg">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="w-full md:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-green-400" style={{fontSize: "24px"}}>{service.price}</p>
                <p className="text-gray-500">{service.location}</p>
               <div className="flex space-x-16 ">
                <span className="text-yellow-400">{service.rating}</span>
                <p className="items-end justify-end text-slate-600">{service.avaibility}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => handleRedirect(service.title)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                  >
                    Book Now
                  </button>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-32 space-x-4 mt-1">
        <button className="px-4   rounded">Previous</button>
        {[1, 2, 3].map((page) => (
          <button key={page} className="px-4  text-black rounded">
            {page}
          </button>
        ))}
        <button className="px-4 rounded">Next</button>
      </div>

      <div
        className="relative flex items-center justify-center bg-cover bg-center bg-purple-600 w-[91vw] h-96    rounded-lg px-8 mx-auto"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="absolute rounded-lg inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">Transportation Services</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search for Services"
              className="px-6 py-3 rounded-full text-black w-[50vw] shadow-lg focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap p-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4 p-4">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Filter by Category</label>
              <select className="w-full p-2 border rounded">
                <option>Choose</option>
                <option>Health Care</option>
                <option>Candidate Service</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Filter by Location</label>
              <select className="w-full p-2 border rounded">
                <option>Choose</option>
                <option>Australia</option>
                <option>USA</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Filter by Price</label>
              <select className="w-full p-2 border rounded">
                <option>Choose</option>
                <option>Australia</option>
                <option>USA</option>
              </select>
            </div>

            <div className="flex  space-x-2">
            <button className="w-full p-3 text-violet-700 border-2 border-purple-800 rounded-lg">
                Reset
              </button>
              <button className="w-full p-3 bg-purple-600 text-white rounded-lg">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="w-full md:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services1.map((service1) => (
            <div
              key={services1.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={service1.image}
                alt={service1.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{service1.title}</h3>
                <p className="text-green-400" style={{fontSize: "24px"}}>{service1.price}</p>
                <p className="text-gray-500">{service1.location}</p>
               <div className="flex space-x-16 ">
                <span className="text-yellow-400">{service1.rating}</span>
                <p className="items-end justify-end text-slate-600">{service1.avaibility}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => handleRedirect(service1.title)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                  >
                    Book Now
                  </button>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-10 space-x-4 mt-1">
        <button className="px-4 py-2  rounded">Previous</button>
        {[1, 2, 3].map((page) => (
          <button key={page} className="px-4 py-2 text-black rounded">
            {page}
          </button>
        ))}
        <button className="px-4 py-1 rounded">Next</button>
      </div>
      <Footer />
    </div>
  );
}
