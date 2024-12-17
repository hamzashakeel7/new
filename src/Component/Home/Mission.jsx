import * as React from "react";
import { Button } from "../../shadcn/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../shadcn/components/ui/Dialog";
import { X } from "lucide-react";
import walking from "../../assets/home/walking.png";
import gathering from "../../assets/home/gathering.webp";

export function Mission() {
  const [showMission, setShowMission] = React.useState(false);

  return (
    <div className="relative py-6 md:mt-5 lg:w-[80vw] w-full">
      <div className="container mx-auto">
        <div className="relative w-full z-20">
          <p className="mb-3 lg:mb-6 text-sm lg:text-lg leading-relaxed">
            At The TLC Company, LLC, We Believe That America's Seniors And
            Disabled Deserve The Opportunity To Access Safe And Secure Housing
            Where They Can Live As Independently As Possible.
          </p>
          <p className="mb-5 lg:mb-8 text-sm lg:text-lg leading-relaxed">
            TLC And Our SilverTLC.Com Webpage And App Have Been Created As A
            Customer And Service Relations Management Agency To Assist
            Government; National Insurance; Non-Profits; Hospital/Health Care
            Systems; As Well As Local, State, National, And Federal Agencies
            (Referred To As Primary Client) Tasked With Maintaining The Physical
            And Mental Well Being And Livelihood Of Senior And Disabled
            Populaces By Providing Affordable And Accessible Housing Options
            With Accompanying Wrap Around Services To Provide These Groups The
            Opportunity To Live Their Lives As Independently, Healthy, And
            Affordably As Possible.
          </p>
          <Button
            variant="outline"
            className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-lg lg:text-xl py-4 px-8 lg:py-6 lg:px-12"
            onClick={() => setShowMission(true)}
          >
            Mission
          </Button>
        </div>
        {/* Background image */}
        <div className="absolute top-[13rem] right-[-28rem] lg:top-[-2rem] md:top-[-2rem] lg:right-[-20rem] w-[60rem] md:w-[90rem] z-10 pointer-events-none">
          <img
            src={walking}
            alt="walking"
            className="h-auto w-full opacity-50"
          />
        </div>
      </div>

      <Dialog open={showMission} onOpenChange={setShowMission}>
        <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white text-white ">
          {/* Purple header with close button */}
          <div className="bg-purple-500 p-4 flex justify-between items-center">
            <DialogTitle className="text-xl text-white font-semibold">
              Mission
            </DialogTitle>
          </div>

          {/* Content with background image */}
          <div className="relative">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src={gathering}
                alt=""
                className="w-full h-full object-cover opacity-10"
              />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-bold text-lg">1.</span>
                  <p className="text-gray-800">
                    <span className="mr-3">1.</span> Recruit, maintain, and
                    expand relationships with property owners, management
                    companies, Residential Assisted Living (RAL) organizations,
                    developers, and local and state housing authorities to
                    produce, manage, and hold dedicated inventory for these
                    senior and disabled markets;
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg">2.</span>
                  <p className="text-gray-800">
                    <span className="mr-3">2.</span> Recruit, maintain, and
                    expand relationships with service organizations and
                    companies including; but not limited to, transportation,
                    physical therapists, mental health clinics/therapists, adult
                    day care, specialized nursing care, customer care
                    specialist, moving services, construction service companies
                    to provide specific and routine needs for primary and
                    secondary clients;
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg">3.</span>
                  <p className="text-gray-800">
                    <span className="mr-3">3.</span>Develop and manage a
                    customer relations management website and application
                    (android and ios formats) to manage all connected business
                    between primary and secondary clients; as well as, service
                    providers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
