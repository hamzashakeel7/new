import { useNavigate } from "react-router-dom";
import img from "../../../../assets/vehicle1.png"; // Correct path for your image

const ServiceInformationForm = () => {
  const navigate = useNavigate();

  const handleBreadcrumbClick = () => {
    navigate("/Dashboard/services");
  };

  return (
    <div className="w-[80vw] lg:w-full mx-auto bg-white rounded-lg overflow-hidden">
      <div className="flex justify-start items-start flex-col p-4 ">
        {/* Breadcrumbs */}
        <div className="mb-4 text-sm px-4">
          <button
            onClick={handleBreadcrumbClick}
            className="text-gray-500 hover:text-gray-700"
          >
            My Services
          </button>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-purple-600 font-medium">
            Service Information
          </span>
        </div>
        <h2 className="text-lg font-semibold flex gap-3 items-center">
          <i className="mr-2 text-blue-500"></i>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1044 25L5.05444 25L5.05444 3L23.0544 3L23.0544 14"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M9.10718 9L19.0602 9"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M9.10718 14L19.0602 14"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M9.10522 19H13.1052"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M25.1052 20V25H17.1052L17.1052 20L21.1052 17L25.1052 20Z"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M21.1052 23V25"
              stroke="#004A61"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
          </svg>
          Service Information
        </h2>
      </div>
      <div className="px-6">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Card */}
          <div className="border border-gray-200 rounded-lg p-4">
            {[
              ["Company Name", "Property Title"],
              ["Address Line 1", "Add Listing ID"],
              ["Address Line 2", "Enter complete address"],
              ["Phone", "Enter price"],
              ["Email", "Flat"],
              ["Contact Person", "Active"],
              ["Office Hours", "3"],
            ].map(([label1, label2], index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b last:border-0 border-gray-100"
              >
                <span>{label1}</span>
                <span>{label2}</span>
              </div>
            ))}
          </div>

          {/* Second Card */}
          <div className="border border-gray-200 rounded-lg p-4">
            {[
              ["Website", "Property Title"],
              ["Geographical Area Serviced", "Add Listing ID"],
              ["Address Line 2", "Enter complete address"],
              ["Industry", "Enter price"],
              ["Services Provided", "Flat"],
              ["Specialty Services", "Active"],
              ["Services Schedule in Advance", "3"],
            ].map(([label1, label2], index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b last:border-0 border-gray-100"
              >
                <span>{label1}</span>
                <span>{label2}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Uploaded Files Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Uploaded Files</h3>
          <div className="flex gap-4 justify-between overflow-x-scroll">
            <img
              src={img}
              alt="File 1"
              className="w-full h-60 object-cover rounded-lg border border-gray-200"
            />
            <img
              src={img}
              alt="File 2"
              className="w-full h-60 object-cover rounded-lg border border-gray-200"
            />
            <img
              src={img}
              alt="File 3"
              className="w-full h-60 object-cover rounded-lg border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInformationForm;
