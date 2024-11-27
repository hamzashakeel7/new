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

export function Mission() {
  const [showMission, setShowMission] = React.useState(false);

  return (
    <div className="relative py-6 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="w-full">
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
        <div className="absolute top-[7rem] right-[-20rem] lg:top-[2rem] lg:right-[-10rem] w-[60rem] md:block">
          <img
            src={walking}
            alt="walking"
            className="h-auto w-full opacity-50"
          />
        </div>
      </div>

      <Dialog open={showMission} onOpenChange={setShowMission}>
        <DialogContent className="sm:max-w-[600px] bg-white">
          <div className="">
            <DialogHeader className="w-full">
              <div className="flex items-center justify-between ">
                <DialogTitle className="text-xl font-semibold">
                  Mission
                </DialogTitle>
              </div>
            </DialogHeader>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="font-bold">1.</span>
              <p>
                Recruit, maintain, and expand relationships with property
                owners, management companies, Residential Assisted Living (RAL)
                organizations, developers, and fixed and stable housing
                authorities to produce, manage, and hold additional inventory
                for these senior and disabled markets.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold">2.</span>
              <p>
                Recruit, maintain, and expand relationships with service
                organizations and companies including, but not limited to,
                transportation, physical therapists, mental health
                clinics/therapists, adult day care, specialized nursing care,
                customer care specialist, moving services, construction service
                companies to provide specific and routine needs for primary and
                secondary clients.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold">3.</span>
              <p>
                Develop and manage a customer relations management website and
                application (internal and to licensees) to manage all connected
                business between primary and secondary clients, as well as,
                service providers.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
