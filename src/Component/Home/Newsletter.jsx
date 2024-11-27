import React from "react";
import { Button } from "../../shadcn/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { Input } from "../../shadcn/components/ui/Input";
import newsletter from "../../assets/home/fundraising/newsletter.png";

const Newsletter = () => {
  return (
    <div className="mt-[-50px] mb-10">
      <div className="relative bg-gradient-to-r from-red-500 to-pink-500 lg:py-12 py-4 px-3 text-white w-full">
        <div className="container mx-auto flex items-center justify-evenly">
          <div className="flex items-center lg:gap-12 gap-0 lg:flex-row flex-col-reverse">
            {/* Email Input and Button */}
            <div className="flex items-center rounded-full bg-white overflow-hidden">
              <Button className="bg-purple-600 text-white p-3 rounded-none">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <input
                type="email"
                placeholder="Enter Your Mail Here"
                className="lg:w-[400px] lg:h-[40px] bg-transparent text-black placeholder-gray-400 px-4 focus:outline-none"
                style={{ backgroundColor: "transparent" }}
              />
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-sm mb-2">Keep In Touch</h3>
              <h2 className="text-3xl font-bold mb-4">Get The News!</h2>
            </div>
          </div>

          {/* Image */}
          <div className="">
            <div className=" lg:h-[9rem] h-[4rem]">
              <img
                src={newsletter}
                alt="Smiling Couple"
                className="lg:h-[20rem] lg:w-[22rem] h-full w-full object-cover relative lg:bottom-32 hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
