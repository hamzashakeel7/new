import React, { useState } from 'react';

const ServiceInfoform = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setUploadedImage(URL.createObjectURL(file));
      }
    };

  
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <span role="img" aria-label="service-icon" className="mr-2">📄</span> Service Information
        </h2>
        <button
                className="text-gray-500 hover:text-gray-700"
              
              >
                &times;
              </button>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-3">
          <label className="block w-full text-gray-700 text-sm font-medium mb-1">Company Name</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Company Name" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Address Line 1</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Address Line 1" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Address Line 2</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Address Line 2" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Phone" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="email" placeholder="Email" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Contact Person</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Contact Person" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Website</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Website" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Geographical Area Serviced</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Select Area" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Industry</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Industry" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Specialty Services</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Specialty Services" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Services Schedule in Advance</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Services Schedule in Advance" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Services Provided</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Services Provided" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Office Hours</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Office Hours" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Industry</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Industry" />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Services Provided</label>
          <input className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder="Services Provided" />
        </div>
      </form>

    {/* Image Upload Section */}
    <div className="mt-6">
        <h3 className="text-lg font-medium mb-4 ">Upload Image</h3>
        <div className="flex justify-center items-center">
          <div className="relative w-96 h-72 border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="flex items-center justify-center w-full h-full text-gray-400 text-lg cursor-pointer"
                onClick={() => document.getElementById('file-upload').click()}
              ><svg width="66" height="52" viewBox="0 0 66 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 50.635L33 26.945V31.065" stroke="#6F7787" stroke-width="2.472" stroke-miterlimit="10" stroke-linecap="square"/>
              <path d="M21.6699 38.305L32.9999 26.975L44.3299 38.305" stroke="#6F7787" stroke-width="2.472" stroke-miterlimit="10" stroke-linecap="square"/>
              <path d="M41.2397 50.6055C54.1895 49.5253 64.092 38.6031 63.9021 25.6098C63.7121 12.6164 53.4946 1.98838 40.5188 1.28711C27.5429 0.585839 16.2395 10.0508 14.6503 22.948C7.27779 23.6796 1.77369 30.0632 2.13497 37.4631C2.49626 44.863 8.59604 50.68 16.0047 50.69L24.7597 50.69" stroke="#6F7787" stroke-width="2.472" stroke-miterlimit="10" stroke-linecap="round"/>
              </svg>
              <div> 
                  Drag and Upload files
                  
                  </div>
                
              </div>
            )}
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-4">
  <button className="text-purple-600">Cancel</button>
  <button className="bg-purple-700 text-white rounded-lg h-10 px-4">
    Upload
  </button>
</div>


<div className='' ><button className='bg-purple-700 w-full mt-5 h-10 rounded-lg text-white'>Save</button></div>
        </div>
      

  );
};

export default ServiceInfoform;