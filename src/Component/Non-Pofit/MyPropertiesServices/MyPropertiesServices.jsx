import React from "react";

import banner from "../../../assets/Serviceasset/sevicebanner.png";

import prop1 from "../../../assets/Serviceasset/sevicebanner.png";
import { Link } from "react-router-dom";

export default function MyPropertiesServices() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div
  className="relative bg-cover bg-center h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="text-center text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">My Properties/ Services</h1>
      <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for services"
          className="w-[40vw] sm:w-[40rem] p-2 rounded-l-lg border-none text-lg focus:ring-0"
        />
        {/* Search Button */}
        <button className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white rounded-r-lg flex justify-center items-center">
          Search
        </button>
        {/* Filter Button */}
        <button className="w-full sm:w-auto sm:ml-4 mt-2 sm:mt-0 px-6 py-2 bg-purple-600 text-white rounded-lg flex justify-center items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path d="M0 3.375H18V1.125H0V3.375Z" fill="white" />
            <path d="M2.25 7.875H15.75V5.625H2.25V7.875Z" fill="white" />
            <path d="M4.5 12.375H13.5V10.125H4.5V12.375Z" fill="white" />
            <path d="M11.25 16.875H6.75V14.625H11.25V16.875Z" fill="white" />
          </svg>
          Filter
        </button>
      </div>
    </div>
  </div>
