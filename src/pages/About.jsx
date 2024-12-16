import React from "react";
import about1 from "../assets/about/about1.webp";
import goals from "../assets/about/goals.png";
import bgImg from "../assets/about/bg-img.png";
import { Navbar } from "../Component/Navbar";
import Newsletter from "../Component/Home/Newsletter";
import { Footer } from "../Component/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      {/* component design start */}
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background */}
        <div className="relative overflow-hidden rounded-b-[2rem] px-5 mb-16 ">
          <div
            className="absolute inset-0 bg-cover h-[50rem] md:h-full bg-center opacity-50"
            style={{
              backgroundImage: `url(${about1})`,
            }}
          />
          <div className="relative z-10  bg-purple-950 bg-opacity-80 px-5 py-5 lg:px-20 lg:py-28 w-full lg:max-w-[74.5vw] mx-auto text-white text-center rounded-2xl">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg leading-relaxed w-full">
              The TLC Company, LLC has been created as a customer and service
              relations management agency to assist government; national
              insurance; non-profits; hospital/health care systems; as well as
              local, state, national, and federal agencies (referred to as
              primary client) tasked with maintaining the physical and mental
              well being and livelihood of senior and disabled populaces by
              providing affordable and accessible housing options with
              accompanying wrap around services to provide these groups the
              opportunity to live their lives as independently, healthy, and
              affordably as possible.
            </p>
          </div>
        </div>

        {/* mission and why */}
        <div className="relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 ml-20"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "60vw",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Mission Section */}
            <div className="w-full lg:max-w-[77.5vw] mx-auto px-6 mb-16">
              <h2 className="text-3xl font-bold text-purple-600 text-center mb-8">
                The TLC Mission Is To:
              </h2>
              <div className="space-y-6 bg-[#F9F5F2] bg-opacity-70 p-8 rounded-lg">
                <p className="leading-relaxed">
                  • Recruit, maintain, and expand relationships with property
                  owners, management companies, Residential Assisted Living
                  (RAL) organizations, developers, and local and state housing
                  authorities to produce, manage, and hold dedicated inventory
                  for these senior and disabled markets;
                </p>
                <p className="leading-relaxed">
                  • Recruit, maintain, and expand relationships with service
                  organizations and companies including, but not limited to,
                  transportation, physical therapists, mental health
                  clinics/therapists, adult day care, specialized nursing care,
                  customer care specialists, moving services, construction
                  service companies to provide specific and routine needs for
                  primary and secondary clients;
                </p>
                <p className="leading-relaxed">
                  • Develop and manage a customer relations management website
                  and application (android and ios formats) to manage all
                  connected business between primary and secondary clients, as
                  well as service providers.
                </p>
              </div>
            </div>

            {/* Why Section */}
            <div className="w-full lg:max-w-[77.5vw] mx-auto px-6 mb-16">
              <h2 className="text-3xl font-bold text-purple-600 text-center mb-8">
                Our Why:
              </h2>
              <div className="space-y-6 bg-[#F9F5F2] bg-opacity-70 p-10 rounded-lg">
                <p className="leading-relaxed">
                  For numerous reasons, housing has become expensive and in
                  short supply. Even more so for senior and disabled populaces.
                  When we include those in poverty, the options become fewer.
                  Entities from government agencies to for-profit companies to
                  non-profit organizations are seeing the benefits of resolving
                  housing needs for these markets as it pertains to their
                  effectiveness, efficiency, and profitability offering services
                  that adequately meet the needs of these populations.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">How TLC plans to help.</p>
                  <p className="leading-relaxed">
                    TLC will provide the following services to assist primary
                    clients with placing and maintaining their client population
                    by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Locating properties fitting secondary client needs;</li>
                    <li>
                      Negotiating lease agreements with property management
                      companies and property owners in advance. In some
                      proprietary agreements, TLC will hold the lease and make
                      space available to primary client populations;
                    </li>
                    <li>
                      Purchasing, delivering, and setting up furniture (as
                      needed);
                    </li>
                    <li>
                      Acting as a liaison when necessary between primary and
                      secondary clients; property owners/management; and any
                      other service provider providing services directly to
                      secondary client populations or at their provided
                      residences;
                    </li>
                    <li>
                      Conducting initial property inspections. Administering
                      minor modifications and final inspections of single-family
                      dwellings and multi-family properties, as well as
                      apartment complexes (when requested); and
                    </li>
                    <li>
                      Developing and managing online and app (phone and android)
                      based databases for primary and secondary clients to
                      search for available units and wrap-around services, as
                      well as provide a centralized portal for all industry
                      workers to collaborate and develop for the future of the
                      industry.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* goals Section */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-8">
            Our Goals:
          </h2>

          {/* circular wheel design */}
          <div className="relative">
            <div className="">
              <img
                src={goals}
                className=" h-[50vh] lg:h-full"
                alt="Our team goals"
              />
            </div>

            {/* items on the wheel */}
            <div className="absolute top-[30px] left-[79px] lg:top-[100px] lg:left-[230px]">
              <p className="w-[80px] lg:w-[190px] text-[10px] lg:text-sm text-center  text-white font-semibold">
                Develop/maintain digital interface and relationships
              </p>
            </div>
            <div className="absolute top-[50px] right-[45px] lg:top-[150px] lg:right-[150px]">
              <p className="w-[80px] lg:w-[190px] text-[10px] lg:text-sm text-center  text-white font-semibold">
                Locate accessible properties
              </p>
            </div>
            <div className="absolute top-[160px] right-[-4px] lg:top-[410px] lg:right-[8px]">
              <p className="lg:w-[190px] w-[80px] text-[10px] lg:text-sm text-center  text-white font-semibold">
                Pair with available wrap around services.
              </p>
            </div>
            <div className="absolute bottom-[50px] right-[35px]  lg:bottom-[140px] lg:right-[132px]">
              <p className="lg:w-[190px] w-[100px] text-[10px] lg:text-sm text-center  text-white font-semibold">
                Actively recruit partners
              </p>
            </div>
            <div className="absolute bottom-[30px] left-[85px] lg:bottom-[82px] lg:left-[252px]">
              <p className="lg:w-[190px] w-[80px] text-[10px] lg:text-sm text-center  text-white font-semibold">
                Place participants in homes with supports
              </p>
            </div>
            <div className="absolute bottom-[90px] left-[10px] lg:bottom-[270px] lg:left-[66px]">
              <p className="lg:w-[160px] w-[90px] text-[10px] lg:text-sm text-center  text-white font-semibold">
                Coordinate with local support networks
              </p>
            </div>
            <div className="absolute top-[110px] left-0 lg:top-[282px] lg:left-[20px]">
              <p className="lg:w-[190px] w-[90px] text-[10px] lg:text-sm text-center  text-white font-semibold">
                Ensure ongoing monitoring and feedback
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* newsletter & footer */}
      <Newsletter />
      <Footer />
    </>
  );
}
