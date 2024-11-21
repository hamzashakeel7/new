import * as React from "react";
import { Input } from "../../shadcn/components/ui/Input";
import { Button } from "../../shadcn/components/ui/Button";
import fund1 from "../../assets/home/fundraising/fund1.jpg";
import fund2 from "../../assets/home/fundraising/fund2.jpg";
import fund3 from "../../assets/home/fundraising/fund3.jpg";
import { ArrowLeft } from "lucide-react";

export function Fundraising() {
  const funds = [
    {
      title: "Capital Improvement Funds",
      description: "Aenean pharetra magna ac placerat",
      goal: 450000,
      raised: 250000,
      progress: 56,
      image: fund1,
    },
    {
      title: "Special Needs Funds",
      description: "Augue interdum velit euismod in pellentesque",
      goal: 750000,
      raised: 244024,
      progress: 33,
      image: fund2,
    },
    {
      title: "General Operating Funds",
      description: "Habitant morbi tristique senectus et netus",
      goal: 400000,
      raised: 62034,
      progress: 16,
      image: fund3,
    },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-center text-sm text-purple-600 mb-2">
          Small Acts, Big Impact
        </h2>
        <h1 className="text-center text-3xl font-bold text-purple-600 mb-2">
          Join Us In Our Fundraising Campaigns
        </h1>
        <p className="text-center text-purple-600 font-semibold lg:w-1/2 w-full mb-12">
          SilverTLC.com Partners With Non Profits Servicing Senior And Disabled
          Living And Support Services. Your Giving Will Go To Those
          Organizations Based On Your Giving Terms And Territory.
        </p>
      </div>
      <div className="flex justify-center gap-6 mb-12">
        {funds.map((fund, index) => (
          <div
            key={index}
            className="w-80 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={fund.image}
              alt={fund.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                {fund.title}
              </h3>
              <p className="text-gray-600 mb-4">{fund.description}</p>
              <p className="font-bold mb-2">
                Goal: ${fund.goal.toLocaleString()}
              </p>
              <div className="relative h-2 bg-gray-200 rounded-full mb-4">
                <div
                  className="absolute top-0 left-0 h-full bg-purple-600 rounded-full"
                  style={{ width: `${fund.progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center">
                <Button className="bg-purple-600 text-white">Donate Now</Button>
                <span className="text-gray-600">
                  : ${fund.raised.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* newsletter */}
      <div className="relative bg-gradient-to-r from-red-500 to-pink-500 py-12 text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex flex-col">
            <h3 className="text-sm mb-2">Keep In Touch</h3>
            <h2 className="text-3xl font-bold mb-4">Get The News!</h2>
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <Button className="bg-purple-600 text-white p-3">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Enter Your Mail Here"
                className="w-64 bg-transparent text-gray-900 placeholder:text-gray-500 border-none focus:ring-0"
              />
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="Mail Icon"
                className="h-6 w-6 mr-3"
              />
            </div>
          </div>
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Smiling Couple"
            className="h-32 w-32 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
