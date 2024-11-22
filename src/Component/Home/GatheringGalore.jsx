import { Building, Building2, Cog, DollarSign } from "lucide-react";
import React from "react";
import gathering from "../../assets/home/gathering.png";

const 
GatheringGalore = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen lg:px-10  ">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 hidden md:block"
        style={{
          backgroundImage: `url(${gathering})`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-4 lg:gap-5 w-full">
        <h3 className="text-sm text-purple-600">Gatherings Galore</h3>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 w-full lg:w-1/2  text-center">
          Seniors at our center have a choice of single or multi-bed rooms, with
          round-the-clock care
        </h1>
        <h2 className="text-xl lg:text-2xl text-purple-600">
          Silver TLC For Users
        </h2>
      </div>
      {/* boxes start */}
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 px-0 lg:px-28">
        <div className="flex flex-col items-start justify-start p-5 bg-white shadow-lg w-[22rem] lg:w-[25rem] lg:h-[14rem]">
          <div className="flex items-start justify-start gap-4 mb-5">
            <Building2 />
            <p className="font-bold">Agencies</p>
          </div>
          <p>
            Including Managed Care Organizations, Governmental Departments and
            Agencies, Hospitals and Healthcare Systems, and Short term
            care/rehabilitation and mental health facilities
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-5 bg-white shadow-lg w-[22rem] lg:w-[25rem] lg:h-[14rem]">
          <div className="flex items-start justify-start gap-4 mb-5">
            <Cog />
            <p className="font-bold">Service Providers</p>
          </div>
          <p>
            Including Transportation Companies, Adult Day Care and Fitness
            Centers, Furniture Suppliers, Contractors and Handyman Services,
            Skilled Nursing and Home Health Care; as well as Bookkeeping and
            Bill Pay Services.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-5 bg-white shadow-lg w-[22rem] lg:w-[25rem] lg:h-[14rem]">
          <div className="flex items-start justify-start gap-4 mb-5">
            <Building />
            <p className="font-bold">Real Estate</p>
          </div>
          <p>
            Including Owners, Management, and Developers as well as Local and
            State Housing Authorities,
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-5 bg-white shadow-lg w-[22rem] lg:w-[25rem] lg:h-[14rem]">
          <div className="flex items-start justify-start gap-4 mb-5">
            <DollarSign />
            <p className="font-bold">Non-Profits</p>
          </div>
          <p>Servicing seniors and disabled populaces</p>
        </div>
      </div>
    </div>
  );
};

export default GatheringGalore;
