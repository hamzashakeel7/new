import React, { useState } from 'react';

const ServiceInformationForm = () => {
  const [uploadedImages, setUploadedImages] = useState([null, null, null]);

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...uploadedImages];
      newImages[index] = URL.createObjectURL(file);
      setUploadedImages(newImages);
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

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Uploaded files</h3>
        <div className="flex gap-4">
          {uploadedImages.map((image, index) => (
            <div key={index} className="w h-28 relative rounded-md overflow-hidden border border-gray-300">
              {image ? (
                <img src={image} alt={`Uploaded file ${index + 1}`} className="w-full h-full object-cover" />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-gray-400 cursor-pointer"
                  onClick={() => document.getElementById(`file-upload-${index}`).click()}
                >
                  + Upload
                </div>
              )}
              <input
                type="file"
                id={`file-upload-${index}`}
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageUpload(index, e)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceInformationForm;
