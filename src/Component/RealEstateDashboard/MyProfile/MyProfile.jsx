import React from 'react';
import Account from '../../Hospital/Profile/Account page';

export default function ProfileForm() {
  return (
    <div>
    <div className="container mx-auto p-4">
      <form className="space-y-8">
        {/* Individual Information Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl flex items-center font-bold border-b pb-4 mb-4">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1575_887)">
                <path
                  d="M25.348 22.618L20.308 25.474C20.056 25.642 19.678 25.642 19.426 25.474L14.428 22.618C14.218 22.492 14.218 22.24 14.428 22.156L15.604 21.484C15.688 21.442 15.772 21.442 15.856 21.484L18.922 23.206C19.216 23.374 19.552 23.458 19.888 23.458C20.224 23.458 20.56 23.374 20.854 23.206L23.92 21.484C24.004 21.442 24.088 21.442 24.172 21.484L25.348 22.156C25.558 22.24 25.558 22.492 25.348 22.618ZM25.348 19.384L20.308 22.24C20.056 22.408 19.678 22.408 19.426 22.24L14.428 19.384C14.218 19.258 14.218 19.006 14.428 18.922L15.604 18.25C15.688 18.208 15.772 18.208 15.856 18.25L18.922 19.972C19.216 20.14 19.552 20.224 19.888 20.224C20.224 20.224 20.56 20.14 20.854 19.972L23.92 18.25C24.004 18.208 24.088 18.208 24.172 18.25L25.348 18.922C25.558 19.006 25.558 19.258 25.348 19.384ZM19.468 19.048L14.428 16.192C14.218 16.066 14.218 15.814 14.428 15.73L19.468 12.874C19.72 12.706 20.098 12.706 20.35 12.874L25.39 15.73C25.6 15.856 25.6 16.108 25.39 16.192L20.35 19.048C20.098 19.174 19.72 19.174 19.468 19.048Z"
                  fill="#424856"
                />
                <path
                  d="M13.7979 17.4104C14.0079 17.2844 14.0079 17.0324 13.7979 16.9484L12.6219 16.2764H12.5799V15.7304C12.5799 15.7304 12.5799 15.0164 13.2099 14.6384C13.3779 14.5544 13.7139 14.3864 14.0919 14.1764C13.9239 14.0924 13.7559 14.0084 13.5879 13.9664C12.8319 13.5884 11.7399 13.2104 11.4039 12.2444C11.1939 11.7404 11.3199 11.1944 11.5719 10.7324C12.0339 10.2704 12.4539 9.85039 12.8319 9.26239C12.9159 9.09439 12.9999 9.01039 13.0839 8.84239C14.1339 7.33039 14.2599 5.27239 13.6719 3.55039C13.0419 1.70239 11.4039 0.442391 9.38786 0.400391H9.09386C7.07786 0.442391 5.39786 1.70239 4.80986 3.55039C4.17986 5.31439 4.34786 7.33039 5.39786 8.84239C5.43986 9.01039 5.56586 9.09439 5.64986 9.26239C6.02786 9.85039 6.48986 10.2284 6.90986 10.7324C7.11986 11.1944 7.20386 11.6984 7.07786 12.2444C6.78386 13.1684 5.69186 13.5884 4.89386 13.9664C3.12986 14.7224 0.945858 15.8144 0.609858 17.9564C0.231858 19.7204 1.44986 21.4844 3.29786 21.4844H12.5799L13.7979 20.6864C14.0079 20.5604 14.0079 20.3084 13.7979 20.2244L12.6219 19.5524H12.5799V18.2084L13.7979 17.4104Z"
                  fill="#424856"
                />
              </g>
              <defs>
                <clipPath id="clip0_1575_887">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Individual Information</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <input
                type="date"
                className="w-full p-2 border rounded"
              />
            </div>

          </div>
        </div>
        </form>

        {/* Business Information Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
          <h2 className="text-2xl flex items-center font-bold border-b pb-4 mb-4">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1575_887)">
                <path
                  d="M25.348 22.618L20.308 25.474C20.056 25.642 19.678 25.642 19.426 25.474L14.428 22.618C14.218 22.492 14.218 22.24 14.428 22.156L15.604 21.484C15.688 21.442 15.772 21.442 15.856 21.484L18.922 23.206C19.216 23.374 19.552 23.458 19.888 23.458C20.224 23.458 20.56 23.374 20.854 23.206L23.92 21.484C24.004 21.442 24.088 21.442 24.172 21.484L25.348 22.156C25.558 22.24 25.558 22.492 25.348 22.618ZM25.348 19.384L20.308 22.24C20.056 22.408 19.678 22.408 19.426 22.24L14.428 19.384C14.218 19.258 14.218 19.006 14.428 18.922L15.604 18.25C15.688 18.208 15.772 18.208 15.856 18.25L18.922 19.972C19.216 20.14 19.552 20.224 19.888 20.224C20.224 20.224 20.56 20.14 20.854 19.972L23.92 18.25C24.004 18.208 24.088 18.208 24.172 18.25L25.348 18.922C25.558 19.006 25.558 19.258 25.348 19.384ZM19.468 19.048L14.428 16.192C14.218 16.066 14.218 15.814 14.428 15.73L19.468 12.874C19.72 12.706 20.098 12.706 20.35 12.874L25.39 15.73C25.6 15.856 25.6 16.108 25.39 16.192L20.35 19.048C20.098 19.174 19.72 19.174 19.468 19.048Z"
                  fill="#424856"
                />
              </g>
              <defs>
                <clipPath id="clip0_1575_887">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Business Information</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
        <label className="block text-gray-700">Industry</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Name Of Industry"
        />
      </div>
    
      <div>
        <label className="block text-gray-700">Company</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Company"
        />
      </div>
      <div>
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
    <div className="mb-4">
      <label className="block text-gray-700">Address</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Address of Location"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        className="w-full p-2 border rounded"
        placeholder="Business Email"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Website</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Website URL"
      />
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
              <label className="block text-gray-700"> Desc of Product or  Service offered</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="col-span-3">
              <label className="block text-gray-700"> Industry Rated Information</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Description"
              ></textarea>
            </div>
            <h2 className="text-2xl font-bold border-b pb-4 mb-4">
  Upload Documents
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {["Product Portfolio", "Awards", "Testimonials", "Certifications"].map((label, index) => (
    <div key={index} className="bg-white border rounded-lg shadow-md p-4">
      <h4 className="text-lg md:text-xl font-semibold mb-4 text-center">{label}</h4>
      <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg flex flex-col items-center justify-center gap-2">
        <svg
          width="66"
          height="52"
          viewBox="0 0 66 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-2"
        >
          <path
            d="M33 50.635L33 26.945V31.065"
            stroke="#6F7787"
            strokeWidth="2.472"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M21.6699 38.305L32.9999 26.975L44.3299 38.305"
            stroke="#6F7787"
            strokeWidth="2.472"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M41.2397 50.6055C54.1895 49.5253 64.092 38.6031 63.9021 25.6098C63.7121 12.6164 53.4946 1.98838 40.5188 1.28711C27.5429 0.585839 16.2395 10.0508 14.6503 22.948C7.27779 23.6796 1.77369 30.0632 2.13497 37.4631C2.49626 44.863 8.59604 50.68 16.0047 50.69L24.7597 50.69"
            stroke="#6F7787"
            strokeWidth="2.472"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-bold text-gray-800">Drag files here</span>
        <span className="text-gray-500 text-sm">Supported format: PNG, JPG</span>
        <span className="text-gray-500 text-sm">OR</span>
        <span className="text-purple-600 font-semibold cursor-pointer hover:underline">
          Browse files
        </span>
      </div>
    </div>
  ))}
</div>

  </div>
  
 
    

          </div>
          <div className="flex justify-end items-end">
  <button className=" space-x-10 ml-4 px-3  bg-purple-600 h-9 w-44 flex items-center gap-2 rounded-lg text-white">
   Register New User
    
  </button>
</div>
         <Account/>
   
          <div className="flex justify-end items-end">
  <button className="bg-purple-600 h-9 w-44 flex items-center gap-2 rounded-lg text-white">
    <svg className="mt-1 ml-2" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.55556 5.1875H13.4444M4.55556 8.9375H13.4444M17 15.5L14.0451 13.9417C13.8211 13.8236 13.7091 13.7645 13.5916 13.7229C13.4875 13.6859 13.3802 13.6592 13.2713 13.6431C13.1486 13.625 13.0234 13.625 12.773 13.625H3.84444C2.84879 13.625 2.35097 13.625 1.97068 13.4206C1.63617 13.2409 1.3642 12.954 1.19377 12.6013C1 12.2002 1 11.6751 1 10.625V3.5C1 2.4499 1 1.92485 1.19377 1.52377C1.3642 1.17096 1.63617 0.884122 1.97068 0.704366C2.35097 0.5 2.8488 0.5 3.84444 0.5H14.1556C15.1512 0.5 15.6491 0.5 16.0293 0.704366C16.3638 0.884122 16.6358 1.17096 16.8062 1.52377C17 1.92485 17 2.44991 17 3.5V15.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Chat with seller
  </button>
</div>






          </div>
          
        

        

  );
}
