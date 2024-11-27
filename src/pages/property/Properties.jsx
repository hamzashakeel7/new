import { useState } from "react";
import banner1 from "../../assets/home/prperty/zpage.png"
import detail from "../../assets/home/prperty/details1.png"
import detail1 from "../../assets/home/prperty/details2.png"
import amb from "../../assets/home/prperty/details2.png"
import amb1 from "../../assets/home/prperty//amb2.png"
import banner2 from "../../assets/home/prperty/detailbg.png"
import { Navbar } from "../../Component/Navbar";
import { Footer } from "../../Component/Footer";

export default function Properties() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Cndidate Service",
      price: "$99.99",
      location: "Australia",
      avaibility:"Availaible",
      rating: "★ ★ ★ ★ ★",
      image: detail,
    },
    
    {
      id: 2,
      title: "Health care",
      price: "$99.99",
      location: "USA",
      avaibility:"Availaible",
      
      rating: "★ ★ ★ ★ ★",
      image: detail1,
    },
    {
      id: 1,
      title: "Cndidate Service",
      price: "$99.99",
      location: "Australia",
      avaibility:"Availaible",
      rating: "★ ★ ★ ★ ★",
      image: detail,
    },
    
    {
      id: 2,
      title: "Health care",
      price: "$99.99",
      location: "USA",
      avaibility:"Availaible",
      
      rating: "★ ★ ★ ★ ★",
      image: detail1,
    },
    {
      id: 1,
      title: "Cndidate Service",
      price: "$99.99",
      location: "Australia",
      avaibility:"Availaible",
      rating: "★ ★ ★ ★ ★",
      image: detail,
    },
    
    {
      id: 2,
      title: "Health care",
      price: "$99.99",
      location: "USA",
      avaibility:"Availaible",
      
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
      avaibility:"Availaible",
      rating: "★ ★ ★ ★ ★",
      image: amb,
    },
    
    {
      id: 2,
      title: "Ambulance Service",
      price: "$99.99",
      location: "USA",
      avaibility:"Availaible",
      
      rating: "★ ★ ★ ★ ★",
      image: amb1,
    },
  //addd more service items here...
    {
      id: 1,
      title: "Ambulance Service",
      price: "$99.99",
      location: "Australia",
      avaibility:"Availaible",
      rating: "★ ★ ★ ★ ★",
      image: amb,
    },
    
    {
      id: 2,
      title: "Ambulance Service",
      price: "$99.99",
      location: "USA",
      avaibility:"Availaible",
      
      rating: "★ ★ ★ ★ ★",
      image: amb1,
    },
  //addd more service items here...
    {
      id: 1,
      title: "Ambulance Service",
      price: "$99.99",
      location: "Australia",
      avaibility:"Availaible",
      rating: "★ ★ ★ ★ ★",
      image: amb,
    },
    
    {
      id: 2,
      title: "Ambulance Service",
      price: "$99.99",
      location: "USA",
      avaibility:"Availaible",
      
      rating: "★ ★ ★ ★ ★",
      image: amb1,
    },
  //addd more service items here...
  
    // Add more service items here...
  ]);

  return (
    <div>
      {/* Hero Section */}
      <Navbar/>
   <div
  className="relative flex items-center justify-center bg-cover bg-center bg-purple-600 opacity-50 w-[90vw] h-64 rounded-lg px-8 mx-auto"
  style={{ backgroundImage: `url(${banner1})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent opacity-60"></div>
  <div className="relative z-10 flex flex-col items-center justify-center text-white">
    <h1 className="text-4xl font-bold">General Services</h1>
    <div className="mt-4">
      <input
        type="text"
        placeholder="Search for Services"
        className="px-6 py-3 rounded-full text-black w-96 shadow-lg focus:outline-none"
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
            <button className="w-full p-3 bg-purple-600 text-white rounded-lg">
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
                <p className="text-gray-500">{service.price}</p>
                <p className="text-gray-500">{service.location}</p>
                <p>{service.avaibility}</p>
                <div className="flex items-center justify-between mt-4">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                    Book Now
                  </button>
                  <span className="text-yellow-400">{service.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-8">
        <button className="px-4 py-2  rounded">Previous</button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className="px-4 py-2 text-black rounded"
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-20 rounded">Next</button>
      </div>

      <div
  className="relative flex items-center justify-center bg-cover bg-center bg-purple-600 w-[90vw] h-[50vh] rounded-lg px-8 mx-auto"
  style={{ backgroundImage: `url(${banner2})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
  <div className="relative z-10 flex flex-col items-center justify-center text-white">
    <h1 className="text-4xl font-bold">Transportation Services</h1>
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
            <button className="w-full p-3 bg-purple-600 text-white rounded-lg">
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
          {services1.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={services1.image}
                alt={services1.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{services1.title}</h3>
                <p className="text-gray-500">{services1.price}</p>
                <p className="text-gray-500">{services1.location}</p>
                <p>{service.avaibility}</p>
                <div className="flex items-center justify-between mt-4">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                    Book Now
                  </button>
                  <span className="text-yellow-400">{services1.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-8">
        <button className="px-4 py-2  rounded">Previous</button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className="px-4 py-2 text-black rounded"
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-20 rounded">Next</button>
      </div>
      <Footer/>
    </div>
  );
}
