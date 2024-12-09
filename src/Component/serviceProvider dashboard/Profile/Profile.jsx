import React from 'react';

export default function ProfileForm() {
  return (
    <div>
    <div className="container mx-auto p-4">
      <form className="space-y-8">
        {/* Individual Information Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl flex items-center  font-bold border-b pb-4 mb-4">
  <svg width="20" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7979 17.4104C14.0079 17.2844 14.0079 17.0324 13.7979 16.9484L12.6219 16.2764H12.5799V15.7304C12.5799 15.7304 12.5799 15.0164 13.2099 14.6384C13.3779 14.5544 13.7139 14.3864 14.0919 14.1764C13.9239 14.0924 13.7559 14.0084 13.5879 13.9664C12.8319 13.5884 11.7399 13.2104 11.4039 12.2444C11.1939 11.7404 11.3199 11.1944 11.5719 10.7324C12.0339 10.2704 12.4539 9.85039 12.8319 9.26239C12.9159 9.09439 12.9999 9.01039 13.0839 8.84239C14.1339 7.33039 14.2599 5.27239 13.6719 3.55039C13.0419 1.70239 11.4039 0.442391 9.38786 0.400391H9.09386C7.07786 0.442391 5.39786 1.70239 4.80986 3.55039C4.17986 5.31439 4.34786 7.33039 5.39786 8.84239C5.43986 9.01039 5.56586 9.09439 5.64986 9.26239C6.02786 9.85039 6.48986 10.2284 6.90986 10.7324C7.11986 11.1944 7.20386 11.6984 7.07786 12.2444C6.78386 13.1684 5.69186 13.5884 4.89386 13.9664C3.12986 14.7224 0.945858 15.8144 0.609858 17.9564C0.231858 19.7204 1.44986 21.4844 3.29786 21.4844H12.5799L13.7979 20.6864C14.0079 20.5604 14.0079 20.3084 13.7979 20.2244L12.6219 19.5524H12.5799V18.2084L13.7979 17.4104Z" fill="#424856"/>
  </svg>
  <svg width="16" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.348 10.618L6.30801 13.474C6.05601 13.642 5.67801 13.642 5.42601 13.474L0.428008 10.618C0.218008 10.492 0.218008 10.24 0.428008 10.156L1.60401 9.48405C1.68801 9.44204 1.77201 9.44204 1.85601 9.48405L4.92201 11.206C5.21601 11.374 5.55201 11.458 5.88801 11.458C6.22401 11.458 6.56001 11.374 6.85401 11.206L9.92001 9.48405C10.004 9.44204 10.088 9.44204 10.172 9.48405L11.348 10.156C11.558 10.24 11.558 10.492 11.348 10.618ZM11.348 7.38405L6.30801 10.24C6.05601 10.408 5.67801 10.408 5.42601 10.24L0.428008 7.38405C0.218008 7.25805 0.218008 7.00605 0.428008 6.92205L1.60401 6.25005C1.68801 6.20805 1.77201 6.20805 1.85601 6.25005L4.92201 7.97205C5.21601 8.14005 5.55201 8.22404 5.88801 8.22404C6.22401 8.22404 6.56001 8.14005 6.85401 7.97205L9.92001 6.25005C10.004 6.20805 10.088 6.20805 10.172 6.25005L11.348 6.92205C11.558 7.00605 11.558 7.25805 11.348 7.38405ZM5.46801 7.04805L0.428008 4.19205C0.218008 4.06605 0.218008 3.81405 0.428008 3.73005L5.46801 0.874047C5.72001 0.706047 6.09801 0.706047 6.35001 0.874047L11.39 3.73005C11.6 3.85605 11.6 4.10805 11.39 4.19205L6.35001 7.04805C6.09801 7.17405 5.72001 7.17405 5.46801 7.04805Z" fill="#424856"/>
  </svg>
  <span>Individual Information</span>
</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter Last Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter Address"
              />
            </div>
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-gray-700">State</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder=" State"
              />
            </div>
            <div>
              <label className="block text-gray-700">Zip</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder=" Zip"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Education</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Education"
              />
            </div>
            <div>
              <label className="block text-gray-700">Country of Birth</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Country of Birth"
              />
            </div>
            <div>
              <label className="block text-gray-700">Date of Birth</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>

          </div>
        </div>
        </form>

        {/* Business Profile Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl flex flex-wrap font-bold border-b pb-4 mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6875 17.7875C15.6875 17.8704 15.7204 17.9498 15.779 18.0084C15.8376 18.0671 15.9171 18.1 16 18.1C16.0829 18.1 16.1624 18.0671 16.221 18.0084C16.2796 17.9498 16.3125 17.8704 16.3125 17.7875C16.3125 17.7046 16.2796 17.6251 16.221 17.5665C16.1624 17.5079 16.0829 17.475 16 17.475C15.9171 17.475 15.8376 17.5079 15.779 17.5665C15.7204 17.6251 15.6875 17.7046 15.6875 17.7875Z" fill="#E73B37"/>
<path d="M19.1187 19.2844H12.7031L3.375 12.1969V12.825L12.5312 19.7844H19.2812L28.625 12.8063V12.1813L19.1187 19.2844Z" fill="#E73B37"/>
<path d="M22 8.02502V5.0719H10V8.02502H2V26.9313H30V8.02502H22ZM11.375 6.4469H20.625V8.0219H11.375V6.4469ZM28.625 25.5563H3.375V24.0313H28.625V25.5563ZM28.625 23.5282H3.375V9.40002H28.625V23.5282Z" fill="#323743"/>
</svg>

  
            Business Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="max-w-xl mx-auto p-4">
  <div className="mb-4">
    <label className="block text-gray-700">Industry</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Name Of Industry"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">Name of Company</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Company"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">DBA</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="DBA"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">Date Of Establishment</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Date Of Establishment"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">Address of Individual Location</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Address of Individual Location"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">Mailing Address</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Mailing Address"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">Territories Serviced</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Territories Serviced"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">Phone and Fax Number</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Phone and Fax Number"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">Email Address</label>
    <input
      type="email"
      className="w-full p-2 border rounded"
      placeholder="Enter Business Email"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">Website</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Enter Website URL"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-gray-700">No of Employees</label>
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="No of Employees"
    />
  </div>
</div>


            <div className="col-span-3">
              <label className="block text-gray-700"> Description of Business</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                placeholder=" Description"
              ></textarea>
            </div>

            <div className="col-span-3">
              <label className="block text-gray-700"> Vision</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="vision"
              ></textarea>
            </div>
            <div className="col-span-3">
              <label className="block text-gray-700"> Mission</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Mission"
              ></textarea>
            </div>
            <div className="col-span-3">
              <label className="block text-gray-700"> Value of Statement</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Value of Statement"
              ></textarea>
            </div>
            <div className="col-span-3">
              <label className="block text-gray-700">
                {" "}
                Desc of Product or Service offered
              </label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="col-span-3">
              <label className="block text-gray-700">
                {" "}
                Industry Rated Information
              </label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
         
          <h2 className="text-2xl font-bold border-b pb-4 mb-4">
            Upload Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Product Portfolio", "Awards", "Testimonials", "Certifications"].map(
              (label, index) => (
                <div key={index} className="border-dashed border-2 border-gray-300 p-4 text-center rounded-lg">
                  <p className="text-gray-500">{`Upload ${label}`}</p>
                  <input
                    type="file"
                    className="mt-2 text-center text-purple-600"
                  />
                </div>
              )
            )}

          
        </div>
        
<div className="items-end justify-end ml-">
        <div 
  className="flex items-end ml-96 justify-center gap-2 bg-violet-700 hover:bg-violet-800 rounded-lg w-72 p-2 text-white cursor-pointer"
  role="button"
  aria-label="Chat with Seller"
>
  <svg 
    width="18" 
    height="17" 
    viewBox="0 0 18 17" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
  >
    <path 
      d="M4.55556 5.6875H13.4444M4.55556 9.4375H13.4444M17 16L14.0451 14.4417C13.8211 14.3236 13.7091 14.2645 13.5916 14.2229C13.4875 14.1859 13.3802 14.1592 13.2713 14.1431C13.1486 14.125 13.0234 14.125 12.773 14.125H3.84444C2.84879 14.125 2.35097 14.125 1.97068 13.9206C1.63617 13.7409 1.3642 13.454 1.19377 13.1013C1 12.7002 1 12.1751 1 11.125V4C1 2.9499 1 2.42485 1.19377 2.02377C1.3642 1.67096 1.63617 1.38412 1.97068 1.20437C2.35097 1 2.8488 1 3.84444 1H14.1556C15.1512 1 15.6491 1 16.0293 1.20437C16.3638 1.38412 16.6358 1.67096 16.8062 2.02377C17 2.42485 17 2.94991 17 4V16Z" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
  </svg>
  Chat with Seller
</div>
</div>

     </div>
     </div>   
          </div>
        
      
    
  );
}
