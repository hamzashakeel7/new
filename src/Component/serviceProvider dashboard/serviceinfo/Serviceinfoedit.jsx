import React, { useState } from 'react';

const ServiceInfoedit = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
      setIsVisible(false);
    };
  

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
              onClick={handleClose}
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
        <h3 className="text-lg font-medium mb-4">Upload Image</h3>
        <div className="flex space-x-6">
          <div className="relative w-52 h-52 border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
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
              >
                
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
          <div className="relative w-52 h-52 border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="flex items-center justify-center w-full h-full text-gray-400 text-lg flex-wrap cursor-pointer"
                onClick={() => document.getElementById('file-upload').click()}
              >
                
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
          <div className="relative w-52 h-52 border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
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
             >
              
                
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



<div className='' ><button className='bg-purple-700 w-full mt-5 h-10 rounded-lg text-white'>Save</button></div>
        </div>
      

  );
};

export default ServiceInfoedit;