</div>

      <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl flex font-bold mb-4 items-center">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1558_696)">
              <path
                d="M12.3866 0.598137C13.0239 0.211978 13.7548 0.0078125 14.5 0.0078125C15.2452 0.0078125 15.9761 0.211978 16.6134 0.598137L26.129 6.36551C26.7286 6.72886 27.2245 7.24066 27.5686 7.85151C27.9128 8.46236 28.0937 9.15163 28.0938 9.85276V10.875C28.0938 11.2355 27.9505 11.5813 27.6956 11.8362C27.4407 12.0912 27.0949 12.2344 26.7344 12.2344C26.3738 12.2344 26.0281 12.0912 25.7732 11.8362C25.5182 11.5813 25.375 11.2355 25.375 10.875V9.85276C25.3752 9.6189 25.3151 9.38894 25.2005 9.1851C25.0859 8.98126 24.9206 8.81043 24.7207 8.68914L15.2051 2.92358C14.9925 2.79462 14.7486 2.72643 14.5 2.72643C14.2514 2.72643 14.0075 2.79462 13.7949 2.92358L4.27931 8.68914C4.07937 8.81043 3.9141 8.98126 3.79948 9.1851C3.68486 9.38894 3.62476 9.6189 3.625 9.85276V19.1473C3.62476 19.3811 3.68486 19.6111 3.79948 19.8149C3.9141 20.0188 4.07937 20.1896 4.27931 20.3109L11.5801 24.7334C11.7328 24.826 11.8657 24.9477 11.9713 25.0917C12.077 25.2357 12.1532 25.3991 12.1957 25.5725C12.2382 25.7459 12.2461 25.926 12.219 26.1025C12.1919 26.279 12.1303 26.4485 12.0377 26.6012C11.9451 26.7539 11.8234 26.8868 11.6794 26.9925C11.5354 27.0981 11.3721 27.1743 11.1986 27.2168C11.0252 27.2593 10.8451 27.2672 10.6686 27.2401C10.4921 27.213 10.3226 27.1514 10.1699 27.0588L2.871 22.6363C2.27083 22.2727 1.77466 21.7603 1.43047 21.1487C1.08628 20.5372 0.905722 19.8472 0.906251 19.1454V9.85276C0.906346 9.15163 1.0872 8.46236 1.43136 7.85151C1.77552 7.24066 2.27136 6.72886 2.871 6.36551L12.3866 0.598137Z"
                fill="#323743"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2951 13.2766L21.2969 13.2004V12.6821C21.2969 12.3215 21.1537 11.9758 20.8987 11.7208C20.6438 11.4659 20.298 11.3227 19.9375 11.3227C19.577 11.3227 19.2312 11.4659 18.9763 11.7208C18.7213 11.9758 18.5781 12.3215 18.5781 12.6821V13.2004L18.5799 13.2766C17.7274 13.4497 16.9163 13.7857 16.1911 14.2662C16.1734 14.2476 16.1553 14.2294 16.1367 14.2118L15.7724 13.8439C15.5147 13.6038 15.1738 13.473 14.8217 13.4792C14.4695 13.4855 14.1335 13.6281 13.8844 13.8772C13.6354 14.1263 13.4927 14.4623 13.4865 14.8144C13.4803 15.1666 13.611 15.5074 13.8511 15.7651L14.2154 16.1331L14.2698 16.1838C13.7986 16.8979 13.4542 17.7063 13.2784 18.5745C13.2542 18.5734 13.2301 18.5727 13.2059 18.5727H12.6875C12.327 18.5727 11.9812 18.7159 11.7263 18.9708C11.4713 19.2258 11.3281 19.5715 11.3281 19.9321C11.3281 20.2926 11.4713 20.6384 11.7263 20.8933C11.9812 21.1482 12.327 21.2914 12.6875 21.2914H13.2059L13.2747 21.2896C13.4506 22.1596 13.7931 22.968 14.2662 23.6821C14.2488 23.698 14.2319 23.7143 14.2154 23.7311L13.8493 24.0972C13.6092 24.3549 13.4785 24.6957 13.4847 25.0479C13.4909 25.4001 13.6336 25.7361 13.8826 25.9851C14.1317 26.2342 14.4677 26.3769 14.8199 26.3831C15.172 26.3893 15.5129 26.2586 15.7706 26.0184L16.1385 25.6523C16.154 25.637 16.1691 25.6213 16.1838 25.6052C16.8997 26.0783 17.7099 26.4208 18.5799 26.5984L18.5781 26.6637V27.1821C18.5781 27.5426 18.7213 27.8884 18.9763 28.1433C19.2312 28.3982 19.577 28.5414 19.9375 28.5414C20.298 28.5414 20.6438 28.3982 20.8987 28.1433C21.1537 27.8884 21.2969 27.5426 21.2969 27.1821V26.6637V26.5984C22.1669 26.4226 22.9752 26.0783 23.6894 25.6052L23.7365 25.6523L24.1026 26.0203C24.3591 26.2678 24.7026 26.4046 25.059 26.4014C25.4154 26.3981 25.7563 26.255 26.0082 26.0028C26.2601 25.7506 26.4029 25.4096 26.4059 25.0532C26.4088 24.6968 26.2716 24.3535 26.0239 24.0972L25.6596 23.7311C25.6431 23.7149 25.6262 23.6992 25.6088 23.6839C26.0819 22.968 26.4244 22.1578 26.6002 21.2896H27.1875C27.548 21.2896 27.8938 21.1464 28.1487 20.8915C28.4037 20.6365 28.5469 20.2908 28.5469 19.9303C28.5469 19.5697 28.4037 19.224 28.1487 18.969C27.8938 18.7141 27.548 18.5709 27.1875 18.5709H26.6691L26.5966 18.5745C26.423 17.7213 26.0864 16.9095 25.6052 16.1838L25.6596 16.1331L26.0257 15.7669C26.2734 15.5107 26.4106 15.1674 26.4077 14.8109C26.4048 14.4545 26.262 14.1135 26.01 13.8613C25.7581 13.6092 25.4172 13.466 25.0608 13.4628C24.7044 13.4595 24.3609 13.5964 24.1044 13.8439L23.7365 14.21L23.6839 14.2644C22.9586 13.7845 22.1475 13.4491 21.2951 13.2766ZM19.9375 15.8594C19.4018 15.8587 18.8711 15.9637 18.376 16.1684C17.8809 16.373 17.4311 16.6734 17.0522 17.0522C16.6734 17.4311 16.373 17.8809 16.1683 18.376C15.9637 18.8711 15.8587 19.4018 15.8594 19.9375C15.8587 20.4733 15.9637 21.0039 16.1683 21.499C16.373 21.9941 16.6734 22.4439 17.0522 22.8228C17.4311 23.2016 17.8809 23.502 18.376 23.7067C18.8711 23.9114 19.4018 24.0163 19.9375 24.0156C20.4732 24.0163 21.0039 23.9114 21.499 23.7067C21.9941 23.502 22.4439 23.2016 22.8228 22.8228C23.2016 22.4439 23.502 21.9941 23.7067 21.499C23.9113 21.0039 24.0163 20.4733 24.0156 19.9375C24.0163 19.4018 23.9113 18.8711 23.7067 18.376C23.502 17.8809 23.2016 17.4311 22.8228 17.0522C22.4439 16.6734 21.9941 16.373 21.499 16.1684C21.0039 15.9637 20.4732 15.8587 19.9375 15.8594Z"
                fill="#323743"
              />
            </g>
            <defs>
              <clipPath id="clip0_1558_696">
                <rect width="29" height="29" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Services
        </h2>
        {/* Add wrapper for responsiveness */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                {[
                  "Service Name",
                  "Service Type",
                  "Provider",
                  "Price",
                  "Actions",
                ].map((header, idx) => (
                  <th key={idx} className="p-4">
                    <div className="flex items-center justify-between">
                      <span>{header}</span>
                      <svg
                        width="5"
                        height="20"
                        viewBox="0 0 5 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <circle
                          cx="2.19095"
                          cy="2.61807"
                          r="2.19095"
                          fill="#949494"
                        />
                        <circle
                          cx="2.19095"
                          cy="9.99997"
                          r="2.19095"
                          fill="#949494"
                        />
                        <circle
                          cx="2.19095"
                          cy="17.3819"
                          r="2.19095"
                          fill="#949494"
                        />
                      </svg>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, i) => (
                <tr key={i} className="border-b ">
                  <td className="p-4 text-sm">Lorem</td>
                  <td className="p-4 text-sm">Transport</td>
                  <td className="p-4 text-sm">Provider</td>
                  <td className="p-4 text-sm">$99.99</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <button className=" flex items-center space-x-2 text-sm">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.13388 14.8751L14.1339 4.87509L10.125 0.866211L0.125 10.8663V14.8751H4.13388ZM10.125 2.63398L12.3662 4.87509L10.75 6.49125L8.5089 4.25011L10.125 2.63398ZM7.62498 5.13399L9.86615 7.37509L3.61612 13.6251H1.375V11.384L7.62498 5.13399Z"
                            fill="#171A1F"
                          />
                        </svg>
                        <Link to="/nonprofit/Serviceinfoform">Edit</Link>
                      </button>
                      <button className=" flex items-center space-x-2 text-sm">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 14C5.61553 14 4.26213 13.5895 3.11099 12.8203C1.95984 12.0511 1.06266 10.9579 0.532843 9.67879C0.0030297 8.3997 -0.135589 6.99224 0.134507 5.63437C0.404604 4.2765 1.07128 3.02922 2.05024 2.05026C3.02921 1.07129 4.27651 0.404603 5.63437 0.134506C6.99224 -0.13559 8.39971 0.003033 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26216 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9498C10.637 13.2625 8.85651 14 7 14ZM7 1.16667C5.84627 1.16667 4.71844 1.50879 3.75916 2.14976C2.79987 2.79074 2.05222 3.70178 1.61071 4.76768C1.1692 5.83359 1.05366 7.00648 1.27874 8.13803C1.50382 9.26959 2.05941 10.309 2.87522 11.1248C3.69103 11.9406 4.7304 12.4962 5.86195 12.7213C6.99351 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2187 3.96918 11.1248 2.87521C10.0308 1.78125 8.54709 1.16667 7 1.16667ZM9.74516 9.74517C9.69364 9.79669 9.63249 9.83756 9.56518 9.86544C9.49787 9.89332 9.42573 9.90768 9.35287 9.90768C9.28002 9.90768 9.20788 9.89332 9.14057 9.86544C9.07326 9.83756 9.01211 9.79669 8.96059 9.74517L6.99124 7.77584L5.02192 9.74517C4.97109 9.79906 4.90996 9.8422 4.84215 9.87204C4.77435 9.90187 4.70125 9.9178 4.62718 9.91887C4.55311 9.91994 4.47959 9.90613 4.41096 9.87826C4.34232 9.8504 4.27996 9.80904 4.2276 9.75664C4.17523 9.70424 4.13393 9.64186 4.10612 9.5732C4.0783 9.50455 4.06454 9.43101 4.06567 9.35694C4.06679 9.28287 4.08278 9.20978 4.11267 9.142C4.14255 9.07422 4.18574 9.01312 4.23967 8.96234L6.20898 6.993L4.23967 5.02367C4.18574 4.97288 4.14255 4.91179 4.11267 4.84401C4.08278 4.77623 4.06679 4.70314 4.06567 4.62907C4.06454 4.555 4.0783 4.48146 4.10612 4.4128C4.13393 4.34415 4.17523 4.28177 4.2276 4.22937C4.27996 4.17697 4.34232 4.13561 4.41096 4.10774C4.47959 4.07988 4.55311 4.06607 4.62718 4.06714C4.70125 4.06821 4.77435 4.08413 4.84215 4.11397C4.90996 4.14381 4.97109 4.18695 5.02192 4.24084L6.99124 6.21017L8.96059 4.24084C9.01178 4.18846 9.07283 4.14676 9.14025 4.11815C9.20766 4.08955 9.28007 4.0746 9.3533 4.07418C9.42653 4.07376 9.49911 4.08787 9.56685 4.1157C9.63459 4.14353 9.69615 4.18453 9.74793 4.23631C9.79972 4.2881 9.84073 4.34964 9.86856 4.41738C9.89639 4.48512 9.91049 4.55771 9.91007 4.63094C9.90965 4.70417 9.89471 4.77659 9.8661 4.844C9.8375 4.91142 9.79579 4.97249 9.74341 5.02367L7.77409 6.993L9.74341 8.96234C9.8473 9.066 9.90583 9.20663 9.90616 9.35339C9.90649 9.50015 9.84858 9.64105 9.74516 9.74517Z"
                            fill="black"
                          />
                        </svg>
                        Cancel
                      </button>
                      <button className=" flex items-center space-x-2 text-sm">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5599 5.29999L11.5599 12.14C11.5599 12.7696 11.0495 13.28 10.4199 13.28L3.57994 13.28C2.95034 13.28 2.43994 12.7696 2.43994 12.14L2.43994 5.29999"
                            stroke="#565D6D"
                            stroke-width="1.368"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.72998 3L13.27 3"
                            stroke="#565D6D"
                            stroke-width="1.368"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                          />
                          <path
                            d="M4.71997 2.99997L4.71997 0.719971L9.27997 0.719971V2.99997"
                            stroke="#565D6D"
                            stroke-width="1.368"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                          />
                          <path
                            d="M8.71004 7L5.29004 10.42"
                            stroke="#565D6D"
                            stroke-width="1.368"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                          />
                          <path
                            d="M8.71004 10.42L5.29004 7"
                            stroke="#565D6D"
                            stroke-width="1.368"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sorting Section */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Sort By</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <div className="mb-4 sm:mb-0">
            <label className="block text-gray-700 mb-2">From Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">To Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
        </div>
      </div>

      {/* Properties Table */}
      <div className="mt-12 overflow-x-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl flex font-bold mb-4 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M22.9564 22.4348H20.6086V1.5652H21.3912C21.8234 1.5652 22.1738 1.21481 22.1738 0.782578C22.1738 0.350344 21.8234 0 21.3912 0C19.8626 0 3.31816 0 2.60857 0C2.17638 0 1.82595 0.350391 1.82595 0.782625C1.82595 1.21486 2.17634 1.56525 2.60857 1.56525H3.3912V22.4348H1.04337C0.61118 22.4348 0.260742 22.7852 0.260742 23.2174C0.260742 23.6497 0.611133 24 1.04337 24C1.51835 24 20.9871 24 22.9564 24C23.3886 24 23.739 23.6496 23.739 23.2174C23.739 22.7851 23.3886 22.4348 22.9564 22.4348ZM19.0434 22.4348H4.9564V1.5652H19.0434V22.4348Z"
              fill="black"
            />
          </svg>
          My Properties
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <circle cx="2.19095" cy="2.3815" r="2.19095" fill="#949494" />
          </svg>
        </h2>
        <table className="table-auto  w-full border-b text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4">Thumbnail Image</th>
              <th className="p-4">Property Name</th>
              <th className="p-4">Address</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(2)].map((_, i) => (
              <tr key={i} className="border-b">
                <td className="p-4">
                  <img
                    src={prop1}
                    alt="Thumbnail"
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="p-4">Central House</td>
                <td className="p-4">North Carolina</td>
                <td className="p-4">$255,000</td>
                <td className="p-4 space-x-4 flex justify-start">
                  <button className=" flex items-center space-x-2 text-sm">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.13388 14.8751L14.1339 4.87509L10.125 0.866211L0.125 10.8663V14.8751H4.13388ZM10.125 2.63398L12.3662 4.87509L10.75 6.49125L8.5089 4.25011L10.125 2.63398ZM7.62498 5.13399L9.86615 7.37509L3.61612 13.6251H1.375V11.384L7.62498 5.13399Z"
                        fill="#171A1F"
                      />
                    </svg>
                    <Link to="/nonprofit/propertyform">Edit</Link>
                  </button>
                  <button className=" flex items-center space-x-2 text-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5599 5.3L11.5599 12.14C11.5599 12.7696 11.0495 13.28 10.4199 13.28L3.57994 13.28C2.95034 13.28 2.43994 12.7696 2.43994 12.14L2.43994 5.3"
                        stroke="#565D6D"
                        stroke-width="1.368"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.72998 3L13.27 3"
                        stroke="#565D6D"
                        stroke-width="1.368"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      />
                      <path
                        d="M4.71997 3L4.71997 0.720001L9.27997 0.720001V3"
                        stroke="#565D6D"
                        stroke-width="1.368"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      />
                      <path
                        d="M8.71004 7L5.29004 10.42"
                        stroke="#565D6D"
                        stroke-width="1.368"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      />
                      <path
                        d="M8.71004 10.42L5.29004 7"
                        stroke="#565D6D"
                        stroke-width="1.368"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
