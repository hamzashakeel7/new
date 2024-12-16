import { Building, Building2, Cog, DollarSign } from "lucide-react";
import React from "react";
import gathering from "../../assets/home/gathering.webp";

const GatheringGalore = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mb-6  mt-5 lg:mt-24">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 w-[500px] lg:w-full md:block"
        style={{
          backgroundImage: `url(${gathering})`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2 lg:gap-3 w-full">
        <h3 className="text-sm text-purple-600">Gatherings Galore</h3>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600  max-w-4xl md:mb-5  text-center">
          Seniors at our center have a choice of single or multi-bed rooms, with
          round-the-clock care
        </h1>
        <h2 className="text-xl lg:text-2xl mb-3 text-purple-600">
          Silver TLC For Users
        </h2>
      </div>
      {/* boxes start */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 auto-rows-fr">
          {/* First Row */}
          <div className="flex flex-col items-start p-6 bg-[#F1F1F1] shadow-lg rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-5 w-5 text-purple-600" />
              <p className="font-bold">Agencies</p>
            </div>
            <p className="text-gray-700">
              Including Managed Care Organizations, Governmental Departments and
              Agencies, Hospitals and Healthcare Systems, and Short term
              care/rehabilitation and mental health facilities
            </p>
          </div>

          <div className="flex flex-col items-start p-6 bg-[#F1F1F1] shadow-lg rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="h-5 w-5 text-purple-600" />
              <p className="font-bold">Service Providers</p>
            </div>
            <p className="text-gray-700">
              Including Transportation Companies, Adult Day Care and Fitness
              Centers, Furniture Suppliers, Contractors and Handyman Services,
              Skilled Nursing and Home Health Care; as well as Bookkeeping and
              Bill Pay Services.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 bg-[#F1F1F1] shadow-lg rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="h-5 w-5 text-purple-600" />
              <p className="font-bold">Real Estate</p>
            </div>
            <p className="text-gray-700">
              Including Owners, Management, and Developers as well as Local and
              State Housing Authorities,
            </p>
          </div>

          {/* Second Row - Centered Box */}
          <div className="md:col-start-2 flex flex-col items-start p-6 bg-[#F1F1F1] shadow-lg rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-5 w-5 text-purple-600" />
              <p className="font-bold">Non-Profits</p>
            </div>
            <p className="text-gray-700">
              Servicing seniors and disabled populaces
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatheringGalore;
