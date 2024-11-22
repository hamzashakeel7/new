import React from "react";
import { Button } from "../../shadcn/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { Input } from "../../shadcn/components/ui/Input";
import newsletter from "../../assets/home/fundraising/newsletter.png";

const Newsletter = () => {
  return (
    <div className="mt-[-50px] mb-10">
      <div className="relative bg-gradient-to-r from-red-500 to-pink-500 py-12 text-white">
        <div className="container mx-auto flex items-center justify-evenly">
          <div className="flex items-center gap-12">
            {/* Email Input and Button */}
            <div className="flex items-center rounded-full bg-white overflow-hidden">
              <Button className="bg-purple-600 text-white p-3 rounded-none">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <input
                type="email"
                placeholder="Enter Your Mail Here"
                className="w-[400px] h-[40px] bg-transparent text-black placeholder-black px-4 focus:outline-none"
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
          <div className="h-[9rem]">
            <img
              src={newsletter}
              alt="Smiling Couple"
              className="h-[20rem] w-[22rem] object-cover relative bottom-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
